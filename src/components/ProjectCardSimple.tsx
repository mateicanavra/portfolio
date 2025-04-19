import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  category?: string;
  activeCategory: string;
  slug?: string;
}

export function ProjectCardSimple({
  title,
  description,
  tags = [],
  image,
  demoUrl,
  repoUrl,
  category,
  activeCategory,
  slug,
}: ProjectCardProps) {
  // Determine if this card should be "active" based on the cycling category
  const isActive = activeCategory === "all" || category?.toLowerCase() === activeCategory.toLowerCase();
  
  // Use simple opacity and transform transitions instead of 3D flip
  return (
    <div className={`
      border border-black bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden
      transition-all duration-500 ease-in-out h-full w-full flex flex-col justify-between
      ${isActive ? 'opacity-100' : 'opacity-30 scale-95'}
    `}>
      {image && (
        <div className="w-full overflow-hidden" style={{ maxHeight: "35%" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col space-y-1.5 p-6 pb-3">
          {slug ? (
            <a href={`/projects/${slug}`} className="hover:underline">
              <h3 className="text-2xl font-semibold leading-none tracking-tight line-clamp-2">{title}</h3>
            </a>
          ) : (
            <h3 className="text-2xl font-semibold leading-none tracking-tight line-clamp-2">{title}</h3>
          )}
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </div>
        
        <div className="px-6 mb-auto">
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
        </div>
      </div>
      
      {/* Footer with buttons always at the bottom */}
      <div className="flex items-center p-6 pt-3 mt-auto">
        {repoUrl && (
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
          >
            Repository
          </a>
        )}
        {slug && (
          <a 
            href={`/projects/${slug}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 ml-2"
          >
            Details
          </a>
        )}
        {demoUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 ml-2"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
} 