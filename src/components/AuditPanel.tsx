import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

const LEAVE_WITH_ITEMS = [
  {
    title: 'Where you lose customers today',
    description: 'We audit your phone and booking flow to pinpoint exactly where homeowners give up and call someone else.',
  },
  {
    title: 'What to automate first',
    description: 'A tailored plan to deploy your missed call text back without changing your phone number or daily crew routine.',
  },
  {
    title: 'A clear price for your business',
    description: 'Straightforward pricing built specifically for your cleaning business volume. No hidden surprises.',
  },
];

export function AuditPanel() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = "Get your AI growth plan in a free 1:1 call".split(" ");

  return (
    <section className="py-20 lg:py-28 bg-[#0E1E3A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Large Panel */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#070F1E] rounded-[24px] p-8 sm:p-12 lg:p-16 border border-[#162C54] shadow-2xl overflow-hidden"
        >
          {/* Subtle highlight glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#8FD3FF]/10 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl space-y-8">
            
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#162C54] border border-[#8FD3FF]/30 text-[#8FD3FF] text-xs font-bold tracking-wide uppercase">
                Free 1:1 Session
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {titleWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block mr-[0.25em]"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.35,
                      delay: shouldReduceMotion ? 0 : idx * 0.04,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              <p className="text-base sm:text-lg text-[#F2F5FA]/80">
                You walk away from our conversation with complete clarity on how to stop missing jobs.
              </p>
            </div>

            {/* The three things you leave with */}
            <div className="space-y-4 pt-2">
              <div className="font-heading text-xs font-bold uppercase tracking-wider text-[#8FD3FF]">
                What you leave with
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {LEAVE_WITH_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-[#0E1E3A] border border-white/5 space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8FD3FF] flex-shrink-0" />
                        <h3 className="font-heading text-sm font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#F2F5FA]/70 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] hover:bg-[#a5ddff] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all shadow-lg shadow-[#8FD3FF]/20"
              >
                <span>Book a free audit call</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
