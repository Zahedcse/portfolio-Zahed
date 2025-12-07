import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment)}>
      <span className="tag text-xs uppercase tracking-[0.3em] text-cyan-100/80">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-base text-slate-300 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

