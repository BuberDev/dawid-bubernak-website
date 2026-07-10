import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  hash: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ hash, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-3 font-mono text-[12px] tracking-widest text-signal">{hash}</p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-mist">{description}</p>
      )}
    </div>
  );
}
