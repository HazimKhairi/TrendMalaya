import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const baseUrl = "https://trendmalaya.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TrendMalayaa - Mobile Specialist | Phone Repair & Sales Malaysia",
    template: "%s | TrendMalayaa",
  },
  description:
    "TrendMalayaa - Your trusted mobile specialist since 2021. Professional phone repair, mobile phone sales, and accessories across 9 locations in Perak, Penang, Kedah & Perlis. Lubuk phone & baik pulih murah. 10,000+ satisfied customers yearly.",
  keywords: [
    // Brand variations
    "TrendMalayaa", "TrendMalaya", "Trend Malayaa", "Trend Malaya", "trendmalayaa malaysia", "trendmalaya malaysia",
    "trend malayaa malaysia", "trend malaya malaysia", "trendmalayaa mobile", "trendmalayaa mobile shop",
    "trendmalayaa phone shop", "trendmalayaa iphone shop", "trendmalayaa kedai phone",
    // Brand misspellings
    "trandmalayaa", "trand malayaa", "trandmalaya", "trand malaya", "trendmalya", "trend malya",
    "trendmalayia", "trend malayia", "trendmalaysia", "trend malaysia", "trendmalaysian", "trend malaysian",
    // Location-specific
    "trendmalayaa parit buntar", "trendmalayaa taiping", "trendmalayaa alor setar", "trendmalayaa kangar",
    "trendmalayaa penang", "trendmalayaa perak", "trendmalayaa kedah", "trendmalayaa perlis",
    "trendmalayaa bukit mertajam", "trendmalayaa seri iskandar", "trendmalayaa bayan baru",
    "trendmalayaa ipoh", "trendmalayaa manjung",
    // Services
    "trendmalayaa repair", "trendmalayaa iphone", "trendmalayaa iphone murah", "trendmalayaa iphone ansuran",
    "trendmalayaa repair iphone", "trendmalayaa repair phone", "trendmalayaa tukar screen", "trendmalayaa tukar bateri",
    "trendmalayaa ansuran", "trendmalayaa installment", "trendmalayaa smartphone",
    // Reviews & Trust
    "trendmalayaa review", "trendmalayaa google review", "trendmalayaa trusted", "trendmalayaa original",
    "trendmalayaa legit", "trendmalayaa rating", "trendmalayaa feedback", "trendmalayaa testimoni",
    "trendmalayaa pengalaman", "trendmalayaa scam",
    // Contact & Info
    "trendmalayaa contact", "trendmalayaa whatsapp", "trendmalayaa phone number", "trendmalayaa lokasi",
    "trendmalayaa address", "trendmalayaa waktu operasi", "trendmalayaa buka hari ini", "trendmalayaa open today",
    "trendmalayaa map", "trendmalayaa near me", "trendmalayaa hq", "trendmalayaa branch",
    // Promotions
    "trendmalayaa promo", "trendmalayaa discount", "trendmalayaa sale", "trendmalayaa murah",
    "trendmalayaa harga iphone", "trendmalayaa price", "trendmalayaa latest promo", "trendmalayaa event",
    // Comparisons
    "trendmalayaa vs switch", "trendmalayaa vs machines", "trendmalayaa vs directd", "trendmalayaa vs compasia",
    "trendmalayaa better than", "trendmalayaa recommended", "trendmalayaa terbaik",
    // Short forms
    "tm parit buntar", "tm taiping", "tm alor setar", "tm kangar", "tm phone shop", "tm iphone shop",
    "tm repair", "tm ansuran", "tm mobile", "tm hq",
    // Generic phone shop keywords
    "kedai phone malaysia", "kedai phone murah", "kedai iphone malaysia", "kedai iphone murah",
    "kedai phone parit buntar", "kedai phone taiping", "kedai phone alor setar", "kedai phone kangar",
    "kedai phone penang", "mobile shop malaysia", "phone shop near me", "kedai smartphone",
    "kedai handphone", "kedai jual iphone", "kedai jual phone second", "kedai phone trusted",
    "kedai phone original", "kedai phone ansuran", "kedai phone installment", "kedai phone terbaik",
    "phone store malaysia", "iphone shop malaysia", "kedai gadget malaysia", "iphone murah malaysia",
    "kedai phone berdekatan",
    // Repair keywords
    "repair iphone malaysia", "repair phone parit buntar", "repair phone taiping", "repair iphone murah",
    "repair phone near me", "servis repair iphone", "servis repair phone", "tukar bateri iphone",
    "tukar screen iphone", "tukar lcd iphone", "baiki phone rosak", "phone repair specialist",
    "kedai repair iphone", "repair motherboard iphone", "repair water damage phone", "repair phone cepat",
    "kedai repair phone terpercaya", "baiki phone tak boleh on", "repair iphone original part",
    "tukar screen murah", "tukar bateri murah", "iphone repair perak", "repair phone kedah",
    "repair phone perlis", "kedai baiki phone malaysia", "phone repair near me", "buy iPhone Malaysia",
    "mobile phone shop", "lubuk iphone murah", "original apple repair iphone", "baiki phone murah",
    // Supplier/Wholesale
    "supplier iphone malaysia", "pembekal iphone malaysia", "borong iphone malaysia", "iphone wholesale malaysia",
    "supplier phone malaysia", "borong phone murah", "pemborong smartphone", "iphone distributor malaysia",
    "stok iphone malaysia", "pembekal aksesori phone", "borong aksesori phone", "supplier gadget malaysia",
    "iphone stockist malaysia", "wholesale iphone perak", "supplier phone perak", "kedai borong phone",
    "iphone bulk order malaysia", "reseller iphone malaysia", "supplier iphone trusted", "iphone harga borong",
    // Installment/Financing
    "iphone ansuran malaysia", "iphone installment malaysia", "iphone bayar bulanan", "kedai iphone ansuran",
    "iphone tanpa kad kredit", "iphone aeon ansuran", "iphone kredit malaysia", "iphone easy payment",
    "phone installment shop", "iphone ansuran parit buntar", "iphone ansuran taiping",
    "iphone ansuran alor setar", "iphone ansuran kangar", "phone ansuran mudah", "iphone bayar bulanan tanpa cc",
    // Area-specific
    "kedai phone Ipoh", "kedai phone Penang", "phone repair Perak", "phone repair Penang",
  ],
  authors: [{ name: "TrendMalayaa" }],
  creator: "TrendMalayaa",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: baseUrl,
    siteName: "TrendMalayaa",
    title: "TrendMalayaa - Mobile Specialist | Phone Repair & Sales Malaysia",
    description:
      "Professional phone repair, mobile sales & accessories across 9 locations in Malaysia. Trusted by 10,000+ customers yearly. Lubuk phone & baik pulih murah.",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "TrendMalayaa Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TrendMalayaa - Mobile Specialist",
    description:
      "Professional phone repair, mobile sales & accessories across 9 locations in Malaysia.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "TrendMalayaa",
      alternateName: ["TrendMalaya", "Trend Malaya", "Trend Malayaa"],
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
      sameAs: [
        "https://www.tiktok.com/@syafi.sayuti",
        "https://www.instagram.com/trendmalayaa/",
        "https://www.facebook.com/trendmalayaa",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+601156363571",
        contactType: "customer service",
        availableLanguage: ["Malay", "English"],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // Service schemas
    {
      "@type": "Service",
      "@id": `${baseUrl}/#phone-repair`,
      name: "Phone Repair Service",
      description: "Professional phone and iPhone repair services including screen replacement, battery replacement, motherboard repair, and water damage repair. Original parts with warranty.",
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: ["Perak", "Penang", "Kedah", "Perlis"],
      offers: {
        "@type": "Offer",
        priceRange: "RM",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#mobile-sales`,
      name: "Mobile Phone Sales",
      description: "Original iPhone and smartphone sales with competitive prices, wholesale options, and flexible installment plans without credit card requirement.",
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: ["Perak", "Penang", "Kedah", "Perlis"],
      offers: {
        "@type": "Offer",
        priceRange: "RM",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#accessories`,
      name: "Phone Accessories",
      description: "Complete range of original phone accessories including cases, screen protectors, chargers, cables, and more.",
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: ["Perak", "Penang", "Kedah", "Perlis"],
      offers: {
        "@type": "Offer",
        priceRange: "RM",
        availability: "https://schema.org/InStock",
      },
    },
    // FAQ schema
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are TrendMalayaa branches located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TrendMalayaa has 9 branches across Malaysia: Parit Buntar, Bukit Mertajam, Taiping (Kamunting), Alor Setar, Seri Iskandar, Bayan Baru (Penang), Ipoh, Manjung, and Kangar (Perlis). All branches are open daily from 10 AM to 9 PM.",
          },
        },
        {
          "@type": "Question",
          name: "What services does TrendMalayaa offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TrendMalayaa is a mobile specialist offering three main services: 1) Professional phone repair (screen replacement, battery replacement, motherboard repair, water damage repair), 2) Mobile phone sales (original iPhones and smartphones at competitive prices), and 3) Phone accessories (cases, screen protectors, chargers, and more).",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer iPhone installment plans without credit card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! TrendMalayaa offers flexible iPhone installment plans (ansuran) without requiring a credit card. You can pay monthly with easy approval. Visit any of our 9 branches or WhatsApp +60115636357 for more details.",
          },
        },
        {
          "@type": "Question",
          name: "Are TrendMalayaa iPhones original?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all iPhones and smartphones sold at TrendMalayaa are 100% original. We are a trusted mobile specialist established in 2021 with over 10,000 satisfied customers yearly. Check our Google reviews for customer feedback.",
          },
        },
        {
          "@type": "Question",
          name: "How much does phone repair cost at TrendMalayaa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Phone repair costs vary depending on the model and type of repair needed. We offer competitive prices for screen replacement, battery replacement, and other repairs. Contact us via WhatsApp +60115636357 or visit any branch for a free quotation.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide warranty for phone repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, TrendMalayaa provides warranty coverage for all phone repairs. We use original parts and our repairs are done by professional technicians. Warranty terms vary by repair type.",
          },
        },
      ],
    },
    ...[
      {
        name: "TrendMalayaa Parit Buntar",
        address: "No 55, Jalan Maharaja, Pusat Bandar Baru, 34200 Parit Buntar, Perak",
        telephone: "+601156363571",
        locality: "Parit Buntar",
        region: "Perak",
        postalCode: "34200",
      },
      {
        name: "TrendMalayaa Bukit Mertajam",
        address: "No 53 (Ground Floor), Lorong Perda Utama 3, Taman Prominence, 14000 Bukit Mertajam, Pulau Pinang",
        telephone: "+601154070847",
        locality: "Bukit Mertajam",
        region: "Pulau Pinang",
        postalCode: "14000",
      },
      {
        name: "TrendMalayaa Taiping",
        address: "89, Jalan Taiping Utara, Taman Taiping Utara, 34600 Kamunting, Perak",
        telephone: "+60113760106",
        locality: "Kamunting",
        region: "Perak",
        postalCode: "34600",
      },
      {
        name: "TrendMalayaa Alor Setar",
        address: "929, Jalan Sultan Badlishah, 05000 Alor Setar Kedah, Malaysia",
        telephone: "+60111670 1026",
        locality: "Alor Setar",
        region: "Kedah",
        postalCode: "05000",
      },
      {
        name: "TrendMalayaa Seri Iskandar",
        address: "No 147, PSRN SIBC 9, Bandar Seri Iskandar 32610 Perak, Malaysia",
        telephone: "+60183143237",
        locality: "Seri Iskandar",
        region: "Perak",
        postalCode: "32610",
      },
      {
        name: "TrendMalayaa Bayan Baru",
        address: "1-1-2 Tingkat Mahsuri 2, 1-Sky Commercial Lot, 11950 Bayan Lepas Penang, Malaysia",
        telephone: "+60186600765",
        locality: "Bayan Lepas",
        region: "Pulau Pinang",
        postalCode: "11950",
      },
      {
        name: "TrendMalayaa Ipoh",
        address: "109, Jalan Kamaruddin Isa, Taman Fair Park, 31400 Ipoh, Perak",
        telephone: "+60176060658",
        locality: "Ipoh",
        region: "Perak",
        postalCode: "31400",
      },
      {
        name: "TrendMalayaa Manjung",
        address: "NO 312(Bawah), Jalan PPMP 3/2, Pusat Perniagaan Manjung Point 3, 32040 Seri Manjung, Perak",
        telephone: "+60173176660",
        locality: "Seri Manjung",
        region: "Perak",
        postalCode: "32040",
      },
      {
        name: "TrendMalayaa Kangar",
        address: "No 18 (GF) Jalan Kangar Jaya 4, Kangar Jaya, Jalan Tuanku Syed Putra, 01000 Kangar, Perlis",
        telephone: "+60179766002",
        locality: "Kangar",
        region: "Perlis",
        postalCode: "01000",
      },
    ].map((loc) => ({
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#${loc.locality.toLowerCase().replace(/\s/g, "-")}`,
      name: loc.name,
      image: `${baseUrl}/images/logo.png`,
      telephone: loc.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.locality,
        addressRegion: loc.region,
        postalCode: loc.postalCode,
        addressCountry: "MY",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
      parentOrganization: { "@id": `${baseUrl}/#organization` },
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
