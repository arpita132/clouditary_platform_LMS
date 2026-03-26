
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Cloud } from 'lucide-react';
import { useScrollReveal, staggerContainer, fadeUpVariants } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const providers = [
  {
    name: 'Amazon AWS',
    icon: Server,
    accent: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.18)',
    count: '12 Certifications',
    desc: 'Master AWS architecture, development, and cloud operations with hands-on labs.',
    badge: 'Most Popular',
  },
  {
    name: 'Microsoft Azure',
    icon: Database,
    accent: '#06B6D4',
    bg: 'rgba(6,182,212,0.07)',
    border: 'rgba(6,182,212,0.18)',
    count: '10 Certifications',
    desc: 'Expert-led training for Azure administration, security, and data engineering.',
    badge: 'Trending',
  },
  {
    name: 'Google Cloud',
    icon: Cloud,
    accent: '#10B981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.18)',
    count: '8 Certifications',
    desc: 'Comprehensive GCP cloud engineer and professional architect learning paths.',
    badge: 'New Courses',
  },
];

const FeaturedCertifications = () => {
  const { toast } = useToast();
  const [ref, controls] = useScrollReveal(0.12);

  const handleNotImplemented = () => {
    toast({
      title: 'Coming Soon',
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="py-24 bg-[#0A192F]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#10B981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            Certification Paths
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            Choose Your Cloud Provider
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Start your journey toward becoming a certified cloud expert with the world's leading platforms.
          </p>
        </motion.div>

        {/* Staggered cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.14, 0)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {providers.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUpVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              onClick={handleNotImplemented}
              className="relative flex flex-col rounded-2xl p-8 cursor-pointer group overflow-hidden"
              style={{
                background: p.bg,
                border: `1px solid ${p.border}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: p.accent }} />

              {/* Badge */}
              <span
                className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider"
                style={{ background: `${p.accent}22`, color: p.accent }}
              >
                {p.badge}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${p.accent}15` }}>
                <p.icon size={28} style={{ color: p.accent }} />
              </div>

              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
              >
                {p.name}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: p.accent }}>{p.count}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>

              <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: p.accent }}>
                Explore Paths <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCertifications;