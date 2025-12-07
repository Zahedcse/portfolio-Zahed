import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

const getPortraitData = () => {
  const filePath = join(process.cwd(), "public/images/zahed.jpg");
  return readFileSync(filePath);
};

export default async function OpengraphImage() {
  const portraitBuffer = getPortraitData();
  const portraitSrc = `data:image/jpeg;base64,${portraitBuffer.toString(
    "base64"
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px",
          backgroundColor: "#030016",
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.35), transparent 55%)",
          color: "#fff",
          fontFamily: '"Space Grotesk", "Inter", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "60%",
          }}
        >
          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: 20,
              color: "rgba(226, 232, 240, 0.85)",
            }}
          >
            QA Leadership & Automation
          </div>
          <div style={{ fontSize: 70, fontWeight: 600, lineHeight: 1.1 }}>
            Zahed Alam
          </div>
          <div style={{ fontSize: 36, color: "rgba(203, 213, 225, 0.9)" }}>
            Senior Software QA Engineer
          </div>
          <div
            style={{
              display: "flex",
              gap: "36px",
              color: "rgba(226, 232, 240, 0.75)",
              fontSize: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: 18, textTransform: "uppercase" }}>
                Regression time saved
              </div>
              <div style={{ fontSize: 34, fontWeight: 600 }}>30%</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: 18, textTransform: "uppercase" }}>
                Release stability boost
              </div>
              <div style={{ fontSize: 34, fontWeight: 600 }}>+25%</div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: "999px",
            padding: 12,
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(192, 38, 211, 0.9))",
            boxShadow: "0 20px 60px rgba(14, 116, 144, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={portraitSrc}
            alt="Zahed Alam portrait"
            width={236}
            height={236}
            style={{
              borderRadius: "999px",
              objectFit: "cover",
              border: "6px solid rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

