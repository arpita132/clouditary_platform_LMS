import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users, BookOpen, TrendingUp, Clock,
  CheckCircle2, PhoneCall, UserCheck, AlertCircle,
  ChevronDown, Filter, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const STATUS_CONFIG = {
  pending:   { label: 'Pending',   color: 'bg-yellow-100 text-yellow-800',  dot: 'bg-yellow-400' },
  contacted: { label: 'Contacted', color: 'bg-blue-100 text-blue-800',     dot: 'bg-blue-400' },
  enrolled:  { label: 'Enrolled',  color: 'bg-green-100 text-green-800',   dot: 'bg-green-400' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800',       dot: 'bg-red-400'   },
};

const StatCard = ({ label, value, icon: Icon, color }) => (
  <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm">
    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  const { authFetch } = useAuth();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('');
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const params = filterStatus ? `?status=${filterStatus}` : '';
      const res = await authFetch(`/api/book-demo${params}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setLeads(data.leads || []);
    } catch (err) {
      setError(err.message || 'Failed to load leads.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLeads(); }, [filterStatus]);

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      const res = await authFetch(`/api/book-demo/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Update failed');
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    } catch {
      // silently fail — fetch will re-sync
    } finally {
      setUpdatingId(null);
    }
  };

  const stats = {
    total: leads.length,
    pending: leads.filter(l => l.status === 'pending').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    enrolled: leads.filter(l => l.status === 'enrolled').length,
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Lead Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">All demo booking requests</p>
          </div>
          <Button onClick={fetchLeads} variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Leads"  value={stats.total}     icon={TrendingUp}  color="bg-sky-50 text-sky-600" />
          <StatCard label="Pending"      value={stats.pending}   icon={Clock}       color="bg-yellow-50 text-yellow-600" />
          <StatCard label="Contacted"    value={stats.contacted} icon={PhoneCall}   color="bg-blue-50 text-blue-600" />
          <StatCard label="Enrolled"     value={stats.enrolled}  icon={UserCheck}   color="bg-green-50 text-green-600" />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3">
          <Filter className="h-4 w-4 text-slate-400" />
          <div className="flex gap-2 flex-wrap">
            {['', 'pending', 'contacted', 'enrolled', 'cancelled'].map(s => (
              <button key={s} onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all
                  ${filterStatus === s
                    ? 'bg-sky-500 text-white border-sky-500'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300'}`}>
                {s === '' ? 'All' : STATUS_CONFIG[s]?.label}
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm">
            <AlertCircle className="h-4 w-4" /> {error}
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  {['Student', 'Course Interest', 'Contact', 'Location', 'Preferred Time (Student)', 'Preferred Time (IST)', 'Status', 'Action'].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr><td colSpan={8} className="text-center py-12 text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-6 w-6 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
                      Loading leads...
                    </div>
                  </td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={8} className="text-center py-12 text-slate-400">
                    No leads found. Book Demo submissions will appear here.
                  </td></tr>
                ) : leads.map(lead => {
                  const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.pending;
                  return (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-900">{lead.name}</p>
                        <p className="text-xs text-slate-400">{lead.email}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-sky-50 text-sky-700 rounded-lg text-xs font-medium">
                          {lead.course_interest}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                        {lead.country_code} {lead.contact}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{lead.location || '—'}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                        {lead.preferred_time_utc
                          ? `${new Date(lead.preferred_time_utc).toLocaleString()} (${lead.timezone_label || 'UTC'})`
                          : '—'}
                      </td>
                      <td className="px-4 py-3 text-slate-700 text-xs font-medium whitespace-nowrap">
                        {lead.preferred_time_ist || '—'}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.color}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative group inline-block">
                          <button
                            disabled={updatingId === lead.id}
                            className="flex items-center gap-1 text-xs font-medium text-slate-600 border border-slate-200 px-2 py-1 rounded-lg hover:border-sky-400 hover:text-sky-600 transition-all disabled:opacity-50"
                          >
                            Change <ChevronDown className="h-3 w-3" />
                          </button>
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-slate-200 rounded-xl shadow-lg z-20 hidden group-hover:block">
                            {Object.entries(STATUS_CONFIG).map(([key, { label }]) => (
                              <button key={key} onClick={() => updateStatus(lead.id, key)}
                                disabled={lead.status === key}
                                className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed first:rounded-t-xl last:rounded-b-xl">
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
