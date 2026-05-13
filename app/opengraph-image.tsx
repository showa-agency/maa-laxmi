import { ImageResponse } from "next/og";
import { siteConfig } from "./seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgba(10,36,99,1) 0%, rgba(16,77,194,1) 100%)",
          color: "white",
          padding: "64px 72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "#d4af37",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Trusted Tour & Travels Service
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 950,
          }}
        >
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>
            Local and outstation cab booking for tours, events, and family
            travel
          </div>
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, display: "flex" }}>
          {`Call ${siteConfig.phone}`}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
