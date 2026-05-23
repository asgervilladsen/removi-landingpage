'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

const initial: Record<Direction, string> = {
  up:    'opacity-0 translate-y-10',
  left:  'opacity-0 -translate-x-12',
  right: 'opacity-0 translate-x-12',
  fade:  'opacity-0',
};

interface Props {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function AnimateIn({ children, direction = 'up', delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : initial[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
