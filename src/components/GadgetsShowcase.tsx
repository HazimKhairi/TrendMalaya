"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GadgetsShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Background parallax
      gsap.to(".gadget-bg", {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Text reveal
      gsap.from(".gadget-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".gadget-link", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-20 overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[534px] flex flex-col items-center justify-center">
          {/* Background Image with parallax */}
          <div className="gadget-bg absolute inset-[-20%] w-[140%] h-[140%]">
            <Image
              src="/images/new_images/part_3.png"
              alt="TrendMalayaa professional phone repair workshop"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Heading */}
          <h2
            className="gadget-text text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[60px] text-white relative z-10 mb-4 sm:mb-6 px-4 leading-tight"
            style={{ fontFamily: "Helvetica, sans-serif", fontWeight: "bold" }}
          >
            Trusted by Thousands. Chosen Every Day.
          </h2>

          {/* Visit Branch Link */}
          <Link
            href="#footer"
            className="gadget-link flex items-center gap-2 relative z-10 text-white/80 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] px-4 py-2"
          >
            Visit Our Nearest Branch
            <FaArrowRight className="text-sm flex-shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GadgetsShowcase;
