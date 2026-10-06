"use client";

import { useState } from "react";
import Image from "next/image";
const packages = [
  {
    id: 1,
    name: "90-Day Metabolic & Skin Reset",
    tagline: "Flagship Starter Plan",
    badge: "FLAGSHIP",
    description:
      "✓ Phase 1 · Months 1 & 2: Intensive transformation — personalized clinical high-protein diet, weekly live consults, baseline lab & hormonal review, active skin/hair prescriptions.\n✓ Phase 2 · Month 3: Clinical stabilization — self-sustainable nutrition, dining-out strategies & habit lock-in with physician monitoring.\n✓ Support: Comprehensive deficiency assessment, supplement guidance & 24/7 WhatsApp support across all 90 days.",
    price: "₹16,500",
    priceLabel: "3-Month Program",
    priceNote: "Save ₹3,000 · Value ₹19,500",
    image: "/Images/transformation elite.png",
    alt: "90-Day Metabolic and Skin Reset",
  },
  {
    id: 2,
    name: "Total Transformation",
    tagline: "Complete medical oversight",
    description:
      "✓ What's Included: Personalized clinical diet plan, full doctor supervision, blood work review, acne/hairfall prescription management & gynecological/hormone alignment.\n✓ Calls & Charts: 1 live doctor consultation every week (4 calls/mo) + diet charts updated weekly.\n✓ Support: Clinical supplement evaluation & 24/7 WhatsApp support throughout the plan.",
    price: "₹7,500",
    priceLabel: "1 Month",
    price3mo: "₹19,500",
    price3moLabel: "3 Months",
    priceNote: "Save ₹3,000 on 3-month enrollment",
    image: "/Images/clicnical.png",
    alt: "Total Transformation",
  },
  {
    id: 3,
    name: "Clinical Supervision",
    tagline: "Physician-monitored accountability",
    description:
      "✓ What's Included: Physician monitoring of weight trends, blood test biomarkers & vital parameters; guidance on supplement tapering, medication adjustments & metabolic stability.\n✓ Calls: 1 live consultation every week (4 calls per month).\n✓ Support: Regular supplement review & 24/7 WhatsApp support throughout the plan.",
    price: "₹4,500",
    priceLabel: "1 Month",
    price3mo: "₹11,500",
    price3moLabel: "3 Months",
    priceNote: "Save ₹2,000 on 3-month enrollment",
    image: "/Images/priority.jpg",
    alt: "Clinical Supervision",
  },
  {
    id: 4,
    name: "Diet Plan Only",
    tagline: "Structured nutrition, no prescriptions",
    description:
      "✓ What's Included: Customized high-protein, balanced Indian diet plan with practical food swaps for travel, social events & dining out; portion and calorie guidance.\n✓ Calls & Charts: 1 live call every 2 weeks (2 calls/mo) + a fresh 15-day meal plan every 15 days.\n✓ Support: Essential vitamin/mineral supplement guidance & 24/7 WhatsApp support throughout the plan.",
    price: "₹4,000",
    priceLabel: "1 Month",
    price3mo: "₹10,500",
    price3moLabel: "3 Months",
    priceNote: "Save ₹1,500 on 3-month enrollment",
    image: "/Images/nutrition.png",
    alt: "Diet Plan Only",
  },
];


export default function AvailPrograms({ id }) {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-animate {
          opacity: 0;
          animation: cardIn 0.6s ease forwards;
        }
        .plans-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .plans-scroll::-webkit-scrollbar {
          display: none;
        }
        .teal-spark {
          position: absolute;
          top: 8%;
          width: 90px;
          height: 90px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.65), rgba(45, 212, 191, 0.08));
          box-shadow: 0 0 35px 14px rgba(20, 184, 166, 0.4);
          filter: blur(2px);
          transform: rotate(25deg);
          opacity: 0;
          pointer-events: none;
          z-index: 20;
          animation: sparkSweep 3s ease-in-out infinite;
        }
        @keyframes sparkSweep {
          0%   { left: -30%; opacity: 0; transform: rotate(25deg) translateY(0); }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { left: 120%; opacity: 0; transform: rotate(25deg) translateY(-15px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .teal-spark { display: none; }
        }
      `}</style>

      <section id={id} className="w-full bg-gradient-to-br from-gray-50 via-white to-teal-50 py-8 sm:py-10 lg:py-12 px-4 flex flex-col items-center overflow-hidden">

        {/* Section heading */}
       <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                OUR PLANS
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up">
                Tailored weight loss by our expert team: MD Internal Medicine, Gynecologist, Skin and Hair Specialist, and Ayurvedic Consultant/Nutritionist
            </p>
          </div>

        {/* Outer container */}
        <div className="relative w-full max-w-7xl pb-15">

          {/* Curved teal shape */}
          <div
  className="absolute left-0 right-0 bottom-0 z-0 bg-gradient-to-r from-teal-500 to-teal-600"
  style={{
    height: "55%",
    borderRadius: "0 0 40% 40% / 0 0 20% 20%",
  }}
/>

          {/* Cards row — single line, horizontally scrollable */}
          <div className="plans-scroll relative z-10 flex flex-nowrap items-stretch gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-6 lg:px-4 pt-3 pb-4 snap-x snap-mandatory snap-start scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHovered(pkg.id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  card-animate snap-start shrink-0 relative
                  w-full
                  sm:w-[calc(50%_-_0.625rem)]
                  lg:w-[calc(25%_-_0.9375rem)]
                  rounded-lg sm:rounded-xl overflow-hidden bg-white
                  transition-all duration-300
                  ${hovered === pkg.id
                    ? "sm:-translate-y-2 shadow-[0_20px_50px_rgba(20,184,166,0.25)]"
                    : "shadow-lg hover:shadow-xl"}
                `}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Teal light square sweeping across the card */}
                <span
                  className="teal-spark"
                  style={{ animationDelay: `${index * 0.7}s` }}
                  aria-hidden="true"
                />
                {/* Image with overlay */}
                <div className="relative h-[150px] sm:h-[160px] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />

                  {/* Centered name + tagline + price */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-3">
                    {/* Flagship badge */}
                    {pkg.badge && (
                      <span className="mb-1 bg-amber-400 text-gray-900 text-[9px] sm:text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full drop-shadow-md">
                        {pkg.badge}
                      </span>
                    )}

                    {/* Package Name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 tracking-wide drop-shadow-lg" style={{ color: '#ffffff' }}>
                      {pkg.name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-white text-[10px] sm:text-xs font-medium mb-2 opacity-90 drop-shadow-md">
                      {pkg.tagline}
                    </p>
                    
                    {/* Price */}
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-amber-400 text-xl sm:text-l md:text-md font-black leading-none drop-shadow-lg">
                        {pkg.price}
                      </span>
                      <span className="text-white text-[9px] sm:text-[10px] font-semibold mt-1 opacity-90 drop-shadow-md">
                        {pkg.priceLabel}
                      </span>
                      {pkg.price3mo && (
                        <span className="text-white text-[9px] sm:text-[10px] font-semibold mt-1 opacity-90 drop-shadow-md">
                          {pkg.price3mo} · {pkg.price3moLabel}
                        </span>
                      )}
                      {pkg.priceNote && (
                        <span className="text-teal-200 text-[8px] sm:text-[9px] font-bold mt-1 drop-shadow-md">
                          {pkg.priceNote}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Feature list + button */}
                <div className="bg-gradient-to-b from-gray-50 to-white flex flex-col items-center px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-5">
                  
                  {/* Description */}
                  <div className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontStyle: 'normal' }}>
                    {pkg.description.split('\n').map((line, idx) => {
                      const colonIndex = line.indexOf(':');
                      if (colonIndex !== -1) {
                        const beforeColon = line.substring(0, colonIndex);
                        const afterColon = line.substring(colonIndex);
                        return (
                          <p key={`${pkg.id}-line-${idx}`} className="mb-2" style={{ fontStyle: 'normal' }}>
                            <span className="font-bold" style={{ fontStyle: 'normal' }}>{beforeColon}</span>
                            <span style={{ fontStyle: 'normal' }}>{afterColon}</span>
                          </p>
                        );
                      }
                      return <p key={`${pkg.id}-line-${idx}`} className="mb-2" style={{ fontStyle: 'normal' }}>{line}</p>;
                    })}
                  </div>

                  <button
                    onClick={() => window.open('https://forms.gle/KFwguS13cwEbrSFn8', '_blank', 'noopener,noreferrer')}
                    className="
                      bg-gradient-to-r from-teal-500 to-teal-600 
                      hover:from-teal-600 hover:to-teal-700 
                      active:scale-95
                      text-white font-bold text-xs sm:text-sm tracking-wide
                      px-6 sm:px-8 py-2 sm:py-2.5 rounded-full
                      transition-all duration-300
                      shadow-lg hover:shadow-xl
                      cursor-pointer
                    "
                  >
                    Request a consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
        <p className="text-center text-sm text-gray-500 mt-8 italic">
          *Once submitted, a clinic representative will contact you within [24 hours / 1 business day] to confirm your details and coordinate your appointment slots. No medical advice is provided over the phone.
        </p>
      </section>
    </>
  );
}