import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, PhoneCall, Check, CheckCheck } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

interface ChatMessage {
  sender: 'system' | 'business' | 'homeowner';
  text: string;
  time?: string;
}

interface ChatTab {
  id: string;
  label: string;
  headerTitle: string;
  messages: ChatMessage[];
}

const CHAT_TABS: ChatTab[] = [
  {
    id: 'missed-call',
    label: 'Instant text back',
    headerTitle: 'Homeowner Sarah',
    messages: [
      {
        sender: 'system',
        text: 'Missed call from Sarah',
      },
      {
        sender: 'business',
        text: 'Hi Sarah, sorry we missed your call while on a cleaning job. How can we help with your home today?',
        time: 'Just now',
      },
      {
        sender: 'homeowner',
        text: 'Hi! Looking to get a deep clean for my house before guests arrive.',
        time: 'Just now',
      },
      {
        sender: 'business',
        text: 'We would love to help you with that.',
        time: 'Just now',
      },
    ],
  },
  {
    id: 'booking-flow',
    label: 'Day and time',
    headerTitle: 'Booking Day & Time',
    messages: [
      {
        sender: 'business',
        text: 'What day and time suits you best for your home cleaning?',
        time: 'Just now',
      },
      {
        sender: 'homeowner',
        text: 'Do you have anything open this Friday morning?',
        time: 'Just now',
      },
      {
        sender: 'business',
        text: 'Yes! We have Friday morning at 9:00 AM open. Does that time work for you?',
        time: 'Just now',
      },
      {
        sender: 'homeowner',
        text: 'Friday at 9:00 AM is perfect.',
        time: 'Just now',
      },
    ],
  },
  {
    id: 'approval',
    label: 'Checked replies',
    headerTitle: 'Your Approved Words',
    messages: [
      {
        sender: 'system',
        text: 'We draft your custom replies together',
      },
      {
        sender: 'business',
        text: 'Here is your text reply: "Hi from CleanPing! We are on a clean right now. What day suits you?"',
        time: 'Just now',
      },
      {
        sender: 'homeowner',
        text: 'Checked. That matches my tone and style.',
        time: 'Just now',
      },
      {
        sender: 'business',
        text: 'Your approved message is active and ready.',
        time: 'Just now',
      },
    ],
  },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [visibleMsgCount, setVisibleMsgCount] = useState(1);

  // Auto-advance tabs if user hasn't clicked
  useEffect(() => {
    if (userInteracted || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % CHAT_TABS.length);
      setVisibleMsgCount(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [userInteracted, shouldReduceMotion]);

  // Animate messages typing in sequentially
  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleMsgCount(CHAT_TABS[activeTabIdx].messages.length);
      return;
    }

    setVisibleMsgCount(1);
    const tabMessages = CHAT_TABS[activeTabIdx].messages;
    const interval = setInterval(() => {
      setVisibleMsgCount((prev) => {
        if (prev < tabMessages.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [activeTabIdx, shouldReduceMotion]);

  const currentTab = CHAT_TABS[activeTabIdx];

  // Headline words for word-by-word reveal
  const headlineWords = "When you miss a call, the homeowner books the next cleaner who answers.".split(" ");

  return (
    <section className="relative bg-[#0E1E3A] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Soft drifting highlight glow behind the hero */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 lg:w-[650px] lg:h-[650px] rounded-full bg-[#8FD3FF]/15 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 80, -30, 0],
                y: [0, 60, 20, 0],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full bg-[#8FD3FF]/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -60, 40, 0],
                y: [0, -40, 10, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill: For Cleaning companies in the United States */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162C54] border border-[#8FD3FF]/30 text-xs sm:text-sm font-semibold tracking-wide text-[#8FD3FF]"
            >
              <span>For Cleaning companies in the United States</span>
            </motion.div>

            {/* Headline: word by word reveal */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F5FA] leading-[1.15]">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-[0.28em]"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : 0.08 + index * 0.045,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* One plain sentence under it */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.45 }}
              className="text-lg sm:text-xl text-[#F2F5FA]/90 leading-relaxed max-w-xl font-normal"
            >
              We text them back the moment you miss their call so you keep the booking.
            </motion.p>

            {/* CTA button and reassurance line */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.55 }}
              className="space-y-3 pt-2"
            >
              <div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base sm:text-lg font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] hover:bg-[#a5ddff] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all shadow-lg shadow-[#8FD3FF]/20"
                >
                  <span>Book a free audit call</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* One small line under the buttons */}
              <p className="text-xs sm:text-sm text-[#F2F5FA]/70">
                Free 1:1 call. You leave with a plan to grow your cleaning business with AI.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Phone mockup showing WhatsApp chat */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Tab selector */}
            <div className="w-full max-w-[320px] sm:max-w-[350px] mb-3 flex items-center justify-center gap-1.5 p-1 rounded-full bg-[#162C54]/80 border border-white/10">
              {CHAT_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setUserInteracted(true);
                    setActiveTabIdx(idx);
                  }}
                  className={`flex-1 px-2.5 py-1.5 text-xs font-semibold rounded-full transition-all text-center truncate ${
                    activeTabIdx === idx
                      ? 'bg-[#8FD3FF] text-[#0E1E3A] shadow-sm'
                      : 'text-[#F2F5FA]/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Phone container */}
            <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#070F1E] rounded-[36px] p-3 shadow-2xl border-4 border-slate-700/60">
              
              {/* Phone screen */}
              <div className="bg-[#0b141a] rounded-[28px] overflow-hidden flex flex-col h-[460px] relative text-[#e9edef]">
                
                {/* Phone WhatsApp header */}
                <div className="bg-[#202c33] px-3.5 py-2.5 flex items-center justify-between border-b border-[#2a3942]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#8FD3FF] flex items-center justify-center text-[#0E1E3A] font-bold text-xs">
                      CP
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white leading-tight">
                        {currentTab.headerTitle}
                      </div>
                      <div className="text-[10px] text-[#8FD3FF] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FD3FF] inline-block animate-pulse"></span>
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/50 px-2 py-0.5 rounded bg-white/5">
                    WhatsApp
                  </div>
                </div>

                {/* Chat message feed */}
                <div className="flex-1 p-3.5 space-y-2.5 overflow-y-auto bg-[#0b141a] bg-opacity-95">
                  {currentTab.messages.slice(0, visibleMsgCount).map((msg, idx) => {
                    if (msg.sender === 'system') {
                      return (
                        <motion.div
                          key={idx}
                          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex justify-center my-1"
                        >
                          <span className="bg-[#182229] border border-white/5 text-[11px] text-[#8FD3FF] px-2.5 py-1 rounded-md text-center flex items-center gap-1.5">
                            <PhoneCall className="w-3 h-3 text-[#8FD3FF]" />
                            {msg.text}
                          </span>
                        </motion.div>
                      );
                    }

                    const isBusiness = msg.sender === 'business';
                    return (
                      <motion.div
                        key={idx}
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex flex-col ${isBusiness ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
                            isBusiness
                              ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-xs'
                              : 'bg-[#202c33] text-[#e9edef] rounded-tl-xs'
                          }`}
                        >
                          <p>{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-white/50">
                            <span>{msg.time || 'Now'}</span>
                            {isBusiness && <CheckCheck className="w-3 h-3 text-[#8FD3FF]" />}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* WhatsApp input bar */}
                <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-[#2a3942]">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-white/40">
                    Type a message...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white text-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>

            {/* Small caption under phone */}
            <p className="mt-2 text-xs text-[#F2F5FA]/60 font-medium tracking-wide">
              Example chat
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
