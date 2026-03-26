
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/918287791155?text=Hi%20I%27m%20interested%20in%20Clouditary%20courses";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] flex flex-col items-end group"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none mb-2 border border-gray-100">
        Chat with us on WhatsApp
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
      </div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
