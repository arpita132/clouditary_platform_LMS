import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard, BookOpen, MessageSquare, Download,
  LogOut, Menu, ChevronRight, Cloud, FileText,
  Calendar, Clock, CheckCircle2, AlertCircle
} from 'lucide-react';

const navItems = [
  { to: '/student', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/student/modules', label: 'Course Modules', icon: BookOpen },
  { to: '/student/queries', label: 'Ask a Trainer', icon: MessageSquare },
];

const StudentLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/'); };
  const isActive = item => item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-indigo-950 text-white">
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <Cloud className="h-7 w-7 text-indigo-300" />
          <span className="text-xl font-bold">Clouditary</span>
        </Link>
        <span className="text-xs text-indigo-300 mt-1 block">Student Portal</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => (
          <Link key={item.to} to={item.to} onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
              ${isActive(item) ? 'bg-indigo-500/30 text-indigo-200' : 'text-indigo-300 hover:bg-white/5 hover:text-white'}`}>
            <item.icon className="h-4 w-4" />
            {item.label}
            {isActive(item) && <ChevronRight className="h-3 w-3 ml-auto" />}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-9 w-9 rounded-full bg-indigo-500/30 flex items-center justify-center text-indigo-200 font-bold text-sm">
            {user?.name?.[0]?.toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-indigo-300">Student</p>
          </div>
        </div>
        <button onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <div className="w-64 flex-shrink-0"><SidebarContent /></div>
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 z-50"><SidebarContent /></div>
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 h-16 flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5 text-slate-500" /></button>
          <Link to="/" className="text-sm text-slate-500 hover:text-indigo-600">← Main Site</Link>
          <span className="text-sm font-medium text-slate-600">Student Portal</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

// ─── Student Dashboard ─────────────────────────────────────────────────────────
export const StudentDashboard = () => {
  const { user, authFetch } = useAuth();
  const [modules, setModules] = useState([]);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      authFetch('/api/modules').then(r => r.json()),
      authFetch('/api/queries').then(r => r.json()),
    ]).then(([mods, qs]) => {
      setModules(mods.modules || []);
      setQueries(qs.queries || []);
    }).finally(() => setLoading(false));
  }, []);

  const upcoming = modules
    .filter(m => m.batch_start_date && new Date(m.batch_start_date) >= new Date())
    .sort((a, b) => new Date(a.batch_start_date) - new Date(b.batch_start_date))
    .slice(0, 3);

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, {user?.name?.split(' ')[0]} 👋</h1>
          <p className="text-slate-500 text-sm">Your learning journey at Clouditary</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Modules Available', value: modules.length, icon: BookOpen, color: 'bg-indigo-50 text-indigo-600' },
            { label: 'Upcoming Batches', value: upcoming.length, icon: Calendar, color: 'bg-sky-50 text-sky-600' },
            { label: 'My Queries', value: queries.length, icon: MessageSquare, color: 'bg-amber-50 text-amber-600' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3 shadow-sm">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
              <div><p className="text-xl font-bold text-slate-900">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></div>
            </div>
          ))}
        </div>

        {/* Upcoming Batches */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-indigo-500" /> Upcoming Batches
          </h2>
          {loading ? <p className="text-slate-400 text-sm">Loading...</p> :
            upcoming.length === 0
              ? <p className="text-slate-400 text-sm">No upcoming batches — check back soon!</p>
              : upcoming.map(m => (
                <div key={m.id} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
                  <div className="h-10 w-10 rounded-xl bg-indigo-100 flex flex-col items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600 leading-none">
                      {new Date(m.batch_start_date).toLocaleDateString('en-IN', { day: '2-digit' })}
                    </span>
                    <span className="text-[9px] text-indigo-400 uppercase">
                      {new Date(m.batch_start_date).toLocaleDateString('en-IN', { month: 'short' })}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{m.title}</p>
                    <p className="text-xs text-slate-400">{m.course_id?.toUpperCase()} · {m.batch_size} seats</p>
                  </div>
                  <Link to="/student/modules"
                    className="text-xs text-indigo-600 font-medium hover:underline">View →</Link>
                </div>
              ))
          }
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-sky-600 rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-1">Ready to level up your cloud skills?</h3>
          <p className="text-indigo-100 text-sm mb-4">Download course modules and track your progress.</p>
          <Link to="/student/modules"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors">
            <Download className="h-4 w-4" /> Browse Modules
          </Link>
        </div>
      </div>
    </StudentLayout>
  );
};

// ─── Student Modules (PDF Download) ───────────────────────────────────────────
export const StudentModules = () => {
  const { authFetch, token } = useAuth();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    authFetch('/api/modules')
      .then(r => r.json())
      .then(d => setModules(d.modules || []))
      .finally(() => setLoading(false));
  }, []);

  const handleDownload = async (module) => {
    setDownloading(module.id);
    try {
      const res = await authFetch(`/api/pdf/${module.id}`);
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${module.title.replace(/\s+/g, '_')}_Clouditary.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Failed to download PDF. Please try again.');
    } finally {
      setDownloading(null);
    }
  };

  const grouped = modules.reduce((acc, m) => {
    const key = m.course_id || 'general';
    if (!acc[key]) acc[key] = [];
    acc[key].push(m);
    return acc;
  }, {});

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Course Modules</h1>
        <p className="text-slate-500 text-sm">Download branded PDF modules for offline study.</p>

        {loading ? (
          <div className="text-center py-16 text-slate-400">Loading modules...</div>
        ) : modules.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <FileText className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">No modules available yet.</p>
            <p className="text-slate-400 text-sm">Trainers will publish modules once they're ready.</p>
          </div>
        ) : Object.entries(grouped).map(([courseId, mods]) => (
          <div key={courseId} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
              <h2 className="font-semibold text-slate-900 uppercase text-sm tracking-wide">{courseId}</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {mods.map(m => (
                <div key={m.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50/50">
                  <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 text-sm">{m.title}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                      {m.batch_start_date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Batch: {new Date(m.batch_start_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                      )}
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />PDF Module</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(m)}
                    disabled={downloading === m.id}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-500 transition-colors disabled:opacity-60"
                  >
                    {downloading === m.id
                      ? <><span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" /> Generating...</>
                      : <><Download className="h-3 w-3" /> Download PDF</>}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StudentLayout>
  );
};

// ─── Student Queries ───────────────────────────────────────────────────────────
export const StudentQueries = () => {
  const { authFetch } = useAuth();
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ course_id: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const courses = ['aws', 'azure', 'gcp', 'data-engineering', 'ai-ml'];

  const loadQueries = () => {
    authFetch('/api/queries').then(r => r.json())
      .then(d => setQueries(d.queries || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadQueries(); }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.message.trim()) return;
    setSubmitting(true);
    const res = await authFetch('/api/queries', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ course_id: '', message: '' });
      loadQueries();
    }
    setSubmitting(false);
  };

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Ask a Trainer</h1>

        {/* New Query Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900 mb-4">Submit a Query</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 font-medium">Course (optional)</label>
              <select value={form.course_id} onChange={e => setForm(p => ({ ...p, course_id: e.target.value }))}
                className="mt-1.5 w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                <option value="">General Query</option>
                {courses.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-600 font-medium">Your Question *</label>
              <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                rows={4} required
                placeholder="Type your question here..."
                className="mt-1.5 w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <button type="submit" disabled={submitting || !form.message.trim()}
              className="px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 disabled:opacity-60 transition-colors">
              {submitting ? 'Sending...' : 'Submit Question'}
            </button>
          </form>
        </div>

        {/* Query History */}
        <div className="space-y-4">
          <h2 className="font-semibold text-slate-900">My Queries</h2>
          {loading ? <p className="text-slate-400 text-sm">Loading...</p> :
            queries.length === 0 ? <p className="text-slate-400 text-sm">No queries yet. Ask your first question above!</p> :
              queries.map(q => (
                <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-400">{q.course_id ? q.course_id.toUpperCase() : 'General'} · {new Date(q.created_at).toLocaleDateString()}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${q.status === 'open' ? 'bg-amber-100 text-amber-700' : q.status === 'replied' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                      {q.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 bg-slate-50 rounded-xl p-3">{q.message}</p>
                  {q.reply && (
                    <div className="mt-3 bg-indigo-50 border-l-4 border-indigo-400 rounded-xl p-3">
                      <p className="text-xs font-semibold text-indigo-600 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Trainer replied:
                      </p>
                      <p className="text-sm text-indigo-900">{q.reply}</p>
                    </div>
                  )}
                </div>
              ))
          }
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
