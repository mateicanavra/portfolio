import React from "react";
import { ProjectCardSimple } from "../ProjectCardSimple";

interface Project {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  category?: string;
}

interface ProjectGridProps {
  projects: Project[];
  activeCategory: string;
}

export function ProjectGrid({ projects, activeCategory }: ProjectGridProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCardSimple
          key={project.title}
          {...project}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
} 