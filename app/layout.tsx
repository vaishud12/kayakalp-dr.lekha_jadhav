import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayakalp - Dr. Lekha Jadhav | Weight Management & Skin Care Clinic in Pune",
  description: "Leading weight loss clinic in Kharadi, Pune offering medicated weight management, metabolic health, insulin resistance treatment & advanced dermatology. Expert obesity care & wellness programs by Dr. Lekha Jadhav.",
  keywords: [
    "Dr. Lekha Jadhav",
    "Kayakalp clinic",
    "weight management Pune",
    "obesity treatment Kharadi",
    "skin care clinic Pune",
    "dermatologist Kharadi",
    "laser hair removal Pune",
    "pore refinement treatment",
    "bridal glow packages",
    "body contouring Pune",
    "hair restoration Pune",
    "aesthetic medicine",
    "precision nutrition plan",
    "weight loss programs",
    "skin specialist Pune",
    "Dr. Ninad Bhosale",
    "Dr. Sanjiv Jadhav",
    "Dr. Shraddha Jadhav",
    "medical weight management",
    "chemical peels Pune",
    "rosacea treatment",
    "sensitive skin care",
    "medicated weight loss Pune",
    "metabolic health clinic",
    "insulin resistance treatment",
    "diabetes management Pune",
    "wellness clinic Kharadi",
    "prescription weight loss",
    "obesity medicine specialist"
  ],
  authors: [{ name: "Dr. Lekha Jadhav" }],
  creator: "KayaKalp Clinic",
  publisher: "KayaKalp Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kayakalp – Dr. Lekha Jadhav | Weight Management & Skin Care Clinic",
    description: "Transform your health with medicated weight loss, metabolic health & insulin resistance treatment. Expert skin care, laser hair removal, body contouring & wellness programs in Kharadi, Pune.",
    url: "https://kayakalpbydrlekha.com", // replace with actual domain
    siteName: "Kayakalp - Dr. Lekha Jadhav",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "KayaKalp Clinic - Dr. Lekha Jadhav"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KayaKalp – Dr. Lekha Jadhav | Weight Management & Skin Care",
    description: "Medicated weight loss, metabolic health, insulin resistance treatment & advanced skin care in Kharadi, Pune. Book your consultation today!",
    images: ["/logo.jpg"],
    creator: "@kayakalpclinic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  alternates: {
    canonical: 'https://kayakalpbydrlekha.com', // replace with actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://kayakalpbydrlekha.com",
        "name": "KayaKalp - Dr. Lekha Jadhav",
        "alternateName": "Dr. Lekha Jadhav Clinic",
        "url": "https://kayakalpbydrlekha.com",
        "telephone": "+91-76663-20828",
        "email": "kayakalp.drlekha@gmail.com",
        "image": "https://kayakalpbydrlekha.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shraddha Hospital, Survey No 43, Parashar Society, Pune Nagar Rd, Ashoka Nagar",
          "addressLocality": "Kharadi",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5601",
          "longitude": "73.9364"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "21:00",
            "description": "By appointment only"
          }
        ],
        "priceRange": "₹₹",
        "medicalSpecialty": ["Dermatology", "Weight Management", "Aesthetic Medicine", "Obesity Medicine", "Metabolic Health"],
        "availableService": [
          {
            "@type": "MedicalTherapy",
            "name": "Medicated Weight Loss Programs",
            "description": "Personalized weight loss and obesity treatment with medical supervision"
          },
          {
            "@type": "MedicalTherapy",
            "name": "Metabolic Health & Insulin Resistance",
            "description": "Comprehensive metabolic health management and insulin resistance treatment"
          },
          {
            "@type": "MedicalTherapy",
            "name": "Wellness Programs",
            "description": "Holistic wellness and preventive health care programs"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Laser Hair Removal",
            "description": "Effective, long-term reduction for smooth, worry-free skin"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Pore Refinement & Texture",
            "description": "Deep cleansing and surface-smoothing dermatological care"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Bridal & Event Glow",
            "description": "Pre-event treatments for radiant, picture-perfect results"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Body Contouring & Sculpting",
            "description": "Non-invasive solutions for a toned and refined silhouette"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Hair Restoration & Growth",
            "description": "Advanced follicular solutions for thicker, healthier hair"
          }
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://kayakalpbydrlekha.com/#Doctor%20Panel",
        "name": "Dr. Lekha Jadhav",
        "jobTitle": "Dermatologist & Weight Management Specialist",
        "worksFor": {
          "@id": "https://kayakalpbydrlekha.com"
        },
        "medicalSpecialty": ["Dermatology", "Weight Management", "Aesthetic Medicine"],
        "alumniOf": "MBBS, MD (Dermatology)",
        "description": "Expert in weight management, obesity care, and advanced skin care treatments"
      },
      {
        "@type": "WebSite",
        "@id": "https://kayakalpbydrlekha.com",
        "url": "https://kayakalpbydrlekha.com",
        "name": "Kayakalp - Dr. Lekha Jadhav",
        "description": "Weight Management & Skin Care Clinic in Kharadi, Pune",
        "publisher": {
          "@id": "https://kayakalpbydrlekha.com"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
