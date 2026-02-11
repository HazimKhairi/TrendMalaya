"use client";

import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaMoneyBillWave, FaStar, FaArrowRight } from "react-icons/fa";

const valueCards = [
  {
    id: 1,
    icon: FaCheckCircle,
    title: "Trusted local brand.",
    description: "More than 10,000 satisfied customers every year.",
    link: "https://wa.me/601156363571",
  },
  {
    id: 2,
    icon: FaMoneyBillWave,
    title: "Transparent pricing.",
    description: "No hidden fees, what you see is what you get.",
    link: "https://wa.me/601156363571",
  },
  {
    id: 3,
    icon: FaStar,
    title: "Grade A - Original Quality.",
    description: "Genuine parts and meticulous service.",
    link: "https://wa.me/601156363571",
  },
  {
    id: 4,
    icon: FaStar,
    title: "Customer-focused 5 Stars service.",
    description: "Your satisfaction is our priority.",
    link: "https://wa.me/601156363571",
  },
];

export default function WhyTrendMalaya() {
  return (
    <section className="w-full bg-[#F5F4F4] py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl">
            Why TrendMalaya is the best <span className="italic">place</span> to
            fix your phone.
          </h3>
          <Link
            href="https://wa.me/601156363571"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            Get a free consultation
            <FaArrowRight className="text-sm" />
          </Link>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card, index) => (
            <Link
              key={card.id}
              href={card.link}
              className="group"
              style={{
                animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="bg-white rounded-[30px] p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col relative">
                {/* Icon */}
                <div className="mb-4">
                  <card.icon className="text-4xl text-blue-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="flex justify-end mt-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FaArrowRight className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
