
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Jenkins', role: 'Cloud Architect', company: 'TechNova', text: "Clouditary's AWS Solutions Architect course was exactly what I needed. The hands-on labs made complex concepts easy to understand. I passed my exam on the first try!", avatar: 30, accent: '#10B981' },
  { name: 'Michael Chen', role: 'DevOps Engineer', company: 'DataFlow', text: 'The Azure Administrator path is incredibly well-structured. The instructors clearly have real-world experience. Highly recommended for anyone looking to upskill.', avatar: 31, accent: '#06B6D4' },
  { name: "David O'Connor", role: 'Systems Admin', company: 'GlobalRetail', text: "I tried other platforms, but Clouditary's practice exams are by far the most accurate representation of the real GCP tests. Worth every penny.", avatar: 32, accent: '#8B5CF6' },
  { name: 'Emily Rodriguez', role: 'Security Analyst', company: 'SecureNet', text: 'The Cyber Security fundamentals course gave me the exact foundation I needed to pivot my career into cloud security. The community support is fantastic.', avatar: 33, accent: '#F59E0B' },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-[#0A192F]">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#F59E0B', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }}>
          Student Reviews
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
          What Our Students Say
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">Join thousands of successful professionals who advanced their careers with Clouditary.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="relative p-8 rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
          >
            <Quote size={32} className="absolute top-6 right-6 opacity-10 text-white" />
            <div className="flex gap-0.5 mb-4 text-yellow-400">
              {[...Array(5)].map((_, idx) => <Star key={idx} size={14} className="fill-yellow-400" />)}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid ${t.accent}` }}>
                <img src={`https://i.pravatar.cc/150?img=${t.avatar}`} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full" style={{ background: t.accent, boxShadow: `0 0 8px ${t.accent}` }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-40" style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;