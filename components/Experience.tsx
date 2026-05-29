"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience" eyebrow="Experience" title="Technical support experience that makes the engineering stronger." className="bg-zinc-950/70">
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-red-500 via-white/15 to-transparent md:block" />
        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative md:pl-12"
            >
              <span className="absolute left-[13px] top-8 hidden size-2.5 bg-red-400 shadow-[0_0_22px_rgba(239,68,68,0.7)] md:block" />
              <div className="glass-panel p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">{item.role}</h3>
                    <p className="mt-1 text-zinc-400">{item.company}</p>
                  </div>
                  <span className="w-fit border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                    {item.period}
                  </span>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {item.points.map((point) => (
                    <p key={point} className="border-l border-white/10 pl-4 text-sm leading-6 text-zinc-400">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
