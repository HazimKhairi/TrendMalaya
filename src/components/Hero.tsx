"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaChevronRight } from "react-icons/fa";

const GoogleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const particleIdRef = useRef(0);
  const lastSpawnRef = useRef(0);

  // Cleanup particles that have finished animating
  useEffect(() => {
    if (!isHovering) return;
    const interval = setInterval(() => {
      if (!particleContainerRef.current) return;
      const particles = particleContainerRef.current.querySelectorAll(".fire-particle");
      particles.forEach((p) => {
        if (p.getAnimations().length === 0) {
          p.remove();
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, [isHovering]);

  const spawnFireParticle = useCallback((x: number, y: number) => {
    if (!particleContainerRef.current) return;
    const now = Date.now();
    if (now - lastSpawnRef.current < 40) return; // throttle
    lastSpawnRef.current = now;

    const colors = ["#5B0A0A", "#7C3AED", "#F59E0B", "#10B981", "#EC4899"];
    const color = colors[particleIdRef.current % colors.length];
    particleIdRef.current++;

    const size = 4 + Math.random() * 6;
    const particle = document.createElement("div");
    particle.className = "fire-particle";
    particle.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}40;
      pointer-events: none;
      z-index: 40;
      transform: translate(-50%, -50%);
    `;

    particleContainerRef.current.appendChild(particle);

    const xDrift = (Math.random() - 0.5) * 60;
    const yDrift = -(30 + Math.random() * 50);
    const rotation = (Math.random() - 0.5) * 90;

    particle.animate(
      [
        { opacity: 0.8, transform: "translate(-50%, -50%) scale(1)" },
        { opacity: 1, transform: `translate(calc(-50% + ${xDrift * 0.3}px), calc(-50% + ${yDrift * 0.3}px)) scale(1.5)` },
        { opacity: 0, transform: `translate(calc(-50% + ${xDrift}px), calc(-50% + ${yDrift}px)) scale(0)` },
      ],
      {
        duration: 600 + Math.random() * 400,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
      }
    ).onfinish = () => particle.remove();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !revealRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    revealRef.current.style.clipPath = `circle(15% at ${xPercent}% ${yPercent}%)`;

    // Spawn fire particle at cursor
    spawnFireParticle(x, y);
  }, [spawnFireParticle]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (revealRef.current) {
      revealRef.current.style.clipPath = `circle(0% at 50% 50%)`;
    }
  }, []);

  useGSAP(
    () => {
      // Text reveal
      gsap.from(".hero-text > *", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Phone image parallax on scroll
      if (phoneRef.current) {
        gsap.to(phoneRef.current, {
          y: -60,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Phone float-in from right
      gsap.from(".hero-phone", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="hero" className="relative bg-white overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Text Content */}
          <div className="flex-1 w-full hero-text">
            <h1
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-gray-900 leading-[1.02] tracking-tight mb-6"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              No. 1 Mobile
              <br />
              Specialist
              <br />
              MY
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-md">
              We can fix your phone.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              {/* Start Repair CTA */}
              <a
                href="https://wa.me/601156363571"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5B0A0A] hover:bg-[#4A0808] text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2.5 transition-colors text-base shadow-lg shadow-red-900/30 hover:shadow-red-900/40"
              >
                Start Repair
                <FaChevronRight size={12} />
              </a>

              {/* Google Review */}
              <Link
                href="https://share.google/Wc7aBfzA9pRbIOMg2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                <GoogleIcon size={20} />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={13} className="text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-gray-500">Read or leave a review</span>
              </Link>
            </div>
          </div>

          {/* Right - Phone Image with cursor reveal effect */}
          <div ref={phoneRef} className="flex-1 w-full flex justify-center lg:justify-end hero-phone">
            <div
              ref={imageContainerRef}
              className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] cursor-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Blob background shape */}
              <div
                className="absolute inset-[-10%] bg-gradient-to-br from-[#F0F7FF] via-[#F5F0FF] to-[#FFF8F0] opacity-80"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />

              {/* Base image - product.png */}
              <Image
                src="/images/product.png"
                alt="Premium mobile phones - TrendMalayaa mobile specialist Malaysia"
                fill
                priority
                className="object-contain relative z-10 drop-shadow-2xl"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 520px"
              />

              {/* Reveal image - product-2.jpeg, only visible in circle around cursor */}
              <div
                ref={revealRef}
                className="absolute inset-0 z-20 transition-[clip-path] duration-200 ease-out"
                style={{ clipPath: "circle(0% at 50% 50%)" }}
              >
                <Image
                  src="/images/product-2.jpeg"
                  alt="Phone repair services - TrendMalayaa"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 520px"
                />
              </div>

              {/* Fire particle container */}
              <div
                ref={particleContainerRef}
                className="absolute inset-0 z-30 pointer-events-none overflow-visible"
              />

              {/* Custom cursor glow - visible only on hover */}
              {isHovering && (
                <div className="pointer-events-none absolute inset-0 z-30" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
