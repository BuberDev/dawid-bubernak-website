import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          background: "#08090d",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(94,234,212,0.25), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255,122,69,0.22), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#5eead4",
              display: "flex",
            }}
          />
          <span style={{ color: "#8a8d9e", fontSize: 24, letterSpacing: 2 }}>
            FULLSTACK · AI · BLOCKCHAIN
          </span>
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            color: "#f4f5f9",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Dawid Bubernak
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: "#c7c9d6",
            display: "flex",
            maxWidth: 820,
          }}
        >
          Buduję produkty na pograniczu sztucznej inteligencji i Web3.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
