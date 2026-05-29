"use client";

import { motion } from "framer-motion";
import { Headphones, MonitorCog, UsersRound, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const pillars = [
  { title: "Troubleshooting", icon: MonitorCog, text: "I like problems with a signal path: symptoms, context, diagnosis, fix, follow-up." },
  { title: "Customer Calm", icon: UsersRound, text: "Support work taught me how to communicate under pressure and make technical steps feel clear." },
  { title: "Web Platforms", icon: Zap, text: "I build interfaces and systems for projects that need structure, speed, and room to grow." },
  { title: "Ops Mindset", icon: Headphones, text: "Telecom and IT support sharpened my respect for reliability, documentation, and user impact." },
];

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="About" title="Support-trained. Engineering-focused. Community-minded.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg leading-8 text-zinc-300"
        >
          <p>
            I am a software engineer and technical support specialist from Morocco, currently working in a technical assistant/support role at TELUS Communications.
            My background sits at the intersection of web development, IT support, telecom troubleshooting, and customer-facing problem solving.
          </p>
          <p>
            That mix matters. I do not just think about how an app looks on launch day. I think about how people use it, how it fails, how support teams explain it,
            and how the system can be made easier to trust over time.
          </p>
          <p>
            Outside support work, I build personal web apps and community platforms with a strong interest in gaming, esports, automation, and scalable digital communities.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="glass-panel p-6"
            >
              <pillar.icon className="mb-5 size-6 text-red-400" />
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
