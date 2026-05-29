"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience" eyebrow="Timeline · 02" title="The Road So Far" className="bg-zinc-950/70 relative">
      <div className="relative mt-8">
        <span className="timeline-axis" aria-hidden="true" />
        
        <div className="space-y-8 md:space-y-6">
          {experience.map((item, index) => {
            const sideLabel = index === 0 ? "NOW" : "TECH";
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
                  
                  {/* Floating Year / Marker */}
                  <span 
                    className={`display-wordmark absolute top-1 hidden text-[clamp(44px,5vw,72px)] text-red-500/10 md:block select-none ${
                      isEven ? "-right-8" : "-left-8"
                    }`}
                    aria-hidden="true"
                  >
                    {sideLabel}
                  </span>

                  <article className="story-pill border border-white/20 bg-black/45 p-6 sm:p-8">
                    <p className="kicker text-zinc-500">{item.period}</p>
                    
                    <h3 className="mt-3 text-[1.28rem] italic leading-[1.35] text-white sm:text-[1.42rem] font-serif">
                      {item.role}
                    </h3>
                    
                    <p className={`mt-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-red-400 ${
                      isEven ? "md:text-right" : ""
                    }`}>
                      {item.company}
                    </p>

                    {/* Interactive Details Dispatch */}
                    <details className="mt-5 timeline-details group text-left">
                      <summary className="focus-outline inline-flex items-center cursor-pointer font-mono text-[0.68rem] uppercase tracking-[0.18em] text-red-400 select-none group-open:text-zinc-500">
                        <span className="group-open:hidden">Read Dispatch →</span>
                        <span className="hidden group-open:inline">Close Dispatch ↑</span>
                      </summary>
                      
                      <ul className="mt-4 space-y-3 text-xs leading-6 text-zinc-400 font-mono border-t border-white/5 pt-4">
                        {item.points.map((point) => (
                          <li key={point} className="list-none relative pl-4 border-l border-red-500/25">
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
