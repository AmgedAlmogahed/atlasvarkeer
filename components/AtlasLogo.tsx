import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AtlasLogoProps {
  variant?: 'dark-on-light' | 'light-on-dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AtlasLogo({
  variant = 'dark-on-light',
  size = 'md',
  className = '',
}: AtlasLogoProps) {
  const heightClasses = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-16',
  }[size];

  if (variant === 'light-on-dark') {
    return (
      <Link
        href="/"
        aria-label="Atlas Holland B.V. — Naar de startpagina"
        className={`inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atlas-orange shrink-0 ${className}`}
      >
        {/* Light-on-dark variant: white crescent + white "A" + white wordmark, orange swoosh + orange "HOLLAND B.V." */}
        <svg
          viewBox="0 0 280 96"
          className={`${heightClasses} w-auto`}
          role="img"
          aria-label="Atlas Holland B.V."
        >
          {/* Upper-left crescent (white on dark) */}
          <path
            d="M 22 58 C 12 31, 30 6, 58 6 C 77 6, 93 17, 99 33 C 90 21, 74 15, 58 18 C 36 22, 22 39, 22 58 Z"
            fill="#FFFFFF"
          />
          {/* Lower-right swoosh (brand orange #FF6A00) */}
          <path
            d="M 94 26 C 106 49, 93 79, 65 86 C 45 91, 26 81, 19 65 C 29 76, 46 80, 63 75 C 84 68, 95 47, 94 26 Z"
            fill="#FF6A00"
          />
          {/* Central bold geometric 'A' (white on dark) */}
          <path
            d="M 53 20 L 66 20 L 84 60 L 71 60 L 67 51 L 51 51 L 47 60 L 35 60 Z M 54 41 L 64 41 L 59 29 Z"
            fill="#FFFFFF"
          />
          {/* Wordmark ATLAS (white) & HOLLAND B.V. (orange) */}
          <text
            x="114"
            y="54"
            fill="#FFFFFF"
            fontFamily="var(--font-montserrat), Montserrat, sans-serif"
            fontWeight="900"
            fontSize="36"
            letterSpacing="1"
          >
            ATLAS
          </text>
          <text
            x="116"
            y="78"
            fill="#FF6A00"
            fontFamily="var(--font-montserrat), Montserrat, sans-serif"
            fontWeight="800"
            fontSize="15.5"
            letterSpacing="3.8"
          >
            HOLLAND B.V.
          </text>
        </svg>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Atlas Holland B.V. — Naar de startpagina"
      className={`inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atlas-orange shrink-0 ${className}`}
    >
      <div className={`relative overflow-hidden ${heightClasses} aspect-[1.45/1] bg-white rounded-md`}>
        {/* Uploaded brand logo used directly without distortion or recolouring */}
        <Image
          src="/assets/aistudio/image_2652d4a1.png"
          alt="Atlas Holland B.V. Logo"
          fill
          sizes="160px"
          referrerPolicy="no-referrer"
          className="object-contain scale-[1.08] origin-center"
        />
        {/* Cleanly masks the tiny scan index number '2' in the far top-left corner of the uploaded sheet */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 w-4 h-4 bg-white pointer-events-none z-10"
        />
      </div>
    </Link>
  );
}

/**
 * Decorative orange swoosh arc inspired by the Atlas Holland B.V. logo.
 */
export function SwooshArcBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M 490 80 C 590 250, 500 490, 290 540 C 145 575, 35 495, 15 390 C 90 475, 225 505, 345 460 C 485 405, 530 230, 490 80 Z"
        fill="#FF6A00"
        fillOpacity="0.88"
      />
    </svg>
  );
}

/**
 * Thin curved orange swoosh underline for emphasised headline phrases.
 */
export function SwooshUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 18"
      fill="none"
      aria-hidden="true"
      className={`w-full h-3.5 mt-1 pointer-events-none select-none ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M 4 14 C 95 2, 225 2, 316 11 C 235 7, 105 8, 4 14 Z"
        fill="#FF6A00"
      />
    </svg>
  );
}
