"use client";

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/601156363571"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center w-14 h-14"
    >
      <FaWhatsapp className="text-3xl" />
    </Link>
  );
};

export default FloatingWhatsAppButton;
