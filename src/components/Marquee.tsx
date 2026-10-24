import React, { useState } from 'react';
import { useReducedMotion } from 'motion/react';

const ROW1_ITEMS = [
  'The Missed Call Text Back Fix',
  'Instant Homeowner Replies',
  'Day And Time Scheduling',
  'Custom Text Approvals',
  'The Missed Call Text Back Fix',
  'Instant Homeowner Replies',
  'Day And Time Scheduling',
  'Custom Text Approvals',
];

const ROW2_ITEMS = [
  'FOR CLEANING COMPANIES',
  'THE UNITED STATES',
  'RUNS ON YOUR WHATSAPP',
  'FOR CLEANING COMPANIES',
  'THE UNITED STATES',
  'RUNS ON YOUR WHATSAPP',
  'FOR CLEANING COMPANIES',
  'THE UNITED STATES',
  'RUNS ON YOUR WHATSAPP',
];

export function Marquee() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full bg-[#070F1E] border-y border-[#162C54]/80 py-5 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Features marquee"
    >
      <div className="w-full max-w-full overflow-hidden flex flex-col gap-3">
        
        {/* Row 1: things I set up, big and bold in white, heading font */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <div
            className={`flex items-center gap-6 ${
              shouldReduceMotion
                ? 'flex-wrap justify-center w-full px-4'
                : 'w-max'
            }`}
            style={
              shouldReduceMotion
                ? undefined
                : {
                    animation: `marqueeLeft ${isHovered ? '45s' : '22s'} linear infinite`,
                  }
            }
          >
            {ROW1_ITEMS.map((item, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {item}
                </span>
                <span
                  className="w-2 h-2 rounded-full bg-[#8FD3FF] flex-shrink-0"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: For Who I help, City, Runs on your WhatsApp */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <div
            className={`flex items-center gap-6 ${
              shouldReduceMotion
                ? 'flex-wrap justify-center w-full px-4'
                : 'w-max'
            }`}
            style={
              shouldReduceMotion
                ? undefined
                : {
                    animation: `marqueeRight ${isHovered ? '45s' : '22s'} linear infinite`,
                  }
            }
          >
            {ROW2_ITEMS.map((item, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#F2F5FA]/60 tracking-[0.2em] uppercase">
                  {item}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#8FD3FF] flex-shrink-0"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
