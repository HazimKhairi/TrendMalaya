"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStore, FaUsers, FaAward, FaStar } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function BrandShowcase() {
  return (
    <section id="brand-showcase" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              <span className="text-red-600">Your Trusted</span>{" "}
              <span className="text-black">Mobile Partner</span>
            </motion.h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Professional service, expert team, and a commitment to excellence across all 9 branches
            </p>
          </motion.div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Left: Store Front */}
            <motion.div
              className="relative group"
              variants={imageVariants}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/new_images/signboard-2.png"
                  alt="TrendMalayaa storefront - Professional mobile phone shop in Malaysia"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-red-600 p-2 rounded-lg flex-shrink-0">
                        <FaStore className="text-white text-base sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Modern Stores</h3>
                        <p className="text-xs sm:text-sm text-gray-600">9 convenient locations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Team Photo */}
            <motion.div
              className="relative group"
              variants={imageVariants}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/new_images/point_2.png"
                  alt="TrendMalayaa team - Expert mobile phone specialists in Malaysia"
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-red-600 p-2 rounded-lg flex-shrink-0">
                        <FaUsers className="text-white text-base sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Expert Team</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Passionate about mobile technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={itemVariants}
          >
            {/* Stat 1 */}
            <motion.div
              className="bg-white border-2 border-red-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:border-red-300 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaAward className="text-red-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">50,000+</h3>
              <p className="text-gray-700 font-medium text-sm sm:text-base">Happy Customers</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              className="bg-white border-2 border-red-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:border-red-300 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaStore className="text-red-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">9</h3>
              <p className="text-gray-700 font-medium text-sm sm:text-base">Branches Nationwide</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              className="bg-white border-2 border-red-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:border-red-300 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaStar className="text-red-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">5.0</h3>
              <p className="text-gray-700 font-medium text-sm sm:text-base">Google Rating</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
