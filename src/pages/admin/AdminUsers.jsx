import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Users, Search, Shield, GraduationCap, BookOpen, AlertCircle } from 'lucide-react';

const ROLE_CONFIG = {
  admin:   { label: 'Admin',   color: 'bg-purple-100 text-purple-700' },
  trainer: { label: 'Trainer', color: 'bg-blue-100 text-blue-700' },
  student: { label: 'Student', color: 'bg-green-100 text-green-700' },
};

const AdminUsers = () => {
  const { authFetch } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    authFetch('/api/auth/users')
      .then(r => r.json())
      .then(d => setUsers(d.users || []))
      .catch(() => setError('Failed to load users. This endpoint requires admin auth.'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const counts = {
    admins: users.filter(u => u.role === 'admin').length,
    trainers: users.filter(u => u.role === 'trainer').length,
    students: users.filter(u => u.role === 'student').length,
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-500 text-sm">Manage all registered LMS users</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Admins', count: counts.admins, icon: Shield, color: 'bg-purple-50 text-purple-600' },
            { label: 'Trainers', count: counts.trainers, icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
            { label: 'Students', count: counts.students, icon: GraduationCap, color: 'bg-green-50 text-green-600' },
          ].map(({ label, count, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3 shadow-sm">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">{count}</p>
                <p className="text-xs text-slate-500">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl p-4 text-sm">
            <AlertCircle className="h-4 w-4" />
            {error} — Add <code className="mx-1 bg-amber-100 px-1 rounded">GET /api/auth/users</code> admin route to enable.
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {['User', 'Role', 'Joined', 'Actions'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={4} className="text-center py-10 text-slate-400">Loading users...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-10 text-slate-400">No users found.</td></tr>
              ) : filtered.map(u => {
                const cfg = ROLE_CONFIG[u.role] || ROLE_CONFIG.student;
                return (
                  <tr key={u.id} className="hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xs">
                          {u.name?.[0]?.toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{u.name}</p>
                          <p className="text-xs text-slate-400">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">
                      {u.created_at ? new Date(u.created_at).toLocaleDateString('en-IN') : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-xs text-sky-600 hover:underline font-medium">Manage</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
