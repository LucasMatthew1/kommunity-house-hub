import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/site";
import { submitForm } from "@/lib/submit-form";
import { TextAreaField, TextField } from "./Field";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Please tell us a little more").max(1000),
});

type Values = z.infer<typeof schema>;

export function Contact() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    try {
      await submitForm("contact", values);
      setDone(true);
      reset();
      toast.success("Message sent — thank you for reaching out.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Contact" title={contact.heading} body={contact.intro} />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="gold-link text-sm text-muted-foreground"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">{contact.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Address</p>
                  <p className="text-sm text-muted-foreground">{contact.address}</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 border-l-2 border-gold bg-sand p-6">
              <p className="font-display text-lg font-semibold">
                Building communities. Creating opportunity. Fostering unity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-8">
            <div className="rounded-sm border border-border bg-card p-7 shadow-soft sm:p-9">
              {done ? (
                <div className="flex gap-3 rounded-sm border border-gold bg-gold-soft/60 p-6">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Thanks — your message has been received.</p>
                    <Button variant="outlineGold" className="mt-4" onClick={() => setDone(false)}>
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
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
                    <TextField
                      label="Phone"
                      type="tel"
                      error={errors.phone?.message}
                      autoComplete="tel"
                      {...register("phone")}
                    />
                    <TextField
                      label="Subject"
                      required
                      error={errors.subject?.message}
                      {...register("subject")}
                    />
                  </div>
                  <TextAreaField
                    label="Message"
                    required
                    rows={6}
                    error={errors.message?.message}
                    {...register("message")}
                  />
                  <Button type="submit" variant="gold" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Submit"}
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
