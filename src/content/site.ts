/**
 * EDITABLE SITE CONTENT
 * -----------------------------------------------------------
 * All copy, images, programs, initiatives, events, contact info and
 * social links live here so the organization can update the site
 * without touching component code.
 *
 * To swap an image: drop the new file in `src/assets/` and update the
 * import at the top of this file.
 */
import heroCommunity from "@/assets/hero-community.jpg";
import aboutCommunity from "@/assets/about-community.jpg";
import programKitchen from "@/assets/program-kitchen.jpg";
import programBuilders from "@/assets/program-builders.jpg";
import programLearning from "@/assets/program-learning.jpg";
import programKpu from "@/assets/program-kpu.jpg";
import programAscending from "@/assets/program-ascending.jpg";
import kulturoMural from "@/assets/kulturo-mural.jpg";
import bankingImg from "@/assets/banking.jpg";
import farmingImg from "@/assets/farming.jpg";
import choirImg from "@/assets/choir.jpg";
import eventPowerUp from "@/assets/event-powerup.jpg";
import eventPacc from "@/assets/event-pacc.jpg";
import eventWeekly from "@/assets/event-weekly.jpg";
import volunteerImg from "@/assets/volunteer.jpg";
import logoAsset from "@/assets/kommunity-house-logo.jpg";

export const images = {
  hero: heroCommunity,
  about: aboutCommunity,
  kulturo: kulturoMural,
  banking: bankingImg,
  farming: farmingImg,
  choir: choirImg,
  volunteer: volunteerImg,
};

export const logo = {
  src: logoAsset,
  alt: "Kommunity House logo — a house inside a warm gold sunburst",
};

export const org = {
  name: "Kommunity House",
  tagline: "Building communities. Creating opportunity. Fostering unity.",
  pillars: [
    "Community",
    "Opportunity",
    "Unity",
    "Education",
    "Entrepreneurship",
    "Participation",
  ],
};

export const nav = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Events", href: "#events" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Building Stronger Communities. Creating Greater Opportunities.",
  body: "Kommunity House supports the building and expansion of communities through economic support, community programs, educational opportunities, entrepreneurship, resources, and initiatives that foster unity and participation.",
  primaryCta: { label: "Get Involved", href: "#get-involved" },
  secondaryCta: { label: "Donate", href: "#donate" },
};

export const about = {
  heading: "About Kommunity House",
  paragraphs: [
    "Kommunity House is a non-profit organization that supports the building and expansion of communities through economic support, programs that support the community, and initiatives that foster unity and participation amongst those in a particular area.",
    "We help local entrepreneurs start and develop their businesses, spread the word about local events, provide resource support, offer educational training, and connect people with job opportunities and placement.",
  ],
  highlight: "Supporting people. Strengthening communities. Creating opportunity.",
};

export type Program = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    id: "kommunity-kitchen",
    name: "Kommunity Kitchen",
    description: "A community-focused food and gathering program.",
    image: programKitchen,
    imageAlt: "Volunteers preparing and serving food together in a community kitchen",
  },
  {
    id: "kommunity-builders-association",
    name: "Kommunity Builders Association",
    description: "A program focused on supporting community development and participation.",
    image: programBuilders,
    imageAlt: "Community members working together on a neighborhood building project",
  },
  {
    id: "pathways-learning-center",
    name: "Pathways Learning Center",
    description: "Educational and learning opportunities designed to help people move forward.",
    image: programLearning,
    imageAlt: "Adult learners studying together in a community classroom",
  },
  {
    id: "kpu",
    name: "KPU",
    // Editable: add the KPU program description here.
    description: "Program description coming soon.",
    image: programKpu,
    imageAlt: "A community group listening to a speaker during a workshop session",
  },
  {
    id: "ascending-horizons",
    name: "Ascending Horizons",
    // Editable: add the Ascending Horizons program description here.
    description: "Program description coming soon.",
    image: programAscending,
    imageAlt: "A local entrepreneur speaking to a community audience",
  },
];

export const initiatives = {
  kulturo: {
    name: "Kulturo",
    body: "Kulturo is an initiative to bring images of success and diversity through murals around cities. We also help bring a diverse class of businesses and opportunities to help broaden experiences and foster broader unity and collaboration.",
    cta: "Learn About Kulturo",
    imageAlt: "A large colorful community mural of diverse faces being painted on a city wall",
  },
  banking: {
    name: "Kommunity Banking",
    // Editable: describe this initiative. Avoid specific financial claims.
    body: "Kommunity Banking is one of our community initiative areas, focused on economic support and access to resources within the communities we serve. Details about this initiative will be shared here as the program develops.",
    cta: "Learn More",
    imageAlt: "A local business owner reviewing paperwork with a community advisor",
  },
  farming: {
    name: "Kommunity Farming Program",
    // Editable: describe this program.
    body: "The Kommunity Farming Program connects neighbors through community gardens and local agriculture — growing food together, sharing knowledge, and creating shared spaces that bring people outdoors and closer together.",
    cta: "Learn More",
    imageAlt: "Neighbors of all ages harvesting vegetables in a community garden",
  },
  choir: {
    name: "Kommunity Choir",
    body: "The Kommunity Choir is a local organization (varies by geographic location) that performs at selected events locally, regionally and nationally.",
    cta: "Find Out How You Can Get Involved",
    imageAlt: "A diverse community choir singing together on stage",
  },
};

export type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const events = {
  heading: "Bringing Our Communities Together",
  body: "We have several events scheduled throughout the year, including our weekly community gathering events that bring together community organizers and members for informational gatherings with food, games, and much more, provided free of charge through Kommunity House.",
  // Editable: replace date and location placeholders as events are scheduled.
  items: [
    {
      id: "power-up-saturdays",
      name: "Power Up Saturdays",
      date: "Date & time to be announced",
      location: "Location to be announced",
      description: "A recurring community gathering built around learning, connection and momentum.",
      image: eventPowerUp,
      imageAlt: "A busy Saturday community workshop with mentors and attendees at tables",
    },
    {
      id: "pacc",
      name: "PACC",
      date: "Date & time to be announced",
      location: "Location to be announced",
      description: "A gathering that brings community organizers and members together in conversation.",
      image: eventPacc,
      imageAlt: "Community leaders speaking with an engaged audience in a local hall",
    },
    {
      id: "weekly-community-gatherings",
      name: "Weekly Community Gatherings",
      date: "Weekly — day & time to be announced",
      location: "Location to be announced",
      description: "Informational gatherings with food, games and much more, provided free of charge.",
      image: eventWeekly,
      imageAlt: "Families gathered around long tables at an outdoor evening community event",
    },
  ] satisfies Event[],
};

export const getInvolved = {
  heading: "Your Community Needs You.",
  body: "Whether you volunteer, participate, support a local initiative, attend an event, or make a contribution, there are many ways to get involved.",
  options: [
    { title: "Volunteer", body: "Give your time and skills.", href: "#volunteer", icon: "hands" },
    { title: "Donate", body: "Help support community programs and opportunities.", href: "#donate", icon: "heart" },
    { title: "Join the Mailing List", body: "Stay connected with Kommunity House.", href: "#mailing-list", icon: "mail" },
    { title: "Partner With Us", body: "Help create stronger communities together.", href: "#contact", icon: "handshake" },
  ],
};

export const volunteerInterests = [
  "Events",
  "Education",
  "Entrepreneurship",
  "Community Programs",
  "Kommunity Choir",
  "Kulturo",
  "Farming",
  "Other",
];

export const donate = {
  heading: "Help Build Stronger Communities",
  body: "Your support helps create opportunities, programs, resources, and experiences that bring people together and strengthen communities.",
  cta: "Donate Now",
  // Editable: set this once a donation platform is connected.
  url: "",
};

// Editable contact information placeholders.
export const contact = {
  heading: "Let's Connect",
  intro:
    "Interested in partnering with Kommunity House, volunteering, supporting a program, or learning more?",
  email: "info@kommunityhouse.org",
  phone: "Phone number coming soon",
  address: "Mailing address coming soon",
};

// Editable social links — replace the placeholder hrefs.
export const socials = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "#", icon: "twitter" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

export const mailingList = {
  heading: "Stay Connected",
  body: "Join the Kommunity House mailing list for updates about programs, initiatives, events, opportunities, and ways to get involved.",
  cta: "Join the Mailing List",
};
