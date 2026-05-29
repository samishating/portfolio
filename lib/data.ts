import {
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Github,
  Globe2,
  Headphones,
  Mail,
  Network,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Sam",
  title: "Software Engineer & Technical Support Specialist",
  location: "Morocco",
  email: "mailto:aziz.sami_business@outlook.com",
  emailLabel: "aziz.sami_business@outlook.com",
  github: "https://github.com/samishating",
  phone: "tel:+212691822258",
  phoneLabel: "+212 691 822 258",
  discord: "lethal_fentanyl",
  intro:
    "Building reliable digital systems, smooth web experiences, and community-driven platforms.",
  subtitle:
    "I combine technical support discipline with software engineering craft to solve real problems, ship clean web apps, and design scalable communities with a serious gaming edge.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "IT", label: "Support & telecom operations" },
  { value: "Web", label: "Apps, platforms, dashboards" },
  { value: "BHL", label: "Community platform initiative" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive UI"],
  },
  {
    title: "Backend / Database",
    icon: Database,
    skills: ["Node.js", "API routes", "MongoDB", "Authentication", "Server-side rendering", "Basic cloud deployment"],
  },
  {
    title: "IT / Support",
    icon: Headphones,
    skills: [
      "Windows / macOS troubleshooting",
      "Office 365",
      "Active Directory basics",
      "Exchange / Outlook support",
      "Networking fundamentals",
      "TCP/IP",
      "Remote troubleshooting",
      "Incident handling",
      "Customer support",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "Vercel", "Azure", "VS Code", "Resend", "Cloudflare", "Adobe tools basics"],
  },
];

export const projects = [
  {
    title: "Brotherhood Legacy / BHL",
    description:
      "A multi-division community platform for gaming, esports, music, sport, content, and community engagement. Includes XP, ranks, divisions, user profiles, admin dashboard concepts, recruitment, creator features, and real-time community stats.",
    github: "https://github.com/samishating/bhl_website",
    preview: "https://bhl-website.vercel.app",
    image: "/projects/bhl.png",
    tags: ["Next.js", "MongoDB", "Vercel", "Community Platform", "Gamification", "Esports"],
    accent: "from-red-500/30 via-zinc-900 to-white/10",
  },
  {
    title: "PC Telegram Bot",
    description:
      "A personal automation project using Telegram to interact with or control PC-related actions remotely.",
    github: "https://github.com/samishating/PC-TELEGRAM-BOT",
    image: "/projects/telegram-bot.png",
    tags: ["Automation", "Telegram Bot", "Python/Node", "Utility Tool"],
    accent: "from-sky-400/20 via-zinc-900 to-red-500/10",
  },
  {
    title: "Project Manager",
    description:
      "A project management-style app focused on organizing tasks, users, and workflow logic.",
    github: "https://github.com/1tapsMachine/project_manager",
    image: "/projects/project-manager.png",
    tags: ["Web App", "Productivity", "Full-stack"],
    accent: "from-white/15 via-zinc-900 to-red-600/20",
  },
];

export const experience = [
  {
    role: "Technical Assistant / Support",
    company: "TELUS Communications",
    period: "Current",
    points: [
      "Handle technical troubleshooting across telecom support workflows.",
      "Guide customers through remote diagnostics, issue resolution, and clear next steps.",
      "Support incident handling with calm communication, de-escalation, and reliable documentation.",
    ],
  },
  {
    role: "Gaming PC Shop Technician",
    company: "Previous / Additional Experience",
    period: "Hardware & service",
    points: [
      "Built, optimized, and troubleshot custom gaming PCs for customers.",
      "Diagnosed hardware and software issues across Windows systems and gaming setups.",
      "Balanced technical fixes with direct customer support and practical recommendations.",
    ],
  },
];

export const certifications = [
  {
    title: "ALX Morocco Software Engineering",
    description: "Software engineering certification focused on practical development fundamentals.",
    icon: Braces,
  },
  {
    title: "Cisco PCAP / Advanced Python Programming",
    description: "Python programming foundation with deeper problem solving and automation practice.",
    icon: Terminal,
  },
  {
    title: "Computer Science & Web Development",
    description: "Ongoing technical background across web applications, systems thinking, and product building.",
    icon: Cpu,
  },
];

export const contactLinks = [
  { label: profile.emailLabel, href: profile.email, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: profile.phoneLabel, href: profile.phone, icon: Headphones },
  { label: profile.discord, href: "#contact", icon: Gamepad2 },
  { label: "BHL Preview", href: "https://bhl-website.vercel.app", icon: Globe2 },
];

export const visualBadges = [
  { label: "Support-grade reliability", icon: ShieldCheck },
  { label: "Networked communities", icon: Network },
  { label: "Cloud-ready delivery", icon: Cloud },
  { label: "Gaming-native systems", icon: Gamepad2 },
];
