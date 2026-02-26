"use client";

import { useRef } from "react";
import Image from "next/image";
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
  FaBolt,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ServiceCardProps {
  title: string;
  features: Array<{ text: string; icon: React.ReactNode }>;
  bgColor: string;
  imageSrc: string;
  imageAlt: string;
  blobRadius: string;
}

const ServiceCard = ({
  title,
  features,
  bgColor,
  imageSrc,
  imageAlt,
  blobRadius,
}: ServiceCardProps) => {
  return (
    <div className="service-card rounded-3xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 bg-white">
      {/* Image Section with blob shape */}
      <div className="relative p-6 pb-0 flex justify-center" style={{ backgroundColor: bgColor }}>
        <div className="relative w-full aspect-[4/3]">
          <div
            className="absolute inset-0 bg-white/30"
            style={{ borderRadius: blobRadius }}
          />
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain relative z-10 p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
        <h3
          className="font-bold mb-3 md:mb-4 text-lg sm:text-xl text-gray-900"
          style={{ fontFamily: "Helvetica, Arial, sans-serif", lineHeight: "1.3" }}
        >
          {title}
        </h3>

        <ul className="space-y-2 sm:space-y-2.5 flex-1">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-sm text-gray-500"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <span className="mt-0.5 flex-shrink-0 text-[#008AFC]">
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading reveal
      gsap.from(".services-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
        },
      });

      // Cards stagger
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="services" className="bg-[#F8FAFC] py-16 sm:py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="services-heading text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 md:mb-20 text-center px-4"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          What We Do Best
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          <ServiceCard
            title="Original iPhone & Smartphone Sales with Warranty"
            features={[
              { text: "New & Certified Pre-Owned Apple Devices", icon: <FaMobileAlt size={15} /> },
              { text: "Installment Available", icon: <FaCreditCard size={15} /> },
              { text: "Trade-in Accepted", icon: <FaSyncAlt size={15} /> },
              { text: "Ready Stock Across Multiple Branches", icon: <FaStore size={15} /> },
            ]}
            bgColor="#F0F7FF"
            imageSrc="/images/new_images/exhibit_a.png"
            imageAlt="Original iPhone & Smartphone Sales - TrendMalayaa"
            blobRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
          />

          <ServiceCard
            title="Same-Day Professional Phone Repair"
            features={[
              { text: "Screen Replacement", icon: <FaDesktop size={15} /> },
              { text: "Battery Replacement", icon: <FaBatteryFull size={15} /> },
              { text: "Water Damage Repair", icon: <FaTint size={15} /> },
              { text: "Motherboard Repair", icon: <FaMicrochip size={15} /> },
              { text: "Apple Original & OEM Quality Parts", icon: <FaCheckCircle size={15} /> },
            ]}
            bgColor="#F5F0FF"
            imageSrc="/images/new_images/exhibit_b.png"
            imageAlt="Professional Phone Repair Services - TrendMalayaa"
            blobRadius="70% 30% 30% 70% / 70% 70% 30% 30%"
          />

          <ServiceCard
            title="Premium Accessories & Gadgets"
            features={[
              { text: "Tempered Glass", icon: <FaShieldAlt size={15} /> },
              { text: "Charging Cables", icon: <FaPlug size={15} /> },
              { text: "Powerbank", icon: <FaBatteryFull size={15} /> },
              { text: "Wireless Earbuds", icon: <FaHeadphones size={15} /> },
              { text: "Protection Case", icon: <FaShieldAlt size={15} /> },
            ]}
            bgColor="#FFF8F0"
            imageSrc="/images/image.png"
            imageAlt="Premium Phone Accessories & Gadgets - TrendMalayaa"
            blobRadius="40% 60% 60% 40% / 60% 40% 60% 40%"
          />

          <ServiceCard
            title="Easy Installment & Payment Options"
            features={[
              { text: "AEON / JCL / Payhalal Payment", icon: <FaCreditCard size={15} /> },
              { text: "With Credit Card Options", icon: <FaCreditCard size={15} /> },
              { text: "SpayLater / Atome / Directlanding", icon: <FaWallet size={15} /> },
              { text: "Fast Approval", icon: <FaBolt size={15} /> },
            ]}
            bgColor="#F0FFF4"
            imageSrc="/images/new_images/payment_brands.png"
            imageAlt="Easy Payment & Installment Options - TrendMalayaa"
            blobRadius="60% 40% 40% 60% / 40% 60% 40% 60%"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
