"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const GadgetsShowcase = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="relative rounded-[30px] p-8 md:p-16 overflow-hidden min-h-[400px] md:min-h-[534px] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image */}
          <Image
            src="/images/gadget-showcase.png"
            alt="Phone repair workshop"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />

          {/* Heading */}
          <h2
            className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-[60px] text-white relative z-10 mb-6"
            style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}
          >
            Bringing Life Back to Your Beloved Gadgets.
          </h2>

          {/* Consultation Link */}
          <Link
            href="https://wa.me/601156363571"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 relative z-10 hover:opacity-80 transition-opacity"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Get a free consultation
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GadgetsShowcase;
