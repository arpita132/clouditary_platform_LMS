
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Brain, Shield, Cog, Terminal, Lock, Server, Database, Monitor, Network } from 'lucide-react';
import { useScrollReveal, staggerContainer, fadeUpVariants } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const categories = [
  { name: 'Cloud Fundamentals', icon: Cloud,     color: '#06B6D4' },
  { name: 'AI & Machine Learning', icon: Brain,  color: '#8B5CF6' },
  { name: 'Security',             icon: Shield,  color: '#EF4444' },
  { name: 'DevOps & CI/CD',       icon: Cog,     color: '#F59E0B' },
  { name: 'Hands-on Labs',        icon: Terminal,color: '#10B981' },
  { name: 'Cyber Security',       icon: Lock,    color: '#EC4899' },
  { name: 'Linux & Systems',      icon: Server,  color: '#06B6D4' },
  { name: 'Big Data',             icon: Database,color: '#F59E0B' },
  { name: 'IT Operations',        icon: Monitor, color: '#10B981' },
  { name: 'Cloud Architecture',   icon: Network, color: '#8B5CF6' },
];

const CategoriesSection = () => {
  const { toast } = useToast();
  const [ref, controls] = useScrollReveal(0.08);

  const handleNotImplemented = () => {
    toast({ title: 'Coming Soon', description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" });
  };

  return (
    <section className="py-24 bg-[#0A192F]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#8B5CF6', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
            Browse Topics
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
            Top Categories
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer(0.07, 0)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.name}
              variants={fadeUpVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleNotImplemented}
              className="flex flex-col items-center justify-center p-6 rounded-2xl text-center group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: `${cat.color}14` }}>
                <cat.icon size={26} style={{ color: cat.color }} className="group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                {cat.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;