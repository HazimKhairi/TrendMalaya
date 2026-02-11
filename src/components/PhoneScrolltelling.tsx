"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const PhoneScrolltelling = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageError = (imageId: string) => {
    setImageLoadErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const handleImageLoad = (imageId: string) => {
    setImagesLoaded((prev) => ({ ...prev, [imageId]: true }));
  };

  // Section refs
  const introRef = useRef<HTMLDivElement>(null);
  const samsungRef = useRef<HTMLDivElement>(null);
  const iphoneRef = useRef<HTMLDivElement>(null);
  const pixelRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  // Intro scroll animations
  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"]
  });

  // Samsung scroll animations
  const { scrollYProgress: samsungProgress } = useScroll({
    target: samsungRef,
    offset: ["start start", "end start"]
  });

  // iPhone scroll animations
  const { scrollYProgress: iphoneProgress } = useScroll({
    target: iphoneRef,
    offset: ["start start", "end start"]
  });

  // Pixel scroll animations
  const { scrollYProgress: pixelProgress } = useScroll({
    target: pixelRef,
    offset: ["start start", "end start"]
  });

  // Final CTA scroll animations
  const { scrollYProgress: finalProgress } = useScroll({
    target: finalRef,
    offset: ["start start", "end start"]
  });

  // Intro transformations
  const introOpacity = useTransform(introProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const introScale = useTransform(introProgress, [0, 0.8], [1, 0.8]);

  // Samsung transformations
  const samsungX = useTransform(samsungProgress, [0, 0.3, 0.7], ['100%', '0%', '-20%']);
  const samsungScale = useTransform(samsungProgress, [0, 0.3, 0.8], [0.6, 1, 0.95]);
  const samsungOpacity = useTransform(samsungProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const samsungTextOpacity = useTransform(samsungProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const samsungTextY = useTransform(samsungProgress, [0.2, 0.4], ['30px', '0px']);

  // iPhone transformations
  const iphoneX = useTransform(iphoneProgress, [0, 0.3, 0.7], ['100%', '0%', '-20%']);
  const iphoneScale = useTransform(iphoneProgress, [0, 0.3, 0.8], [0.6, 1, 0.95]);
  const iphoneOpacity = useTransform(iphoneProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const iphoneTextOpacity = useTransform(iphoneProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const iphoneTextY = useTransform(iphoneProgress, [0.2, 0.4], ['30px', '0px']);

  // Pixel transformations
  const pixelX = useTransform(pixelProgress, [0, 0.3, 0.7], ['100%', '0%', '-20%']);
  const pixelScale = useTransform(pixelProgress, [0, 0.3, 0.8], [0.6, 1, 0.95]);
  const pixelOpacity = useTransform(pixelProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const pixelTextOpacity = useTransform(pixelProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const pixelTextY = useTransform(pixelProgress, [0.2, 0.4], ['30px', '0px']);

  // Final CTA transformations
  const finalOpacity = useTransform(finalProgress, [0, 0.3, 0.7], [0, 1, 1]);
  const finalScale = useTransform(finalProgress, [0, 0.3], [0.9, 1]);

  const phoneData = [
    {
      ref: samsungRef,
      progress: samsungProgress,
      x: samsungX,
      scale: samsungScale,
      opacity: samsungOpacity,
      textOpacity: samsungTextOpacity,
      textY: samsungTextY,
      imageSrc: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
      imageAlt: "Samsung Galaxy S24 Ultra",
      brand: "Samsung Galaxy",
      model: "S24 Ultra",
      services: [
        "AMOLED Screen Replacement",
        "Battery Replacement from RM99",
        "Water Damage Recovery",
        "Camera Module Repair"
      ],
      color: "#008AFC"
    },
    {
      ref: iphoneRef,
      progress: iphoneProgress,
      x: iphoneX,
      scale: iphoneScale,
      opacity: iphoneOpacity,
      textOpacity: iphoneTextOpacity,
      textY: iphoneTextY,
      imageSrc: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
      imageAlt: "iPhone 15 Pro Max",
      brand: "Apple iPhone",
      model: "15 Pro Max",
      services: [
        "Genuine Apple Parts Available",
        "Battery Replacement from RM99",
        "Face ID & Touch ID Repair",
        "Back Glass Replacement"
      ],
      color: "#A2AAAD"
    },
    {
      ref: pixelRef,
      progress: pixelProgress,
      x: pixelX,
      scale: pixelScale,
      opacity: pixelOpacity,
      textOpacity: pixelTextOpacity,
      textY: pixelTextY,
      imageSrc: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
      imageAlt: "Google Pixel 8 Pro",
      brand: "Google Pixel",
      model: "8 Pro",
      services: [
        "OLED Display Replacement",
        "Battery Replacement from RM99",
        "Charging Port Repair",
        "Software Troubleshooting"
      ],
      color: "#4285F4"
    }
  ];

  return (
    <>
      {/* Intro Section */}
      <section
        ref={introRef}
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          style={{
            opacity: introOpacity,
            scale: introScale
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Helvetica, sans-serif' }}
            >
              All Brands Welcome
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 leading-relaxed">
              Professional repair services for Samsung, Apple, Google, and more
            </p>
            <div className="inline-block px-6 py-2 rounded-full bg-[#008AFC] text-white font-semibold text-lg">
              TrendMalayaa - Mobile Specialist
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Phone Sections */}
      {phoneData.map((phone, index) => (
        <section
          key={index}
          ref={phone.ref}
          className="relative h-[200vh] w-full overflow-hidden bg-black"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Phone Image */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  x: phone.x,
                  scale: phone.scale,
                  opacity: phone.opacity
                }}
              >
                <div className="relative w-[300px] h-[600px] md:w-[400px] md:h-[800px]">
                  {!imageLoadErrors[`phone-${index}`] ? (
                    <div className="relative w-full h-full">
                      {!imagesLoaded[`phone-${index}`] && (
                        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-[40px]" />
                      )}
                      <Image
                        src={phone.imageSrc}
                        alt={phone.imageAlt}
                        fill
                        sizes="(max-width: 768px) 300px, 400px"
                        className="object-contain drop-shadow-2xl"
                        onError={() => handleImageError(`phone-${index}`)}
                        onLoad={() => handleImageLoad(`phone-${index}`)}
                        priority={index === 0}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-800 rounded-[40px] flex items-center justify-center">
                      <p className="text-white/60 text-sm">Image unavailable</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="absolute inset-0 flex items-center justify-end px-8 md:px-16 lg:px-24"
                style={{
                  opacity: phone.textOpacity,
                  y: phone.textY
                }}
              >
                <div className="max-w-md text-right">
                  <div
                    className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{ backgroundColor: phone.color, color: 'white' }}
                  >
                    {phone.brand}
                  </div>
                  <h3
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    style={{ fontFamily: 'Helvetica, sans-serif' }}
                  >
                    {phone.model}
                  </h3>
                  <div className="space-y-3">
                    {phone.services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center justify-end gap-3"
                      >
                        <span className="text-white/90 text-base md:text-lg">
                          {service}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#008AFC]" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section
        ref={finalRef}
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          style={{
            opacity: finalOpacity,
            scale: finalScale
          }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: 'Helvetica, sans-serif' }}
          >
            Expert Repairs.<br />All Brands. All Models.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            From screen replacements to battery swaps, water damage recovery to camera repairs.
            Grade A original quality parts. Transparent pricing. Customer-focused 5-star service.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-white font-bold text-lg mb-2">Fast Service</h4>
              <p className="text-white/70 text-sm">Most repairs completed within hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-3">✓</div>
              <h4 className="text-white font-bold text-lg mb-2">Quality Parts</h4>
              <p className="text-white/70 text-sm">Grade A original quality components</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-3">💎</div>
              <h4 className="text-white font-bold text-lg mb-2">Trusted Brand</h4>
              <p className="text-white/70 text-sm">10,000+ satisfied customers yearly</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/601156363571"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold text-lg hover:bg-[#1fb855] transition-colors flex items-center gap-2 shadow-lg shadow-[#25D366]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Free Consultation
            </motion.a>

            <motion.a
              href="#services"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.a>
          </div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/50 text-sm mt-12"
          >
            TrendMalayaa - Established 2021 | lubuk phone & baik pulih murah
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default PhoneScrolltelling;
