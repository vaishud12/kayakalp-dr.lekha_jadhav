'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection({ testimonials }) {
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === testimonialsRef.current) {
            if (entry.isIntersecting) {
              setIsTestimonialsVisible(true);
            } else {
              setIsTestimonialsVisible(false);
            }
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const testimonialsEl = testimonialsRef.current;
    if (testimonialsEl) observer.observe(testimonialsEl);

    return () => {
      if (testimonialsEl) observer.unobserve(testimonialsEl);
    };
  }, []);

  return (
    <section 
      ref={testimonialsRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ease-out ${
          isTestimonialsVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-90'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Real results from real patients. See how we&apos;ve helped transform lives.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`group border-none shadow-md hover:shadow-2xl transition-all duration-1000 ease-out relative bg-gradient-to-br from-white to-teal-50/30 flex-shrink-0 w-full md:w-96 snap-center ${
                isTestimonialsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: isTestimonialsVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Decorative Leaf Left */}
              <div className="absolute -left-4 top-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300 leaf-decoration">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C15 10 10 15 8 20C6 25 8 30 12 33C16 36 22 36 26 33C30 30 32 25 30 20C28 15 23 10 20 5Z" fill="#14b8a6" opacity="0.5"/>
                </svg>
              </div>

              {/* Decorative Leaf Right */}
              <div className="absolute -right-4 bottom-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300 transform rotate-180 leaf-decoration" style={{ animationDelay: '1s' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C15 10 10 15 8 20C6 25 8 30 12 33C16 36 22 36 26 33C30 30 32 25 30 20C28 15 23 10 20 5Z" fill="#0d9488" opacity="0.5"/>
                </svg>
              </div>

              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-200/20 via-transparent to-yellow-200/20 group-hover:from-teal-300/40 group-hover:to-yellow-300/40 transition-all duration-500"></div>
              
              <CardContent className="p-6 pt-10 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...new Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</div>
                  <div className="text-sm text-gray-500">{testimonial.treatment} • {testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 italic">
          *Individual results may vary. Testimonials are from real patients but outcomes depend on various factors.
        </p>
      </div>
    </section>
  );
}
