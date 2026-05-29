"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience" eyebrow="Timeline | 02" title="Experience shaped by real support, delivery, and production work." className="bg-slate-950/45">
      <div className="relative mt-8">
        <span className="timeline-axis" aria-hidden="true" />

        <div className="space-y-8 md:space-y-6">
          {experience.map((item, index) => {
            const sideLabel = item.shortLabel || "TECH";
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative grid grid-cols-1 md:grid-cols-2"
              >
                <div className={`relative ${isEven ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                  <span
                    className={`display-wordmark absolute top-1 hidden select-none text-[clamp(44px,5vw,72px)] text-sky-300/10 md:block ${
                      isEven ? "-right-8" : "-left-8"
                    }`}
                    aria-hidden="true"
                  >
                    {sideLabel}
                  </span>

                  <article className="story-pill rounded-lg border border-white/10 bg-slate-950/60 p-6 sm:p-8">
                    <p className="kicker text-slate-500">{item.period}</p>

                    <h3 className="mt-3 text-[1.28rem] font-bold leading-[1.35] text-white sm:text-[1.42rem]">
                      {item.role}
                    </h3>

                    <p className={`mt-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-sky-300 ${
                      isEven ? "md:text-right" : ""
                    }`}>
                      {item.company}
                    </p>

                    <details className="timeline-details group mt-5 text-left">
                      <summary className="inline-flex cursor-pointer select-none items-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-emerald-300 group-open:text-slate-400">
                        <span className="group-open:hidden">Read details &gt;</span>
                        <span className="hidden group-open:inline">Close details ^</span>
                      </summary>

                      <ul className="mt-4 space-y-3 border-t border-white/10 pt-4 font-mono text-xs leading-6 text-slate-400">
                        {item.points.map((point) => (
                          <li key={point} className="relative list-none border-l border-sky-300/25 pl-4">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </article>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
