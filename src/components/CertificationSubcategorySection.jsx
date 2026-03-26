
import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import CertificationCard from './CertificationCard';

const CertificationSubcategorySection = ({ subcategory, certifications }) => {
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200/20 pb-4">
        <div className="p-2 bg-[#0EA5E9]/10 rounded-lg">
          <FolderOpen className="w-6 h-6 text-[#0EA5E9]" />
        </div>
        <h3 className="text-2xl font-bold text-white">{subcategory}</h3>
        <span className="ml-auto bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">
          {certifications.length} {certifications.length === 1 ? 'Exam' : 'Exams'}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CertificationCard cert={cert} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSubcategorySection;
