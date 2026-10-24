import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/lingappa-chikini-7yl1fh/30min';

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E1E3A]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3'
          : 'bg-[#0E1E3A] py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center focus:outline-none">
          <Logo light />
        </a>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F2F5FA]/80">
          <a
            href="#what-changes"
            className="hover:text-white transition-colors"
          >
            What changes
          </a>
          <a
            href="#sample-builds"
            className="hover:text-white transition-colors"
          >
            Sample builds
          </a>
          <a
            href="#calculator"
            className="hover:text-white transition-colors"
          >
            Your missed calls
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors"
          >
            Questions
          </a>
        </nav>

        {/* Top bar pill button */}
        <div className="flex items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A] hover:bg-[#a5ddff] active:scale-95 transition-all shadow-sm"
          >
            Free audit call
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F2F5FA] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070F1E] border-t border-white/10 px-4 py-4 space-y-3">
          <a
            href="#what-changes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#F2F5FA] font-medium py-1 text-sm"
          >
            What changes
          </a>
          <a
            href="#sample-builds"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#F2F5FA] font-medium py-1 text-sm"
          >
            Sample builds
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#F2F5FA] font-medium py-1 text-sm"
          >
            Your missed calls
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#F2F5FA] font-medium py-1 text-sm"
          >
            How it works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#F2F5FA] font-medium py-1 text-sm"
          >
            Questions
          </a>
          <div className="pt-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2.5 px-4 font-bold rounded-full bg-[#8FD3FF] text-[#0E1E3A]"
            >
              Book a free audit call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
