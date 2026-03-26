
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    headline: 'Microsoft Certified: Azure Administrator Associate',
    description: 'Configure, manage, secure, and administer key professional functions in Microsoft Azure.',
    logoUrl: 'https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/24fc8ae2ccc5b5a8faef6ddf6ed7115e.png',
    accent: '#06B6D4',
    provider: 'Microsoft Azure',
  },
  {
    headline: 'Microsoft Certified: Security Operations Analyst',
    description: 'Investigate and mitigate threats using Microsoft Sentinel, Defender for Cloud, and M365 Defender.',
    logoUrl: 'https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/665a279dac834c02e3504a01f75575a6.png',
    accent: '#8B5CF6',
    provider: 'Microsoft Azure',
  },
  {
    headline: 'AWS Certified Cloud Practitioner',
    description: 'Validate foundational, high-level understanding of AWS Cloud, services, and terminology.',
    logoUrl: 'https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/6fd538229029d821bb2c7e6b371c5b79.png',
    accent: '#F59E0B',
    provider: 'Amazon AWS',
  },
  {
    headline: 'AWS Certified Data Engineer – Associate',
    description: 'Validate skills in core data-related AWS services, data ingestion, transformation, and pipeline orchestration.',
    logoUrl: 'https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/9b5a18fb32a88199bd5cc769024e9d31.png',
    accent: '#10B981',
    provider: 'Amazon AWS',
  },
  {
    headline: 'AWS Certified Security – Specialty',
    description: 'Demonstrate expertise in creating security solutions and AWS data protection mechanisms.',
    logoUrl: 'https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/e519540559349ad06664603b79615ca0.png',
    accent: '#EF4444',
    provider: 'Amazon AWS',
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[current];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0A192F' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Animated progress bar */}
      <div className="h-0.5 bg-white/10">
        <motion.div
          key={current}
          className="h-full"
          style={{ background: slide.accent }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: paused ? 0 : 5, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[320px]">
          {/* Logo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current + '-img'}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 w-[180px] h-[180px] flex items-center justify-center rounded-3xl"
              style={{
                background: `${slide.accent}0F`,
                border: `1px solid ${slide.accent}30`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <img src={slide.logoUrl} alt={slide.provider} className="w-32 h-32 object-contain" />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current + '-text'}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
                style={{ background: `${slide.accent}18`, color: slide.accent }}
              >
                {slide.provider}
              </span>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
              >
                {slide.headline}
              </h2>
              <p className="text-slate-400 text-base leading-relaxed max-w-2xl">{slide.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot controls */}
        <div className="flex items-center gap-2 mt-6">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                background: i === current ? slide.accent : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;