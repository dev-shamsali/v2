import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const markBuffer = readFileSync(join(process.cwd(), "public/brand/mark.png"));
  const markSrc = `data:image/png;base64,${markBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080b",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(225,29,72,0.35) 0%, rgba(225,29,72,0) 70%)",
            display: "flex",
          }}
        />
        <img src={markSrc} width={110} height={110} style={{ marginBottom: 32 }} alt="" />
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#f4f4f6" }}>
          <span style={{ color: "#e11d48" }}>Vibe</span>
          <span>Script</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#a3a3ae", maxWidth: 820 }}>
          {site.description}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 22,
            letterSpacing: 4,
            color: "#6c6c78",
            textTransform: "uppercase",
          }}
        >
          Code. Design. Deliver.
        </div>
      </div>
    ),
    { ...size }
  );
}
