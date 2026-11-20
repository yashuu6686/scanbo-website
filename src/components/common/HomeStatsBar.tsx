"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
};

const STATS: StatItem[] = [
  { value: 750, suffix: "+", label: "devices deployed" },
  { value: 150, suffix: "M+", label: "verified health signals" },
  { value: 1, suffix: "M+", label: "ECG AI analyses" },
  { value: 2, suffix: "×", label: "YoY revenue growth" },
  { value: 2, suffix: " ACOs", label: "US pilots — FL & NY" },
];

const DURATION_MS = 1400;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(value: number, decimals = 0) {
  if (decimals > 0) return value.toFixed(decimals);
  return Math.round(value).toLocaleString("en-US");
}

function StatValue({
  value,
  decimals = 0,
  suffix,
  active,
}: {
  value: number;
  decimals?: number;
  suffix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION_MS);
      setDisplay(value * easeOutCubic(progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <b>
      {formatValue(display, decimals)}
      {suffix}
    </b>
  );
}

export function HomeStatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats n5" ref={ref}>
      <div className="wrap">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <StatValue
              value={stat.value}
              decimals={stat.decimals}
              suffix={stat.suffix}
              active={active}
            />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
