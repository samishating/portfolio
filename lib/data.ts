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
  name: "Sami Aziz",
  title: "Full-Stack Web Developer & IT Specialist",
  location: "Casablanca, Morocco",
  email: "mailto:aziz.sami_business@outlook.com",
  emailLabel: "aziz.sami_business@outlook.com",
  github: "https://github.com/samishating",
  phone: "tel:+212691822258",
  phoneLabel: "+212 691-822258",
  discord: "lethal_fentanyl",
  intro:
    "Building robust full-stack applications, event-driven web modules, and reliable digital systems.",
  subtitle:
    "I combine professional full-stack development skills (React, Laravel, MySQL) with video production capabilities (DaVinci Resolve, Premier Pro) and technical support expertise (Telus Digital, IT troubleshooting).",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "IT", label: "Consulting & tech operations" },
  { value: "Web", label: "Laravel, React, databases" },
  { value: "BHL", label: "Esports & content design" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML/CSS", "Responsive Design", "WordPress"],
  },
  {
    title: "Backend / SGBD",
    icon: Database,
    skills: ["PHP (Laravel)", "Node.js", "Python", "C / C++", "SGBD (MySQL, MongoDB)"],
  },
  {
    title: "IT Support & Ops",
    icon: Headphones,
    skills: [
      "Telecom incident resolution",
      "Remote troubleshooting",
      "Workstation hardware maintenance",
      "Systems optimization",
      "Customer satisfaction",
      "Meta Ads acquisition",
    ],
  },
  {
    title: "Creative Tools",
    icon: Wrench,
    skills: ["DaVinci Resolve (Editing)", "Adobe Photoshop (Design)", "GitHub", "Vercel", "VS Code"],
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
    role: "Consultant informatique",
    company: "KaramCasa",
    period: "Dec 2025 - Feb 2026",
    shortLabel: "CONS",
    points: [
      "Led the digital transformation of the store, ensuring technical coordination and development of WordPress/JS custom modules.",
      "Directed the digital marketing and user acquisition strategy (Meta Ads) around the karamcasa.ma platform.",
    ],
  },
  {
    role: "Editeur et gestionnaire de contenu",
    company: "Social Networks / @brotherhood_legacy_",
    period: "2024 - 2025",
    shortLabel: "MEDIA",
    points: [
      "Contributed to high-quality gaming and esports content production across digital channels.",
      "Used DaVinci Resolve and Adobe Photoshop for professional editing and visual styling of team projects.",
      "Collaborated on video and digital content series for the Brotherhood Legacy community.",
    ],
  },
  {
    role: "Technicien support technique",
    company: "Telus Digital",
    period: "Sept 2024 - Sept 2025",
    shortLabel: "TELUS",
    points: [
      "Diagnosed and resolved telecom service incidents for international Telus customers.",
      "Provided remote assistance, securing rapid solutions to maintain optimal customer satisfaction.",
    ],
  },
  {
    role: "Technicien informatique (Intern)",
    company: "Workstation (Station de travail)",
    period: "March 2024",
    shortLabel: "TECH",
    points: [
      "Strengthened hardware skills through server/workstation maintenance, diagnostics, and component upgrades.",
      "Handled optimization and troubleshooting of client workstation operating systems.",
    ],
  },
  {
    role: "Opérateur CNC",
    company: "Manufacturing Sector",
    period: "2020 - 2021",
    shortLabel: "CNC",
    points: [
      "Operated computer numerical control (CNC) machinery for high-precision components.",
      "Managed CNC programming, general equipment maintenance, and strict manufacturing quality control.",
    ],
  },
];

export const certifications = [
  {
    title: "Specialized Full-Stack Degree",
    description: "Graduated in Specialized Digital Development Full Stack from ISTA Hay Hassani 1 (2022-2024). Focused on web systems, schema design, and algorithms.",
    icon: Cpu,
  },
  {
    title: "ALX Software Engineering Certification",
    description: "Certified by ALX in 2024, focusing on production-grade systems, advanced frontend/backend architectures, and team collaboration.",
    icon: Braces,
  },
  {
    title: "Cisco PCAP / Advanced Python Programming",
    description: "Certified by Cisco in 2023, validating skills in advanced object-oriented programming, data structures, and script automation.",
    icon: Terminal,
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
  { label: "Full-stack capability", icon: ShieldCheck },
  { label: "Networked systems", icon: Network },
  { label: "Video editing & production", icon: Gamepad2 },
  { label: "IT & hardware diagnostics", icon: Cloud },
];
