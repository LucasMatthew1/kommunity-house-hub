import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { images, volunteerInterests } from "@/content/site";
import { submitForm } from "@/lib/submit-form";
import { TextAreaField, TextField } from "./Field";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  city: z.string().trim().min(2, "Please enter your city or area").max(120),
  availability: z.string().trim().max(200).optional(),
  message: z.string().trim().max(1000).optional(),
});

type Values = z.infer<typeof schema>;

export function VolunteerForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [interestError, setInterestError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const toggle = (value: string) => {
    setInterests((prev) => {
      const next = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
      if (next.length > 0) setInterestError(null);
      return next;
    });
  };

  const onSubmit = async (values: Values) => {
    if (interests.length === 0) {
      setInterestError("Please choose at least one area of interest");
      return;
    }
    try {
      await submitForm("volunteer", { ...values, interests });
      setDone(true);
      reset();
      setInterests([]);
      toast.success("Thank you for volunteering — we'll reach out soon.");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section id="volunteer" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Volunteer"
          title="Give Your Time. Grow Your Community."
          body="Volunteers make every program, event and initiative possible. Tell us how you'd like to help."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <img
              src={images.volunteer}
              alt="Smiling volunteers organizing donation boxes together at a community center"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-4/5 w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-card p-7 shadow-soft sm:p-9">
              {done ? (
                <div className="flex gap-3 rounded-sm border border-gold bg-gold-soft/60 p-6">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Your volunteer application has been received.</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A member of the Kommunity House team will follow up with next steps.
                    </p>
                    <Button variant="outlineGold" className="mt-4" onClick={() => setDone(false)}>
                      Submit another application
                    </Button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                      label="Full Name"
                      required
                      error={errors.fullName?.message}
                      autoComplete="name"
                      {...register("fullName")}
                    />
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
                      label="City / Area"
                      required
                      error={errors.city?.message}
                      {...register("city")}
                    />
                  </div>

                  <fieldset>
                    <legend className="text-sm font-semibold">
                      Areas of Interest
                      <span className="text-gold-deep" aria-hidden="true">
                        *
                      </span>
                    </legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {volunteerInterests.map((interest) => {
                        const id = `interest-${interest.toLowerCase().replace(/\s+/g, "-")}`;
                        return (
                          <div key={interest} className="flex items-center gap-3">
                            <Checkbox
                              id={id}
                              checked={interests.includes(interest)}
                              onCheckedChange={() => toggle(interest)}
                            />
                            <Label htmlFor={id} className="text-sm font-normal">
                              {interest}
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                    {interestError ? (
                      <p role="alert" className="mt-3 text-xs font-medium text-destructive">
                        {interestError}
                      </p>
                    ) : null}
                  </fieldset>

                  <TextField
                    label="Availability"
                    error={errors.availability?.message}
                    hint="e.g. weekday evenings, Saturday mornings"
                    {...register("availability")}
                  />
                  <TextAreaField
                    label="Message"
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  <Button type="submit" variant="gold" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Become a Volunteer"}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
