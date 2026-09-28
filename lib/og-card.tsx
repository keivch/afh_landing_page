import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "AFH Metalmecánicos: montajes y mantenimiento industrial en Palmira, Valle del Cauca";

export function OgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b2239",
          color: "white",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#98e73c",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          AFH Metalmecánicos S.A.S.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            Montajes y mantenimiento industrial en Palmira
          </div>
          <div style={{ fontSize: 30, color: "#d5deea", maxWidth: 860 }}>
            Estructuras, soldadura y equipos para la industria del Valle del Cauca
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#98e73c" }}>
          Cra. 13A #40-37 · Palmira · +57 311 616 7972
        </div>
      </div>
    ),
    ogSize
  );
}
