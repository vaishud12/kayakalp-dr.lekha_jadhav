"use client";

import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "DR. LEKHA JADHAV",
    specialty: "MBBS, FAM, PGDCC",
    tagline: "Founder and Medical Director of KayaKalp",
    bio: "Dr. Lekha Jadhav leads and personalizes the GLP-1 transformation programs at KayaKalp by combining medical guidance with continuous patient support. She helps patients navigate their weight loss journey through customized treatment planning, lifestyle correction, progress monitoring, and management of skin, hair, and wellness concerns that can arise during rapid weight loss. Her approach focuses on achieving sustainable results under proper medical supervision.",
    image: "/Images/priority.jpg",
  },
  {
    id: 2,
    name: "DR. NINAD BHOSALE",
    specialty: "MBBS, M.D. (Medicine), I.D.C.C.M",
    tagline: "Panel Consultant – Internal Medicine & Critical Care",
    bio: "Dr. Ninad Bhosale provides expert medical supervision for GLP-1 based weight management programs. With his background in internal medicine, diabetology, and critical care, he helps monitor metabolic health, manage medication safety, and ensure patients achieve sustainable weight loss with proper clinical oversight.",
    image: "/Images/dr_ninand_bhosale.jpg",
  },
  {
    id: 3,
    name: "DR. SANJIV JADHAV",
    specialty: "MBBS, DGO",
    tagline: "Senior Consultant – Obstetrics & Gynecology",
    bio: "Dr. Sanjiv Jadhav brings over 30 years of experience in women’s health and gynecology to the Kayakalp transformation team. He helps monitor hormonal health, PCOS-related concerns, menopause-related changes, and overall wellness in women undergoing GLP-1 based weight management programs.",
    image: "/Images/dr_sanjiv_jadhav.jpg",
  },
  {
    id: 4,
    name: "DR. SHRADDHA JADHAV",
    specialty: "BAMS",
    tagline: "Ayurvedic Consultant & Nutrition Specialist",
    bio: "Dr. Shraddha Jadhav plays an important role in supporting patients through the nutritional and lifestyle aspects of their transformation journey. With her background in Ayurveda and nutrition, she helps create practical, sustainable meal plans that work alongside GLP-1 based treatments while supporting digestion, energy levels, metabolism, and overall wellness.",
    image: "/Images/dr_shraddha_jadhav.jpg",
  },
];

export default function OurDoctors({ id }) {
  return (
    <section id={id} className="relative bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/20 overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

      {/* Teal shadow — top left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      
      {/* Teal shadow — bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>

      {/* Large decorative circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
      
      {/* Additional glowing orbs */}
      <div className="absolute top-40 left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-32 w-56 h-56 bg-cyan-400/12 rounded-full blur-3xl"></div>
      <div className="absolute top-60 right-1/4 w-40 h-40 bg-teal-300/8 rounded-full blur-2xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, rgba(20,184,166,0.5) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(20,184,166,0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Decorative SVG curves — top right */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none opacity-40">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="3" />
          
        </svg>
      </div>
      
      {/* Decorative SVG curves — bottom left */}
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none opacity-15 rotate-180">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C50 40, 80 100, 0 150" stroke="#06B6D4" strokeWidth="2" />
          <path d="M40 0 C80 50, 120 120, 40 180" stroke="#06B6D4" strokeWidth="2" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      </div>
      

      {/* Dot grid — bottom left */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-4 sm:left-6 lg:left-8 grid grid-cols-5 gap-[6px] opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={`decorative-dot-${i}`} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(20,184,166,0.5)]" />
        ))}
      </div>
      

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
            MEET OUR EXPERTS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 drop-shadow-[0_0_6px_rgba(20,184,166,0.2)]">
            We are always here to listen and understand
          </p>
        </div>

        {/* Four Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-10 xl:gap-12">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ doctor }) {
  return (
    <div className="group relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-full mx-auto pt-20 sm:pt-24 md:pt-20 lg:pt-24 xl:pt-28 pl-0">
      
      {/* Doctor photo — positioned to overflow above card as circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-[0_10px_40px_rgba(20,184,166,0.4)] ring-4 ring-white/30 transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(20,184,166,0.7),0_0_40px_rgba(94,234,212,0.5)] group-hover:ring-teal-300/70 z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-200">
          {doctor.image ? (
            <Image 
              src={doctor.image} 
              alt={doctor.name} 
              fill
              unoptimized
              className="object-cover object-[center_25%]"
            />
          ) : (
            /* Placeholder silhouette */
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 80 110" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-16 sm:w-20 opacity-70">
                <ellipse cx="40" cy="30" rx="18" ry="20" />
                <path d="M8 110 Q8 65 40 62 Q72 65 72 110Z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Teal card body */}
      <div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_40px_rgba(20,184,166,0.15)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(20,184,166,0.4),0_0_60px_rgba(94,234,212,0.3),0_0_100px_rgba(6,182,212,0.2)] group-hover:scale-[1.02]">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl shadow-[0_0_60px_rgba(45,212,191,0.4)]"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl shadow-[0_0_50px_rgba(34,211,238,0.4)]"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-400/15 rounded-full blur-2xl"></div>
        
        {/* Accent border */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-300 via-cyan-300 to-teal-300 opacity-70 shadow-[0_0_15px_rgba(94,234,212,0.6)]"></div>
        
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent shadow-[0_0_10px_rgba(94,234,212,0.5)]"></div>
        
        {/* Content */}
        <div className="relative pt-24 sm:pt-28 md:pt-24 lg:pt-28 xl:pt-32 pb-5 px-5 sm:pb-6 sm:px-6 md:pb-5 md:px-5 lg:pb-6 lg:px-6 xl:pb-8 xl:px-8">
          {/* All content centered */}
          <div className="text-center">
            
            <h3 className="!text-lotusGold font-bold text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl leading-tight mb-1.5 sm:mb-2 tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]">
              {doctor.name}
            </h3>
            
            <p className="text-teal-50 text-[10px] sm:text-xs md:text-[10px] lg:text-xs xl:text-sm font-medium mb-1.5 sm:mb-2 drop-shadow-[0_0_8px_rgba(94,234,212,0.4)]">
              {doctor.specialty}
            </p>
            
            <p className="text-teal-100 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium mb-3 sm:mb-4 italic">
              {doctor.tagline}
            </p>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-3 sm:mb-4 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
            
            <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              {doctor.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}