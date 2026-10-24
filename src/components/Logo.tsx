import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export function LogoMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CleanPing symbol"
    >
      <rect width="48" height="48" rx="14" fill="#0E1E3A" />
      {/* Clean ping radar C arc */}
      <path
        d="M33 18.2C31 15 27.5 13 23 13C16.9 13 12 17.9 12 24C12 30.1 16.9 35 23 35C27.5 35 31 33 33 29.8"
        stroke="#8FD3FF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Sparkle ping mark */}
      <path
        d="M34 11L35.2 14.8L39 16L35.2 17.2L34 21L32.8 17.2L29 16L32.8 14.8L34 11Z"
        fill="#8FD3FF"
      />
      {/* Center ping wave dot */}
      <circle cx="23" cy="24" r="3.5" fill="#8FD3FF" />
    </svg>
  );
}

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="w-8 h-8 flex-shrink-0" />
      <span
        className={`font-heading text-xl font-bold tracking-tight ${
          light ? 'text-[#F2F5FA]' : 'text-[#0E1E3A]'
        }`}
      >
        CleanPing
      </span>
    </div>
  );
}
