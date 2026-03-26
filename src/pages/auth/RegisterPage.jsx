import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Cloud, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setError('');
  };

  const passwordStrength = (p) => {
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };

  const strength = passwordStrength(form.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'][strength];

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) { setError('Please fill in all fields.'); return; }
    if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (form.password !== form.confirm) { setError('Passwords do not match.'); return; }

    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate('/student', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2">
              <Cloud className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold text-white">Clouditary</span>
            </Link>
            <p className="text-slate-400 text-sm mt-2">Create your student account</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-3 mb-6 text-sm">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-slate-300 text-sm">Full Name</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange}
                placeholder="John Doe"
                className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-sky-500"
                disabled={loading} />
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-300 text-sm">Email Address</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-sky-500"
                disabled={loading} />
            </div>

            <div>
              <Label htmlFor="password" className="text-slate-300 text-sm">Password</Label>
              <div className="relative mt-1.5">
                <Input id="password" name="password" type={showPass ? 'text' : 'password'}
                  value={form.password} onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-sky-500 pr-10"
                  disabled={loading} />
                <button type="button" onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {form.password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= strength ? strengthColor : 'bg-white/10'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{strengthLabel}</p>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="confirm" className="text-slate-300 text-sm">Confirm Password</Label>
              <Input id="confirm" name="confirm" type="password"
                value={form.confirm} onChange={handleChange}
                placeholder="Re-enter password"
                className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-sky-500"
                disabled={loading} />
              {form.confirm && form.password === form.confirm && (
                <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Passwords match
                </p>
              )}
            </div>

            <Button type="submit" disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-2.5 rounded-xl mt-2 shadow-lg shadow-sky-500/25">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Creating account...
                </span>
              ) : 'Create Account'}
            </Button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-sky-400 hover:text-sky-300 font-medium">Sign in →</Link>
          </p>
          <p className="text-center mt-3">
            <Link to="/" className="text-slate-500 text-xs hover:text-slate-400">← Back to clouditary.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
