"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper id="skills" eyebrow="Skills" title="A practical stack for building and supporting real systems." className="bg-zinc-950/70">
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
              <div className="grid size-12 place-items-center border border-red-500/25 bg-red-500/10 text-red-300">
                <group.icon className="size-5" />
              </div>
              <h3 className="text-xl font-black text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
