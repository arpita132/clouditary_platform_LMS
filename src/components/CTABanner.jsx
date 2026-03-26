
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTABanner = () => {
  const { toast } = useToast();
  const handleNotImplemented = () => toast({ title: 'Coming Soon', description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" });

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #064E3B 0%, #0F766E 35%, #0369A1 100%)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 80% at 10% 50%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 90% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)` }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-white/80 border border-white/20 bg-white/10">
            <Sparkles size={12} />
            Start Today
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
            Ready to advance your<br />cloud career?
          </h2>

          <p className="text-xl text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of professionals mastering cloud certifications and landing high-paying tech roles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-xl group">
              <Button
                onClick={handleNotImplemented}
                className="relative z-10 h-14 px-10 text-base font-extrabold text-emerald-900 rounded-xl border-0"
                style={{ background: 'white', boxShadow: '0 0 40px rgba(255,255,255,0.2)' }}
              >
                Get Started Now <ArrowRight size={17} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                onClick={handleNotImplemented}
                className="h-14 px-10 text-base font-bold text-white rounded-xl border-white/25 bg-white/10 hover:bg-white/15 backdrop-blur-sm"
              >
                Book a Free Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;