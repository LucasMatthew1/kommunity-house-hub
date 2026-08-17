import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, images, logo, org } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={images.hero}
        alt="Neighbors of all ages sharing a meal together at an outdoor community gathering"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover object-center opacity-90"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      {/* Animated gold sunburst accents inspired by the logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 size-[38rem] animate-sun-spin rounded-full opacity-25 [background:conic-gradient(from_0deg,transparent_0_6deg,var(--gold)_6deg_7deg,transparent_7deg_18deg)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-32 size-[30rem] animate-sun-spin-reverse rounded-full opacity-15 [background:conic-gradient(from_0deg,transparent_0_8deg,var(--gold-soft)_8deg_9deg,transparent_9deg_24deg)]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pt-36 pb-24 sm:pt-44 sm:pb-32 lg:min-h-[92vh] lg:px-8">
        <div className="max-w-3xl">
          <div className="flex animate-fade-up items-center gap-4">
            <img
              src={logo.src}
              alt={logo.alt}
              width={112}
              height={112}
              className="h-16 w-16 rounded-sm bg-primary-foreground/95 p-1 sm:h-20 sm:w-20"
            />
            <div>
              <p className="eyebrow text-gold">Non-Profit Organization</p>
              <p className="font-display text-lg font-semibold text-primary-foreground">
                {org.name}
              </p>
            </div>
          </div>

          <h1
            className="mt-9 animate-fade-up text-[2.35rem] leading-[1.05] font-semibold text-primary-foreground sm:text-5xl lg:text-[4.1rem]"
            style={{ animationDelay: "80ms" }}
          >
            Building Stronger Communities.{" "}
            <span className="text-gold">Creating Greater Opportunities.</span>
          </h1>

          <p
            className="mt-7 max-w-2xl animate-fade-up text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {hero.body}
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild variant="gold" size="xl">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={hero.secondaryCta.href}>
                <Heart />
                {hero.secondaryCta.label}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Pillars ticker */}
      <div className="relative border-t border-primary-foreground/15 bg-ink/70 backdrop-blur-sm">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 lg:px-8">
          {org.pillars.map((pillar) => (
            <li
              key={pillar}
              className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary-foreground/75 uppercase"
            >
              <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
