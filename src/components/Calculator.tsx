import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Calculator as CalcIcon, DollarSign } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

function useAnimatedNumber(target: number, duration: number = 400) {
  const shouldReduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrent(target);
      return;
    }

    const start = current;
    const diff = target - start;
    if (diff === 0) return;

    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(start + diff * ease));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, shouldReduceMotion]);

  return current;
}

export function Calculator() {
  const shouldReduceMotion = useReducedMotion();

  // Round example values
  const [customersPerMonth, setCustomersPerMonth] = useState(50);
  const [missedShare, setMissedShare] = useState(20);
  const [averageBill, setAverageBill] = useState(180);

  // Calculations
  const missedCount = Math.round(customersPerMonth * (missedShare / 100));
  const lostPerMonth = missedCount * averageBill;
  const lostPerYear = lostPerMonth * 12;

  const animatedLostMonth = useAnimatedNumber(lostPerMonth);
  const animatedLostYear = useAnimatedNumber(lostPerYear);

  const titleWords = "What missed appointments cost you".split(" ");

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#8FD3FF] text-[#0E1E3A] text-xs font-bold tracking-wide uppercase mb-3">
            Estimate your lost revenue
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
            Slide the controls to calculate what unanswered calls and missed bookings take from your business.
          </p>
        </div>

        {/* Calculator Main Box */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-md border border-slate-200/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Area */}
            <div className="lg:col-span-7 space-y-7">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-[#0E1E3A]">
                  Your numbers
                </span>
                <span className="text-xs text-[#0E1E3A]/60 flex items-center gap-1 font-medium">
                  <CalcIcon className="w-3.5 h-3.5 text-[#0E1E3A]" />
                  Interactive calculator
                </span>
              </div>

              {/* Slider 1: Customers a month */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="cust-slider" className="font-semibold text-[#0E1E3A]">
                    Customers a month
                  </label>
                  <span className="font-heading text-base font-bold text-[#0E1E3A] bg-[#F2F5FA] px-3 py-1 rounded-full border border-slate-200">
                    {customersPerMonth}
                  </span>
                </div>
                <input
                  id="cust-slider"
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={customersPerMonth}
                  onChange={(e) => setCustomersPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1E3A]"
                />
                <div className="flex justify-between text-[11px] text-[#0E1E3A]/50">
                  <span>10 customers</span>
                  <span>200 customers</span>
                </div>
              </div>

              {/* Slider 2: Share who miss their appointment */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="miss-slider" className="font-semibold text-[#0E1E3A]">
                    Share who miss their appointment
                  </label>
                  <span className="font-heading text-base font-bold text-[#0E1E3A] bg-[#F2F5FA] px-3 py-1 rounded-full border border-slate-200">
                    {missedShare}%
                  </span>
                </div>
                <input
                  id="miss-slider"
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={missedShare}
                  onChange={(e) => setMissedShare(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1E3A]"
                />
                <div className="flex justify-between text-[11px] text-[#0E1E3A]/50">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Slider 3: Average bill */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="bill-slider" className="font-semibold text-[#0E1E3A]">
                    Average bill
                  </label>
                  <span className="font-heading text-base font-bold text-[#0E1E3A] bg-[#F2F5FA] px-3 py-1 rounded-full border border-slate-200">
                    ${averageBill}
                  </span>
                </div>
                <input
                  id="bill-slider"
                  type="range"
                  min="60"
                  max="500"
                  step="10"
                  value={averageBill}
                  onChange={(e) => setAverageBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1E3A]"
                />
                <div className="flex justify-between text-[11px] text-[#0E1E3A]/50">
                  <span>$60</span>
                  <span>$500</span>
                </div>
              </div>
            </div>

            {/* Big Results Display */}
            <div className="lg:col-span-5 bg-[#0E1E3A] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-5">
                <div className="text-xs uppercase tracking-wider text-[#8FD3FF] font-semibold">
                  Money lost to missed calls
                </div>

                {/* Per month */}
                <div>
                  <div className="text-xs text-[#F2F5FA]/70 mb-1">
                    Lost every month
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-baseline">
                    <span className="text-2xl text-[#8FD3FF] mr-1">$</span>
                    {animatedLostMonth.toLocaleString()}
                  </div>
                </div>

                {/* Per year */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-[#F2F5FA]/70 mb-1">
                    Lost every year
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-[#8FD3FF] tracking-tight flex items-baseline">
                    <span className="text-2xl text-white/80 mr-1">$</span>
                    {animatedLostYear.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Exact required disclaimer and CTA */}
              <div className="pt-2 border-t border-white/10 space-y-4">
                <p className="text-xs text-[#F2F5FA]/70 font-normal leading-relaxed">
                  Your estimate. We go through it on the free audit call.
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] hover:bg-[#a5ddff] active:scale-98 transition-all"
                >
                  <span>Book a free audit call</span>
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
