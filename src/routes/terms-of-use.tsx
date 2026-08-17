import { createFileRoute, Link } from "@tanstack/react-router";
import { contact, org } from "@/content/site";

const title = "Terms of Use | Kommunity House";
const description =
  "The terms that apply when you use the Kommunity House website, forms and published information.";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsOfUse,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-use" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
});

function TermsOfUse() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
      <Link to="/" className="gold-link text-sm font-semibold text-gold-deep">
        Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-semibold sm:text-5xl">Terms of Use</h1>
      <span className="gold-rule mt-6" />
      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          By using this website you agree to these terms. {org.name} may update them as the
          organization and its programs grow.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Use of this site</h2>
        <p>
          Content on this site is provided for general information about our programs, initiatives
          and events. Please use the site lawfully and respectfully, and do not attempt to disrupt
          it or misuse the forms provided.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Content accuracy</h2>
        <p>
          Program and event details may change. Where information has not yet been confirmed, it is
          marked as forthcoming rather than stated as final.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${contact.email}`} className="gold-link text-foreground">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
