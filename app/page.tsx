import type { Metadata } from "next";
import App from "@/app/App";
import { siteBaseUrl, siteConfig } from "./seo";

export const metadata: Metadata = {
  title: "Trusted Taxi Service for Local & Outstation Travel",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maa Lakshmi Tour and Travels | Trusted Taxi Service in Patna",
    description: siteConfig.description,
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Maa Lakshmi Tour and Travels | Trusted Taxi Service in Patna",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TaxiService", "LocalBusiness"],
  "@id": `${siteBaseUrl}/#localbusiness`,
  name: siteConfig.name,
  url: siteBaseUrl,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.officeAddress,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  hasMap: siteConfig.mapsUrl,
  areaServed: ["Patna", "Bihar", "India"],
  availableLanguage: ["en", "hi"],
  priceRange: "₹₹",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [siteConfig.whatsappUrl, siteConfig.mapsUrl],
  serviceType: [
    "Local taxi rides",
    "Outstation travel",
    "Wedding and event car booking",
    "Airport transfer",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <App />
    </>
  );
}
