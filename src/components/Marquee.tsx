"use client";

import React from "react";

export default function Marquee() {
  const marqueeText =
    "50,000+ Customers • 9 Branches • Same-Day Repair • Installment Available • Original Quality Parts • Trusted Since 2021";

  return (
    <div className="w-full bg-white py-6 sm:py-8 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <span className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-extrabold text-[#404040]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {marqueeText} &nbsp;&nbsp;&nbsp;
        </span>
        <span className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-extrabold text-[#404040]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {marqueeText} &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}
