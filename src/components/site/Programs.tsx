import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { programs, type Program } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Programs() {
  const [active, setActive] = useState<Program | null>(null);

  return (
    <section id="programs" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Programs"
          body="Programs built with and for the community — food and gathering, development, education, and opportunity."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal
              key={program.id}
              delay={i * 70}
              className={
                i === 0 ? "sm:col-span-2 lg:col-span-2" : i === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }
            >
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card shadow-soft">
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-16/11 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold sm:text-2xl">{program.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {program.description}
                  </p>
                  <div className="mt-6">
                    <Button variant="outlineGold" onClick={() => setActive(program)}>
                      Learn More
                      <ArrowUpRight />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active ? (
            <>
              <img
                src={active.image}
                alt={active.imageAlt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-16/9 w-full rounded-sm object-cover"
              />
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{active.name}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {active.description}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                Want to take part in {active.name}? Reach out and we'll connect you with this
                program.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="gold" onClick={() => setActive(null)}>
                  <a href="#volunteer">Get Involved</a>
                </Button>
                <Button asChild variant="outline" onClick={() => setActive(null)}>
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
