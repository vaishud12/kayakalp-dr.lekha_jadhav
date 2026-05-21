import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment - KayaKalp | Dr. Lekha Jadhav Clinic",
  description: "Schedule your consultation with Dr. Lekha Jadhav for weight management, obesity treatment, or skin care services in Kharadi, Pune. Book your appointment online today!",
  keywords: [
    "book appointment Pune",
    "schedule consultation",
    "Dr. Lekha Jadhav appointment",
    "weight loss consultation",
    "skin care appointment Kharadi",
    "dermatologist appointment Pune"
  ],
  openGraph: {
    title: "Book Appointment - KayaKalp Clinic",
    description: "Schedule your consultation with Dr. Lekha Jadhav for personalized weight management and skin care treatments.",
    url: "https://kayakalpbydrlekha.com/book-appointment",
    type: "website",
  },
  alternates: {
    canonical: 'https://kayakalpbydrlekha.com/book-appointment',
  },
};

export default function BookAppointmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
