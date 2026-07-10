import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090d",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(94,234,212,0.35), transparent 55%), radial-gradient(circle at 80% 85%, rgba(255,122,69,0.3), transparent 55%)",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 92,
          letterSpacing: -3,
        }}
      >
        <span style={{ color: "#5eead4" }}>D</span>
        <span style={{ color: "#ff7a45" }}>B</span>
      </div>
    ),
    { ...size },
  );
}
