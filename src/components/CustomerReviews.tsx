"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGoogle, FaStar } from "react-icons/fa";

export default function CustomerReviews() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [scriptLoading, setScriptLoading] = useState(true);
  const [scriptError, setScriptError] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate script loading
    if (scriptLoadedRef.current) return;

    const loadScript = () => {
      try {
        const script = document.createElement("script");
        script.src =
          "https://cdn.trustindex.io/loader.js?1f604496462e530d099672b755c";
        script.async = true;
        script.defer = true;

        // Handle successful script load
        script.onload = () => {
          setScriptLoading(false);
          scriptLoadedRef.current = true;
        };

        // Handle script load errors
        script.onerror = () => {
          console.error("Failed to load Trustindex widget");
          setScriptError(true);
          setScriptLoading(false);
        };

        // Use setTimeout to defer loading and reduce rate limit issues
        const timeoutId = setTimeout(() => {
          widgetRef.current?.appendChild(script);
        }, 500);

        return () => {
          clearTimeout(timeoutId);
          // Cleanup script on unmount
          if (widgetRef.current) {
            const existingScript = widgetRef.current.querySelector("script");
            if (existingScript) {
              widgetRef.current.removeChild(existingScript);
            }
          }
        };
      } catch (error) {
        console.error("Error loading Trustindex script:", error);
        setScriptError(true);
        setScriptLoading(false);
      }
    };

    const cleanup = loadScript();
    return cleanup;
  }, []);

  return (
    <section id="reviews" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGoogle className="text-4xl text-blue-600" />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-2xl" />
              ))}
            </div>
          </div>
          <h4
            className="text-2xl md:text-[45px] font-bold text-gray-900"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Our customers love us.
          </h4>
        </div>

        {/* Trustindex Widget */}
        <div className="max-w-6xl mx-auto">
          {scriptLoading && !scriptError && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#008AFC]"></div>
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          )}

          {scriptError && (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <FaGoogle className="text-5xl text-blue-600 mx-auto mb-4" />
              <h5 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Reviews
              </h5>
              <p className="text-gray-600 mb-4">
                Reviews are temporarily unavailable. Please check back later or visit our Google Business profile.
              </p>
              <a
                href="https://www.google.com/search?q=TrendMalayaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#008AFC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View on Google
              </a>
            </div>
          )}

          <div
            ref={widgetRef}
            className={scriptLoading || scriptError ? "hidden" : ""}
          />
        </div>

        {/* Trustindex Badge */}
        {!scriptError && (
          <div className="text-right mt-8">
            <p className="text-gray-600 text-sm">
              Verified by <span className="font-semibold">Trustindex</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
