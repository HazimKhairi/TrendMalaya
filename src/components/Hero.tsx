"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight, FaGoogle, FaStar } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 2,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="bg-white min-h-[600px] lg:min-h-[728px] flex items-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            {/* Main Heading */}
            <motion.h1
              className="font-bold text-4xl sm:text-5xl lg:text-[75px] lg:leading-[90px] text-black mb-4 lg:mb-6"
              style={{ fontFamily: "Helvetica, sans-serif" }}
              variants={itemVariants}
            >
              No. 1 Mobile Specialist <span className="block">MY</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="text-xl sm:text-2xl lg:text-[33px] text-gray-700 mb-8 lg:mb-12"
              variants={itemVariants}
            >
              We can fix your phone.
            </motion.h2>

            {/* CTA Row */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8"
              variants={itemVariants}
            >
              {/* Start Repair Button */}
              <button className="bg-[rgba(0,138,252,0.93)] hover:bg-[rgba(0,138,252,1)] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-colors w-fit">
                Start Repair
                <FaChevronRight size={16} />
              </button>

              {/* Google Review Badge */}
              <Link
                href="https://share.google/Wc7aBfzA9pRbIOMg2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit"
              >
                <div className="flex items-center gap-2">
                  <FaGoogle size={20} className="text-gray-700" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  Read or leave a review
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <Image
              src="/images/hero-phones.png"
              alt="Mobile phone repair specialist"
              width={500}
              height={400}
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
