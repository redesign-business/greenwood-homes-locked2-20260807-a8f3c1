import { Cta3, type Cta3Props } from "@/components/relume/Cta3";
import { Footer3, type Footer3Props } from "@/components/relume/Footer3";
import { Header30, type Header30Props } from "@/components/relume/Header30";
import { Navbar1, type Navbar1Props } from "@/components/relume/Navbar1";
import {
  Portfolio12,
  type Portfolio12Props,
} from "@/components/relume/Portfolio12";
import { Stats50, type Stats50Props } from "@/components/relume/Stats50";
import {
  Testimonial1,
  type Testimonial1Props,
} from "@/components/relume/Testimonial1";

const navigation = {
  logo: {
    src: "/images/gwhweblogo1020-4faa02ba82.png",
    alt: "Greenwood Homes",
    url: "/",
  },
  navLinks: [
    { title: "Portfolio", url: "#portfolio" },
    { title: "Why Greenwood", url: "#why-greenwood" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "About", url: "/about" },
  ],
  buttons: [{ title: "Start a Project" }],
} satisfies Navbar1Props;

const hero = {
  heading: "Where Building a Home Is a Work of Art",
  description:
    "Award-winning custom homes, professionally delivered across Lake Tahoe, Hawaii, Idaho, Utah, and California since 1998.",
  buttons: [{ title: "Start a Project" }],
  image: {
    src: "/images/19-6e303dc678.jpg",
    alt: "Clear Creek Tahoe custom home by Greenwood Homes",
  },
} satisfies Header30Props;

const proof = {
  heading: "Quality construction, professionally delivered.",
  description:
    "A licensed general contractor known for honest communication, exacting standards, and projects delivered on time and under budget.",
  stats: [
    { percentage: "1998", heading: "Building custom homes since" },
    { percentage: "50+", heading: "Custom homes completed" },
    { percentage: "7", heading: "Tahoe Quarterly awards" },
  ],
} satisfies Stats50Props;

const portfolio = {
  tagline: "Selected Work",
  heading: "Homes shaped by their setting",
  description:
    "Distinct custom residences from the mountains of Lake Tahoe to the shores of Kauai.",
  projects: [
    {
      title: "Hale Pakika",
      description: "A custom home in Hawaii.",
      image: {
        src: "/images/006_hale_pakika-web-77e9d501a6.jpg",
        alt: "Hale Pakika custom home and pool",
      },
      url: "/portfolio/hale-pakika",
      button: { title: "View project", variant: "link" },
      tags: [{ label: "Hawaii", url: "/portfolio" }],
    },
    {
      title: "Austin Cabin",
      description: "A custom mountain home in Martis Camp.",
      image: {
        src: "/images/xlg_121-02a614edd7.jpg",
        alt: "Austin Cabin at Martis Camp",
      },
      url: "/portfolio/austin-cabin",
      button: { title: "View project", variant: "link" },
      tags: [{ label: "Lake Tahoe", url: "/portfolio" }],
    },
    {
      title: "Minimalist Luxury",
      description: "A custom home in Incline Village.",
      image: {
        src: "/images/incline-village-minimalist-luxury-greenwood-homes-013-1024x683-e680462b0c.jpg",
        alt: "Minimalist luxury home in Incline Village",
      },
      url: "/portfolio/minimalist-luxury",
      button: { title: "View project", variant: "link" },
      tags: [{ label: "Nevada", url: "/portfolio" }],
    },
  ],
  button: { title: "View portfolio", variant: "secondary" },
} satisfies Portfolio12Props;

const testimonial = {
  quote:
    "Of the five homes we have built in Texas, Lake Tahoe, and Hawaii, our experience with Greenwood was the best.",
  logo: {
    src: "/images/tq-logo-med-ivory-c176412731.png",
    alt: "Tahoe Quarterly Mountain Home Awards",
  },
  avatar: {
    src: "/images/ltcrop-c4a89fa01f.jpg",
    alt: "Lake Tahoe",
  },
  name: "Greenwood Homes client",
  position: "Five-time custom homeowner",
  companyName: "Texas, Lake Tahoe, and Hawaii",
} satisfies Testimonial1Props;

const callToAction = {
  heading: "Build with confidence.",
  description:
    "Bring your vision to a team backed by decades of experience, open communication, and an ironclad warranty.",
  buttons: [{ title: "Start a Project" }],
  image: {
    src: "/images/kahalawai_04-b3ab15fa86.jpeg",
    alt: "Greenwood Homes custom lakefront residence",
  },
} satisfies Cta3Props;

const footer = {
  logo: {
    src: "/images/gwhweblogo1020-4faa02ba82.png",
    alt: "Greenwood Homes",
    url: "/",
  },
  address: {
    label: "Our offices",
    value: "Incline Village, Nevada | Coeur d'Alene, Idaho | Kauai, Hawaii",
  },
  contact: {
    label: "Project inquiries",
    phone: "",
    email: "",
  },
  columnLinks: [
    {
      links: [
        { title: "Portfolio", url: "#portfolio" },
        { title: "Why Greenwood", url: "#why-greenwood" },
        { title: "Testimonials", url: "#testimonials" },
      ],
    },
    {
      links: [
        { title: "Team", url: "/team" },
        { title: "Blog", url: "/blog" },
        { title: "Contact", url: "/contact" },
      ],
    },
  ],
  socialMediaLinks: [],
  footerText: "Greenwood Homes. Licensed general contractor.",
  footerLinks: [
    { title: "Privacy", url: "/privacy" },
    { title: "Contact", url: "/contact" },
  ],
} satisfies Footer3Props;

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar1 {...navigation} />
      <Header30 {...hero} />
      <Stats50 id="why-greenwood" {...proof} />
      <Portfolio12 id="portfolio" {...portfolio} />
      <Testimonial1 id="testimonials" {...testimonial} />
      <Cta3 id="contact" {...callToAction} />
      <Footer3 {...footer} />
    </main>
  );
}
