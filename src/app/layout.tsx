import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adapasrivatsav.in"),
  alternates: { canonical: "/" },
  title: "Adapa SriVatsav — Software Developer",
  description: "Adapa SriVatsav is a software developer building production-grade applications, scalable backend systems and AI-integrated workflows in Hyderabad, India.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Adapa SriVatsav — Software Developer",
    description: "Software developer building production-grade applications and AI-integrated workflows.",
    type: "website",
    images: [{ url: "/images/profile.jpeg", alt: "Adapa SriVatsav" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
