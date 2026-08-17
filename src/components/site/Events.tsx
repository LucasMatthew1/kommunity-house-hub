import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { events, type Event } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Events() {
  const [active, setActive] = useState<Event | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="events" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Events" title={events.heading} body={events.body} />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.items.map((event, i) => (
            <Reveal key={event.id} delay={i * 70}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-16/11 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold sm:text-2xl">{event.name}</h3>
                  <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Date and time</dt>
                      <CalendarDays className="size-4 text-gold-deep" aria-hidden="true" />
                      <dd>{event.date}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Location</dt>
                      <MapPin className="size-4 text-gold-deep" aria-hidden="true" />
                      <dd>{event.location}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {event.description}
                  </p>
                  <div className="mt-6">
                    <Button variant="outlineGold" onClick={() => setActive(event)}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          {showAll ? (
            <p className="mx-auto max-w-xl rounded-sm border border-border bg-sand p-6 text-sm text-muted-foreground">
              Our full event calendar is being updated. Join the mailing list and you'll be the first
              to hear when new dates are announced.
            </p>
          ) : null}
          <Button
            variant="ink"
            size="xl"
            className="mt-6"
            onClick={() => setShowAll(true)}
            aria-expanded={showAll}
          >
            View All Events
          </Button>
        </Reveal>
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
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-gold-deep" aria-hidden="true" />
                  {active.date}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-gold-deep" aria-hidden="true" />
                  {active.location}
                </li>
              </ul>
              <Button asChild variant="gold" onClick={() => setActive(null)}>
                <a href="#mailing-list">Get event updates</a>
              </Button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
