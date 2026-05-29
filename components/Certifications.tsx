"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" eyebrow="Certifications / Education" title="Formal learning, practical projects, and constant iteration.">
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            className="glass-panel p-6"
          >
            <item.icon className="mb-6 size-7 text-red-400" />
            <h3 className="text-lg font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
