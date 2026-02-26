"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const marqueeText =
    "50,000+ Customers • 11 Branches • Same-Day Repair • Installment Available • Original Quality Parts • Trusted Since 2021";

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="w-full bg-white py-6 sm:py-8 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <span
          className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-extrabold text-[#404040]"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {marqueeText} &nbsp;&nbsp;&nbsp;
        </span>
        <span
          className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-extrabold text-[#404040]"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {marqueeText} &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}
