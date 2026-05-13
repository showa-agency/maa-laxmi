import { ImageResponse } from "next/og";
import { siteConfig } from "./seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(135deg, rgba(10,36,99,1) 0%, rgba(16,77,194,1) 100%)",
                color: "white",
                fontFamily: "Inter, Arial, sans-serif",
            }}
        >
            <div
                style={{
                    fontSize: 140,
                    fontWeight: 800,
                    letterSpacing: 2,
                    textAlign: "center",
                    padding: "0 10px",
                }}
            >
                {siteConfig.name}
            </div>
        </div> 
    ),
    {
      ...size,
    },
  );
}
