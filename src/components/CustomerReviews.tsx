"use client";

import { useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const GoogleIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reviews = [
  {
    name: "Ahmad Firdaus",
    initial: "AF",
    rating: 5,
    text: "Best phone repair shop in Malaysia! Fixed my iPhone screen in just 30 minutes. The staff was very professional and friendly. Highly recommended for anyone looking for quality repair services.",
    url: "https://share.google/4DvOANI8W1A0579xR",
    bgColor: "#F0F7FF",
    accentColor: "#008AFC",
  },
  {
    name: "Nur Aisyah",
    initial: "NA",
    rating: 5,
    text: "Amazing service! I bought my iPhone here with installment plan. Very easy process and the price is competitive. Will definitely come back for accessories too.",
    url: "https://share.google/wyLgeUhQYtLFylpid",
    bgColor: "#F5F0FF",
    accentColor: "#7C3AED",
  },
  {
    name: "Muhammad Haziq",
    initial: "MH",
    rating: 5,
    text: "Very satisfied with the battery replacement service. My phone feels brand new again! The warranty they provide gives me peace of mind. Thank you TrendMalayaa!",
    url: "https://share.google/FVwOsqQB670nWbVFU",
    bgColor: "#FFF0E6",
    accentColor: "#F59E0B",
  },
  {
    name: "Siti Nurhaliza",
    initial: "SN",
    rating: 5,
    text: "Great experience from start to finish. The team really knows their stuff when it comes to phone repairs. Fair pricing and fast turnaround. My go-to shop now!",
    url: "https://share.google/Rn9z9owLnYf5i10z4",
    bgColor: "#F0FFF4",
    accentColor: "#10B981",
  },
];

export default function CustomerReviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading fade in
      gsap.from(".reviews-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reviews-heading",
          start: "top 85%",
        },
      });

      // Each card gets its OWN ScrollTrigger — fades in individually as user scrolls
      const cards = gsap.utils.toArray<HTMLElement>(".review-card");
      cards.forEach((card, i) => {
        // Alternate: odd cards come from left, even from right
        const xOffset = i % 2 === 0 ? -40 : 40;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            x: xOffset,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // CTA button
      gsap.from(".reviews-cta", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reviews-cta",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="reviews" className="w-full relative overflow-hidden bg-[#FFF8F0] py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="reviews-heading text-center mb-12 sm:mb-16">
          {/* Google Badge */}
          <div className="inline-flex items-center justify-center gap-3 mb-6 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
            <GoogleIcon size={24} />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">5.0</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            What Our Customers Say
          </h2>

          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Real reviews from real customers across Malaysia
          </p>
        </div>

        {/* Review Cards Grid - all 4 visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <a
              key={index}
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className="review-card group block rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: review.bgColor }}
            >
              {/* Quote icon */}
              <FaQuoteLeft
                className="mb-4 opacity-20"
                size={24}
                style={{ color: review.accentColor }}
              />

              {/* Review text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: review.accentColor }}
                >
                  {review.initial}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} size={11} className="text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Google icon */}
                <GoogleIcon size={18} className="flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>

        {/* Read All Reviews Button */}
        <div className="reviews-cta text-center mt-10 sm:mt-14">
          <a
            href="https://share.google/Wc7aBfzA9pRbIOMg2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base group"
          >
            <GoogleIcon size={20} />
            <span>Read All Google Reviews</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
