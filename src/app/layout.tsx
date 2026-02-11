import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const baseUrl = "https://trendmalaya.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TrendMalayaa - Mobile Specialist | Phone Repair & Sales Malaysia",
    template: "%s | TrendMalayaa",
  },
  description:
    "TrendMalayaa - Your trusted mobile specialist since 2021. Professional phone repair, mobile phone sales, and accessories across 9 locations in Perak, Penang, Kedah & Perlis. Lubuk phone & baik pulih murah. 10,000+ satisfied customers yearly.",
  keywords: [
    "phone repair near me",
    "buy iPhone Malaysia",
    "mobile phone shop",
    "lubuk iphone murah",
    "supplier iphone malaysia",
    "repair phone nearby",
    "repair phone murah",
    "original apple repair iphone",
    "iphone harga borong",
    "phone repair Perak",
    "phone repair Penang",
    "TrendMalayaa",
    "TrendMalaya",
    "Trend Malayaa",
    "Trend Malaya",
    "trendmalayaa phone repair",
    "trendmalaya phone repair",
    "baiki phone murah",
    "kedai phone Ipoh",
    "kedai phone Penang",
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
