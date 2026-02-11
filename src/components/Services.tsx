"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  bgColor: string;
  textColor: string;
  subtitleColor?: string;
  imageSrc: string;
  linkHref: string;
  imageAlt: string;
  gradientFrom: string;
}

const ServiceCard = ({
  title,
  subtitle,
  bgColor,
  textColor,
  subtitleColor,
  imageSrc,
  linkHref,
  imageAlt,
  gradientFrom,
}: ServiceCardProps) => {
  return (
    <Link href={linkHref} className="block h-full">
      <motion.div
        className="w-full rounded-[30px] flex flex-col h-full overflow-hidden relative"
        style={{ backgroundColor: bgColor, minHeight: '480px' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-6 md:p-8 relative z-10">
          <h3
            className="mb-2 font-bold"
            style={{
              fontSize: '40px',
              color: textColor,
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
              lineHeight: '1.2',
            }}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              style={{
                fontSize: '16px',
                color: subtitleColor || textColor,
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 'normal',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="relative mt-auto h-[280px]">
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${gradientFrom} 0%, transparent 40%)`,
            }}
          />
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-black text-3xl md:text-[44px] font-bold mb-12"
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >
          Our Services.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Mobile Phone Sales."
            subtitle="New & certified devices."
            bgColor="rgba(163, 217, 246, 0.75)"
            textColor="black"
            subtitleColor="rgb(128, 128, 128)"
            imageSrc="/images/product-2.jpeg"
            imageAlt="Mobile Phone Sales"
            linkHref=""
            gradientFrom="rgba(163, 217, 246, 0.75)"
          />
          <ServiceCard
            title="Professional Phone Repair."
            bgColor="rgb(252, 249, 230)"
            textColor="black"
            imageSrc="/images/phone-repair.png"
            imageAlt="Professional Phone Repair"
            linkHref=""
            gradientFrom="rgb(252, 249, 230)"
          />
          <ServiceCard
            title="Accessories & Gadgets."
            subtitle="All brands."
            bgColor="rgb(0, 0, 0)"
            textColor="white"
            subtitleColor="rgb(191, 191, 191)"
            imageSrc="/images/accessories.png"
            imageAlt="Accessories & Gadgets"
            linkHref=""
            gradientFrom="rgb(0, 0, 0)"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
