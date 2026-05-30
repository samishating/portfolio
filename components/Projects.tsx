"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projets | 03"
      title="Applications développées — architecture, fonctionnalités et stack."
    >
      {/* Featured BHL Project */}
      {featured.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group mb-6 overflow-hidden rounded-2xl border border-sky-300/20 bg-slate-950/60 shadow-[0_30px_90px_rgba(56,189,248,0.08)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Image panel */}
            <div className={`relative min-h-72 overflow-hidden bg-gradient-to-br ${project.accent} lg:min-h-[440px]`}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 tech-grid opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

              {/* Featured badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/15 px-3 py-1.5 backdrop-blur-md">
                <Star className="size-3 fill-sky-300 text-sky-300" />
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-sky-200">
                  Projet Principal
                </span>
              </div>

              {/* Stack overlay */}
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded border border-white/15 bg-slate-950/70 px-2 py-0.5 font-mono text-[10px] text-slate-300 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content panel */}
            <div className="flex flex-col justify-between p-8 lg:p-10">
              <div>
                <p className="kicker mb-3 text-emerald-300">{project.subtitle}</p>
                <h3 className="text-3xl font-black leading-tight text-white lg:text-4xl">{project.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-7">
                {project.preview && (
                  <Link
                    href={project.preview}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button px-5 py-3 text-sm"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </Link>
                )}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button px-5 py-3 text-sm"
                >
                  <Github className="size-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      ))}

      {/* Secondary projects grid */}
      <div className="grid gap-5 lg:grid-cols-2">
        {secondary.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.58, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass-panel flex h-full flex-col overflow-hidden"
          >
            <div className={`relative min-h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 tech-grid opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute left-5 top-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100 drop-shadow-md">
                <span className="size-1.5 rounded-full bg-sky-300" />
                Projet 0{index + 2}
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
              <p className="kicker mb-2 text-slate-500">{project.subtitle}</p>
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
        ))}
      </div>
    </SectionWrapper>
  );
}
