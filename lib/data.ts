import {
  Braces,
  Code2,
  Cpu,
  Database,
  Github,
  Globe2,
  Headphones,
  Layout,
  Linkedin,
  Mail,
  Server,
  Settings2,
  Terminal,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Sami Aziz",
  title: "Développeur Web Full-Stack",
  location: "Casablanca, Maroc",
  email: "mailto:aziz.sami_business@outlook.com",
  emailLabel: "aziz.sami_business@outlook.com",
  github: "https://github.com/samishating",
  linkedin: "https://linkedin.com/in/sami-aziz",
  phone: "tel:+212691822258",
  phoneLabel: "+212 691-822258",
  discord: "lethal_fentanyl",
  intro:
    "Développeur spécialisé en applications web modernes, frontend/backend, bases de données et solutions techniques.",
  subtitle:
    "React.js • Next.js • JavaScript • MongoDB • MySQL • Laravel • PHP",
  cvUrl: "/uploads/cv-sami-aziz.pdf",
};

export const navItems = [
  { label: "Profil", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Ans d'expérience web" },
  { value: "Full", label: "Stack Frontend & Backend" },
  { value: "BHL", label: "Plateforme communautaire" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "PHP", "Laravel", "Python", "REST APIs", "SSR / ISR"],
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Modélisation BDD", "Requêtes SQL"],
  },
  {
    title: "Outils & DevOps",
    icon: Wrench,
    skills: ["Git / GitHub", "Vercel", "WordPress", "DaVinci Resolve", "Adobe Photoshop", "VS Code"],
  },
];

export const projects = [
  {
    title: "Brotherhood Legacy Platform",
    subtitle: "BHL — Plateforme communautaire complète",
    description:
      "Plateforme communautaire moderne avec dashboard administrateur, gestion utilisateurs, système XP / niveaux, leaderboards, contenu dynamique, et architecture performante SSR/ISR. Interface complète pour une communauté gaming/esports avec profils, recrutement et statistiques en temps réel.",
    github: "https://github.com/samishating/bhl_website",
    preview: "https://bhl-website.vercel.app",
    image: "/projects/bhl.png",
    tags: ["Next.js", "MongoDB", "JavaScript", "API REST", "SSR/ISR", "Vercel", "Gamification"],
    accent: "from-sky-400/25 via-slate-950 to-emerald-300/10",
    featured: true,
  },
  {
    title: "PC Telegram Bot",
    subtitle: "Automatisation système",
    description:
      "Bot Telegram permettant l'automatisation d'actions système, le contrôle distant et l'interaction machine-to-machine via API Telegram. Gestion d'événements, commandes distantes et notifications automatisées.",
    github: "https://github.com/samishating/PC-TELEGRAM-BOT",
    image: "/projects/telegram-bot.png",
    tags: ["Python", "Automation", "Telegram API", "Contrôle distant"],
    accent: "from-sky-400/20 via-slate-950 to-amber-300/10",
    featured: false,
  },
  {
    title: "Project Manager",
    subtitle: "Gestion de projets web",
    description:
      "Application de gestion de projets avec organisation des tâches, suivi du workflow, attribution utilisateurs et outils de productivité intégrés.",
    github: "https://github.com/1tapsMachine/project_manager",
    image: "/projects/project-manager.png",
    tags: ["Full-Stack", "Web App", "Gestion de projet", "Productivité"],
    accent: "from-white/15 via-slate-950 to-emerald-300/15",
    featured: false,
  },
];

export const experience = [
  {
    role: "Technicien Support Technique",
    company: "TELUS Digital",
    period: "Sept 2024 – Sept 2025",
    shortLabel: "TELUS",
    points: [
      "Diagnostic et résolution d'incidents télécom pour clients internationaux.",
      "Support client à distance avec gestion rapide des tickets et incidents.",
      "Troubleshooting technique avancé sur systèmes et réseaux télécommunications.",
      "Maintien d'un taux élevé de satisfaction client et respect des SLA.",
    ],
  },
  {
    role: "Consultant Informatique",
    company: "KaramCasa",
    period: "Déc 2025 – Fév 2026",
    shortLabel: "KARAM",
    points: [
      "Digitalisation complète du magasin et développement de modules WordPress / JavaScript personnalisés.",
      "Coordination technique des projets numériques et intégration des outils de gestion.",
      "Stratégie digitale et acquisition client via Meta Ads sur la plateforme karamcasa.ma.",
      "Mise en place d'une architecture technique adaptée aux besoins e-commerce.",
    ],
  },
  {
    role: "Technicien Informatique",
    company: "Station de Travail",
    period: "Mars 2024",
    shortLabel: "TECH",
    points: [
      "Maintenance informatique matérielle et logicielle sur postes de travail et serveurs.",
      "Dépannage hardware/software, diagnostics et remplacement de composants.",
      "Optimisation des systèmes d'exploitation et amélioration des performances.",
      "Support technique aux utilisateurs et rédaction de rapports d'intervention.",
    ],
  },
];

export const certifications = [
  {
    title: "Technicien Spécialisé Développement Digital Full Stack",
    description:
      "Diplômé en développement digital full-stack (2024). Compétences acquises en conception d'applications web, architecture systèmes, modélisation de bases de données, algorithmes et intégration de solutions modernes.",
    icon: Cpu,
  },
  {
    title: "ALX Software Engineering",
    description:
      "Certifié ALX (2024) sur les systèmes de production, architectures frontend/backend avancées, collaboration d'équipe et pratiques de développement agile.",
    icon: Braces,
  },
  {
    title: "Cisco PCAP — Python Avancé",
    description:
      "Certifié Cisco (2023) en programmation orientée objet avancée, structures de données, automatisation de scripts et développement Python.",
    icon: Terminal,
  },
];

export const contactLinks = [
  { label: profile.emailLabel, href: profile.email, icon: Mail },
  { label: "GitHub — samishating", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: profile.phoneLabel, href: profile.phone, icon: Headphones },
  { label: "BHL Preview", href: "https://bhl-website.vercel.app", icon: Globe2 },
];

export const visualBadges = [
  { label: "Applications Web Full-Stack", icon: Code2 },
  { label: "Architecture Frontend / Backend", icon: Server },
  { label: "Bases de données & APIs REST", icon: Database },
  { label: "Maintenance & Support Applicatif", icon: Settings2 },
];
