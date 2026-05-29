"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail, Play } from "lucide-react";
import { profile, stats } from "@/lib/data";

const ThreeHeroScene = dynamic(() => import("@/components/ThreeHeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[linear-gradient(120deg,rgba(56,189,248,0.14),transparent_45%,rgba(16,185,129,0.08))]" />,
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 tech-grid opacity-35" />
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-sky-300/35 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.08))]" />

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="relative mb-6 inline-flex items-center gap-3 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.7)]" />
            <span className="font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-sky-100">
              Software Engineer / IT Specialist
            </span>
          </div>

          <h1 className="display-wordmark max-w-4xl text-balance text-[clamp(3.8rem,9vw,7.8rem)] leading-[0.92] text-white">
            {profile.name}
          </h1>
          
          <p className="mt-6 max-w-3xl text-balance text-xl font-semibold leading-8 text-sky-100 sm:text-2xl">
            {profile.title}
          </p>
          
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300">
            {profile.intro}
          </p>
          
          <p className="mt-3 max-w-2xl font-mono text-sm leading-6 text-slate-400">
            {profile.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#projects" className="primary-button font-mono tracking-wider">
              <Play className="size-4 fill-current" />
              Read the Work
            </Link>
            <Link href="#contact" className="secondary-button font-mono tracking-wider">
              <Mail className="size-4" />
              Write to Me
            </Link>
          </div>

          {/* Technical Stats Strip */}
          <div className="mt-12 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="display-wordmark text-3xl leading-none text-sky-300 sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  {item.label}
                </p>
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
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-slate-950/25 shadow-[0_30px_90px_rgba(15,23,42,0.45)]">
            <ThreeHeroScene />
          </div>
          <div className="absolute bottom-6 left-4 max-w-xs rounded-lg border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
              <span>Signal</span>
              <ArrowDownRight className="size-4 text-sky-300" />
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Support instincts, engineering execution, and community design moving in the same direction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
