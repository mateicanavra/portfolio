import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string; // Add activeCategory prop
  onFilterChange: (category: string) => void;
}

export function ProjectFilter({ categories, activeCategory, onFilterChange }: ProjectFilterProps) {
  // Remove internal state, use prop instead
  // const [activeCategory, setActiveCategory] = useState("all");

  const handleClick = (category: string) => {
    // No need to setActiveCategory locally
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap gap-2 my-6">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => handleClick("all")}
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => handleClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
} 