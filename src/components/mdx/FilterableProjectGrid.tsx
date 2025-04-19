import React, { useState } from "react";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectFilter } from "./ProjectFilter";

interface Project {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  category?: string;
}

interface FilterableProjectGridProps {
  projects: Project[];
  categories?: string[];
}

export function FilterableProjectGrid({ 
  projects,
  categories = ["AI", "Products", "Concepts"] 
}: FilterableProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => 
        project.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <ProjectFilter 
        categories={categories} 
        onFilterChange={setActiveCategory} 
      />
      <ProjectGrid projects={filteredProjects} />
    </>
  );
} 