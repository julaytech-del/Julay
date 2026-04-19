import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #080808 0%, #0d0d1a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Logo icon */}
        <div style={{
          width: 80, height: 80, borderRadius: 20,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 28, fontSize: 40,
        }}>⚡</div>

        {/* Title */}
        <div style={{
          fontSize: 54, fontWeight: 800, color: "#ffffff",
          textAlign: "center", lineHeight: 1.15, marginBottom: 16,
        }}>
          Julay Group LLC
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 26, color: "#818cf8", fontWeight: 600,
          marginBottom: 28, letterSpacing: "-0.01em",
        }}>
          DevOps · Cloud · AI · Custom Software
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["US Registered", "Enterprise Ready", "Globally Trusted"].map((t) => (
            <div key={t} style={{
              padding: "8px 20px", borderRadius: 999,
              border: "1px solid rgba(99,102,241,0.4)",
              background: "rgba(99,102,241,0.1)",
              color: "#a5b4fc", fontSize: 16, fontWeight: 600,
            }}>{t}</div>
          ))}
        </div>

        {/* URL */}
        <div style={{
          position: "absolute", bottom: 36,
          fontSize: 18, color: "#4b5563", fontWeight: 500,
        }}>
          julay.org
        </div>
      </div>
    ),
    { ...size }
  );
}
