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
  const ekgPaths = [
    "0,30 100,30 160,30 185,5 200,55 215,10 240,30 340,30 420,30 445,5 460,55 475,10 500,30 600,30",
    "0,30 80,30 120,30 140,18 155,42 162,12 175,30 260,30 300,30 320,18 335,42 342,12 355,30 440,30 500,30 520,18 535,42 542,12 555,30 600,30",
    "0,30 60,30 90,22 105,38 115,15 128,45 138,30 200,30 230,22 245,38 255,15 268,45 278,30 340,30 370,22 385,38 395,15 408,45 418,30 500,30 530,22 545,38 555,15 568,45 578,30 600,30",
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
            <polyline
              points={ekgPaths[activeIndex]}
              fill="none"
              stroke={colors[activeIndex]}
              strokeWidth="2.5"
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
          <polyline
            key={activeIndex}
            points={ekgPaths[activeIndex]}
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
