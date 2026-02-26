"use client";

import { FaGoogle, FaStar } from "react-icons/fa";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

// TODO: Replace "example" with your real Featurable widget ID
// 1. Create free account at https://featurable.com
// 2. Set up widget with your Google Business profile
// 3. Click "Embed" → "API" → copy widget ID
const FEATURABLE_WIDGET_ID = "example";

export default function CustomerReviews() {
  return (
    <section id="reviews" className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 md:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Google Badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-6 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-gray-100">
            <FaGoogle className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0" />
            <div className="flex gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-base sm:text-xl" />
              ))}
            </div>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight px-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Trusted by Thousands of Customers
            <br className="hidden sm:block" />
            <span className="text-gray-600"> Across Malaysia</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Real reviews from real customers who trust us for their mobile needs
          </p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4">
            <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-2 min-h-[40px] rounded-full shadow-md border border-gray-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Verified Reviews</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-2 min-h-[40px] rounded-full shadow-md border border-gray-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">50,000+ Customers</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-2 min-h-[40px] rounded-full shadow-md border border-gray-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">4.9 Rating</span>
            </div>
          </div>
        </div>

        {/* Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <ReactGoogleReviews
            layout="carousel"
            featurableId={FEATURABLE_WIDGET_ID}
            theme="light"
            nameDisplay="firstAndLastInitials"
            dateDisplay="relative"
            reviewVariant="card"
            maxCharacters={200}
            carouselAutoplay={true}
            carouselSpeed={5000}
            structuredData={true}
            brandName="TrendMalayaa"
          />
        </div>

        {/* Read All Reviews Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://share.google/Wc7aBfzA9pRbIOMg2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gray-900 hover:bg-black text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base group"
          >
            <FaGoogle className="text-lg sm:text-xl group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="whitespace-nowrap">Read All Google Reviews</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
