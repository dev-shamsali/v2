export const site = {
  name: "VibeScript",
  legalName: "VibeScript",
  tagline: "Code. Design. Deliver.",
  description:
    "VibeScript is a digital solutions studio helping startups and businesses build scalable platforms, high-performance websites, and modern SaaS products.",
  url: "https://vibescript.cloud",
  email: "info.vibescript@gmail.com",
  phone: "+91 92265 39203",
  phoneHref: "+919226539203",
  location: "Mumbai, India",
  locationShort: "Mumbai · Remote",
  social: {
    whatsapp: "https://wa.me/919226539203",
  },
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end product builds across the stack, from data models to the pixels users touch.",
    icon: "Stack",
    span: "wide",
  },
  {
    title: "Backend Engineering",
    description:
      "Reliable services and data layers built to hold up under real production load.",
    icon: "HardDrives",
    span: "narrow",
  },
  {
    title: "API Development",
    description: "REST and GraphQL interfaces designed for the teams building on top of them.",
    icon: "Plugs",
    span: "narrow",
  },
  {
    title: "Deployment & DevOps",
    description:
      "CI/CD pipelines, infrastructure, and monitoring so ships happen without drama.",
    icon: "Rocket",
    span: "narrow",
  },
  {
    title: "Security & Compliance",
    description:
      "Hardened by default: auth, data handling, and infrastructure reviewed against real threats.",
    icon: "ShieldCheck",
    span: "narrow",
  },
  {
    title: "Performance Optimization",
    description:
      "Faster loads, tighter bundles, better Core Web Vitals, measured before and after.",
    icon: "Gauge",
    span: "full",
  },
] as const;

export const process = [
  {
    verb: "Discover",
    description: "We map the problem, the users, and what success actually looks like.",
  },
  {
    verb: "Design",
    description: "Interfaces and architecture take shape, reviewed against real constraints.",
  },
  {
    verb: "Build",
    description: "Clean, tested code shipped in small increments you can see progress on.",
  },
  {
    verb: "Ship",
    description: "Deployed, monitored, and handed off with the documentation to maintain it.",
  },
] as const;

export const projects = [
  {
    title: "Developer Portfolio",
    description: "A personal showcase site built for speed, clarity, and a strong first impression.",
    tag: "Portfolio",
    href: undefined,
    image: "/projects/shamsali-portfolio.png",
  },
  {
    title: "Arna Skin Care",
    description: "Premium skincare e-commerce with a storefront built to match the product.",
    tag: "E-commerce",
    href: undefined,
    image: "/projects/arna-skin-care.png",
  },
  {
    title: "Keyset",
    description: "A modern platform website built for clarity, speed, and a polished first impression.",
    tag: "Platform",
    href: "https://keyset.in",
    image: "/projects/keyset.png",
  },
  {
    title: "WOS",
    description: "A secure login and workspace portal built on the Keyset platform.",
    tag: "Web App",
    href: "https://wos.keyset.in/login",
    image: "/projects/wos.png",
  },
] as const;

export const statusItems = [
  { label: "Accepting Projects", icon: "CheckCircle" },
  { label: "Web & SaaS", icon: "Browsers" },
  { label: "Secure & Scalable", icon: "ShieldCheck" },
  { label: "Clean UI/UX", icon: "PaintBrush" },
] as const;
