import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "light" && "text-gold")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <span className={cn("gold-rule mt-6", align === "center" && "mx-auto")} />
      {body ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
