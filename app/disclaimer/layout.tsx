import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer - KayaKalp | Dr. Lekha Jadhav",
  description: "Read the medical disclaimer for KayaKalp Clinic. Important information about the use of our website and services. Professional medical advice requires consultation.",
  keywords: [
    "medical disclaimer",
    "KayaKalp disclaimer",
    "medical advice disclaimer",
    "healthcare disclaimer Pune"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Medical Disclaimer - KayaKalp Clinic",
    description: "Medical disclaimer and important information about KayaKalp Clinic services.",
    url: "https://www.kayakalpbydrlekha.com/disclaimer",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.kayakalpbydrlekha.com/disclaimer',
  },
};

export default function DisclaimerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
