'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto transition-all duration-500 ease-in-out"
        style={{
          marginTop: scrolled ? '12px' : '0px',
          width: scrolled ? 'auto' : '100%',
          borderRadius: scrolled ? '9999px' : '0px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.10)' : 'none',
          padding: scrolled ? '0 28px' : '0 24px',
        }}
      >
        <div
          className="flex items-center justify-between gap-10 transition-all duration-500"
          style={{ height: scrolled ? '44px' : '56px' }}
        >
          <span
            className="text-sm font-semibold tracking-wide transition-all duration-500"
            style={{ color: '#1d1d1f', fontSize: scrolled ? '13px' : '14px' }}
          >
            Removi
          </span>
          <a
            href="#contact"
            className="text-xs font-medium px-5 py-2 rounded-full text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#27B9B6' }}
          >
            Get in touch
          </a>
        </div>
      </nav>
    </div>
  );
}
