
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideshowControls = ({ currentSlide, totalSlides, onPrevious, onNext, onDotClick }) => {
  return (
    <>
      {/* Arrows */}
      <button 
        onClick={onPrevious}
        className="absolute left-2 md:left-6 top-[30%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#1E293B] shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] touch-target"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button 
        onClick={onNext}
        className="absolute right-2 md:right-6 top-[30%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#1E293B] shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] touch-target"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20 bg-white/50 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-sm">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] touch-target !min-h-[10px] !min-w-[10px] ${
              currentSlide === index 
                ? 'w-6 h-2 md:w-8 md:h-2.5 bg-[#0EA5E9]' 
                : 'w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-400 hover:bg-gray-600'
            }`}
            style={{ minHeight: '10px', minWidth: currentSlide === index ? '24px' : '10px' }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default SlideshowControls;
