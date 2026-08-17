import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { donate } from "@/content/site";
import { Reveal } from "./Reveal";

export function Donate() {
  const handleDonate = () => {
    if (donate.url) {
      window.open(donate.url, "_blank", "noopener,noreferrer");
      return;
    }
    // No fake payment processing: a real donation platform can be connected
    // by setting `donate.url` in src/content/site.ts.
    toast.info("Our secure donation platform is being set up. Contact us to give today.");
  };

  return (
    <section id="donate" className="relative isolate overflow-hidden bg-gradient-ink py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 animate-sun-spin rounded-full opacity-20 [background:conic-gradient(from_0deg,transparent_0_7deg,var(--gold)_7deg_8deg,transparent_8deg_20deg)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-gold text-ink">
            <Heart className="size-7" aria-hidden="true" />
          </span>
          <p className="eyebrow mt-6 text-gold">Donate</p>
          <h2 className="mt-4 text-3xl leading-[1.1] font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
            {donate.heading}
          </h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {donate.body}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="gold" size="xl" onClick={handleDonate}>
              {donate.cta}
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#contact">Other ways to give</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
