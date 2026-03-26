
import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Briefcase } from 'lucide-react';

const benefits = [
  { icon: Award, title: 'Industry Certifications', desc: 'Our curriculum is directly aligned with official exam guides so you pass on the first attempt — guaranteed.', color: '#10B981' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'Cloud professionals earn 40% more. Advance your career with the most in-demand skills in tech.', color: '#06B6D4' },
  { icon: Briefcase, title: 'Job Placement Support', desc: 'Resume reviews, mock interviews, and access to our exclusive employer network to land your dream role.', color: '#8B5CF6' },
];

const StudentBenefitsSection = () => (
  <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D2337 50%, #061420 100%)' }}>
    <div
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{ background: `radial-gradient(ellipse 60% 60% at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(6,182,212,0.12) 0%, transparent 60%)` }}
    />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#06B6D4', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}>
          Student Benefits
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
          Built for Your Success
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="relative flex flex-col items-center text-center p-8 rounded-2xl group"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `${b.color}15` }}
            >
              <b.icon size={32} style={{ color: b.color }} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>{b.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: b.color }} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StudentBenefitsSection;