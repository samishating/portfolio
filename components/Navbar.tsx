"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="border-b border-white/10 bg-white/[0.025]">
        <div className="container-custom flex h-9 items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
          <div>2026 Portfolio of Sam</div>
          <div className="flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>Available | Morocco</span>
          </div>
        </div>
      </div>

      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-sky-300/40 bg-sky-300/10 text-sm font-black text-white shadow-[0_0_28px_rgba(56,189,248,0.18)]">
            S
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
            Sam
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="Open GitHub profile">
            <Github className="size-4" />
          </Link>
          <Link href="#contact" className="primary-button px-5 py-2.5 text-sm">
            Contact
          </Link>
        </div>

        <button className="icon-button md:!hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link py-3" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}

      <div className="hazard-tape w-full" />
    </motion.header>
  );
}
