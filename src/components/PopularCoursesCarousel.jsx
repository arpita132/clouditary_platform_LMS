
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const courses = [
  { title: 'AWS Certified Cloud Practitioner', provider: 'AWS', rating: '4.8', learners: '15.2k', price: '$99', duration: '40 hrs', level: 'Beginner', batchDate: 'Apr 1', isLink: true, accent: '#F59E0B' },
  { title: 'Azure Administrator Associate', provider: 'Azure', rating: '4.7', learners: '12.5k', price: '$129', duration: '55 hrs', level: 'Intermediate', batchDate: 'Apr 5', accent: '#06B6D4' },
  { title: 'GCP Associate Cloud Engineer', provider: 'GCP', rating: '4.6', learners: '9.8k', price: '$109', duration: '45 hrs', level: 'Intermediate', batchDate: 'Apr 8', accent: '#10B981' },
  { title: 'AWS Solutions Architect – Associate', provider: 'AWS', rating: '4.9', learners: '22.1k', price: '$149', duration: '70 hrs', level: 'Advanced', batchDate: 'Apr 3', accent: '#F59E0B' },
  { title: 'Azure Security Engineer Associate', provider: 'Azure', rating: '4.8', learners: '8.4k', price: '$139', duration: '50 hrs', level: 'Advanced', batchDate: 'Apr 10', accent: '#06B6D4' },
  { title: 'GCP Professional Cloud Architect', provider: 'GCP', rating: '4.7', learners: '6.2k', price: '$159', duration: '65 hrs', level: 'Expert', batchDate: 'Apr 15', accent: '#10B981' },
  { title: 'AWS Developer – Associate', provider: 'AWS', rating: '4.7', learners: '14.3k', price: '$129', duration: '48 hrs', level: 'Intermediate', batchDate: 'Apr 7', accent: '#F59E0B' },
  { title: 'Azure Data Engineer Associate', provider: 'Azure', rating: '4.6', learners: '11.1k', price: '$149', duration: '60 hrs', level: 'Advanced', batchDate: 'Apr 12', accent: '#06B6D4' },
];

const CourseCard = ({ course, index }) => {
  const { toast } = useToast();
  const handleNotImplemented = () => toast({ title: 'Coming Soon', description: "🚧 This feature isn't implemented yet!" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.07, 0.3) }}
      whileHover={{ y: -5 }}
      className="min-w-[300px] md:min-w-[340px] flex flex-col rounded-2xl overflow-hidden snap-start flex-shrink-0"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
    >
      <div className="h-0.5" style={{ background: course.accent }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full" style={{ background: `${course.accent}18`, color: course.accent }}>
            {course.provider}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Batch: {course.batchDate}
          </span>
        </div>

        <h3 className="font-bold text-lg text-white mb-3 line-clamp-2 min-h-[52px] leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
          {course.title}
        </h3>

        <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
          <span className="flex items-center gap-1.5"><Clock size={12} className="text-slate-500" />{course.duration}</span>
          <span className="flex items-center gap-1.5"><Award size={12} className="text-slate-500" />{course.level}</span>
          <span className="flex items-center gap-1.5"><Users size={12} className="text-slate-500" />{course.learners}</span>
        </div>

        <div className="flex items-center justify-between mb-5 mt-auto">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-white">{course.rating}</span>
          </div>
          <span className="text-xl font-extrabold" style={{ color: course.accent, fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
            {course.price}
          </span>
        </div>

        {course.isLink ? (
          <Link to="/courses/aws/aws-certified-cloud-practitioner">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-xl group w-full">
              <Button className="w-full h-11 font-bold rounded-xl border-0 text-white" style={{ background: `linear-gradient(92deg, ${course.accent}cc, ${course.accent})` }}>
                View Detail
              </Button>
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </motion.div>
          </Link>
        ) : (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-xl group w-full">
            <Button onClick={handleNotImplemented} className="w-full h-11 font-bold rounded-xl border-0 text-white" style={{ background: `linear-gradient(92deg, ${course.accent}cc, ${course.accent})` }}>
              View Detail
            </Button>
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const PopularCoursesCarousel = () => {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0D1F33] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#06B6D4', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}>
              Our Courses
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
              Popular Courses
            </h2>
            <p className="text-slate-400">Explore our most highly-rated cloud certification courses</p>
          </motion.div>

          <div className="hidden md:flex gap-2">
            {['left', 'right'].map((dir) => (
              <motion.button
                key={dir}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => scroll(dir)}
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {dir === 'left' ? <ChevronLeft size={20} className="text-slate-300" /> : <ChevronRight size={20} className="text-slate-300" />}
              </motion.button>
            ))}
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {courses.map((course, i) => <CourseCard key={course.title} course={course} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesCarousel;