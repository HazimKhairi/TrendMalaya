"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard
} from "react-icons/si";

const serviceDetails = [
  {
    id: 1,
    title: "Original iPhone & Smartphone Sales with Warranty",
    imageSrc: "/images/product-2.jpeg",
    imageAlt: "iPhone and smartphone sales at TrendMalayaa store",
    bgColor: "bg-blue-50",
    features: [
      "New & Certified Pre-Owned Apple Devices",
      "Installment Available",
      "Trade-in Accepted",
      "Ready Stock Across Multiple Branches",
    ],
  },
  {
    id: 2,
    title: "Same-Day Professional Phone Repair",
    imageSrc: "/images/in-store-2.png",
    imageAlt: "Professional phone repair service",
    bgColor: "bg-amber-50",
    features: [
      "Screen Replacement",
      "Battery Replacement",
      "Water Damage Repair",
      "Motherboard Repair",
      "Apple Original & OEM Quality Parts",
    ],
  },
  {
    id: 3,
    title: "Premium Accessories & Gadgets",
    imageSrc: "/images/image.png",
    imageAlt: "Premium phone accessories and gadgets",
    bgColor: "bg-gray-50",
    features: [
      "Tempered Glass",
      "Charging Cables",
      "Powerbank",
      "Wireless Earbuds",
      "Protection Case",
    ],
  },
  {
    id: 4,
    title: "Easy Installment & Payment Options",
    imageSrc: null,
    imageAlt: "Payment options",
    bgColor: "bg-white",
    features: [
      "AEON / JCL / Payhalal Payment",
      "With Credit Card Options",
      "SpayLater / Atome / Directlanding",
      "Fast Approval",
    ],
    showPaymentLogos: true,
  },
];

export default function WhyTrendMalayaa() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.p
            className="text-gray-500 text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            our services
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Do We Do Best at TrendMalayaa.
          </motion.h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${service.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Section */}
              {service.imageSrc && (
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 sm:mb-6">
                  {service.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <FaCheckCircle className="text-[#008AFC] text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Payment Logos Section */}
                {service.showPaymentLogos && (
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-3 sm:mb-4">
                      Accepted Payment Methods:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {/* AEON */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <span className="text-xs md:text-sm font-bold text-red-600">
                          AEON
                        </span>
                      </div>

                      {/* JCL */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <span className="text-xs md:text-sm font-bold text-blue-600">
                          JCL
                        </span>
                      </div>

                      {/* Atome */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <span className="text-xs md:text-sm font-bold text-green-600">
                          Atome
                        </span>
                      </div>

                      {/* Visa */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <SiVisa className="text-2xl md:text-3xl text-blue-700" />
                      </div>

                      {/* Mastercard */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <SiMastercard className="text-2xl md:text-3xl text-red-600" />
                      </div>

                      {/* SpayLater */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <span className="text-xs md:text-sm font-bold text-purple-600">
                          SpayLater
                        </span>
                      </div>

                      {/* Payhalal */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <span className="text-xs md:text-sm font-bold text-emerald-600">
                          Payhalal
                        </span>
                      </div>

                      {/* Directlanding */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-[#008AFC] transition-colors">
                        <span className="text-xs md:text-sm font-bold text-orange-600">
                          DirectLanding
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://wa.me/601156363571?text=Hi%20TrendMalayaa%20I%20would%20like%20to%20enquire%20about%20your%20iPhone%20prices%2C%20repair%20services%20or%20latest%20promotions.%20Thank%20you."
            className="inline-block bg-[#008AFC] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] rounded-full hover:bg-[#0070d4] transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
          >
            Get Started with TrendMalayaa
          </a>
          <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base px-4">
            Contact us now for the best deals and professional service
          </p>
        </motion.div>
      </div>
    </section>
  );
}
