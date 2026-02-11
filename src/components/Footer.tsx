import React from "react";
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

const services = [
  { name: "Mobile Phone Sales", href: "#services" },
  { name: "Professional Phone Repair", href: "#services" },
  { name: "Accessories & Gadgets", href: "#services" },
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
];

export default function Footer() {
  // Split locations into two columns
  const column1Locations = locations.slice(0, 5);
  const column2Locations = locations.slice(5, 9);

  return (
    <footer id="footer" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="TrendMalayaa Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">TrendMalayaa</span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Your trusted mobile phone repair specialist in Malaysia. We provide
              quality repairs with genuine parts and exceptional customer service
              across multiple locations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.tiktok.com/@syafi.sayuti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTiktok className="text-gray-800 text-lg" />
              </Link>
              <Link
                href="https://www.instagram.com/trendmalayaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram className="text-gray-800 text-lg" />
              </Link>
              <Link
                href="https://www.facebook.com/trendmalayaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebook className="text-gray-800 text-lg" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Our Services */}
          <div>
            <h6 className="text-lg font-bold text-gray-900 mb-6">Our Services</h6>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
                  >
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Locations Part 1 */}
          <div>
            <h6 className="text-lg font-bold text-gray-900 mb-6">Our Locations</h6>
            <div className="space-y-6">
              {column1Locations.map((location) => (
                <div key={location.id} className="space-y-2">
                  <h6 className="font-bold text-gray-900">{location.name}</h6>
                  <p className="text-sm text-gray-600">{location.address}</p>
                  <p className="text-sm text-gray-600">{location.hours}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Link
                      href={location.wazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-2 rounded-full transition-colors"
                    >
                      <FaMapMarkedAlt />
                      <span>Waze</span>
                    </Link>
                    <Link
                      href={`https://wa.me/6${location.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-2 rounded-full transition-colors"
                    >
                      <FaWhatsapp />
                      <span>{location.phone}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 - Locations Part 2 */}
          <div>
            <h6 className="text-lg font-bold text-gray-900 mb-6 invisible md:visible">
              &nbsp;
            </h6>
            <div className="space-y-6">
              {column2Locations.map((location) => (
                <div key={location.id} className="space-y-2">
                  <h6 className="font-bold text-gray-900">{location.name}</h6>
                  <p className="text-sm text-gray-600">{location.address}</p>
                  <p className="text-sm text-gray-600">{location.hours}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Link
                      href={location.wazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-2 rounded-full transition-colors"
                    >
                      <FaMapMarkedAlt />
                      <span>Waze</span>
                    </Link>
                    <Link
                      href={`https://wa.me/6${location.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-2 rounded-full transition-colors"
                    >
                      <FaWhatsapp />
                      <span>{location.phone}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            Copyright © 2026 by TrendMalayaa Mobile Specialist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
