import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, FileText, Smartphone } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    title: 'Book your free audit call',
    description:
      'Pick a time on our calendar that fits your day. We look at how your cleaning company currently handles calls when your hands are full.',
    icon: Calendar,
  },
  {
    title: 'Get your plan',
    description:
      'We show you where you lose clients today, draft your text replies together, and give you a clear price for your business.',
    icon: FileText,
  },
  {
    title: 'We set it up on your WhatsApp',
    description:
      'We link the automated text flow to your business line. You check and approve every single reply before it sends to homeowners.',
    icon: Smartphone,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const titleWords = "How we get your text back running".split(" ");

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-20 lg:py-28 bg-white border-t border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wide uppercase mb-3">
            How it works
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
            Three simple steps to stop losing bookings to competing cleaning services.
          </p>
        </div>

        {/* Desktop Step Layout */}
        <div className="relative">
          
          {/* Highlight Line Desktop */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-1 bg-slate-100 z-0 rounded-full overflow-hidden">
            <motion.div
              style={
                shouldReduceMotion
                  ? { width: '100%' }
                  : { width: lineWidth }
              }
              className="h-full bg-[#8FD3FF]"
            />
          </div>

          {/* Highlight Line Mobile */}
          <div className="md:hidden absolute top-8 bottom-8 left-8 w-1 bg-slate-100 z-0 rounded-full overflow-hidden">
            <motion.div
              style={
                shouldReduceMotion
                  ? { height: '100%' }
                  : { height: lineHeight }
              }
              className="w-full bg-[#8FD3FF]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                  }}
                  className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-4 pl-4 md:pl-0"
                >
                  {/* Step Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#8FD3FF] shadow-sm flex items-center justify-center text-[#0E1E3A] flex-shrink-0 transition-transform hover:scale-105">
                    <Icon className="w-6 h-6 text-[#0E1E3A]" strokeWidth={2.2} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 max-w-sm">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0E1E3A] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#0E1E3A]/75 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
