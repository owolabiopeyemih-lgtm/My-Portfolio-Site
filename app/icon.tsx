import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          border: "1px solid #252525",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "-1px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1,
          }}
        >
          OO
        </span>
      </div>
    ),
    { ...size }
  );
}
