'use client';

import Image from 'next/image';
import { ClipboardList, FlaskConical, Stethoscope, ShieldCheck } from 'lucide-react';

export default function HealthPriorityBanner({ 
  id,
  imageSrc = "/Images/doctor-professional.jpg",
  bgColor = "bg-teal-500"
}) {
  const facilities = [
    { 
      icon: ClipboardList, 
      title: "Understand Your Health",
      description: "We review your lifestyle, goals, and current health to get a complete picture."
    },
    { 
      icon: FlaskConical, 
      title: "Check Your Baseline",
      description: "We analyze important markers like thyroid, metabolism, and organ function."
    },
    { 
      icon: Stethoscope, 
      title: "Identify Risks Early",
      description: "We look for any possible side effects or existing conditions before starting treatment."
    }, 
    { 
      icon: ShieldCheck, 
      title: "Get Safe, Personalized Guidance",
      description: "Our doctors guide you with a plan that is right for your body and keeps you safe."
    }
  ];

  return (
    <section id={id} className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Colored shadow backgrounds — diagonal */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      
      {/* Additional decorative corner circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-teal-500 to-emerald-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-300 rounded-full opacity-10 blur-2xl"></div>
      </div>
      
      {/* Diagonal stroke SVG — top right */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-80 h-32 sm:h-48 md:h-56 lg:h-64 xl:h-80 pointer-events-none opacity-30 z-0">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#D4AF37" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#D4AF37" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#D4AF37" strokeWidth="3" />
        </svg>
      </div>

      {/* Diagonal stroke SVG — bottom left */}
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-80 h-32 sm:h-48 md:h-56 lg:h-64 xl:h-80 pointer-events-none opacity-30 rotate-180 z-0">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#D4AF37" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#D4AF37" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#D4AF37" strokeWidth="3" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`relative ${bgColor} rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl`}>
          
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-12 h-12 sm:w-16 sm:h-16 opacity-20">
            <div className="w-full h-full rounded-full border-4 border-white"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
          </div>
          
          <div className="absolute top-1/4 right-8 sm:right-12 opacity-20">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"></div>
            </div>
          </div>

          <div className="absolute bottom-20 right-8 sm:right-16 opacity-20">
            <div className="flex gap-1">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="absolute top-1/3 left-12 sm:left-20 opacity-20 hidden sm:block">
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <path d="M20 0 L20 60 M10 20 Q20 15 30 20 M10 40 Q20 35 30 40" stroke="white" strokeWidth="2"/>
            </svg>
          </div>

          <div className="absolute bottom-32 right-20 sm:right-32 opacity-30 hidden lg:block">
            <div className="relative">
              <div className="w-8 h-8 rotate-45 bg-white"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500"></div>
            </div>
          </div>

          {/* Mobile Layout - Facilities in teal, CTA in white */}
          <div className="md:hidden relative flex flex-col">
            {/* Heading in Teal Section */}
            <div className="px-6 pt-6 relative z-10">
              <p className="text-xs text-white/90 font-semibold mb-2 uppercase tracking-wide">
                Clinical Integrity First
              </p>
              <h2 className="text-xl sm:text-2xl font-black leading-tight mb-3" style={{ color: '#D4AF37' }}>
                THINKING IF{' '}
                <span className="drop-shadow-lg" style={{ color: '#D4AF37' }}>GLP-1 Therapy</span>{' '}
                Is SAFE FOR YOUR BODY?
              </h2>
              <p className="text-white/95 text-l sm:text-l leading-relaxed">
                    GLP-1 medications are revolutionary medical treatments, but they aren&apos;t cosmetic shortcuts. Because every body works differently, prescribing them without understanding your unique biological profile can carry serious health risks. At <span className="text-lotusGold font-bold">KayaKalp</span>, your safety comes first. Our medical team uses an advanced screening process to ensure these treatments are uniquely safe, effective, and tailored for you.
              </p>
            </div>

            {/* Doctor Image Section - Flexible height */}
            <div className="flex items-end justify-center relative z-10 -mb-4">
              <div className="relative w-full h-[350px] sm:h-[400px]">
                <Image
                  src={imageSrc}
                  alt="Healthcare Professional"
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, 100vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* White Content Section at Bottom */}
            <div className="relative bg-white rounded-tl-[60px] rounded-tr-[60px] px-6 py-6 shadow-xl z-30">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeoPP6akHMBZy1_Jk9rCGW6-L6VSQ-6sPwbol2eVRhWmVDIlA/viewform?usp=header', '_blank')}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg text-xs w-full cursor-pointer"
                >
                  CHECK ELIGIBILITY AT JUST ₹500 ONLY
                </button>
                
                {/* Facilities Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {facilities.map((facility, index) => {
                    const IconComponent = facility.icon;
                    return (
                      <div 
                        key={index} 
                        className="flex flex-col items-center text-center"
                      >
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                          <IconComponent className="w-5 h-5 text-teal-500" />
                        </div>
                        <h4 className="text-[10px] font-bold text-teal-500 mb-1 uppercase tracking-wide">
                          {facility.title}
                        </h4>
                        <p className="text-[9px] text-gray-600 leading-tight">
                          {facility.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Keep original design */}
          <div className="hidden md:flex relative flex-row items-end pb-8">
            
            {/* Doctor Image - Left Side */}
            <div className="absolute bottom-0 left-0 md:left-0 w-[320px] xl:w-[380px] h-[480px] z-10">
              <Image
                src={imageSrc}
                alt="Healthcare Professional"
                fill
                quality={100}
                sizes="(max-width: 1280px) 320px, 380px"
                className="object-contain object-bottom animate-fade-in-up"
                style={{ animationDelay: '200ms' }}
                priority
              />
            </div>

            {/* White Content Card */}
            <div className="relative w-[calc(100%-150px)] xl:w-[calc(100%-200px)] ml-auto">
              <div className="bg-white rounded-tl-[150px] pl-32 xl:pl-40 pr-12 xl:pr-16 py-12 xl:py-16 min-h-[600px] flex flex-col justify-between shadow-xl">
                
                {/* Top decorative star */}
                <div className="absolute top-12 right-16">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="100%" height="100%" viewBox="0 0 50 50" className="text-teal-400">
                        <path d="M25 0 L28 22 L50 25 L28 28 L25 50 L22 28 L0 25 L22 22 Z" fill="currentColor" opacity="0.3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Heading */}
                <div className="mb-4 md:mb-6 animate-fade-in-up">
                  <p className="text-xs md:text-sm text-gray-600 font-semibold mb-1 md:mb-2 uppercase tracking-wide">
                    Clinical Integrity First
                  </p>
                  <h2 className="text-lg md:text-xl xl:text-2xl font-black leading-tight mb-2 md:mb-3" style={{ color: '#D4AF37' }}>
                    THINKING IF{' '}
                    <span style={{ color: '#D4AF37' }}>GLP-1 MEDICATIONS</span>{' '}
                    ARE SAFE FOR YOUR BODY?
                  </h2>
                  <p className="text-xs md:text-sm xl:text-base max-w-xl leading-relaxed text-gray-600">
                    GLP-1 medications are revolutionary medical treatments, but they aren&apos;t cosmetic shortcuts. Because every body works differently, prescribing them without understanding your unique biological profile can carry serious health risks. At <span className="text-lotusGold font-bold">KayaKalp</span>, your safety comes first. Our medical team uses an advanced screening process to ensure these treatments are uniquely safe, effective, and tailored for you.
                  </p>
                </div>

                {/* Facilities Section - Desktop only */}
                <div className="mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="grid grid-cols-4 gap-2 md:gap-3 xl:gap-4">
                    {facilities.map((facility, index) => {
                      const IconComponent = facility.icon;
                      return (
                        <div 
                          key={index} 
                          className="flex flex-col items-center text-center animate-fade-in-up"
                          style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-teal-100 rounded-full flex items-center justify-center mb-1 md:mb-2">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 text-teal-500" />
                          </div>
                          <h4 className="text-[10px] md:text-xs xl:text-sm font-bold text-teal-500 mb-1">
                            {facility.title}
                          </h4>
                          <p className="text-[8px] md:text-[10px] xl:text-xs text-gray-600 leading-tight">
                            {facility.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="flex flex-col items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <button 
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeoPP6akHMBZy1_Jk9rCGW6-L6VSQ-6sPwbol2eVRhWmVDIlA/viewform?usp=header', '_blank')}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-5 md:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xs md:text-sm flex items-center justify-center cursor-pointer"
                  >
                    CHECK ELIGIBILITY AT JUST ₹400 ONLY
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
