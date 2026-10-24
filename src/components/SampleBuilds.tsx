import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquare, Bell, CheckCircle2 } from 'lucide-react';

interface BuildRow {
  imageSrc: string;
  imageAlt: string;
  title: string;
  whatYouGet: string;
  whatChanges: string;
  bubbleType: 'notification' | 'chat';
  bubbleText: string;
  bubbleSubtext?: string;
  imageOnLeft: boolean;
}

const BUILDS: BuildRow[] = [
  {
    imageSrc: '/work-1.jpg',
    imageAlt: 'Staff coordinator at cleaning service front desk smiling at phone',
    title: 'The Missed Call Text Back Fix',
    whatYouGet:
      'An automated text back that messages the homeowner the moment you miss their phone call.',
    whatChanges:
      'You stop losing house cleanings to whoever answers the phone first while your hands are busy on jobs.',
    bubbleType: 'notification',
    bubbleText: 'Missed call • Text sent to homeowner',
    bubbleSubtext: 'Just now',
    imageOnLeft: true,
  },
  {
    imageSrc: '/work-2.jpg',
    imageAlt: 'Cleaning company owner between customer visits glancing at phone',
    title: 'Day and time booking text',
    whatYouGet:
      'A follow-up text asking the homeowner what day and time suits them best for their clean.',
    whatChanges:
      'Homeowners send you their exact preferred slot directly, so you never chase them through phone tag.',
    bubbleType: 'chat',
    bubbleText: 'Hi! What day and time suits you best for your home cleaning?',
    imageOnLeft: false,
  },
  {
    imageSrc: '/work-3.jpg',
    imageAlt: 'Satisfied homeowner with phone in hand outside clean home',
    title: 'Personalized text replies you approve',
    whatYouGet:
      'We write the text replies with you so they sound like your business.',
    whatChanges:
      'You check and approve every word before anything goes live to your homeowners.',
    bubbleType: 'notification',
    bubbleText: 'Approved by you • Ready for homeowners',
    bubbleSubtext: 'Your custom voice',
    imageOnLeft: true,
  },
];

export function SampleBuilds() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = "How your system works in the real world".split(" ");

  return (
    <section id="sample-builds" className="py-20 lg:py-28 bg-white border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wide uppercase mb-3">
            Sample builds
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E1E3A] tracking-tight">
            {titleWords.map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-[0.25em]"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.04,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#0E1E3A]/70">
            See the exact setups we put in place for your cleaning business.
          </p>
        </div>

        {/* Build Rows */}
        <div className="space-y-20 lg:space-y-28">
          {BUILDS.map((build, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  build.imageOnLeft ? '' : 'lg:grid-flow-dense'
                }`}
              >
                
                {/* Photo container */}
                <div
                  className={`lg:col-span-7 relative ${
                    build.imageOnLeft ? 'lg:col-start-1' : 'lg:col-start-6'
                  }`}
                >
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? {}
                        : { opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }
                    }
                    whileInView={{
                      opacity: 1,
                      clipPath: 'inset(0% 0% 0% 0%)',
                    }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative rounded-[24px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100"
                  >
                    <motion.img
                      src={build.imageSrc}
                      alt={build.imageAlt}
                      width={900}
                      height={600}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto aspect-[3/2] object-cover"
                      initial={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </motion.div>

                  {/* Overlapping corner coded chat bubble / notification */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
                    className={`absolute -bottom-4 ${
                      build.imageOnLeft ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
                    } bg-[#0E1E3A] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/10 max-w-[270px] sm:max-w-[310px] z-10`}
                  >
                    <div className="flex items-start gap-2.5">
                      {build.bubbleType === 'notification' ? (
                        <div className="w-8 h-8 rounded-full bg-[#8FD3FF] text-[#0E1E3A] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bell className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#8FD3FF] text-[#0E1E3A] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                      )}
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {build.bubbleText}
                        </p>
                        {build.bubbleSubtext && (
                          <p className="text-[10px] text-[#8FD3FF] mt-0.5 font-medium">
                            {build.bubbleSubtext}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    build.imageOnLeft ? 'lg:col-start-8' : 'lg:col-start-1'
                  }`}
                >
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wider uppercase">
                      Sample build
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1E3A] leading-tight">
                      {build.title}
                    </h3>
                  </motion.div>

                  {/* Two parts headed exactly "What you get" and "What changes for you" */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
                    className="space-y-4 pt-1"
                  >
                    <div className="p-4 rounded-2xl bg-[#F2F5FA] border border-slate-200/60">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#0E1E3A] mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E1E3A]" />
                        What you get
                      </h4>
                      <p className="text-sm text-[#0E1E3A]/80 leading-relaxed font-normal">
                        {build.whatYouGet}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F2F5FA] border border-slate-200/60">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#0E1E3A] mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E1E3A]" />
                        What changes for you
                      </h4>
                      <p className="text-sm text-[#0E1E3A]/80 leading-relaxed font-normal">
                        {build.whatChanges}
                      </p>
                    </div>
                  </motion.div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
