const blocks = [
  {
    hash: "0x9F3A",
    label: "AI LAYER",
    accent: "signal" as const,
    className: "left-[10%] top-[8%] h-28 w-32 rotate-[-9deg] sm:h-36 sm:w-44",
    depth: "translateZ(70px)",
  },
  {
    hash: "0x4C7E",
    label: "BLOCKCHAIN",
    accent: "ember" as const,
    className: "right-[8%] top-[2%] h-24 w-28 rotate-[11deg] sm:h-32 sm:w-40",
    depth: "translateZ(30px)",
  },
  {
    hash: "0x1B82",
    label: "WEB APP",
    accent: "signal" as const,
    className: "left-[14%] bottom-[8%] h-24 w-28 rotate-[6deg] sm:h-32 sm:w-40",
    depth: "translateZ(10px)",
  },
  {
    hash: "0xE20D",
    label: "AUTOMATION",
    accent: "ember" as const,
    className: "right-[6%] bottom-[2%] h-20 w-24 rotate-[-6deg] sm:h-28 sm:w-36",
    depth: "translateZ(-20px)",
  },
];

export function BlockStack() {
  return (
    <div className="perspective-container relative mx-auto h-95 w-full max-w-md lg:h-110 lg:max-w-lg">
      <div
        className="absolute inset-0 animate-drift"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-signal/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 h-44 w-44 translate-x-[-30%] translate-y-[-60%] animate-glow rounded-full bg-ember/25 blur-3xl [animation-delay:1.5s]"
          aria-hidden="true"
        />

        {blocks.map((block) => (
          <div
            key={block.hash}
            className={`absolute rounded-2xl border bg-surface/80 p-4 shadow-2xl backdrop-blur-sm ${block.className} ${
              block.accent === "signal" ? "border-signal/30" : "border-ember/30"
            }`}
            style={{
              transform: block.depth,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <div
              className={`mb-6 h-1 w-8 rounded-full ${
                block.accent === "signal" ? "bg-signal" : "bg-ember"
              }`}
            />
            <p className="font-mono text-[11px] text-fog">{block.hash}</p>
            <p className="font-mono text-[11px] tracking-wide text-mist">{block.label}</p>
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-steel bg-linear-to-br from-surface-2 to-surface shadow-[0_0_40px_rgba(94,234,212,0.15)]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-1">
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-signal to-ember" />
            <span className="font-mono text-[10px] text-fog">CORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
