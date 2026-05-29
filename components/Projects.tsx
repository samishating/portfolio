"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="projects" eyebrow="Featured Projects" title="Platforms, utilities, and experiments with real initiative behind them.">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
