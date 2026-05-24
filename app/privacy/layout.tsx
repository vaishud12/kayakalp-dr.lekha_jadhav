import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - KayaKalp | Dr. Lekha Jadhav",
  description: "Learn how KayaKalp Clinic protects your personal and medical information. Our privacy policy outlines data collection, usage, and security practices.",
  keywords: [
    "privacy policy",
    "data protection",
    "medical privacy",
    "patient confidentiality",
    "KayaKalp privacy"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - KayaKalp Clinic",
    description: "Privacy policy and data protection practices at KayaKalp Clinic.",
    url: "https://www.kayakalpbydrlekha.com/privacy",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.kayakalpbydrlekha.com/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
