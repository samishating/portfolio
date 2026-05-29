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
    <SectionWrapper id="about" eyebrow="Profile | 01" title="A builder with support instincts and product discipline.">
      <div className="grid gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-[65ch] space-y-6 text-left lg:col-span-7"
        >
          <p className="text-[1.18rem] font-semibold leading-[1.65] text-sky-100">
            I am a software engineer and technical support specialist from Morocco.
          </p>
          <p className="text-base leading-8 text-slate-300">
            That mix matters. I do not just think about how an app looks on launch day. I think about how people use it, how it fails, how support teams explain it, and how the system can be made easier to trust over time.
          </p>
          <p className="font-mono text-sm leading-7 text-slate-400">
            Outside support work, I build personal web apps and community platforms with a strong interest in gaming, esports, automation, and scalable digital communities.
          </p>

          <div className="border-t border-white/10 pt-4">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {profile.title} | {profile.location}
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
