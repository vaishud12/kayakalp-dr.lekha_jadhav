'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { X, ArrowRight } from 'lucide-react';

// Cute cartoon chat-bubble buddy used as the chatbot icon
function KayaCartoon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      {/* Chat bubble body */}
      <path
        d="M14 6h36c6.6 0 12 5.4 12 12v16c0 6.6-5.4 12-12 12H30L16 58V46h-2c-6.6 0-12-5.4-12-12V18C2 11.4 7.4 6 14 6z"
        fill="#ffffff"
        stroke="#0f766e"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <circle cx="23" cy="25" r="5" fill="#134e4a" />
      <circle cx="43" cy="25" r="5" fill="#134e4a" />
      <circle cx="25" cy="23" r="1.6" fill="#ffffff" />
      <circle cx="45" cy="23" r="1.6" fill="#ffffff" />
      {/* Smile */}
      <path
        d="M24 34c2.8 4 6.2 6 9 6s6.2-2 9-6"
        stroke="#134e4a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Rosy cheeks */}
      <circle cx="14" cy="32" r="3.2" fill="#f9a8d4" opacity="0.7" />
      <circle cx="52" cy="32" r="3.2" fill="#f9a8d4" opacity="0.7" />
      {/* Sparkle */}
      <path d="M56 8l1.4 3.1L60.5 12.5l-3.1 1.4L56 17l-1.4-3.1L51.5 12.5l3.1-1.4L56 8z" fill="#fbbf24" />
    </svg>
  );
}

// Structured bot answers — each answer is intro / heading + bullet lines (never one long paragraph)
const chatAnswers = {
  greeting: {
    intro: "Hello! I'm Kaya, your assistant at KayaKalp by Dr. Lekha Jadhav. Ask me anything about our programs, pricing, doctors, timings or appointments.",
    sections: [],
    chipTitle: 'Pick a topic to get started',
    footer: 'Tap a topic below, or just type your question.',
  },
  programs: {
    intro: 'We run 4 clinical programs:',
    sections: [
      {
        heading: '90-Day Metabolic & Skin Reset (Flagship)',
        lines: [
          '₹16,500 · 3 months (Save ₹3,000 | Value ₹19,500)',
          '2 months intensive transformation + 1 month stabilization',
          'Weekly live consults, diet charts, skin/hair prescriptions',
        ],
      },
      {
        heading: '1. Total Transformation',
        lines: [
          '₹7,500/month · ₹19,500/3 months (Save ₹3,000)',
          'Full medical supervision + blood work review',
          'Acne/hairfall prescriptions & hormone alignment',
        ],
      },
      {
        heading: '2. Clinical Supervision',
        lines: [
          '₹4,500/month · ₹11,500/3 months (Save ₹2,000)',
          'Physician monitoring of labs, vitals & medications',
          'Ideal if you manage meals yourself',
        ],
      },
      {
        heading: '3. Diet Plan Only',
        lines: [
          '₹4,000/month · ₹10,500/3 months (Save ₹1,500)',
          'Custom high-protein Indian diet, fresh 15-day charts',
          'No prescriptions or doctor supervision',
        ],
      },
    ],
    footer: 'All plans include 24/7 WhatsApp support & supplement guidance.',
  },
  pricing: {
    intro: 'Current program pricing:',
    sections: [
      {
        heading: 'Prices',
        lines: [
          '90-Day Reset: ₹16,500 flat (3 months)',
          'Total Transformation: ₹7,500/mo | ₹19,500/3 mo',
          'Clinical Supervision: ₹4,500/mo | ₹11,500/3 mo',
          'Diet Plan Only: ₹4,000/mo | ₹10,500/3 mo',
        ],
      },
    ],
    footer: '3-month upfront enrollment saves ₹1,500–₹3,000.',
  },
  flagship: {
    intro: 'Our signature starter plan:',
    sections: [
      {
        heading: '90-Day Metabolic & Skin Reset — ₹16,500',
        lines: [
          'Phase 1 · Months 1 & 2: Intensive transformation',
          'Phase 2 · Month 3: Clinical stabilization & habit lock-in',
          '1 live consultation every week (4 calls/mo)',
          'Weekly updated diet plans',
          'Lab review, hormonal alignment, skin/hair prescriptions',
        ],
      },
      {
        heading: 'Support',
        lines: [
          'Comprehensive deficiency assessment & supplements',
          '24/7 WhatsApp support across all 90 days',
        ],
      },
    ],
    footer: 'Save ₹3,000 versus the ₹19,500 value.',
  },
  recommend: {
    intro: 'It depends on your goals — here is the quick match:',
    sections: [
      {
        heading: 'Pick 90-Day Reset (₹16,500) if you want',
        lines: [
          'The all-in-one flagship start',
          'Fat loss + acne/hairfall care together',
          'Best value for a complete 90-day overhaul',
        ],
      },
      {
        heading: 'Pick Total Transformation (₹7,500/mo) if you need',
        lines: [
          'Complete medical oversight for multiple goals',
          'Prescriptions + weekly doctor calls (4/mo)',
        ],
      },
      {
        heading: 'Pick Clinical Supervision (₹4,500/mo) if you',
        lines: [
          'Already manage your meals yourself',
          'Only need lab, vitals & medication monitoring',
        ],
      },
      {
        heading: 'Pick Diet Plan Only (₹4,000/mo) if you want',
        lines: [
          'Structured nutrition without any medication',
          'A budget-friendly plan with 15-day charts',
        ],
      },
    ],
    footer: 'Still unsure? Tap "Book" — we will guide you after a consultation.',
  },
  dietPlan: {
    intro: 'Yes — we have a Diet Plan Only program:',
    sections: [
      {
        heading: 'Diet Plan Only — ₹4,000/month',
        lines: [
          '₹10,500/3 months (Save ₹1,500)',
          'Customized high-protein, balanced Indian diet',
          'Fresh 15-day meal plan every 15 days',
          '1 live call every 2 weeks (2 calls/mo)',
          'Food swaps for travel, social events & dining out',
          'No prescriptions or doctor supervision',
        ],
      },
      {
        heading: 'Also included elsewhere',
        lines: [
          'Diet charts in every medical program',
          '24/7 WhatsApp support on all plans',
        ],
      },
    ],
    footer: 'Best for structured nutrition & habit building.',
  },
  weightLoss: {
    intro: 'Medically supervised weight management:',
    sections: [
      {
        heading: 'What we offer',
        lines: [
          'Metabolic health assessment & fat-loss programs',
          'GLP-1 therapies when medically appropriate',
          'Personalized high-protein nutrition plans',
          'Weekly monitoring & follow-ups',
        ],
      },
    ],
    footer: 'All plans are supervised by our medical panel.',
  },
  skinCare: {
    intro: 'Clinical aesthetics treatments:',
    sections: [
      {
        heading: 'Treatments',
        lines: [
          'Laser Hair Removal — long-term smooth skin',
          'Acne Treatment — medical-grade clearing',
          'Pigmentation Correction — even skin tone',
          'Pore Refinement & Texture care',
          'Bridal & Event Glow packages',
          'Hair Restoration — follicular solutions',
        ],
      },
    ],
    footer: 'All treatments are performed under medical supervision.',
  },
  services: {
    intro: 'We have two main specialties:',
    sections: [
      {
        heading: 'Metabolic Health & Weight Management',
        lines: [
          '4 clinical weight-loss programs (see "Programs")',
          'Metabolic health & insulin resistance care',
          'GLP-1 therapy when medically appropriate',
        ],
      },
      {
        heading: 'Skin & Haircare',
        lines: [
          'Acne, pigmentation & pore treatments',
          'Laser hair removal & bridal glow packages',
          'Hair restoration & hairfall prescriptions',
        ],
      },
    ],
    footer: 'Tap "Programs" for pricing details.',
  },
  doctors: {
    intro: 'Our multidisciplinary panel:',
    sections: [
      {
        heading: 'The team',
        lines: [
          'Dr. Lekha Jadhav — Dermatology & weight management',
          'Dr. Sanjiv Jadhav — Gynecology & hormonal health (30+ yrs)',
          'Dr. Ninand Bhosale — Internal medicine & metabolic health',
          'Dr. Shraddha Jadhav — Ayurveda & clinical nutrition',
        ],
      },
    ],
    footer: 'Every program is physician-supervised.',
  },
  location: {
    intro: 'You can find us at:',
    sections: [
      {
        heading: 'Clinic',
        lines: [
          'Shraddha Hospital, Kharadi',
          'Pune, Maharashtra 411014',
        ],
      },
    ],
    footer: 'Home consultations available across Pune.',
  },
  hours: {
    intro: 'Clinic timings:',
    sections: [
      {
        heading: 'Hours',
        lines: [
          'Monday – Saturday: 10:00 AM – 9:00 PM',
          'Sunday: by appointment only',
        ],
      },
    ],
  },
  booking: {
    intro: 'Happy to help you book a consultation:',
    sections: [
      {
        heading: 'Options',
        lines: [
          'Tap the "Book Appointment Now" button below',
          'Call +91 76663 20828',
          'WhatsApp 917666320828',
        ],
      },
    ],
    footer: 'No medical advice is provided over the phone.',
  },
  consultation: {
    intro: 'Your first consultation includes:',
    sections: [
      {
        heading: 'What to expect',
        lines: [
          'Comprehensive health assessment',
          'Discussion of your goals & concerns',
          'Personalized treatment recommendations',
          'Expected outcomes & timeline',
          'All your questions answered',
        ],
      },
    ],
    footer: 'This determines if our programs are right for you.',
  },
  safety: {
    intro: 'For your safety, dosages and diagnoses can only be given after an evaluation.',
    sections: [
      {
        heading: 'Next step',
        lines: ['Book a consultation with our medical panel'],
      },
    ],
  },
  default: {
    intro: "Sorry, I didn't quite get that.",
    sections: [
      {
        heading: 'Try one of these',
        lines: ['Programs & pricing', 'Which program suits me', 'Doctors & timings', 'Location & booking'],
      },
    ],
    footer: 'Tap a related topic below or type your question again.',
    chipTitle: 'Popular topics',
  },
};

// Predefined one-word quick questions
const quickReplies = [
  { label: 'Programs', key: 'programs' },
  { label: 'Pricing', key: 'pricing' },
  { label: 'Flagship', key: 'flagship' },
  { label: 'Advice', key: 'recommend' },
  { label: 'Diet', key: 'dietPlan' },
  { label: 'Doctors', key: 'doctors' },
  { label: 'Skin', key: 'skinCare' },
  { label: 'Weight', key: 'weightLoss' },
  { label: 'Location', key: 'location' },
  { label: 'Hours', key: 'hours' },
  { label: 'Book', key: 'booking' },
];

// Maps a keyword label back to its answer key
const labelKey = {
  Programs: 'programs',
  Pricing: 'pricing',
  Flagship: 'flagship',
  Advice: 'recommend',
  Diet: 'dietPlan',
  Doctors: 'doctors',
  Skin: 'skinCare',
  Weight: 'weightLoss',
  Services: 'services',
  Safety: 'safety',
  Location: 'location',
  Hours: 'hours',
  Consult: 'consultation',
  Book: 'booking',
};

// Related keywords shown under each answer for the user to select next
const followUpMap = {
  greeting: ['Programs', 'Pricing', 'Advice', 'Diet', 'Doctors', 'Location', 'Hours', 'Book'],
  programs: ['Pricing', 'Flagship', 'Advice', 'Diet', 'Book'],
  pricing: ['Programs', 'Flagship', 'Advice', 'Book'],
  flagship: ['Pricing', 'Programs', 'Advice', 'Book'],
  recommend: ['Pricing', 'Flagship', 'Diet', 'Book'],
  dietPlan: ['Pricing', 'Programs', 'Advice', 'Book'],
  weightLoss: ['Programs', 'Pricing', 'Safety', 'Advice', 'Book'],
  skinCare: ['Programs', 'Doctors', 'Consult', 'Book'],
  services: ['Programs', 'Pricing', 'Skin', 'Weight', 'Book'],
  doctors: ['Consult', 'Location', 'Hours', 'Book'],
  location: ['Hours', 'Book'],
  hours: ['Location', 'Book'],
  booking: ['Hours', 'Location'],
  consultation: ['Programs', 'Pricing', 'Advice', 'Book'],
  safety: ['Doctors', 'Consult', 'Book'],
  default: ['Programs', 'Pricing', 'Doctors', 'Book'],
};

const getFollowUps = (answerKey) =>
  (followUpMap[answerKey] || followUpMap.default).map((label) => ({
    label,
    key: labelKey[label],
  }));

// Keywords for matching typed queries to answers — specific rules first; scoring picks best match
const responseKeywords = [
  { keywords: ['hello', 'hi', 'hey', 'greeting', 'greetings', 'namaste', 'good morning', 'good evening', 'good afternoon', 'how are you', 'who are you', 'kaya', 'thanks', 'thank you', 'bye', 'welcome'], response: 'greeting' },
  { keywords: ['price', 'prices', 'pricing', 'cost', 'costs', 'fee', 'fees', 'charge', 'charges', 'rate', 'how much', 'much', 'rupees', 'rs', 'payment', 'pay', 'expensive', 'cheap', 'affordable', 'discount', 'emi', 'instalment', 'installment', 'refund', 'deposit'], response: 'pricing' },
  { keywords: ['flagship', 'reset', '90', '90-day', 'ninety', 'starter', 'signature', 'foundation', 'foundational', 'phase'], response: 'flagship' },
  { keywords: ['doctor', 'doctors', 'dr', 'lekha', 'jadhav', 'staff', 'team', 'panel', 'specialist', 'specialists', 'experience', 'qualification', 'who', 'profile', 'bio'], response: 'doctors' },
  { keywords: ['which', 'recommend', 'recommendation', 'suggest', 'suggestion', 'choose', 'choice', 'best', 'better', 'which one', 'right for me', 'perfect for me', 'confused', 'compare', 'comparison', 'difference', 'different', 'vs', 'eligibility', 'eligible', 'worth', 'start', 'begin', 'join'], response: 'recommend' },
  { keywords: ['diet plan', 'meal plan', 'food plan', 'nutrition plan', 'diet', 'meal', 'meals', 'nutrition', 'chart', 'charts', 'protein', 'eat', 'eating', 'food', 'dietitian', 'nutritionist'], response: 'dietPlan' },
  { keywords: ['program', 'programs', 'plan', 'plans', 'package', 'packages', 'option', 'options', 'available', 'include', 'includes', 'included', 'subscription', 'enrollment', 'enrol', 'join', 'month', 'monthly', 'extension'], response: 'programs' },
  { keywords: ['dose', 'doses', 'dosage', 'medication', 'medications', 'medicine', 'prescribe', 'prescription', 'mg', 'ml', 'tablet', 'pill', 'injection', 'inject', 'semaglutide', 'ozempic', 'mounjaro', 'tirzepatide', 'wegovy', 'saxenda', 'side effect', 'side-effect', 'symptom', 'safe', 'safety', 'allergy', 'allergic', 'steroid', 'antibiotic', 'vitamin'], response: 'safety' },
  { keywords: ['skin', 'acne', 'pimple', 'pimples', 'pigmentation', 'laser', 'hair', 'hairfall', 'hairloss', 'hair fall', 'hair loss', 'bride', 'bridal', 'wedding', 'event', 'glow', 'aesthetic', 'aesthetics', 'wrinkle', 'wrinkles', 'aging', 'ageing', 'tan', 'tanning', 'scar', 'scars', 'pore', 'pores', 'dandruff', 'beard', 'facial', 'bleach', 'mole', 'tattoo', 'dry skin', 'oily', 'texture', 'dermatologist', 'fairness', 'spots', 'underarm'], response: 'skinCare' },
  { keywords: ['weight', 'lose', 'loss', 'losing', 'fat', 'obesity', 'obese', 'metabolic', 'metabolism', 'glp', 'pcos', 'slim', 'slimming', 'bmi', 'calorie', 'calories', 'thyroid', 'sugar', 'diabetes', 'diabetic', 'insulin', 'cholesterol', 'bp', 'pressure', 'lifestyle', 'fitness', 'exercise', 'workout', 'gym', 'belly', 'tummy', 'hormone', 'hormonal'], response: 'weightLoss' },
  { keywords: ['book', 'booking', 'appointment', 'appointments', 'schedule', 'scheduling', 'slot', 'slots', 'visit', 'cancel', 'reschedule', 'whatsapp', 'register'], response: 'booking' },
  { keywords: ['location', 'where', 'address', 'clinic', 'hospital', 'direction', 'directions', 'map', 'kharadi', 'pune', 'reach', 'branch', 'office', 'situated', 'find'], response: 'location' },
  { keywords: ['hour', 'hours', 'time', 'timing', 'timings', 'open', 'opens', 'closed', 'close', 'when', 'sunday', 'saturday', 'monday', 'today'], response: 'hours' },
  { keywords: ['consult', 'consultation', 'consultations', 'first visit', 'initial', 'enquiry', 'enquire', 'discuss', 'meeting', 'meet'], response: 'consultation' },
  { keywords: ['service', 'services', 'offer', 'offers', 'provide', 'treatment', 'treatments', 'therapy', 'facilities'], response: 'services' },
];

function BotAnswer({ answer, followUps, onSelect, disabled }) {
  return (
    <div className="px-4 py-3 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 max-w-xs">
      {answer.intro && <p className="mb-2 text-sm leading-snug">{answer.intro}</p>}
      {answer.sections?.map((section, sIdx) => (
        <div key={sIdx} className="mb-2 last:mb-0">
          {section.heading && (
            <p className="font-bold text-teal-700 text-xs uppercase tracking-wide mb-1">
              {section.heading}
            </p>
          )}
          <ul className="space-y-1">
            {section.lines.map((line, lIdx) => (
              <li key={lIdx} className="flex gap-1.5 text-sm leading-snug">
                <span className="text-teal-500 font-bold">›</span>
                <span className="flex-1 break-words">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {answer.footer && (
        <p className="mt-2 pt-2 border-t border-teal-200 text-xs text-teal-600 leading-snug">
          {answer.footer}
        </p>
      )}
      {followUps?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-teal-200">
          <span className="w-full text-[10px] font-semibold uppercase tracking-wide text-teal-500 mb-0.5">
            {answer.chipTitle || 'Related topics'}
          </span>
          {followUps.map((reply) => (
            <button
              key={reply.label}
              onClick={() => onSelect(reply)}
              disabled={disabled}
              className={`px-2.5 py-1 rounded-full border border-teal-300 bg-white text-teal-700 text-[11px] font-semibold whitespace-nowrap transition-colors hover:bg-teal-100 hover:border-teal-400 ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {reply.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [{
    id: Date.now() + Math.random(),
    sender: 'bot',
    answer: chatAnswers.greeting,
    followUps: getFollowUps('greeting'),
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender: 'user' }]);
  };

  const addBotMessage = (answerKey) => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      sender: 'bot',
      answer: chatAnswers[answerKey] || chatAnswers.default,
      followUps: getFollowUps(answerKey),
    }]);
  };

  const respondWith = (answerKey, label) => {
    addUserMessage(label);
    setIsLoading(true);
    setTimeout(() => {
      addBotMessage(answerKey);
      setIsLoading(false);
    }, 600);
  };

  const handleQuickReply = (reply) => {
    if (isLoading) return;
    respondWith(reply.key, reply.label);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    addUserMessage(userMessage);
    setIsLoading(true);

    // Simulate thinking delay
    setTimeout(() => {
      addBotMessage(getBotResponse(userMessage));
      setIsLoading(false);
    }, 800);
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    const words = lowerMessage.split(/[^a-z0-9]+/).filter(Boolean);
    let bestResponse = 'default';
    let bestScore = 0;

    for (const rule of responseKeywords) {
      let score = 0;
      for (const keyword of rule.keywords) {
        if (keyword.includes(' ')) {
          // Multi-word phrase — must appear as-is, worth more
          if (lowerMessage.includes(keyword)) score += 2;
        } else if (
          words.some(
            (w) =>
              w === keyword ||
              w === `${keyword}s` ||
              (keyword.length > 3 && w.startsWith(keyword))
          )
        ) {
          score += 1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestResponse = rule.response;
      }
    }

    return bestScore > 0 ? bestResponse : 'default';
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Focus input when opening
      setTimeout(() => {
        const input = chatContainerRef.current?.querySelector('input');
        input?.focus();
      }, 300);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <style>{`
        .quick-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .quick-scroll::-webkit-scrollbar {
          display: none;
        }
        .chat-window {
          width: calc(100vw - 2rem);
          max-height: calc(100vh - 6rem);
          max-height: calc(100dvh - 6rem);
        }
        @media (min-width: 640px) {
          .chat-window {
            width: 24rem;
            max-height: 85vh;
            max-height: 85dvh;
          }
        }
        @media (min-width: 768px) {
          .chat-window {
            width: 26rem;
          }
        }
      `}</style>

      {/* Chatbot Toggle Button — hidden while the chat window is open */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 transition-all duration-300"
          aria-label="Open chatbot"
        >
          <KayaCartoon className="w-8 h-8" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chat-window bg-white rounded-2xl shadow-2xl flex flex-col border border-teal-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 bg-teal-50 border-b border-teal-200 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-teal-100 rounded-full flex items-center justify-center">
                <KayaCartoon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-semibold text-teal-800">Kaya</h3>
                <p className="text-xs text-teal-500">Your AI Assistant</p>
              </div>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-teal-500 hover:text-teal-700 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages - scrollable container */}
          <div className="flex-1 min-h-0 p-3 sm:p-4 overflow-y-auto space-y-3" ref={chatContainerRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} max-w-[85%]`}
              >
                {msg.sender === 'user' ? (
                  <div className="px-4 py-2 rounded-lg bg-teal-600 text-white max-w-xs break-words">
                    {msg.text}
                  </div>
                ) : (
                  <BotAnswer
                    answer={msg.answer}
                    followUps={msg.followUps}
                    onSelect={handleQuickReply}
                    disabled={isLoading}
                  />
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start max-w-[85%]">
                <div className="px-4 py-2 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies — scrollable one-word questions */}
          <div className="quick-scroll flex gap-2 overflow-x-auto px-3 sm:px-4 py-2 bg-white border-t border-teal-100 flex-shrink-0">
            {quickReplies.map((reply) => (
              <button
                key={reply.key}
                onClick={() => handleQuickReply(reply)}
                disabled={isLoading}
                className={`shrink-0 px-3 py-1.5 rounded-full border border-teal-300 bg-white text-teal-700 text-xs font-semibold whitespace-nowrap transition-colors hover:bg-teal-50 hover:border-teal-400 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {reply.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center p-3 sm:p-4 bg-teal-50 border-t border-teal-200 gap-2">
            <form onSubmit={handleSubmit} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 rounded-lg border border-teal-200 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  disabled={isLoading}
                />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            </form>
            <button
              onClick={handleSubmit}
              disabled={!inputValue.trim() || isLoading}
              className={`w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-700 transition-all duration-200 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <div className="p-3 sm:p-4 bg-teal-50 border-t border-teal-200">
            <Button
              size="lg"
              className="w-full bg-teal-600 text-white hover:bg-teal-700"
              onClick={() => {
                toggleChatbot();
                // Navigate to booking page or open booking modal
                window.location.href = '/book-appointment';
              }}
            >
              Book Appointment Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
