"use client";

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/601156363571?text=Hi%20TrendMalayaa%20I%20would%20like%20to%20enquire%20about%20your%20iPhone%20prices%2C%20repair%20services%20or%20latest%20promotions.%20Thank%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] min-h-[56px]"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
    </Link>
  );
};

export default FloatingWhatsAppButton;
