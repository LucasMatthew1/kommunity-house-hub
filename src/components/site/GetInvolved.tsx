import { ArrowRight, HandHeart, Handshake, Heart, Mail } from "lucide-react";
import { getInvolved } from "@/content/site";
import { Reveal } from "./Reveal";

const icons = {
  hands: HandHeart,
  heart: Heart,
  mail: Mail,
  handshake: Handshake,
} as const;

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Get Involved</p>
          <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl">
            {getInvolved.heading}
          </h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {getInvolved.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {getInvolved.options.map((option, i) => {
            const Icon = icons[option.icon as keyof typeof icons];
            return (
              <Reveal key={option.title} delay={i * 70}>
                <a
                  href={option.href}
                  className="card-lift group flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-soft"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold-soft text-gold-deep transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{option.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {option.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                    Continue
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
