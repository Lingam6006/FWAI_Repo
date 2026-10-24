import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down slightly
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Sticky booking bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0E1E3A]/95 backdrop-blur-md border-t border-white/10 shadow-2xl pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] active:scale-98 transition-all shadow-md"
        >
          <span>Book a free audit call</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
}
