"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.58, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group glass-panel flex h-full flex-col overflow-hidden"
    >
      <div className={`relative min-h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 tech-grid opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        <div className="absolute left-5 top-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100 drop-shadow-md">
          <span className="size-1.5 rounded-full bg-sky-300" />
          Project 0{index + 1}
        </div>
        {!project.image && (
          <div className="absolute bottom-5 left-5 right-5">
            <div className="h-20 border border-white/10 bg-black/30 p-4 backdrop-blur-md">
              <div className="mb-3 h-2 w-2/3 bg-white/25" />
              <div className="h-2 w-1/2 bg-sky-300/45" />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-chip text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.preview && (
            <Link href={project.preview} target="_blank" rel="noreferrer" className="secondary-button px-4 py-2.5 text-sm">
              <ExternalLink className="size-4" />
              Preview
            </Link>
          )}
          <Link href={project.github} target="_blank" rel="noreferrer" className="secondary-button px-4 py-2.5 text-sm">
            <Github className="size-4" />
            GitHub
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
