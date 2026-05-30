"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Layers } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { profile } from "@/lib/data";

const pillars = [
  {
    title: "Développement Web",
    icon: Code2,
    text: "Conception et développement d'applications web modernes, de la maquette au déploiement en production.",
  },
  {
    title: "Architecture Full-Stack",
    icon: Layers,
    text: "Maîtrise du frontend (React, Next.js) et du backend (Node.js, Laravel, PHP) pour des solutions complètes.",
  },
  {
    title: "Bases de données",
    icon: Database,
    text: "Conception et gestion de bases de données relationnelles (MySQL) et NoSQL (MongoDB) pour des applications performantes.",
  },
  {
    title: "Applications Web",
    icon: Globe,
    text: "Développement de plateformes web complexes avec gestion utilisateurs, APIs REST, et systèmes en temps réel.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="Profil | 01" title="Développeur Full-Stack orienté résultats et performance.">
      <div className="grid gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-[65ch] space-y-6 text-left lg:col-span-7"
        >
          <p className="text-[1.18rem] font-semibold leading-[1.65] text-sky-100">
            Développeur Web Full-Stack basé à Casablanca, Maroc.
          </p>
          <p className="text-base leading-8 text-slate-300">
            Spécialisé en développement d&apos;applications web modernes avec React.js, Next.js, Laravel et MongoDB. Je conçois des systèmes complets — du frontend réactif jusqu&apos;au backend et aux bases de données — avec une attention particulière à la maintenabilité, la performance et l&apos;expérience utilisateur.
          </p>
          <p className="font-mono text-sm leading-7 text-slate-400">
            Mon expérience en support technique chez TELUS Digital m&apos;a donné un sens aigu des problèmes en production, de la fiabilité des systèmes et de la communication technique claire. Je construis du code que d&apos;autres développeurs peuvent lire, maintenir et faire évoluer.
          </p>

          <div className="border-t border-white/10 pt-4">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {profile.title} · {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-center rounded-lg border border-white/10 bg-white/[0.035] p-6 lg:col-span-5 lg:p-8"
        >
          <p className="relative text-2xl font-semibold leading-relaxed text-emerald-200">
            <span className="absolute -left-3 -top-3 text-4xl text-white/10" aria-hidden="true">&quot;</span>
            Je construis des applications web complètes, de l&apos;interface utilisateur jusqu&apos;à la base de données, avec rigueur et souci du détail.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {["Développement Web", "Full-Stack", "Frontend", "Backend", "Applications Web", "Bases de données"].map((kw) => (
              <span key={kw} className="rounded border border-emerald-300/20 bg-emerald-300/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                {kw}
              </span>
            ))}
          </div>
        </motion.aside>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            className="story-pill rounded-lg border border-white/10 bg-slate-950/60 p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-300">
                <pillar.icon className="size-4" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-white">{pillar.title}</h3>
            </div>
            <p className="font-mono text-xs leading-6 text-slate-400">{pillar.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
