"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { visualBadges } from "@/lib/data";

const ThreeNetworkScene = dynamic(() => import("@/components/ThreeNetworkScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[linear-gradient(115deg,rgba(255,255,255,0.05),rgba(239,68,68,0.08),transparent)]" />,
});

export default function VisualSection() {
  return (
    <SectionWrapper className="overflow-hidden" eyebrow="3D System View" title="I build systems that feel alive.">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
              className="relative h-[420px] min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-slate-950 sm:h-[520px]"
        >
          <div className="absolute inset-0 tech-grid opacity-30" />
          <ThreeNetworkScene />
        </motion.div>

        <div className="space-y-4">
          {visualBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel flex items-center gap-4 p-5"
            >
              <div className="grid size-11 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-300/10 text-emerald-300">
                <badge.icon className="size-5" />
              </div>
              <p className="font-semibold text-zinc-200">{badge.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
