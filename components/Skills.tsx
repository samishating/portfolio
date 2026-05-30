"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Compétences Techniques"
      title="Stack technique maîtrisé, de l'interface à la base de données."
      className="bg-slate-950/45"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-6 sm:p-7"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-lg border border-sky-300/25 bg-sky-300/10 text-sky-300">
                <group.icon className="size-5" />
              </div>
              <h3 className="text-xl font-black text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* ATS Keywords band */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 rounded-lg border border-white/8 bg-white/[0.025] p-5"
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
          Mots-clés techniques
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Développement Web",
            "Full-Stack",
            "Frontend",
            "Backend",
            "Applications Web",
            "Bases de données",
            "Maintenance applicative",
            "JavaScript",
            "React",
            "Next.js",
            "MongoDB",
            "Laravel",
            "MySQL",
            "Node.js",
            "PHP",
            "APIs REST",
            "Git",
            "Vercel",
          ].map((kw) => (
            <span
              key={kw}
              className="rounded border border-sky-300/15 bg-sky-300/6 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-sky-400/80"
            >
              {kw}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
