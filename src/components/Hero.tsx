"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut" as const,
  },
};

const carouselImages = [
  {
    src: "/images/new_images/point_2_1.png",
    alt: "TrendMalayaa staff serving customers - Professional mobile phone specialist",
  },
  {
    src: "/images/new_images/point_2.png",
    alt: "TrendMalayaa store atmosphere - Trusted mobile phone shop Malaysia",
  },
  {
    src: "/images/new_images/with_product.png",
    alt: "TrendMalayaa with premium mobile phones - iPhone sales Malaysia",
  },
  {
    src: "/images/new_images/with_product_2.png",
    alt: "TrendMalayaa team with quality products - Mobile phone specialist",
  },
  {
    src: "/images/new_images/people_busy.png",
    alt: "TrendMalayaa busy store with customers - Trusted mobile phone shop Malaysia",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-40 left-20 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <motion.div className="flex flex-col justify-center space-y-8" variants={itemVariants}>
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 w-fit"
              variants={itemVariants}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">Trusted Since 2021</span>
            </motion.div>

            {/* Main Heading - Elegant Typography */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900"
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                Malaysia's Trusted
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Mobile Specialist
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 mt-4 max-w-lg"
                variants={itemVariants}
              >
                Premium phones, expert repairs & genuine accessories across 9 branches
              </motion.p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap gap-6 lg:gap-8"
              variants={itemVariants}
            >
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">50,000+</span>
                <span className="text-sm text-gray-600 font-medium">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">9</span>
                <span className="text-sm text-gray-600 font-medium">Branches</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">5.0</span>
                <span className="text-sm text-gray-600 font-medium">Google Rating</span>
              </div>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              {/* WhatsApp Button - Primary */}
              <motion.a
                href="https://wa.me/601156363571?text=Hi%20TrendMalayaa%20I%20would%20like%20to%20enquire%20about%20your%20iPhone%20prices%2C%20repair%20services%20or%20latest%20promotions.%20Thank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-4 min-h-[48px] rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-all text-sm sm:text-base group flex-1"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp size={20} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="whitespace-nowrap">Contact Us on WhatsApp</span>
              </motion.a>

              {/* Find Branch Button */}
              <motion.a
                href="#footer"
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-4 min-h-[48px] rounded-lg border-2 border-gray-200 flex items-center justify-center gap-2 sm:gap-3 transition-all text-sm sm:text-base group flex-1"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
              >
                <FaMapMarkerAlt size={18} className="flex-shrink-0" />
                <span className="whitespace-nowrap">Find Our Stores</span>
              </motion.a>
            </motion.div>

            {/* Google Review & Branch Info */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <Link
                href="https://share.google/Wc7aBfzA9pRbIOMg2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <SiGoogle size={16} className="text-blue-600" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={10} className="text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">5.0 rating</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>

              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">9 locations:</span> Parit Buntar, Taiping, Ipoh, Bukit Mertajam, Bayan Baru, Alor Setar, Seri Iskandar, Manjung, Kangar
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Gallery Carousel */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative w-full">
              {/* Main Carousel Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100">
                <div className="relative aspect-[4/5]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={carouselImages[currentImageIndex].src}
                        alt={carouselImages[currentImageIndex].alt}
                        fill
                        priority={currentImageIndex === 0}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
                {carouselImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 min-w-[56px] min-h-[56px] rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex
                        ? "ring-2 ring-gray-900 ring-offset-2 scale-105"
                        : "ring-1 ring-gray-200 hover:ring-gray-400 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
