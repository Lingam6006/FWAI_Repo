import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Logo } from './Logo.tsx';
import { ArrowRight, MapPin } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

export function Closing() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = "Stop losing cleaning clients to whoever picks up first.".split(" ");

  return (
    <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center overflow-hidden">
      {/* Background place.jpg with fixed width/height and referrerPolicy */}
      <img
        src="/place.jpg"
        alt="Inside a modern professional cleaning business facility in the United States"
        width={1500}
        height={1000}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark colour layer overlay for high contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#0E1E3A]/90 to-[#0E1E3A]/85 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center text-white space-y-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {titleWords.map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block mr-[0.25em]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.35,
                delay: shouldReduceMotion ? 0 : idx * 0.04,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <p className="text-base sm:text-lg text-[#F2F5FA]/80 max-w-xl mx-auto font-normal">
          Keep your schedule full and protect your hard-earned reputation with instant automated replies.
        </p>

        <div className="pt-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] hover:bg-[#a5ddff] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all shadow-xl shadow-black/30"
          >
            <span>Book a free audit call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#070F1E] text-[#F2F5FA] py-12 border-t border-[#162C54]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand logo in heading font */}
        <div className="flex items-center gap-3">
          <Logo light />
        </div>

        {/* City and details */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F2F5FA]/70">
          <MapPin className="w-4 h-4 text-[#8FD3FF]" />
          <span>The United States</span>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-[#F2F5FA]/50">
          CleanPing. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
