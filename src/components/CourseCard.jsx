
import React from 'react';
import { Clock, ArrowRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
  const getProviderColors = (provider) => {
    switch (provider) {
      case 'AWS': return 'bg-orange-100 text-orange-700';
      case 'Azure': return 'bg-blue-100 text-blue-700';
      case 'GCP': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelColors = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl relative"
    >
      {/* Upcoming batch ribbon — top-right corner */}
      {course.batchStartDate && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl z-10">
          🗓 {new Date(course.batchStartDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${getProviderColors(course.provider)}`}>
            {course.provider}
          </span>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getLevelColors(course.level)}`}>
            {course.level}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-[#1E293B] line-clamp-2 min-h-[56px]">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold text-gray-800">{course.rating}</span>
             </div>
             <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{course.learners}</span>
             </div>
          </div>
          <div className="font-bold text-[#1E293B] text-lg">{course.price}</div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
           <Clock className="w-4 h-4" /> {course.duration}
        </div>

        {/* Batch badge inline */}
        {course.batchStartDate && (
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg mb-4">
            <span>🗓</span>
            <span>Next Batch starts {new Date(course.batchStartDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}</span>
          </div>
        )}
        
        <Button asChild className="w-full mt-auto group bg-[#1E293B] hover:bg-[#0EA5E9] text-white transition-colors">
          <Link to={course.slug}>
            View Course Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
