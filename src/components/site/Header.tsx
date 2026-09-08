import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logo, nav, org } from "@/content/site";

import logoAsset from "@/assets/kommunity-house-logo.jpg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${org.name} — home`}>
          <img
            src={logoAsset}
            alt="logo"
            width={64}
            height={64}
            className="h-12 w-12 rounded-sm object-contain"
          />
          <span className="font-display text-[1.05rem] leading-none font-semibold tracking-tight sm:text-xl">
            Kommunity <span className="text-gold-deep">House</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="gold-link text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#mailing-list"
            className="gold-link text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Mailing List
          </a>
          <Button asChild variant="outlineGold" size="default">
            <a href="#volunteer">Volunteer</a>
          </Button>
          <Button asChild variant="gold" size="default">
            <a href="#donate">Donate</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background px-5 pt-4 pb-8 lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 45}ms` }}
              className="animate-fade-up border-b border-border/70 py-4 font-display text-xl font-semibold text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 grid gap-3">
          <Button asChild variant="gold" size="xl" onClick={() => setOpen(false)}>
            <a href="#donate">Donate</a>
          </Button>
          <Button asChild variant="ink" size="xl" onClick={() => setOpen(false)}>
            <a href="#volunteer">Volunteer</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl" onClick={() => setOpen(false)}>
            <a href="#mailing-list">Mailing List</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
