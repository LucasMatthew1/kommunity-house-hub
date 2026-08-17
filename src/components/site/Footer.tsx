import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact, logo, org, socials } from "@/content/site";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
} as const;

const footerNav = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Events", href: "#events" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={96}
                loading="lazy"
                className="h-14 w-14 rounded-sm bg-primary-foreground/95 p-1"
              />
              <span className="font-display text-xl font-semibold">
                Kommunity <span className="text-gold">House</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-display text-xl leading-snug font-semibold text-gold">
              {org.tagline}
            </p>
            <ul className="mt-7 space-y-3 text-sm text-primary-foreground/75">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="gold-link">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" aria-hidden="true" />
                {contact.phone}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-gold" aria-hidden="true" />
                {contact.address}
              </li>
            </ul>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h2 className="eyebrow text-gold">Explore</h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="gold-link text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="eyebrow text-gold">Mailing List</h2>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
              Get updates about programs, initiatives, events and ways to get involved.
            </p>
            <a
              href="#mailing-list"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep hover:text-primary-foreground"
            >
              Join the Mailing List
            </a>

            <h2 className="eyebrow mt-10 text-gold">Follow</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={`${org.name} on ${social.label}`}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="gold-link hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="gold-link hover:text-primary-foreground">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
