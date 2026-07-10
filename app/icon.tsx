import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
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
          background: "#08090d",
          borderRadius: 7,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 19,
          letterSpacing: -1,
        }}
      >
        <span style={{ color: "#5eead4" }}>D</span>
        <span style={{ color: "#ff7a45" }}>B</span>
      </div>
    ),
    { ...size },
  );
}
