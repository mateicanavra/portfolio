import React, { useState, useEffect, useMemo } from "react"; // Combined imports
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
  // Include "all" in the list for cycling
  const cycleCategories = useMemo(() => ["all", ...categories], [categories]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Derive activeCategory from the index
  const activeCategory = cycleCategories[activeCategoryIndex];

  // Auto-cycle through categories
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategoryIndex((prevIndex) => (prevIndex + 1) % cycleCategories.length);
    }, 3000); // Cycle every 3 seconds

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [cycleCategories.length]);

  // Manual filter change handler
  const handleFilterChange = (category: string) => {
     const newIndex = cycleCategories.findIndex(c => c.toLowerCase() === category.toLowerCase());
     if (newIndex !== -1) {
       setActiveCategoryIndex(newIndex);
     }
  };
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project =>
        project.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilterChange={handleFilterChange}
      />
      <ProjectGrid projects={filteredProjects} activeCategory={activeCategory} />
    </>
  );
} 