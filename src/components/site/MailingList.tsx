import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailingList } from "@/content/site";
import { submitForm } from "@/lib/submit-form";
import { TextField } from "./Field";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
});

type Values = z.infer<typeof schema>;

export function MailingList() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    try {
      await submitForm("mailing-list", values);
      setDone(true);
      reset();
      toast.success("You're on the list — welcome to Kommunity House.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="mailing-list" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-sm border border-border bg-card p-8 shadow-soft sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 size-56 rounded-full bg-gold-soft opacity-70"
          />
          <div className="relative">
            <p className="eyebrow">Newsletter</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
              {mailingList.heading}
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {mailingList.body}
            </p>

            {done ? (
              <div className="mt-8 flex gap-3 rounded-sm border border-gold bg-gold-soft/60 p-6">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <p className="font-semibold">
                  Thanks for subscribing — look out for updates from Kommunity House.
                </p>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 grid items-start gap-5 sm:grid-cols-[1fr_1fr_auto]"
              >
                <TextField
                  label="Name"
                  required
                  error={errors.name?.message}
                  autoComplete="name"
                  {...register("name")}
                />
                <TextField
                  label="Email"
                  type="email"
                  required
                  error={errors.email?.message}
                  autoComplete="email"
                  {...register("email")}
                />
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  disabled={isSubmitting}
                  className="sm:mt-7"
                >
                  <Send />
                  {isSubmitting ? "Joining…" : mailingList.cta}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
