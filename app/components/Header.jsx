'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  
  // Compute isScrolled based on pathname and scroll position
  const isScrolled = pathname !== '/' || scrollY > 20;

  useEffect(() => {
    // Only track scroll on homepage
    if (pathname === '/') {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: 'services', label: 'Services' },
    { path: 'about', label: 'About Us' },
    { path: 'contact', label: 'Contact' },
    { path: '/book-appointment', label: 'Book Appointment' },
  ];

  const isActive = (path) => pathname === path;

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    if (pathname !== '/') {
      // If not on homepage, navigate to homepage with hash
      router.push(`/#${sectionId}`);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      {/* Fix horizontal overflow globally caused by header */}
      <style>{`
        html, body {
          overflow-x: hidden;
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>

      <header
        style={{ width: '100vw', left: 0, right: 0, boxSizing: 'border-box' }}
        className={`fixed top-0 z-50 transition-all duration-300 ${
          isScrolled || pathname === '/book-appointment'
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-lotusGold/20'
            : 'bg-transparent backdrop-blur-sm border-b border-white/10'
        }`}
      >
        {/* Constrained inner container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ boxSizing: 'border-box' }}>
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                src="/Images/logo.jpg"
                alt="Clinic Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-cover rounded-full border-2 border-lotusGold/40 shadow-sm"
              />
            </Link>

            {/* Desktop Nav — lg and above only */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.path.startsWith('/') ? (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap cursor-pointer ${
                      (isScrolled || pathname === '/book-appointment') ? 'text-lotusGold' : 'text-lotusGold'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.path}
                    onClick={() => scrollToSection(link.path)}
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap cursor-pointer ${
                      (isScrolled || pathname === '/book-appointment') ? 'text-lotusGold' : 'text-lotusGold'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* Hamburger button — below lg only */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`lg:hidden flex-shrink-0 p-2 rounded-md ${
                (isScrolled || pathname === '/book-appointment') ? 'text-lotusGold' : 'text-lotusGold'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-lotusGold/20 shadow-lg">
            <nav
              className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1"
              style={{ boxSizing: 'border-box' }}
            >
              {navLinks.map((link) =>
                link.path.startsWith('/') ? (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full block px-4 py-3 text-sm font-medium text-deepForestTeal cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.path}
                    onClick={() => scrollToSection(link.path)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-deepForestTeal cursor-pointer"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
