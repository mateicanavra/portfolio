import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import '../styles/utilities.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  category?: string; // Add category passed via spread
  activeCategory: string; // Add activeCategory prop
}

export function ProjectCard({
  title,
  description,
  tags = [],
  image,
  demoUrl,
  repoUrl,
  category, // Destructure category
  activeCategory, // Destructure activeCategory
}: ProjectCardProps) {
  // Determine if this card should be "active" based on the cycling category
  const isActive = activeCategory === "all" || category?.toLowerCase() === activeCategory.toLowerCase();
  
  return (
    <Card className={`
      overflow-hidden border border-black bg-transparent
      transition-all duration-500 ease-in-out
      ${isActive ? 'opacity-100 scale-100 animate-fade-in' : 'opacity-30 scale-95'}
    `}>
      {/* Moved comment inside Card */}
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoUrl && (
          <Button asChild variant="default" size="sm">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
} 