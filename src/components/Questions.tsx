import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'Who is this for?',
    a: 'Cleaning companies in the United States. If you miss phone calls while cleaning homes or managing crews, this stops homeowners from hiring the next cleaner on their list.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on your business. You get a plan and a price on the free audit call.',
  },
  {
    q: 'What do we set up?',
    a: 'We set up the Missed Call Text Back Fix for cleaning companies. When a call is missed, it texts the homeowner back right away and asks what day and time suits them, so you stop losing the booking to whoever picks up first. We write the text replies with you, and you check them before they go live.',
  },
  {
    q: 'How do you start?',
    a: 'Book your free audit call on this page. We review your current phone process, walk through your numbers, and show you the exact setup for your cleaning business.',
  },
];

export function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const titleWords = "Questions you might have".split(" ");

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wide uppercase mb-3">
            Questions
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
          <p className="mt-3 text-base text-[#0E1E3A]/70">
            Straightforward answers about our setup and process.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="bg-white rounded-[20px] border border-slate-200/80 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0E1E3A]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F2F5FA] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#8FD3FF]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#0E1E3A]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? {}
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={
                        shouldReduceMotion
                          ? {}
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#0E1E3A]/80 leading-relaxed border-t border-slate-100 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
