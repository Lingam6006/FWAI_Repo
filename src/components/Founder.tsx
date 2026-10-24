import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { LogoMark } from './Logo.tsx';
import { ArrowRight, UserCheck } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

export function Founder() {
  const shouldReduceMotion = useReducedMotion();
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-slate-200/80"
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-10 items-center">
            
            {/* 4:5 rounded tile of highlight colour containing the large logo mark */}
            <div className="sm:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-[24px] bg-[#8FD3FF] p-6 flex flex-col items-center justify-center shadow-inner overflow-hidden group">
                {!showPhoto ? (
                  <div className="flex flex-col items-center justify-center text-center">
                    <LogoMark className="w-24 h-24 sm:w-28 sm:h-28 text-[#0E1E3A] drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#0E1E3A] mt-4 opacity-75">
                      CleanPing Mark
                    </span>
                  </div>
                ) : (
                  <img
                    src="/founder.jpg"
                    alt="Lingappa Chikini - Founder of CleanPing"
                    width={400}
                    height={500}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}

                {/* Photo toggle button */}
                <button
                  type="button"
                  onClick={() => setShowPhoto(!showPhoto)}
                  className="absolute bottom-3 right-3 px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#0E1E3A] text-white/90 hover:text-white transition-all shadow-sm"
                >
                  {showPhoto ? 'Show Logo' : 'View Portrait'}
                </button>
              </div>
            </div>

            {/* Founder Details */}
            <div className="sm:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wide uppercase">
                <UserCheck className="w-3.5 h-3.5 text-[#0E1E3A]" />
                <span>Founder</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1E3A] tracking-tight">
                  Lingappa Chikini
                </h3>
                <p className="font-heading text-sm sm:text-base font-semibold text-[#0E1E3A]/70 mt-0.5">
                  Founder, CleanPing
                </p>
              </div>

              {/* About me (one plain line about who we help) */}
              <p className="text-sm sm:text-base text-[#0E1E3A]/80 leading-relaxed font-normal">
                We help cleaning companies across the United States capture every missed call and turn homeowners into booked cleanings.
              </p>

              {/* Book a free call with Lingappa */}
              <div className="pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] hover:bg-[#a5ddff] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all shadow-sm"
                >
                  <span>Book a free call with Lingappa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
