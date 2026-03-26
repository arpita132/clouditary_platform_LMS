import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard, MessageSquare, BookOpen,
  LogOut, Menu, ChevronRight, Cloud
} from 'lucide-react';

const navItems = [
  { to: '/trainer', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/trainer/queries', label: 'Student Queries', icon: MessageSquare },
  { to: '/trainer/modules', label: 'My Modules', icon: BookOpen },
];

const TrainerLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/'); };
  const isActive = (item) => item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-slate-800 text-white">
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <Cloud className="h-7 w-7 text-emerald-400" />
          <span className="text-xl font-bold">Clouditary</span>
        </Link>
        <span className="text-xs text-slate-400 mt-1 block">Trainer Panel</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => (
          <Link key={item.to} to={item.to} onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
              ${isActive(item) ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <item.icon className="h-4 w-4" />
            {item.label}
            {isActive(item) && <ChevronRight className="h-3 w-3 ml-auto" />}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-9 w-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
            {user?.name?.[0]?.toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user?.role}</p>
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
        <header className="bg-white border-b border-slate-200 px-6 h-16 flex items-center justify-between flex-shrink-0">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5 text-slate-500" /></button>
          <Link to="/" className="text-sm text-slate-500 hover:text-emerald-600">← Main Site</Link>
          <span className="text-sm font-medium text-slate-600">Trainer Panel</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

// ─── Trainer Dashboard Page ────────────────────────────────────────────────────
export const TrainerDashboard = () => {
  const { user, authFetch } = useAuth();
  const [modules, setModules] = useState([]);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      authFetch('/api/modules/all').then(r => r.json()),
      authFetch('/api/queries').then(r => r.json()),
    ]).then(([mods, qs]) => {
      setModules(mods.modules || []);
      setQueries(qs.queries || []);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <TrainerLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome, {user?.name} 👋</h1>
          <p className="text-slate-500 text-sm">Your trainer dashboard</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'My Modules', value: modules.length, color: 'text-sky-600', bg: 'bg-sky-50' },
            { label: 'Open Queries', value: queries.filter(q => q.status === 'open').length, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map(s => (
            <div key={s.label} className={`${s.bg} rounded-2xl p-6 border border-white/50`}>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-slate-600 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-900 mb-4">Recent Student Queries</h2>
          {loading ? <p className="text-slate-400 text-sm">Loading...</p> :
            queries.slice(0, 5).map(q => (
              <div key={q.id} className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                  {q.student?.name?.[0]?.toUpperCase() || '?'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{q.student?.name || 'Student'}</p>
                  <p className="text-xs text-slate-500 line-clamp-2">{q.message}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${q.status === 'open' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                  {q.status}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </TrainerLayout>
  );
};

// ─── Trainer Queries Page ──────────────────────────────────────────────────────
export const TrainerQueries = () => {
  const { authFetch } = useAuth();
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyingId, setReplyingId] = useState(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    authFetch('/api/queries').then(r => r.json())
      .then(d => setQueries(d.queries || []))
      .finally(() => setLoading(false));
  }, []);

  const submitReply = async (id) => {
    if (!replyText.trim()) return;
    const res = await authFetch(`/api/queries/${id}/reply`, {
      method: 'PATCH',
      body: JSON.stringify({ reply: replyText }),
    });
    if (res.ok) {
      setQueries(prev => prev.map(q => q.id === id ? { ...q, reply: replyText, status: 'replied' } : q));
      setReplyingId(null);
      setReplyText('');
    }
  };

  return (
    <TrainerLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Student Queries</h1>
        {loading ? <p className="text-slate-400">Loading...</p> :
          queries.length === 0 ? <p className="text-slate-400">No queries yet.</p> :
            <div className="space-y-4">
              {queries.map(q => (
                <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-slate-900">{q.student?.name}</p>
                      <p className="text-xs text-slate-400">{q.course_id} · {new Date(q.created_at).toLocaleDateString()}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${q.status === 'open' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{q.status}</span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-sm text-slate-700 mb-3">{q.message}</div>
                  {q.reply && <div className="bg-emerald-50 rounded-xl p-3 text-sm text-emerald-800 border-l-4 border-emerald-400 mb-2"><strong>Your reply:</strong> {q.reply}</div>}
                  {replyingId === q.id ? (
                    <div className="space-y-2">
                      <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={3}
                        className="w-full border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        placeholder="Type your reply..." />
                      <div className="flex gap-2">
                        <button onClick={() => submitReply(q.id)} className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600">Send Reply</button>
                        <button onClick={() => setReplyingId(null)} className="px-4 py-2 text-slate-500 text-sm border rounded-lg hover:bg-slate-50">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => { setReplyingId(q.id); setReplyText(''); }}
                      className="text-sm text-emerald-600 hover:underline font-medium">Reply →</button>
                  )}
                </div>
              ))}
            </div>
        }
      </div>
    </TrainerLayout>
  );
};

export default TrainerDashboard;
