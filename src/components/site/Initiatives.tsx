import { ArrowRight, Landmark, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, initiatives } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Initiatives() {
  return (
    <section id="initiatives" className="bg-background">
      {/* Kulturo — featured editorial */}
      <div className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Featured Initiative"
            title="Our Initiatives"
            tone="light"
            body="Initiatives that shape how our neighborhoods look, grow and thrive."
          />

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={images.kulturo}
                  alt={initiatives.kulturo.imageAlt}
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="aspect-3/2 w-full object-cover transition-transform duration-[1.4s] hover:scale-[1.05]"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-gold">Public Art & Opportunity</p>
                <h3 className="mt-4 font-display text-5xl leading-none font-semibold text-primary-foreground sm:text-6xl lg:text-7xl">
                  Kulturo
                </h3>
                <span className="gold-rule mt-6" />
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-7 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                  {initiatives.kulturo.body}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <Button asChild variant="gold" size="xl" className="mt-9">
                  <a href="#contact">
                    {initiatives.kulturo.cta}
                    <ArrowRight />
                  </a>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Kommunity Banking */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <Landmark className="size-6" aria-hidden="true" />
              </span>
              <p className="eyebrow mt-6">Initiative</p>
              <h3 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
                {initiatives.banking.name}
              </h3>
              <span className="gold-rule mt-6" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {initiatives.banking.body}
              </p>
              <Button asChild variant="outlineGold" size="lg" className="mt-8">
                <a href="#contact">
                  {initiatives.banking.cta}
                  <ArrowRight />
                </a>
              </Button>
            </Reveal>
          </div>
          <Reveal className="order-1 lg:order-2" delay={80}>
            <img
              src={images.banking}
              alt={initiatives.banking.imageAlt}
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-7/5 w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </div>

      {/* Kommunity Farming */}
      <div className="bg-sand py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <img
              src={images.farming}
              alt={initiatives.farming.imageAlt}
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-7/5 w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>
          <div>
            <Reveal delay={80}>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <Sprout className="size-6" aria-hidden="true" />
              </span>
              <p className="eyebrow mt-6">Program</p>
              <h3 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
                {initiatives.farming.name}
              </h3>
              <span className="gold-rule mt-6" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {initiatives.farming.body}
              </p>
              <Button asChild variant="outlineGold" size="lg" className="mt-8">
                <a href="#contact">
                  {initiatives.farming.cta}
                  <ArrowRight />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
