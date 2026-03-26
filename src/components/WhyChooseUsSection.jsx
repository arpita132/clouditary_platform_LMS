
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Laptop, Infinity, Users, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Expert-led Training',
    desc: 'Learn from AWS, Azure & GCP-certified professionals with years of real-world industry experience.',
    color: '#10B981',
    check: 'Industry-certified instructors',
  },
  {
    icon: Laptop,
    title: 'Real Hands-on Labs',
    desc: 'Practice in live cloud environments, not just simulations. Get comfortable with actual cloud consoles.',
    color: '#06B6D4',
    check: 'No sandbox limitations',
  },
  {
    icon: Infinity,
    title: 'Lifetime Access',
    desc: 'Get unlimited access to all course materials, updates, and new modules — forever.',
    color: '#8B5CF6',
    check: 'Free content updates included',
  },
  {
    icon: Users,
    title: 'Community & Mentors',
    desc: 'Join thousands of learners, attend live doubt sessions, and get personal mentor guidance.',
    color: '#F59E0B',
    check: 'Live weekly Q&A sessions',
  },
];

const WhyChooseUsSection = () => (
  <section className="py-24 bg-[#0D1F33]">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#10B981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
          Why Clouditary
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
          Everything You Need to Pass &amp; Excel
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          We provide the tools, guidance, and community to take you from zero to certified.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex gap-5 p-7 rounded-2xl group"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${b.color}14` }}>
              <b.icon size={26} style={{ color: b.color }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                {b.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{b.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: b.color }}>
                <CheckCircle size={12} /> {b.check}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
