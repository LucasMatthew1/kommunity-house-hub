import { Quote } from "lucide-react";
import { about, images } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={images.about}
              alt="Community members collaborating around a table at a neighborhood center"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-4 -bottom-6 hidden size-40 rounded-full bg-gradient-gold opacity-90 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 hidden h-28 w-28 border-t-2 border-l-2 border-gold sm:block"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.9rem]">
              {about.heading}
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={80 * (i + 1)}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <blockquote className="mt-10 flex gap-4 border-l-2 border-gold bg-sand p-6">
              <Quote className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
              <p className="font-display text-lg leading-snug font-semibold text-foreground sm:text-xl">
                {about.highlight}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
