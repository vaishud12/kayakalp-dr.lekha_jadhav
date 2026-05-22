import React from 'react';
import Link from 'next/link';
import { Shield, Database, Users, Lock, Eye, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email, phone number)",
        "Medical history and health-related information",
        "Appointment and consultation records",
        "Payment and billing information",
        "Website usage data and cookies"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Providing medical consultations and treatments",
        "Scheduling and managing appointments",
        "Communicating treatment plans and follow-ups",
        "Processing payments and maintaining records",
        "Improving our services and website experience"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection & Security",
      content: [
        "We use industry-standard encryption for data transmission",
        "Secure servers with restricted access for data storage",
        "Regular security audits and compliance reviews",
        "NMC-compliant medical record management",
        "Confidential handling of all patient information"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Third-Party Disclosure",
      content: [
        "We do NOT sell your personal information to third parties",
        "May share with healthcare providers for treatment purposes",
        "Comply with legal requirements when mandated by law",
        "Use trusted service providers bound by confidentiality",
        "Analytics services with anonymized data only"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access your personal and medical information",
        "Request corrections to inaccurate data",
        "Request a copy of your data in portable format"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Cookies & Tracking",
      content: [
        "We use cookies to enhance user experience",
        "Analytics cookies to understand website usage",
        "Essential cookies for website functionality",
        "You can disable cookies in your browser settings",
        "Some features may not work without cookies"
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !text-lotusGold drop-shadow-lg mb-4">Privacy Policy</h1>
          <p className="text-lg sm:text-xl text-teal-50 max-w-3xl mb-3">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
                    <span className="text-amber-500 mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-8 shadow-md border border-teal-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About Privacy?</h3>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about our privacy practices, please don&apos;t hesitate to contact us.
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
          This privacy policy is subject to change. We will notify you of any significant updates.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
