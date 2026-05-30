"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/lib/data";

const companyColors: Record<string, string> = {
  "TELUS Digital": "from-sky-400/20 to-transparent border-sky-300/30",
  KaramCasa: "from-emerald-400/20 to-transparent border-emerald-300/30",
  "Station de Travail": "from-amber-400/15 to-transparent border-amber-300/25",
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Expérience Professionnelle | 02"
      title="Parcours professionnel en IT, support technique et développement."
      className="bg-slate-950/45"
    >
      <div className="relative">
        {/* Timeline vertical line */}
        <div
          className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300/40 via-sky-300/20 to-transparent md:left-8 lg:block"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {experience.map((item, index) => {
            const colorClass = companyColors[item.company] ?? "from-slate-400/15 to-transparent border-slate-300/20";

            return (
              <motion.article
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative lg:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-8 hidden size-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-sky-300/60 bg-slate-950 lg:flex"
                  aria-hidden="true"
                >
                  <span className="size-2 rounded-full bg-sky-300" />
                </div>

                {/* Card */}
                <div className={`story-pill rounded-xl border bg-gradient-to-r p-6 sm:p-8 ${colorClass} bg-slate-950/60`}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      {/* Period */}
                      <div className="mb-3 flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">
                        <Calendar className="size-3" />
                        {item.period}
                      </div>

                      {/* Role */}
                      <h3 className="text-[1.3rem] font-black leading-tight text-white sm:text-[1.45rem]">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <div className="mt-2 flex items-center gap-2">
                        <Building2 className="size-3.5 text-sky-300" />
                        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-sky-300">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Side label badge */}
                    <span className="self-start rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      {item.shortLabel}
                    </span>
                  </div>

                  {/* Points — always visible, no toggle */}
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 font-mono text-xs leading-6 text-slate-400"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-300/60" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
