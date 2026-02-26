"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GadgetsShowcase from '../components/GadgetsShowcase';
import Marquee from '../components/Marquee';
// import WhyTrendMalayaa from '../components/WhyTrendMalayaa'; // Removed - repetitive with Services
import CustomerReviews from '../components/CustomerReviews';
import TikTokFeed from '../components/TikTokFeed';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <GadgetsShowcase />
      <Marquee />
      {/* <WhyTrendMalayaa /> */}
      <CustomerReviews />
      <TikTokFeed />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
