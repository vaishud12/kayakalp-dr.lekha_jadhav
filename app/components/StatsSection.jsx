'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection({ stats }) {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [statCounts, setStatCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current) {
            setIsStatsVisible(entry.isIntersecting);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const statsEl = statsRef.current;
    if (statsEl) observer.observe(statsEl);

    return () => {
      if (statsEl) observer.unobserve(statsEl);
    };
  }, []);

  // Animate stat numbers
  useEffect(() => {
    if (isStatsVisible) {
      stats.forEach((stat, index) => {
        const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = numericValue / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          if (currentStep <= steps) {
            setStatCounts(prevCounts => {
              const newCounts = [...prevCounts];
              newCounts[index] = Math.floor(stepValue * currentStep);
              return newCounts;
            });
          } else {
            setStatCounts(prevCounts => {
              const newCounts = [...prevCounts];
              newCounts[index] = numericValue;
              return newCounts;
            });
            clearInterval(interval);
          }
        }, duration / steps);
      });
    }
  }, [isStatsVisible, stats]);

  return (
    <section ref={statsRef} className="relative -mt-3 sm:-mt-10 md:-mt-12 lg:-mt-16 px-4 sm:px-6 lg:px-8 pb-12 z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const suffix = stat.number.replace(/[0-9]/g, '');
            return (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-teal-700 mb-1 sm:mb-2 group-hover:text-teal-600 transition-colors">
                  {statCounts[index]}{suffix}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
