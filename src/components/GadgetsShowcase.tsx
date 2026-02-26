"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const GadgetsShowcase = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-[10px] p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[534px] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image */}
          <Image
            src="/images/new_images/part_3.png"
            alt="TrendMalayaa professional phone repair workshop - Kedai repair phone terbaik Malaysia"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />

          {/* Heading */}
          <h2
            className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[60px] text-white relative z-10 mb-4 sm:mb-6 px-4 leading-tight"
            style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}
          >
            Trusted by Thousands. Chosen Every Day.
          </h2>

          {/* Visit Branch Link */}
          <Link
            href="#footer"
            className="flex items-center gap-2 relative z-10 hover:opacity-80 transition-opacity text-sm sm:text-base min-h-[44px] px-4 py-2"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Visit Our Nearest Branch
            <FaArrowRight className="text-sm flex-shrink-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GadgetsShowcase;
