import { createFileRoute, Link } from "@tanstack/react-router";
import { contact, org } from "@/content/site";

const title = "Privacy Policy | Kommunity House";
const description =
  "How Kommunity House collects, uses and protects the information you share through our website and forms.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
      <Link to="/" className="gold-link text-sm font-semibold text-gold-deep">
        Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>
      <span className="gold-rule mt-6" />
      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          This page explains how {org.name} handles information shared through this website. This
          policy is a starting point and can be updated by the organization at any time.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Information we collect</h2>
        <p>
          When you complete a form on this site — volunteer signup, choir interest, mailing list, or
          contact — we collect the details you choose to provide, such as your name, email address,
          phone number, location and message.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">How we use it</h2>
        <p>
          We use this information to respond to your inquiry, share updates you asked for, and
          coordinate participation in programs, initiatives and events.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Your choices</h2>
        <p>
          You may request that we correct or remove your information, or unsubscribe from our
          mailing list, at any time by contacting us at{" "}
          <a href={`mailto:${contact.email}`} className="gold-link text-foreground">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
