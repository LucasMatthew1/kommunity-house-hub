import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Music4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, initiatives } from "@/content/site";
import { submitForm } from "@/lib/submit-form";
import { TextAreaField, TextField } from "./Field";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  location: z.string().trim().min(2, "Please enter your city or area").max(120),
  message: z.string().trim().max(1000).optional(),
});

type Values = z.infer<typeof schema>;

export function Choir() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    try {
      await submitForm("choir", values);
      setDone(true);
      reset();
      toast.success("Thank you — we'll be in touch about the Kommunity Choir.");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section id="choir" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold text-ink">
              <Music4 className="size-6" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6 text-gold">Music & Community</p>
            <h2 className="mt-4 text-3xl leading-[1.1] font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
              {initiatives.choir.name}
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {initiatives.choir.body}
            </p>
            <Button asChild variant="gold" size="xl" className="mt-8">
              <a href="#choir-form">{initiatives.choir.cta}</a>
            </Button>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <img
              src={images.choir}
              alt={initiatives.choir.imageAlt}
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-7/5 w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div
            id="choir-form"
            className="scroll-mt-28 rounded-sm border border-primary-foreground/15 bg-background p-7 shadow-lift sm:p-9"
          >
            <h3 className="text-2xl font-semibold">Join the Kommunity Choir</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us a little about yourself and where you're located.
            </p>

            {done ? (
              <div className="mt-8 flex gap-3 rounded-sm border border-gold bg-gold-soft/60 p-6">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Your interest has been received.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Someone from Kommunity House will follow up with next steps.
                  </p>
                  <Button variant="outlineGold" className="mt-4" onClick={() => setDone(false)}>
                    Submit another response
                  </Button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-7 grid gap-5">
                <TextField label="Name" required error={errors.name?.message} autoComplete="name" {...register("name")} />
                <TextField
                  label="Email"
                  type="email"
                  required
                  error={errors.email?.message}
                  autoComplete="email"
                  {...register("email")}
                />
                <TextField
                  label="Phone"
                  type="tel"
                  required
                  error={errors.phone?.message}
                  autoComplete="tel"
                  {...register("phone")}
                />
                <TextField
                  label="Location"
                  required
                  error={errors.location?.message}
                  hint="City, neighborhood or region"
                  {...register("location")}
                />
                <TextAreaField label="Message" error={errors.message?.message} {...register("message")} />
                <Button type="submit" variant="gold" size="xl" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Submit"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
