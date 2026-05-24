"use client";

import { useState } from "react";
import Image from "next/image";
const packages = [
  {
    id: 1,
    name: "Clinical Expert Supervision",
    tagline: "Safe GLP 1 medical backing",
    description: "✓  Unlimited Prescriptions: Direct access to our 4-doctor team to quickly manage side effects and clear any hurdles in your journey \n✓ Weekly Progress Calls: A quick 20-minute chat with your doctor to crush side effects, review your numbers, and keep you on track. ",
    price: "₹3,000",
    image: "/Images/clicnical.png",
    alt: "Clinical Expert Supervision",
  },
  {
    id: 2,
    name: "Precision Nutrition Plan",
    tagline: "Custom GLP 1 nutrition mapping",
    description: "✓ Smart Weekly Meal Plans: Custom food adjusted weekly to match your shifting GLP-1 appetite and prevent energy crashes.\n✓ Expert Dietitian Support: Weekly check-ins with our nutritionist to ensure you lose pure fat, not your hard-earned muscle.",
    price: "₹3,000",
    image: "/Images/nutrition.png",
    alt: "Precision Nutrition Plan",
  },
  {
    id: 3,
    name: "The Total Transformation Elite",
    tagline: "The \"All-Inclusive\" Concierge.",
    description: "✓ The 360° Board Track: Complete access to both Doctor & Nutrition plans with direct, priority SOS messaging anytime.\n✓ Multi-Specialty Care: Built-in expert care from our MD Internal Medicine, Gynecologist, and Hair/Skin specialists to protect your hormones and aesthetics as you lose weight.",
    price: "₹6,000",
    image: "/Images/transformation elite.png",
    alt: "The Total Transformation Elite",
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
        <div className="relative w-full max-w-5xl pb-15">

          {/* Curved teal shape */}
          <div
  className="absolute left-0 right-0 bottom-0 z-0 bg-gradient-to-r from-teal-500 to-teal-600"
  style={{
    height: "55%",
    borderRadius: "0 0 40% 40% / 0 0 20% 20%",
  }}
/>

          {/* Cards row */}
          <div className="relative z-10 flex flex-wrap justify-center items-stretch gap-4 sm:gap-5 px-2 sm:px-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHovered(pkg.id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  card-animate
                  w-full max-w-[280px] sm:max-w-[300px]
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
                {/* Image with overlay */}
                <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
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
                    {/* Package Name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 tracking-wide drop-shadow-lg" style={{ color: '#ffffff' }}>
                      {pkg.name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-white text-[10px] sm:text-xs font-medium mb-2 opacity-90 drop-shadow-md">
                      {pkg.tagline}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-end leading-none">
                      <span className="text-amber-400 text-xl sm:text-l md:text-md font-black leading-none mx-1 drop-shadow-lg">
                        {pkg.price}
                      </span>
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