/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Hero } from './components/Hero.tsx';
import { Marquee } from './components/Marquee.tsx';
import { WhatChanges } from './components/WhatChanges.tsx';
import { SampleBuilds } from './components/SampleBuilds.tsx';
import { Calculator } from './components/Calculator.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { Founder } from './components/Founder.tsx';
import { AuditPanel } from './components/AuditPanel.tsx';
import { Questions } from './components/Questions.tsx';
import { Closing, Footer } from './components/ClosingAndFooter.tsx';
import { StickyMobileBar } from './components/StickyMobileBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F5FA] text-[#0E1E3A] flex flex-col selection:bg-[#8FD3FF] selection:text-[#0E1E3A] overflow-x-hidden">
      {/* 1. Top bar: logo, links to sections, Free audit call pill */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Hero on dark colour */}
        <Hero />

        {/* 3. Marquee: two full-width rows right under hero */}
        <Marquee />

        {/* 4. What changes for you: one card per thing I set up */}
        <WhatChanges />

        {/* 5. Sample builds: one large row per thing I set up with work-1, work-2, work-3 */}
        <SampleBuilds />

        {/* 6. Proof: What missed appointments cost you (Interactive calculator) */}
        <Calculator />

        {/* 7. How it works: three steps joined by highlight line */}
        <HowItWorks />

        {/* 8. Founder: logo mark in 4:5 highlight tile, founder details, call CTA */}
        <Founder />

        {/* 9. Free audit call: dark panel with the three things you leave with */}
        <AuditPanel />

        {/* 10. Questions: 4 accordions answered strictly from details */}
        <Questions />

        {/* 11. Closing: place.jpg under dark layer + big headline + button */}
        <Closing />
      </main>

      {/* Footer: logo, City */}
      <Footer />

      {/* Sticky bar on mobile */}
      <StickyMobileBar />
    </div>
  );
}
