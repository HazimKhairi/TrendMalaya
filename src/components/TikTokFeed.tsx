"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaTiktok } from "react-icons/fa";

export default function TikTokFeed() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoading, setScriptLoading] = useState(true);
  const [scriptError, setScriptError] = useState(false);
  const scriptLoadedRef = useRef(false);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Prevent duplicate script loading
    if (scriptLoadedRef.current) return;

    const loadScript = () => {
      try {
        const script = document.createElement("script");
        script.src = "https://widget.tagembed.com/embed.min.js";
        script.type = "text/javascript";
        script.async = true;

        // Handle successful script load
        script.onload = () => {
          scriptLoadedRef.current = true;
          // Give the widget time to initialize
          loadTimeoutRef.current = setTimeout(() => {
            setScriptLoading(false);
          }, 2000);
        };

        // Handle script load errors
        script.onerror = () => {
          console.error("Failed to load Tagembed TikTok widget");
          setScriptError(true);
          setScriptLoading(false);
        };

        // Defer loading to improve initial page load
        const timeoutId = setTimeout(() => {
          widgetRef.current?.appendChild(script);
        }, 1000);

        return () => {
          clearTimeout(timeoutId);
          if (loadTimeoutRef.current) {
            clearTimeout(loadTimeoutRef.current);
          }
          // Cleanup script on unmount
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
    <section id="tiktok" className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with TikTok Icon */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <FaTiktok className="text-4xl sm:text-5xl text-black" />
          </div>

          {/* Main Headline */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 px-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <span className="text-red-600">10,000,000+</span> Views on TikTok —
            <br className="hidden sm:inline" /> Trusted by Thousands
          </h2>

          {/* Statistics Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* Followers */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                300K+
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                Followers
              </div>
            </div>

            {/* Total Views */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                10M+
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                Total Views
              </div>
            </div>

            {/* Customers Served */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                50K+
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                Customers Served
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Watch real customer experiences, learn iPhone tips, discover new iOS features & get the latest promos first.
          </p>

          {/* Follow Button */}
          <a
            href="https://www.tiktok.com/@syafi.sayuti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-black hover:bg-gray-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg transform hover:scale-105"
          >
            <FaTiktok className="text-xl sm:text-2xl flex-shrink-0" />
            <span className="whitespace-nowrap">Follow TrendMalayaa on TikTok</span>
          </a>
        </div>

        {/* TikTok Widget */}
        <div className="max-w-6xl mx-auto">
          {scriptLoading && !scriptError && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600"></div>
              <p className="mt-6 text-gray-600 text-lg">Loading TikTok feed...</p>
            </div>
          )}

          {scriptError && (
            <div className="bg-white rounded-2xl p-12 text-center shadow-xl border-2 border-gray-100">
              <FaTiktok className="text-6xl text-black mx-auto mb-6" />
              <h5 className="text-2xl font-bold text-gray-900 mb-3">
                TikTok Feed
              </h5>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Our TikTok feed is temporarily unavailable. Visit our TikTok profile to see our latest videos and repairs.
              </p>
              <a
                href="https://www.tiktok.com/@syafi.sayuti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg"
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
