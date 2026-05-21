'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ faqs }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Combine all FAQs into a single array
  const allFaqs = [
    ...faqs.weightManagement.map(faq => ({ ...faq, category: 'Weight Management' })),
    ...faqs.skinCare.map(faq => ({ ...faq, category: 'Skin Care' }))
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Teal shadow — top left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      
      {/* Teal shadow — bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      
      {/* Decorative SVG curves — top right */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none opacity-40">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="3" />
        </svg>
      </div>
      
      {/* Decorative SVG curves — bottom left */}
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none opacity-40 rotate-180">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="3" />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our treatments and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {allFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                    openFaqIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
