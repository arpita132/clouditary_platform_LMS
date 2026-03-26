
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-[0.18] pointer-events-none ${className}`}
    animate={{ y: [0, -28, 0], scale: [1, 1.06, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const HeroSection = () => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: 'Coming Soon',
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A192F]">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 50%, rgba(16,185,129,0.13) 0%, transparent 65%),
              radial-gradient(ellipse 55% 80% at 5% 85%, rgba(6,182,212,0.10) 0%, transparent 60%),
              radial-gradient(ellipse 45% 45% at 95% 5%, rgba(99,102,241,0.08) 0%, transparent 55%),
              linear-gradient(160deg, #0A192F 0%, #0D2137 55%, #091B30 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <FloatingOrb className="w-[560px] h-[560px] bg-emerald-400 top-[-120px] right-[8%]" delay={0} />
      <FloatingOrb className="w-[400px] h-[400px] bg-cyan-400 bottom-[-60px] left-[2%]" delay={2.5} />
      <FloatingOrb className="w-[280px] h-[280px] bg-indigo-500 top-[35%] right-[28%]" delay={4.5} />

      <div className="container mx-auto px-6 md:px-12 z-10 relative pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
                style={{
                  color: '#10B981',
                  border: '1px solid rgba(16,185,129,0.30)',
                  background: 'rgba(16,185,129,0.08)',
                  letterSpacing: '0.1em',
                }}
              >
                <Zap size={11} className="fill-emerald-400" />
                New AWS &amp; Azure Courses Available
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-extrabold text-white leading-[1.07] tracking-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              }}
            >
              Don&apos;t just learn Cloud.
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(95deg, #10B981 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Master it with Real‑World Projects.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Industry-leading training for AWS, Azure, and Google Cloud. Accelerate your career with expert-led courses, hands-on labs, and live mentor support.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <Link to="/courses/aws/aws-certified-cloud-practitioner" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-xl group w-full">
                  <Button
                    className="relative z-10 w-full h-14 px-8 text-base font-bold text-white rounded-xl border-0"
                    style={{
                      background: 'linear-gradient(92deg, #10B981 0%, #06B6D4 100%)',
                      boxShadow: '0 0 36px rgba(16,185,129,0.38)',
                    }}
                  >
                    Explore Courses
                    <ArrowRight size={17} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                </motion.div>
              </Link>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  onClick={handleNotImplemented}
                  className="w-full h-14 px-8 text-base font-semibold text-white rounded-xl backdrop-blur-sm"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
                >
                  <PlayCircle size={19} className="mr-2 text-emerald-400" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <div className="flex -space-x-3">
                {[11, 12, 13, 14, 15].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A192F] overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(16,185,129,0.2)' }}>
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-yellow-400 text-sm mb-0.5">★★★★★</div>
                <p className="text-sm text-slate-400">
                  <span className="text-white font-semibold">10,000+</span> certified professionals
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="relative hidden lg:block"
          >
            <div
              className="relative rounded-2xl overflow-hidden p-6"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(16,185,129,0.08)',
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                <div className="flex-1 ml-3 h-6 rounded-md flex items-center px-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <span className="text-xs text-slate-500">clouditary.com/dashboard</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="rounded-xl p-5 mb-3" style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)' }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">AWS Solutions Architect</span>
                  <span className="text-xs font-bold text-emerald-400">72%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #10B981, #06B6D4)' }}
                    initial={{ width: 0 }}
                    animate={{ width: '72%' }}
                    transition={{ duration: 1.3, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">18 of 25 modules completed</p>
              </div>

              {/* Cert rows */}
              {[
                { name: 'AWS Cloud Practitioner', level: 'Certified ✓', color: '#F59E0B' },
                { name: 'Azure Administrator', level: 'In Progress', color: '#06B6D4' },
                { name: 'GCP Associate Engineer', level: 'Upcoming', color: '#8B5CF6' },
              ].map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 p-3 rounded-lg mb-2" style={{ background: 'rgba(255,255,255,0.025)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 font-bold" style={{ background: `${cert.color}1A`, color: cert.color }}>✦</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{cert.name}</p>
                    <p className="text-[10px] text-slate-500">{cert.level}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cert.color, boxShadow: `0 0 6px ${cert.color}` }} />
                </div>
              ))}
            </div>

            {/* Floating pill — top */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-4 rounded-2xl px-4 py-3"
              style={{ background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 12px 36px rgba(16,185,129,0.45)' }}
            >
              <p className="text-xs font-bold text-white">🎯 Exam Ready</p>
              <p className="text-[10px] text-emerald-100 mt-0.5">Next batch: April 1</p>
            </motion.div>

            {/* Floating pill — bottom */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
            >
              <p className="text-xs font-semibold text-white">⚡ Live Mentorship</p>
              <p className="text-[10px] text-slate-400 mt-0.5">24/7 support</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
