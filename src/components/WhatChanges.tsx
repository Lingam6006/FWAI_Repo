import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PhoneMissed, CalendarClock, CheckCircle2 } from 'lucide-react';

interface ChangeItem {
  icon: React.ElementType;
  problemHeading: string;
  solutionText: string;
}

const ITEMS: ChangeItem[] = [
  {
    icon: PhoneMissed,
    problemHeading: 'You miss calls while cleaning homes',
    solutionText:
      'Homeowners get a text back right away. You hold their attention before they call another cleaning service.',
  },
  {
    icon: CalendarClock,
    problemHeading: 'Your schedule slips into phone tag',
    solutionText:
      'The automated message asks what day and time suits them best. Homeowners reply with their preferred time so you confirm without chasing them.',
  },
  {
    icon: CheckCircle2,
    problemHeading: 'Your words must sound like you',
    solutionText:
      'We write the text replies with you. You check and approve every word before anything goes live to your homeowners.',
  },
];

export function WhatChanges() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = "What changes for your cleaning business".split(" ");

  return (
    <section id="what-changes" className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wide uppercase mb-3">
            What changes for you
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
            Stop losing bookings to whoever picks up first when your hands are busy on a clean.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="bg-white rounded-[24px] p-7 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between transition-shadow hover:shadow-md"
              >
                <div>
                  {/* Big icon in a rounded highlight tile */}
                  <div className="w-14 h-14 rounded-2xl bg-[#8FD3FF] text-[#0E1E3A] flex items-center justify-center mb-6 shadow-xs">
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </div>

                  {/* Card heading naming the problem starting with You or Your */}
                  <h3 className="font-heading text-xl font-bold text-[#0E1E3A] mb-3 leading-snug">
                    {item.problemHeading}
                  </h3>

                  {/* What changes for you */}
                  <p className="text-sm sm:text-base text-[#0E1E3A]/75 leading-relaxed font-normal">
                    {item.solutionText}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
