import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, BookOpen, Star } from 'lucide-react';

const stats = [
  { icon: Users,    value: 10000, suffix: '+', label: 'Students Trained',    color: '#10B981' },
  { icon: Award,    value: 98,    suffix: '%', label: 'Pass Rate',            color: '#06B6D4' },
  { icon: BookOpen, value: 120,   suffix: '+', label: 'Courses Available',    color: '#8B5CF6' },
  { icon: Star,     value: 4.9,   suffix: '',  label: 'Average Rating',       color: '#F59E0B', decimals: 1 },
];

function useCountUp(target, decimals = 0, duration = 2200, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, decimals, duration]);

  return count;
}

const StatCard = ({ icon: Icon, value, suffix, label, color, decimals = 0, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useCountUp(value, decimals, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative flex flex-col items-center justify-center p-8 rounded-2xl text-center overflow-hidden group"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: color }}
      />

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}14` }}
      >
        <Icon size={26} style={{ color }} />
      </div>

      <div className="text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
        <span style={{ color }}>{suffix}</span>
      </div>

      <p className="text-sm text-slate-400 font-medium">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-[#0D1F33]">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;