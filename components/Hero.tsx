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
          <div className="relative inline-block mb-6">
            <span className="inline-flex bg-red-500 px-3.5 py-1.5 font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-black">
              Software Engineer / Systems Builder
            </span>
          </div>

          <h1 className="display-wordmark text-[clamp(68px,12vw,140px)] leading-[0.8] text-white">
            {profile.name}
          </h1>
          
          <p className="mt-6 max-w-4xl text-[1.12rem] italic leading-[1.6] text-red-100/90 font-serif">
            {profile.title}
          </p>
          
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-zinc-300">
            {profile.intro}
          </p>
          
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 font-mono">
            {profile.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#projects" className="primary-button px-6 py-3.5 rounded-none font-mono tracking-wider">
              <Play className="size-4 fill-current" />
              Read the Work
            </Link>
            <Link href="#contact" className="secondary-button px-6 py-3.5 rounded-none font-mono tracking-wider">
              <Mail className="size-4" />
              Write to Me
            </Link>
          </div>

          {/* Technical Stats Strip */}
          <div className="mt-14 border-t border-white/10 pt-8 grid gap-4 py-4 sm:grid-cols-3 sm:gap-6">
            {stats.map((item) => (
              <div key={item.label} className="border-l border-white/20 pl-4 first:border-l-0 first:pl-0">
                <p className="display-wordmark text-[clamp(48px,6vw,78px)] leading-[0.8] text-red-500">
                  {item.value}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
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
