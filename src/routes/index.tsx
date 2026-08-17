import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Initiatives } from "@/components/site/Initiatives";
import { Choir } from "@/components/site/Choir";
import { Events } from "@/components/site/Events";
import { GetInvolved } from "@/components/site/GetInvolved";
import { VolunteerForm } from "@/components/site/VolunteerForm";
import { MailingList } from "@/components/site/MailingList";
import { Donate } from "@/components/site/Donate";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Kommunity House | Building Stronger Communities & Creating Opportunities";
const description =
  "Kommunity House supports communities through economic opportunity, educational programs, entrepreneurship, events, resources, and initiatives that foster unity and participation.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Kommunity House",
          description,
          slogan: "Building communities. Creating opportunity. Fostering unity.",
          url: "/",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <h1 className="sr-only">
          Kommunity House — building stronger communities and creating greater opportunities
        </h1>
        <Hero />
        <About />
        <Programs />
        <Initiatives />
        <Choir />
        <Events />
        <GetInvolved />
        <VolunteerForm />
        <MailingList />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
