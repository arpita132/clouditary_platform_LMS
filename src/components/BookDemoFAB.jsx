import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DemoRequestModal from './DemoRequestModal';

const BookDemoFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 flex items-center gap-3">
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
            >
              Book a Free Demo
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          id="book-demo-fab"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] text-white shadow-xl shadow-sky-500/40 flex items-center justify-center focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Book a free demo"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full border-2 border-sky-400 animate-ping opacity-30" />
          <span className="relative text-xl">🎓</span>
        </motion.button>
      </div>

      <DemoRequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BookDemoFAB;
