import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/styles/globals.css";
import { siteBaseUrl, siteConfig } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Maa Lakshmi Tour and Travels | Taxi Service in Patna",
    template: "%s | Maa Lakshmi Tour and Travels",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Travel",
  icons: {
    icon: "/icon",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: "Maa Lakshmi Tour and Travels | Reliable Taxi & Cab Booking",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} taxi booking service`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Lakshmi Tour and Travels | Reliable Taxi & Cab Booking",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Patna",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
