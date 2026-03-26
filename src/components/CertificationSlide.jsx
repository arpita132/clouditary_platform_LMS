
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CertificationSlide = ({ headline, description, logoUrl, bgClass }) => {
  const { toast } = useToast();

  const handleEnrollClick = () => {
    toast({
      title: "Enrollment Initiated",
      description: "For manual enrollment, contact us at info@clouditary.com or call 8287791155.",
    });
  };

  return (
    <div className={`relative w-full h-full flex flex-col-reverse lg:flex-row items-start md:items-center justify-start md:justify-center ${bgClass}`}>
      {/* Left Content */}
      <div className="w-full lg:w-[60%] hero-slide-content px-5 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-start md:justify-center h-auto lg:h-full">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="inline-block px-3 py-1 mb-3 lg:mb-6 text-[10px] md:text-xs font-bold tracking-wider text-white bg-[#1E293B] rounded-full uppercase">
            Certification
          </span>
          <h2 className="text-clamp-h2 font-bold text-[#1E293B] leading-tight mb-3 lg:mb-6">
            {headline}
          </h2>
          <p className="text-clamp-p text-gray-600 mb-5 lg:mb-8 leading-relaxed line-clamp-4 md:line-clamp-none">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
            <Button asChild className="w-full sm:w-auto min-h-[48px] h-12 md:h-14 px-6 md:px-8 text-sm md:text-lg font-bold bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button variant="outline" onClick={handleEnrollClick} className="w-full sm:w-auto min-h-[48px] h-12 md:h-14 px-6 md:px-8 text-sm md:text-lg font-bold border-2 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white rounded-xl transition-all">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[40%] hero-slide-image px-6 md:p-8 lg:p-12 flex items-center justify-center min-h-[160px] md:min-h-[300px] lg:min-h-full lg:pt-12">
        <img 
          src={logoUrl} 
          alt={headline} 
          className="max-w-full h-auto max-h-[140px] md:max-h-[250px] lg:max-h-[350px] object-contain drop-shadow-xl md:drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default CertificationSlide;
