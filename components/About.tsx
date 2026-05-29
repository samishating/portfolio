"use client";

import { motion } from "framer-motion";
import { Headphones, MonitorCog, UsersRound, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { profile } from "@/lib/data";

const pillars = [
  { title: "Troubleshooting", icon: MonitorCog, text: "I like problems with a signal path: symptoms, context, diagnosis, fix, follow-up." },
  { title: "Customer Calm", icon: UsersRound, text: "Support work taught me how to communicate under pressure and make technical steps feel clear." },
  { title: "Web Platforms", icon: Zap, text: "I build interfaces and systems for projects that need structure, speed, and room to grow." },
  { title: "Ops Mindset", icon: Headphones, text: "Telecom and IT support sharpened my respect for reliability, documentation, and user impact." },
];

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="Dispatch · 01" title="About the Builder">
      <div className="grid gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 max-w-[65ch] text-left"
        >
          <p className="font-serif text-[1.18rem] italic leading-[1.65] text-red-100/95">
            I am a software engineer and technical support specialist from Morocco.
          </p>
          <p className="text-base leading-8 text-zinc-300">
            That mix matters. I do not just think about how an app looks on launch day. I think about how people use it, how it fails, how support teams explain it, and how the system can be made easier to trust over time.
          </p>
          <p className="text-base leading-8 text-zinc-400 font-mono text-sm">
            Outside support work, I build personal web apps and community platforms with a strong interest in gaming, esports, automation, and scalable digital communities.
          </p>
          
          <div className="pt-4 border-t border-white/5">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              {profile.title} · {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.aside 
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-center lg:pl-10 lg:border-l border-white/10"
        >
          <p className="font-serif italic text-2xl leading-relaxed text-red-400 relative">
            <span className="absolute -left-4 -top-3 text-4xl text-white/10 font-serif" aria-hidden="true">“</span>
            Support work taught me how to communicate under pressure, design for failure, and build digital systems that people actually trust.
          </p>
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
            className="story-pill border border-white/20 bg-zinc-950/70 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="grid size-9 place-items-center bg-red-500/10 border border-red-500/20 text-red-400">
                <pillar.icon className="size-4" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-white">{pillar.title}</h3>
            </div>
            <p className="text-xs leading-6 text-zinc-500 font-mono">{pillar.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
