import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Cloud, Eye, EyeOff, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || null;

  const handleChange = e => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.email || !form.password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    try {
      const user = await login(form.email, form.password);
      const dest = from || (user.role === 'admin' ? '/admin' : user.role === 'trainer' ? '/trainer' : '/student');
      navigate(dest, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2">
              <Cloud className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold text-white">Clouditary</span>
            </Link>
            <p className="text-slate-400 text-sm mt-2">Sign in to your LMS account</p>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-3 mb-6 text-sm">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-slate-300 text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500/20"
                disabled={loading}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-slate-300 text-sm font-medium">Password</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="············"
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-sky-500 pr-10"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Signing in...
                </span>
              ) : 'Sign In'}
            </Button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 p-4 bg-sky-500/10 border border-sky-500/20 rounded-xl">
            <p className="text-sky-300 text-xs font-semibold mb-2">🔑 Demo Credentials</p>
            <p className="text-slate-400 text-xs">Admin: <code className="text-sky-300">admin@clouditary.com</code> / <code className="text-sky-300">Admin@123</code></p>
            <p className="text-slate-400 text-xs">Trainer: <code className="text-sky-300">trainer@clouditary.com</code> / <code className="text-sky-300">Admin@123</code></p>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            New student?{' '}
            <Link to="/register" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">
              Create an account →
            </Link>
          </p>

          <p className="text-center mt-4">
            <Link to="/" className="text-slate-500 text-xs hover:text-slate-400 transition-colors">
              ← Back to clouditary.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
