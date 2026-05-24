import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - KayaKalp | Dr. Lekha Jadhav",
  description: "Terms and conditions for using KayaKalp Clinic services. Appointment policies, payment terms, and user responsibilities.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "clinic policies",
    "appointment terms",
    "KayaKalp terms"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - KayaKalp Clinic",
    description: "Terms and conditions for KayaKalp Clinic services and website usage.",
    url: "https://www.kayakalpbydrlekha.com/terms",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.kayakalpbydrlekha.com/terms',
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
