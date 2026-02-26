'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'TikTok', href: '#tiktok' },
  { label: 'Locations', href: '#footer' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 72;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white w-full border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, '#hero')}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="TrendMalayaa Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div className="flex flex-col">
              <div className="flex items-baseline font-bold text-lg sm:text-xl">
                <span className="text-[#008AFC]">Trend</span>
                <span className="text-black">Malayaa</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#008AFC] -mt-1">
                Mobile Shop MY
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-black hover:text-[#008AFC] px-3 py-2 text-base font-bold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-gray-800 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-black hover:text-[#008AFC] block px-4 py-3 min-h-[44px] rounded-md text-base font-bold hover:bg-gray-100 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
