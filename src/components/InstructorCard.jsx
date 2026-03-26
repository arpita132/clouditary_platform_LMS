
import React from 'react';
import { Award } from 'lucide-react';

const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 p-6 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
          {instructor.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{instructor.expertise}</p>
      
      <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
        <Award className="w-4 h-4 mr-2 text-purple-600" />
        <span>{instructor.credentials}</span>
      </div>
      
      <p className="text-gray-600 text-sm">{instructor.experience}</p>
    </div>
  );
};

export default InstructorCard;
