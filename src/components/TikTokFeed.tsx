"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaTiktok } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TikTokFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoading, setScriptLoading] = useState(true);
  const [scriptError, setScriptError] = useState(false);
  const scriptLoadedRef = useRef(false);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useGSAP(
    () => {
      gsap.from(".tiktok-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tiktok-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".tiktok-stat", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tiktok-stat",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const loadScript = () => {
      try {
        const script = document.createElement("script");
        script.src = "https://widget.tagembed.com/embed.min.js";
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
          scriptLoadedRef.current = true;
          loadTimeoutRef.current = setTimeout(() => {
            setScriptLoading(false);
          }, 2000);
        };

        script.onerror = () => {
          console.error("Failed to load Tagembed TikTok widget");
          setScriptError(true);
          setScriptLoading(false);
        };

        const timeoutId = setTimeout(() => {
          widgetRef.current?.appendChild(script);
        }, 1000);

        return () => {
          clearTimeout(timeoutId);
          if (loadTimeoutRef.current) {
            clearTimeout(loadTimeoutRef.current);
          }
          if (widgetRef.current) {
            const existingScript = widgetRef.current.querySelector("script");
            if (existingScript) {
              widgetRef.current.removeChild(existingScript);
            }
          }
        };
      } catch (error) {
        console.error("Error loading Tagembed script:", error);
        setScriptError(true);
        setScriptLoading(false);
      }
    };

    const cleanup = loadScript();
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} id="tiktok" className="w-full bg-white py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with TikTok Icon */}
        <div className="tiktok-heading text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <FaTiktok className="text-4xl sm:text-5xl text-black" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 px-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <span className="text-[#008AFC]">10,000,000+</span> Views on TikTok —
            <br className="hidden sm:inline" /> Trusted by Thousands
          </h2>

          {/* Statistics Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="tiktok-stat bg-[#F0F7FF] rounded-2xl p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#008AFC] mb-1">
                300K+
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Followers</div>
            </div>

            <div className="tiktok-stat bg-[#F5F0FF] rounded-2xl p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#008AFC] mb-1">
                10M+
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Total Views</div>
            </div>

            <div className="tiktok-stat bg-[#FFF8F0] rounded-2xl p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#008AFC] mb-1">
                50K+
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Customers Served</div>
            </div>
          </div>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Watch real customer experiences, learn iPhone tips, discover new iOS features & get the latest promos first.
          </p>

          <a
            href="https://www.tiktok.com/@syafi.sayuti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base transform hover:scale-105"
          >
            <FaTiktok className="text-xl flex-shrink-0" />
            <span className="whitespace-nowrap">Follow TrendMalayaa on TikTok</span>
          </a>
        </div>

        {/* TikTok Widget */}
        <div className="max-w-6xl mx-auto">
          {scriptLoading && !scriptError && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#008AFC]"></div>
              <p className="mt-6 text-gray-500 text-lg">Loading TikTok feed...</p>
            </div>
          )}

          {scriptError && (
            <div className="bg-[#F8FAFC] rounded-2xl p-12 text-center border border-gray-100">
              <FaTiktok className="text-6xl text-black mx-auto mb-6" />
              <h5 className="text-2xl font-bold text-gray-900 mb-3">TikTok Feed</h5>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Our TikTok feed is temporarily unavailable. Visit our TikTok profile to see our latest videos.
              </p>
              <a
                href="https://www.tiktok.com/@syafi.sayuti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#008AFC] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                <FaTiktok className="text-xl" />
                Follow TrendMalayaa on TikTok
              </a>
            </div>
          )}

          <div
            ref={widgetContainerRef}
            className={scriptLoading || scriptError ? "hidden" : "tiktok-widget-shadow"}
          >
            <div ref={widgetRef}>
              <div
                className="tagembed-widget"
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                data-widget-id="316603"
                data-website="1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
