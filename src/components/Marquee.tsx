"use client";

import React from "react";

export default function Marquee() {
  const marqueeText =
    "Installment available. Various Payment Methods. More than 10,000 Satisfied Customers.";

  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <span className="inline-block text-4xl md:text-6xl lg:text-[86px] font-extrabold text-[#404040]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {marqueeText} &nbsp;&nbsp;&nbsp;
        </span>
        <span className="inline-block text-4xl md:text-6xl lg:text-[86px] font-extrabold text-[#404040]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {marqueeText} &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}
