import Link from 'next/link';
import Image from 'next/image';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { 
  Calendar, ArrowRight, Award, User, FlaskConical, 
  Shield, HeartHandshake, Building2, CheckCircle2 
} from 'lucide-react';
import { clinicInfo, services, whyChooseUs, testimonials, stats, faqs } from './lib/mock';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import HashNavigator from './components/HashNavigator';
import OurDoctors from './components/OurDoctors';
import Timeline from './components/Timeline';
import AvailPrograms from './components/AvailPrograms';
import HealthPriorityBanner from './components/HealthPriorityBanner';

const getIcon = (iconName) => {
  const icons = {
    Award, User, FlaskConical, Shield, HeartHandshake, Building2
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
};

const getLoaderColor = (index) => {
  const colors = ['#14b8a6', '#0d9488', '#0f766e'];
  return colors[index % 3];
};

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <HashNavigator />
      {/* Hero Section */}
      <section className="relative pt-10 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[350px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[750px] flex items-end">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover hero-video"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
          <div className="max-w-4xl w-full">
            
            {/* Main Heading */}
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl" style={{ color: '#ffffff' }}>
              {"4 Doctors. Unlimited Access.".split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in-up mr-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {word}
                </span>
              ))}
              <br />
              {"One Transformation.".split(' ').map((word, index) => (
                <span
                  key={index + 10}
                  className="inline-block opacity-0 animate-fade-in-up mr-2"
                  style={{ animationDelay: `${(index + 4) * 150}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 leading-relaxed drop-shadow-xl animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
You’re never treated like just another case. Our team of 4 doctors takes the time to truly understand your body, lifestyle, goals, and concerns—so every part of your journey is thoughtfully personalized for you. From treatment plans to ongoing guidance, we stay with you every step of the way.            </p>
          </div>
        </div>
      </section>

      {/* Clinical Integrity Section */}
      {/* Stats Section */}
      <StatsSection stats={stats} />

       <HealthPriorityBanner 
        id="Clinical Integrity"
        imageSrc="/Images/priority3-removebg-preview-removebg-preview.png"
        bgColor="bg-teal-500"
      />


      {/* Timeline Section */}
      <Timeline id="Roadmap"/>

      {/* Available Programs Section */}
      <AvailPrograms id="Plans" />

      {/* Our Doctors Section */}
      <OurDoctors id="Doctor Panel" />


      {/* Services Section */}
      <section id="Other Services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
        {/* Decorative elements - evenly distributed */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(94,234,212,0.3)]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(34,211,238,0.3)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(to right, rgba(94,234,212,0.5) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(94,234,212,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold !text-lotusGold mb-4 animate-fade-in-up drop-shadow-lg">
              OTHER SERVICES
            </h2>
            <p className="text-lg text-teal-100 animate-fade-in-up">
              Comprehensive medical solutions for your Aesthetic needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(94,234,212,0.3),0_0_40px_rgba(94,234,212,0.2)] transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold !text-lotusGold mb-3 drop-shadow-md transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-teal-50 mb-4 transition-colors duration-300">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2 text-sm text-teal-100"
                      >
                        <CheckCircle2 
                          className="w-4 h-4 text-teal-300 flex-shrink-0 mt-0.5"
                        />
                        <span className="transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Why to Choose Us?
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up">
              Your health deserves the best care. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                  {/* Animated loader background */}
                  <div 
                    className="animated-loader"
                    style={{
                      '--i': index,
                      '--clr': getLoaderColor(index)
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                      <span className="text-teal-700 group-hover:text-white transition-colors">
                        {getIcon(item.icon)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='contact' className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/Images/logo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 !text-lotusGold">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg mb-8 text-teal-50">
              Book a consultation with Dr. Lekha Jadhav today and take the first step towards a healthier, more confident you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment">
                <Button size="lg" className="bg-teal-600 text-white hover:bg-yellow-600 gap-2 group">
                  Book Appointment Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a 
                href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent("Hi, I would like to know more about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-teal-600 text-white hover:bg-yellow-600 border-2 border-white gap-2">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection faqs={faqs} />

      {/* Location Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Teal shadow — top left */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
        
        {/* Teal shadow — bottom right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Clinic
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience professional medical care in a comfortable, modern setting. We&apos;re here to help you achieve your health and wellness goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600">{clinicInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Working Hours</div>
                    <div className="text-gray-600">{clinicInfo.workingHours.weekdays}</div>
                    <div className="text-gray-600">{clinicInfo.workingHours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-100">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.997323585242!2d73.93832747443159!3d18.56264956788914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15c45335b5d%3A0xa80f89de305e7e36!2sShraddha%20Hospital%20-%20A%20Project%20by%20Panchamrut%20Lifecare%20LLP!5e1!3m2!1sen!2sin!4v1776974136984!5m2!1sen!2sin"         
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
