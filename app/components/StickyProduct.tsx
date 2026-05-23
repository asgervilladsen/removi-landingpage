'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: '24/7 Monitoring',
    body: 'Continuous ECG capture without interruption to daily life. The device records every heartbeat — at rest, during activity, and through the night.',
  },
  {
    title: 'Remote Access',
    body: 'Clinicians view real-time data and receive automated alerts through a secure dashboard. No appointment needed.',
  },
  {
    title: 'AFib Detection',
    body: 'Onboard algorithms continuously analyse rhythm patterns and flag arrhythmia episodes for immediate clinical review.',
  },
];

export default function StickyProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = features.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.6 }
      );
      if (sectionRefs.current[i]) observer.observe(sectionRefs.current[i]!);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      {/* Sticky visual */}
      <div className="hidden md:block sticky top-32">
        <DeviceVisual activeIndex={activeIndex} />
      </div>

      {/* Scrolling features */}
      <div className="flex flex-col">
        {features.map((f, i) => (
          <div
            key={f.title}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="min-h-[60vh] flex flex-col justify-center py-16 transition-opacity duration-500"
            style={{ opacity: activeIndex === i ? 1 : 0.3 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] mb-4" style={{ color: '#27B9B6' }}>
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1d1d1f' }}>
              {f.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#6e6e73' }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeviceVisual({ activeIndex }: { activeIndex: number }) {
  // SVG path d-strings for the large 600×60 live trace (baseline y=30)
  const ekgPaths = [
    // Normal sinus rhythm – 2 regular beats
    "M 0,30 L 40,30 C 50,30 52,22 62,22 C 72,22 74,30 80,30 L 94,30 L 98,34 L 104,2 L 110,42 L 116,30 L 132,30 C 142,30 145,19 157,19 C 169,19 172,30 182,30 L 310,30 C 320,30 322,22 332,22 C 342,22 344,30 350,30 L 364,30 L 368,34 L 374,2 L 380,42 L 386,30 L 402,30 C 412,30 415,19 427,19 C 439,19 442,30 452,30 L 600,30",
    // Slightly faster – 3 beats
    "M 0,30 L 18,30 C 26,30 28,22 36,22 C 44,22 46,30 52,30 L 63,30 L 67,34 L 73,2 L 79,42 L 85,30 L 98,30 C 107,30 110,19 120,19 C 130,19 133,30 142,30 L 196,30 C 204,30 206,22 214,22 C 222,22 224,30 230,30 L 241,30 L 245,34 L 251,2 L 257,42 L 263,30 L 276,30 C 285,30 288,19 298,19 C 308,19 311,30 320,30 L 374,30 C 382,30 384,22 392,22 C 400,22 402,30 408,30 L 419,30 L 423,34 L 429,2 L 435,42 L 441,30 L 454,30 C 463,30 466,19 476,19 C 486,19 489,30 498,30 L 600,30",
    // AFib – irregular R-R intervals, no P waves
    "M 0,30 L 58,30 L 62,34 L 68,2 L 74,42 L 80,30 L 95,30 C 105,30 108,20 117,20 C 126,20 129,30 137,30 L 222,30 L 226,34 L 232,2 L 238,42 L 244,30 L 259,30 C 269,30 272,20 281,20 C 290,20 293,30 301,30 L 358,30 L 362,34 L 368,2 L 374,42 L 380,30 L 395,30 C 405,30 408,20 417,20 C 426,20 429,30 437,30 L 516,30 L 520,34 L 526,2 L 532,42 L 538,30 L 553,30 C 563,30 566,20 575,20 C 584,20 587,30 595,30 L 600,30",
  ];

  // Separate paths for the tiny device screen (viewBox 0 0 120 40, baseline y=20)
  const devicePaths = [
    "M 0,20 L 12,20 C 19,20 21,14 28,14 C 35,14 37,20 43,20 L 50,20 L 53,23 L 57,2 L 61,32 L 65,20 L 73,20 C 79,20 81,13 87,13 C 93,13 95,20 101,20 L 120,20",
    "M 0,20 L 6,20 C 13,20 15,14 21,14 C 27,14 29,20 34,20 L 40,20 L 43,23 L 47,2 L 51,32 L 55,20 L 62,20 C 68,20 70,13 76,13 C 82,13 84,20 90,20 L 100,20 L 103,23 L 107,3 L 111,32 L 115,20 L 120,20",
    "M 0,20 L 28,20 L 31,23 L 35,2 L 39,32 L 43,20 L 54,20 C 60,20 62,13 68,13 C 74,13 76,20 82,20 L 98,20 L 101,23 L 105,2 L 109,32 L 113,20 L 120,20",
  ];

  const colors = ['#27B9B6', '#E151B2', '#27B9B6'];

  return (
    <div
      className="rounded-3xl p-10 flex flex-col items-center gap-8 transition-all duration-700"
      style={{ backgroundColor: '#f5f5f7', minHeight: '420px', justifyContent: 'center' }}
    >
      {/* Device mockup */}
      <div
        className="w-28 h-36 rounded-3xl flex items-center justify-center shadow-lg transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, #1d1d1f, #334F73)`,
          transform: `rotate(${activeIndex === 1 ? '-3deg' : activeIndex === 2 ? '3deg' : '0deg'})`,
        }}
      >
        <div className="w-20 h-10 rounded-lg bg-black/40 flex items-center justify-center">
          <svg viewBox="0 0 120 40" className="w-full px-2">
            <path
              d={devicePaths[activeIndex]}
              fill="none"
              stroke={colors[activeIndex]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Live EKG trace */}
      <div className="w-full">
        <p className="text-xs uppercase tracking-widest mb-3 text-center" style={{ color: '#6e6e73' }}>
          Live ECG trace
        </p>
        <svg viewBox="0 0 600 60" className="w-full" preserveAspectRatio="none">
          <path
            key={activeIndex}
            d={ekgPaths[activeIndex]}
            fill="none"
            stroke={colors[activeIndex]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1200,
              strokeDashoffset: 0,
              animation: 'drawLine 1.2s ease-out forwards',
            }}
          />
        </svg>
      </div>

      {/* Feature indicators */}
      <div className="flex gap-2">
        {features.map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              backgroundColor: '#27B9B6',
              width: activeIndex === i ? '24px' : '8px',
              opacity: activeIndex === i ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
