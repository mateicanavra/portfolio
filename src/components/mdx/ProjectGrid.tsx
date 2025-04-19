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

// Helper function to assign mosaic classes to cards based on index
const getMosaicClass = (index: number): string => {
  // Create a repeating pattern of different sized cards
  const pattern = index % 5;
  
  switch(pattern) {
    case 0: return "project-card-wide"; // First card is wide
    case 1: return ""; // Standard card
    case 2: return "project-card-tall"; // Tall card
    case 3: return "project-card-large"; // Large card
    case 4: return ""; // Standard card
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