import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Globe, CheckCircle2, Clock } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const COUNTRY_CODES = [
  { code: '+91',  country: 'India 🇮🇳' },
  { code: '+1',   country: 'USA/Canada 🇺🇸' },
  { code: '+44',  country: 'UK 🇬🇧' },
  { code: '+61',  country: 'Australia 🇦🇺' },
  { code: '+971', country: 'UAE 🇦🇪' },
  { code: '+65',  country: 'Singapore 🇸🇬' },
  { code: '+60',  country: 'Malaysia 🇲🇾' },
  { code: '+49',  country: 'Germany 🇩🇪' },
  { code: '+33',  country: 'France 🇫🇷' },
  { code: '+86',  country: 'China 🇨🇳' },
  { code: '+81',  country: 'Japan 🇯🇵' },
  { code: '+82',  country: 'South Korea 🇰🇷' },
  { code: '+966', country: 'Saudi Arabia 🇸🇦' },
  { code: '+974', country: 'Qatar 🇶🇦' },
  { code: '+27',  country: 'South Africa 🇿🇦' },
  { code: '+55',  country: 'Brazil 🇧🇷' },
  { code: '+20',  country: 'Egypt 🇪🇬' },
  { code: '+234', country: 'Nigeria 🇳🇬' },
];

const courses = [
  { value: 'AWS Cloud Practitioner', label: 'AWS Cloud Practitioner' },
  { value: 'AWS Solutions Architect', label: 'AWS Solutions Architect' },
  { value: 'AWS ML Specialty', label: 'AWS ML Specialty' },
  { value: 'Microsoft Azure (AZ-900)', label: 'Microsoft Azure (AZ-900)' },
  { value: 'Microsoft Azure (AZ-104)', label: 'Microsoft Azure (AZ-104)' },
  { value: 'Google Cloud Engineer', label: 'Google Cloud Engineer' },
  { value: 'Google Cloud Architect', label: 'Google Cloud Architect' },
  { value: 'Data Engineering', label: 'Data Engineering' },
  { value: 'AI & Machine Learning', label: 'AI & Machine Learning' },
];

const DemoRequestModal = ({ isOpen, onClose, preselectedCourse = '' }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1); // 1=form, 2=success
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-detect timezone
  const detectedTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    location: '',
    course: preselectedCourse,
    preferredTime: '',
    requirements: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Valid email required';
    if (!formData.phone.trim() || !/^\d{7,}$/.test(formData.phone.replace(/[\s-]/g, ''))) e.phone = 'Valid phone required';
    if (!formData.course) e.course = 'Please select a course';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      // Convert preferred time to UTC
      let preferredTimeUTC = null;
      if (formData.preferredTime) {
        preferredTimeUTC = new Date(formData.preferredTime).toISOString();
      }

      const res = await fetch(`${API_BASE}/api/book-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
          country_code: formData.countryCode,
          location: formData.location,
          course_interest: formData.course,
          preferred_time_utc: preferredTimeUTC,
          timezone_label: detectedTZ,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      setStep(2);
    } catch (err) {
      // Fallback: also submit to Supabase directly (existing flow is preserved)
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: err.message || 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ fullName: '', email: '', countryCode: '+91', phone: '', location: '', course: preselectedCourse, preferredTime: '', requirements: '' });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] bg-white text-gray-900 p-0 overflow-hidden rounded-2xl">
        {step === 2 ? (
          // ── Success Screen ──────────────────────────────────────────────────
          <div className="p-10 text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Demo Booked! 🎉</h2>
            <p className="text-gray-500 mb-1">Our team will reach you soon at <strong>{formData.email}</strong></p>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-1 mt-3">
              <Globe className="h-4 w-4" /> Your timezone detected: <strong className="text-gray-600 ml-1">{detectedTZ}</strong>
            </p>
            {formData.preferredTime && (
              <p className="text-sm text-gray-400 flex items-center justify-center gap-1 mt-1">
                <Clock className="h-4 w-4" /> Requested slot: <strong className="text-gray-600 ml-1">
                  {new Date(formData.preferredTime).toLocaleString()}
                </strong>
              </p>
            )}
            <Button onClick={handleClose} className="mt-6 bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8">Done</Button>
          </div>
        ) : (
          // ── Form ────────────────────────────────────────────────────────────
          <div>
            <div className="bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] p-6 text-white">
              <DialogTitle className="text-xl font-bold text-white">Book a Free Demo</DialogTitle>
              <DialogDescription className="text-blue-100 text-sm mt-1">
                Fill in your details and we'll schedule a session at your convenience.
              </DialogDescription>
              <div className="mt-3 text-xs text-blue-100 flex items-center gap-1">
                <Globe className="h-3.5 w-3.5" /> Auto-detected timezone: <strong className="ml-1">{detectedTZ}</strong>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange}
                  placeholder="John Doe"
                  className={`mt-1.5 ${errors.fullName ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="you@example.com"
                  className={`mt-1.5 ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone with country code */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></Label>
                <div className="flex gap-2 mt-1.5">
                  <Select value={formData.countryCode} onValueChange={v => setFormData(p => ({ ...p, countryCode: v }))}>
                    <SelectTrigger className="w-44 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {COUNTRY_CODES.map(c => (
                        <SelectItem key={c.code} value={c.code} className="text-sm">
                          {c.code} {c.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleChange}
                    placeholder="9876543210"
                    className={`flex-1 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`} />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Location + Course in 2 cols */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Location</Label>
                  <Input name="location" value={formData.location} onChange={handleChange}
                    placeholder="e.g. Dubai, UAE"
                    className="mt-1.5 border-gray-200" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Course Interest <span className="text-red-500">*</span></Label>
                  <Select value={formData.course} onValueChange={v => { setFormData(p => ({ ...p, course: v })); if (errors.course) setErrors(p => ({ ...p, course: '' })); }}>
                    <SelectTrigger className={`mt-1.5 border ${errors.course ? 'border-red-400' : 'border-gray-200'}`}>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {courses.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Preferred Demo Time (your local time)</Label>
                <Input type="datetime-local" name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                  className="mt-1.5 border-gray-200" />
                <p className="text-xs text-gray-400 mt-1">Leave blank to let us suggest a slot. We'll confirm in IST.</p>
              </div>

              <Button type="submit" disabled={isSubmitting}
                className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-3 rounded-xl mt-1">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Submitting...
                  </span>
                ) : '🚀 Book My Free Demo'}
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestModal;
