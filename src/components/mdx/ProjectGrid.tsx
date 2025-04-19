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
  status?: string;
  slug?: string;
}

interface ProjectGridProps {
  projects: Project[];
  activeCategory: string;
}

// Helper function to assign mosaic classes to cards based on index
const getMosaicClass = (index: number): string => {
  // Simplified pattern with fewer variations for better consistency
  const pattern = index % 3;
  
  switch(pattern) {
    case 0: return "project-card-wide"; // Wide card
    case 1: return ""; // Standard card
    case 2: return ""; // Standard card
    default: return "";
  }
};

export function ProjectGrid({ projects, activeCategory }: ProjectGridProps) {
  return (
    <div className="my-8 project-mosaic-grid">
      {projects.map((project, index) => (
        <div key={project.title} className={getMosaicClass(index)}>
          <ProjectCardSimple
            {...project}
            activeCategory={activeCategory}
          />
        </div>
      ))}
    </div>
  );
} 