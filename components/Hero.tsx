"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail, Play } from "lucide-react";
import { profile, stats } from "@/lib/data";

const ThreeHeroScene = dynamic(() => import("@/components/ThreeHeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[linear-gradient(120deg,rgba(239,68,68,0.16),transparent_45%,rgba(255,255,255,0.06))]" />,
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 tech-grid opacity-45" />
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.08))]" />

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-100 shadow-[0_0_32px_rgba(239,68,68,0.12)]">
            <span className="size-1.5 bg-red-400" />
            Morocco-based builder
          </div>

          <p className="mb-4 text-lg font-medium text-white/70">{profile.name}</p>
          <h1 className="max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.title}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">{profile.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#projects" className="primary-button px-6 py-3.5">
              <Play className="size-4 fill-current" />
              View Projects
            </Link>
            <Link href="#contact" className="secondary-button px-6 py-3.5">
              <Mail className="size-4" />
              Contact Me
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="glass-panel p-4">
                <div className="text-xl font-black text-white">{item.value}</div>
                <div className="mt-1 text-sm leading-5 text-zinc-500">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative min-h-[420px] lg:min-h-[610px]"
        >
          <div className="absolute inset-0">
            <ThreeHeroScene />
          </div>
          <div className="absolute bottom-6 left-0 max-w-xs border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>Signal</span>
              <ArrowDownRight className="size-4 text-red-400" />
            </div>
            <p className="text-sm leading-6 text-zinc-300">
              Support instincts, engineering execution, and community design moving in the same direction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
