"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaMobileAlt,
  FaCreditCard,
  FaSyncAlt,
  FaStore,
  FaDesktop,
  FaBatteryFull,
  FaTint,
  FaMicrochip,
  FaCheckCircle,
  FaShieldAlt,
  FaPlug,
  FaHeadphones,
  FaWallet,
  FaBolt
} from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  features: Array<{ text: string; icon: React.ReactNode }>;
  bgColor: string;
  textColor: string;
  featuresColor?: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceCard = ({
  title,
  features,
  bgColor,
  textColor,
  featuresColor,
  imageSrc,
  imageAlt,
}: ServiceCardProps) => {
  return (
    <motion.div
      className="rounded-xl flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      {/* Image Section */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
        <h3
          className="font-bold mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl"
          style={{
            color: textColor,
            fontFamily: 'Helvetica, Arial, sans-serif',
            lineHeight: '1.3',
          }}
        >
          {title}
        </h3>

        <ul className="space-y-2 sm:space-y-3 flex-1">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 sm:gap-3 text-sm md:text-base"
              style={{
                color: featuresColor || textColor,
                fontFamily: 'Helvetica, Arial, sans-serif',
              }}
            >
              <span className="mt-0.5 flex-shrink-0" style={{ color: textColor, opacity: 0.8 }}>
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center px-4"
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          What do we do Best at TrendMalayaa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Service 1: iPhone & Smartphone Sales */}
          <ServiceCard
            title="Original iPhone & Smartphone Sales with Warranty"
            features={[
              { text: "New & Certified Pre-Owned Apple Devices", icon: <FaMobileAlt size={16} /> },
              { text: "Installment Available", icon: <FaCreditCard size={16} /> },
              { text: "Trade-in Accepted", icon: <FaSyncAlt size={16} /> },
              { text: "Ready Stock Across Multiple Branches", icon: <FaStore size={16} /> }
            ]}
            bgColor="#F8F9FA"
            textColor="#000000"
            featuresColor="#4B5563"
            imageSrc="/images/new_images/exhibit_a.png"
            imageAlt="Original iPhone & Smartphone Sales - TrendMalayaa"
          />

          {/* Service 2: Phone Repair */}
          <ServiceCard
            title="Same-Day Professional Phone Repair"
            features={[
              { text: "Screen Replacement", icon: <FaDesktop size={16} /> },
              { text: "Battery Replacement", icon: <FaBatteryFull size={16} /> },
              { text: "Water Damage Repair", icon: <FaTint size={16} /> },
              { text: "Motherboard Repair", icon: <FaMicrochip size={16} /> },
              { text: "Apple Original & OEM Quality Parts", icon: <FaCheckCircle size={16} /> }
            ]}
            bgColor="#FFFBEB"
            textColor="#000000"
            featuresColor="#4B5563"
            imageSrc="/images/new_images/exhibit_b.png"
            imageAlt="Professional Phone Repair Services - TrendMalayaa"
          />

          {/* Service 3: Accessories & Gadgets */}
          <ServiceCard
            title="Premium Accessories & Gadgets"
            features={[
              { text: "Tempered Glass", icon: <FaShieldAlt size={16} /> },
              { text: "Charging Cables", icon: <FaPlug size={16} /> },
              { text: "Powerbank", icon: <FaBatteryFull size={16} /> },
              { text: "Wireless Earbuds", icon: <FaHeadphones size={16} /> },
              { text: "Protection Case", icon: <FaShieldAlt size={16} /> }
            ]}
            bgColor="#1F2937"
            textColor="#FFFFFF"
            featuresColor="#D1D5DB"
            imageSrc="/images/image.png"
            imageAlt="Premium Phone Accessories & Gadgets - TrendMalayaa"
          />

          {/* Service 4: Payment Options */}
          <ServiceCard
            title="Easy Installment & Payment Options"
            features={[
              { text: "AEON / JCL / Payhalal Payment", icon: <FaCreditCard size={16} /> },
              { text: "With Credit Card Options", icon: <FaCreditCard size={16} /> },
              { text: "SpayLater / Atome / Directlanding", icon: <FaWallet size={16} /> },
              { text: "Fast Approval", icon: <FaBolt size={16} /> }
            ]}
            bgColor="#EFF6FF"
            textColor="#000000"
            featuresColor="#4B5563"
            imageSrc="/images/new_images/payment_brands.png"
            imageAlt="Easy Payment & Installment Options - TrendMalayaa"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
