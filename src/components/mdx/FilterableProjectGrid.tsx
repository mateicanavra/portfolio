import React, { useState, useEffect, useMemo, useRef } from "react";
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
  
  // Create a ref for the component container
  const gridContainerRef = useRef<HTMLDivElement>(null);
  
  // State to track if cycling should be paused
  const [isPaused, setIsPaused] = useState(false);

  // Derive activeCategory from the index
  const activeCategory = cycleCategories[activeCategoryIndex];

  // Set up cycling and user interaction
  useEffect(() => {
    // Cycling timer
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setActiveCategoryIndex((prevIndex) => (prevIndex + 1) % cycleCategories.length);
      }
    }, 3000);

    // Pause on user interaction with the grid
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    
    // Add event listeners to the grid container for mouse interaction
    if (gridContainerRef.current) {
      gridContainerRef.current.addEventListener('mouseenter', handleMouseEnter);
      gridContainerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup
    return () => {
      clearInterval(intervalId);
      if (gridContainerRef.current) {
        gridContainerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        gridContainerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [cycleCategories.length, isPaused]);

  // Manual filter change handler pauses cycling permanently
  const handleFilterChange = (category: string) => {
    const newIndex = cycleCategories.findIndex(c => c.toLowerCase() === category.toLowerCase());
    if (newIndex !== -1) {
      setActiveCategoryIndex(newIndex);
      setIsPaused(true);
    }
  };
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project =>
        project.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div 
      ref={gridContainerRef} 
      className="project-grid-wrapper"
    >
      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilterChange={handleFilterChange}
      />
      <ProjectGrid projects={filteredProjects} activeCategory={activeCategory} />
    </div>
  );
} 