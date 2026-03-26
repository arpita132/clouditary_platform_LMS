
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CertificationCard = ({ cert }) => {
  const [isEnrolling, setIsEnrolling] = useState(false);
  const { toast } = useToast();

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Foundational': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Associate': return 'bg-green-100 text-green-700 border-green-200';
      case 'Professional': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Specialty': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Expert': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleEnroll = async () => {
    setIsEnrolling(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Enrollment Successful",
        description: `Enrollment request submitted for ${cert.name} (${cert.code}).`,
      });
    } catch (error) {
      toast({
        title: "Enrollment Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:border-[#0EA5E9]/50 transition-all duration-300 flex flex-col p-6 overflow-hidden relative group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-[#0EA5E9] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
      
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-[#1E293B] bg-gray-100 px-3 py-1 rounded-md tracking-wider">
          {cert.code}
        </span>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(cert.difficulty)} flex items-center gap-1`}>
          <Award className="w-3 h-3" />
          {cert.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#1E293B] mb-2 line-clamp-2 min-h-[56px]">
        {cert.name}
      </h3>
      
      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
        {cert.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#0EA5E9]" />
          <span>{cert.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 border-l border-gray-300 pl-4">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>Verified</span>
        </div>
      </div>

      <Button 
        onClick={handleEnroll} 
        disabled={isEnrolling}
        className="w-full bg-[#1E293B] hover:bg-[#0EA5E9] text-white transition-colors h-12 rounded-lg font-semibold"
      >
        {isEnrolling ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
        ) : (
          'Enroll Now'
        )}
      </Button>
    </motion.div>
  );
};

export default CertificationCard;
