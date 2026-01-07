import { Metadata } from "next";

const titleTemplate = {
  default: "Flight Search Engine",
  template: "%s | Flight Prediction",
} as const;

export const METADATA: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: titleTemplate,
  description: "AI-powered flight route and safety prediction engine.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
  openGraph: {
    title: titleTemplate,
    description: "AI-powered flight route and safety prediction engine.",
    images: [
      {
        url: "/screen.webp",
        width: 1200,
        height: 630,
        alt: "Flight Search Engine Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleTemplate,
    description: "AI-powered flight route and safety prediction engine.",
    images: ["/screen.webp"],
  },
};
