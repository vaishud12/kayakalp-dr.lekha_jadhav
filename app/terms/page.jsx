import React from 'react';
import Link from 'next/link';
import { FileText, AlertCircle, Scale, CreditCard, Calendar, XCircle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing our website, you agree to these terms",
        "These terms apply to all visitors and users",
        "We reserve the right to modify terms at any time",
        "Continued use constitutes acceptance of changes",
        "Users must be 18+ or have guardian consent"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Policies",
      content: [
        "Appointments must be scheduled in advance",
        "Cancellations require 24-hour notice minimum",
        "Late arrivals may result in shortened sessions",
        "Repeated no-shows may affect future bookings",
        "Emergency cancellations will be considered"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Terms",
      content: [
        "Payment is due at the time of service",
        "We accept cash, cards, and digital payments",
        "Prices are subject to change with notice",
        "Refunds processed within 7-10 business days",
        "Treatment packages are non-transferable"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Medical Services Disclaimer",
      content: [
        "Services are provided by licensed professionals",
        "Individual results may vary by patient",
        "Full medical history disclosure is required",
        "Follow all post-treatment care instructions",
        "Report adverse reactions immediately"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "We are not liable for indirect or consequential damages",
        "Services provided to the best of professional ability",
        "Not responsible for outcomes beyond our control",
        "Website information is for general guidance only",
        "Users assume responsibility for their decisions"
      ]
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: [
        "No unauthorized use of website content",
        "No false or misleading information in bookings",
        "No harassment of staff or other patients",
        "No illegal or unethical conduct on premises",
        "Violation may result in service termination"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-x-hidden">
      {/* Teal shadows and decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Teal shadow — top left */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
        
        {/* Teal shadow — bottom right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
        
        {/* Decorative corner circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-teal-500 to-emerald-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-300 rounded-full opacity-10 blur-2xl"></div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white relative shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 via-transparent to-amber-500/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold !text-lotusGold drop-shadow-lg mb-4">
            TERMS OF SERVICE
          </h2>
          <p className="text-lg sm:text-xl text-teal-50 max-w-3xl mb-3">
            Please read these terms carefully before using our services or website.
          </p>
          <p className="text-sm text-teal-100">Last Updated: May 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Decorative SVG curves — top right of cards section */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 opacity-30 z-0">
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="4" />
            <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="4" />
            <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="4" />
          </svg>
        </div>
        
        {/* Decorative SVG curves — bottom left of cards section */}
        <div className="absolute bottom-20 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 opacity-30 rotate-180 z-0">
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="4" />
            <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="4" />
            <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="4" />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 relative overflow-hidden group"
              style={{ boxShadow: '8px 8px 20px rgba(217, 119, 6, 0.15), -4px -4px 12px rgba(20, 184, 166, 0.1)' }}
            >
              {/* Diagonal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-y-3"></div>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white shadow-md">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">{section.title}</h2>
              </div>
              <ul className="space-y-2 relative z-10">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Important Notice</h3>
              <p className="text-gray-700 text-sm">
                These terms constitute a legal agreement between you and Dr. Lekha Jadhav&apos;s clinic. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-8 shadow-md border border-teal-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About Our Terms?</h3>
          <p className="text-gray-700 mb-4">
            If you have any questions regarding our terms of service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919876543210"
              className="inline-block bg-teal-600 !text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-center font-semibold shadow-md"
            >
              Call Us
            </a>
            <a
              href="mailto:contact@drlekhajadhav.com"
              className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-semibold shadow-md border border-teal-600"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of local courts.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
