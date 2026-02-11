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
    <section id="tiktok" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h4
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Over 1 million views on TikTok.
        </h4>

        <div className="max-w-6xl mx-auto">
          {scriptLoading && !scriptError && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#008AFC]"></div>
              <p className="mt-6 text-gray-600 text-lg">Loading TikTok feed...</p>
            </div>
          )}

          {scriptError && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center shadow-lg">
              <FaTiktok className="text-6xl text-black mx-auto mb-6" />
              <h5 className="text-2xl font-bold text-gray-900 mb-3">
                TikTok Feed
              </h5>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Our TikTok feed is temporarily unavailable. Visit our TikTok profile to see our latest videos and repairs.
              </p>
              <a
                href="https://www.tiktok.com/@trendmalayaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                <FaTiktok className="text-xl" />
                Visit Our TikTok
              </a>
            </div>
          )}

          <div
            ref={widgetContainerRef}
            className={scriptLoading || scriptError ? "hidden" : ""}
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
