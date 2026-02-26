"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkedAlt,
  FaChevronRight,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  { name: "iPhone & Smartphone Sales", href: "#services" },
  { name: "Same-Day Professional Repair", href: "#services" },
  { name: "Premium Accessories & Gadgets", href: "#services" },
  { name: "Easy Installments & Payment Options", href: "#services" },
];

const quickLinks = [
  { name: "About Us", href: "#hero" },
  { name: "Contact Us", href: "https://wa.me/601156363571?text=Hi%20TrendMalayaa%20I%20would%20like%20to%20enquire%20about%20your%20iPhone%20prices%2C%20repair%20services%20or%20latest%20promotions.%20Thank%20you." },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Careers", href: "#" },
];

const locations = [
  {
    id: 1,
    name: "Parit Buntar",
    address: "No 55, Jalan Maharaja, Pusat Bandar Baru, 34200 Parit Buntar, Perak",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "011-5636 3571",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 2,
    name: "Perda, Bukit Mertajam",
    address: "No 53 (Ground Floor), Lorong Perda Utama 3, Taman Prominence, 14000 Bukit Mertajam, Pulau Pinang",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "011-5407 0847",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 3,
    name: "Taiping",
    address: "89, Jalan Taiping Utara, Taman Taiping Utara, 34600 Kamunting, Perak",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "011-3760 0106",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 4,
    name: "Alor Setar",
    address: "929, Jalan Sultan Badlishah, 05000 Alor Setar, Kedah",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "011-1670 1026",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 5,
    name: "Seri Iskandar",
    address: "No 147, PSRN SIBC 9, Bandar Seri Iskandar, 32610 Perak",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "018-314 3237",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 6,
    name: "Bayan Baru",
    address: "1-1-2 Tingkat Mahsuri 2, 1-Sky Commercial Lot, 11950 Bayan Lepas, Penang",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "018-660 0765",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 7,
    name: "Ipoh",
    address: "109, Jalan Kamaruddin Isa, Taman Fair Park, 31400 Ipoh, Perak",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "017-606 0658",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 8,
    name: "Manjung",
    address: "No 312 (Bawah), Jalan PPMP 3/2, Pusat Perniagaan Manjung Point 3, 32040 Seri Manjung, Perak",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "017-317 6660",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 9,
    name: "Kangar",
    address: "No 18 (GF), Jalan Kangar Jaya 4, Kangar Jaya, 01000 Kangar, Perlis",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "017-976 6002",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 10,
    name: "Shah Alam",
    address: "Unit No. G06, Ground Floor, Dian Residency, Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "011-5660 8621",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
  {
    id: 11,
    name: "Teluk Intan",
    address: "No.5A-G, Jalan Laman Intan, Bandar Baru, 36000 Teluk Intan, Perak",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
    phone: "011-5666 0954",
    wazeLink: "https://waze.com/ul/hw283qddnc",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const column1Locations = locations.slice(0, 6);
  const column2Locations = locations.slice(6);

  useGSAP(
    () => {
      gsap.from(".footer-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} id="footer" className="w-full bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 footer-content">
        {/* Tagline */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#008AFC] px-4">
            Malaysia's Trusted Mobile Specialist with Multiple Branches Nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-8 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="TrendMalayaa Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold">
                  <span className="text-[#008AFC]">Trend</span>
                  <span className="text-white">Malayaa</span>
                </span>
                <span className="text-xs text-gray-400">Mobile Shop MY</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Your trusted mobile phone repair specialist in Malaysia. We provide quality repairs with genuine parts and exceptional customer service across multiple locations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="https://www.tiktok.com/@syafi.sayuti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-800 hover:bg-[#008AFC] rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok className="text-white text-lg" />
              </Link>
              <Link
                href="https://www.instagram.com/trendmalayaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-800 hover:bg-[#008AFC] rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-white text-lg" />
              </Link>
              <Link
                href="https://www.facebook.com/trendmalayaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-gray-800 hover:bg-[#008AFC] rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook className="text-white text-lg" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Our Services */}
          <div>
            <h6 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 border-b-2 border-[#008AFC] pb-2 inline-block">
              Our Services
            </h6>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-[#008AFC] transition-colors group min-h-[44px] py-1"
                  >
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform text-[#008AFC] flex-shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h6 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 border-b-2 border-[#008AFC] pb-2 inline-block">
              Quick Links
            </h6>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-[#008AFC] transition-colors group min-h-[44px] py-1"
                  >
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform text-[#008AFC] flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Locations Part 1 */}
          <div>
            <h6 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 border-b-2 border-[#008AFC] pb-2 inline-block">
              Our Locations
            </h6>
            <div className="space-y-3 sm:space-y-5 md:space-y-6">
              {column1Locations.map((location) => (
                <div key={location.id} className="space-y-0.5 sm:space-y-2">
                  <h6 className="font-bold text-white text-sm sm:text-base leading-tight sm:leading-normal">{location.name}</h6>
                  <p className="text-xs sm:text-sm text-gray-400 leading-snug sm:leading-relaxed">{location.address}</p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-tight sm:leading-normal">{location.hours}</p>
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap pt-0.5 sm:pt-1">
                    <Link
                      href={location.wazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[36px] rounded-full transition-colors"
                    >
                      <FaMapMarkedAlt className="flex-shrink-0 text-xs sm:text-sm" />
                      <span>Waze</span>
                    </Link>
                    <Link
                      href={`https://wa.me/6${location.phone.replace(/[^0-9]/g, "")}?text=Hi%20TrendMalayaa%20I%20would%20like%20to%20enquire%20about%20your%20iPhone%20prices%2C%20repair%20services%20or%20latest%20promotions.%20Thank%20you.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[36px] rounded-full transition-colors"
                    >
                      <FaWhatsapp className="flex-shrink-0 text-xs sm:text-sm" />
                      <span className="whitespace-nowrap">{location.phone}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 5 - Locations Part 2 */}
          <div>
            <h6 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 hidden md:block border-b-2 border-[#008AFC] pb-2">
              &nbsp;
            </h6>
            <div className="space-y-3 sm:space-y-5 md:space-y-6">
              {column2Locations.map((location) => (
                <div key={location.id} className="space-y-0.5 sm:space-y-2">
                  <h6 className="font-bold text-white text-sm sm:text-base leading-tight sm:leading-normal">{location.name}</h6>
                  <p className="text-xs sm:text-sm text-gray-400 leading-snug sm:leading-relaxed">{location.address}</p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-tight sm:leading-normal">{location.hours}</p>
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap pt-0.5 sm:pt-1">
                    <Link
                      href={location.wazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[36px] rounded-full transition-colors"
                    >
                      <FaMapMarkedAlt className="flex-shrink-0 text-xs sm:text-sm" />
                      <span>Waze</span>
                    </Link>
                    <Link
                      href={`https://wa.me/6${location.phone.replace(/[^0-9]/g, "")}?text=Hi%20TrendMalayaa%20I%20would%20like%20to%20enquire%20about%20your%20iPhone%20prices%2C%20repair%20services%20or%20latest%20promotions.%20Thank%20you.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[36px] rounded-full transition-colors"
                    >
                      <FaWhatsapp className="flex-shrink-0 text-xs sm:text-sm" />
                      <span className="whitespace-nowrap">{location.phone}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Paragraph */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center">
              <strong className="text-white">TrendMalayaa</strong> is a trusted <strong className="text-[#008AFC]">kedai phone</strong> dan <strong className="text-[#008AFC]">iPhone repair specialist</strong> in Malaysia with 11 branches in <strong className="text-white">Parit Buntar, Taiping, Alor Setar, Kangar, Ipoh, Manjung, Bayan Baru, Shah Alam, Teluk Intan</strong> and more. We provide professional <strong className="text-white">phone repair, iPhone sales, accessories</strong> and <strong className="text-white">installment options</strong> with fast and reliable service.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-xs sm:text-sm px-4">
            Copyright © 2026 by <span className="text-[#008AFC] font-semibold">TrendMalayaa</span> Mobile Specialist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
