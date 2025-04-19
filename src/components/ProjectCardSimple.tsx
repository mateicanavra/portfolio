import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowUpRight } from "lucide-react";

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
  status?: string;
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
  status
}: ProjectCardProps) {
  // Determine if this card should be "active" based on the cycling category
  const isActive = activeCategory === "all" || category?.toLowerCase() === activeCategory.toLowerCase();
  
  return (
    <div className={`
      border border-border bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden
      transition-all duration-500 ease-in-out h-full w-full flex flex-col justify-between
      ${isActive ? 'opacity-100' : 'opacity-30 scale-95'}
      relative dark:shadow-md dark:shadow-background/20
    `}>
      {/* Top right arrow icon for details */}
      {slug && (
        <a 
          href={`/projects/${slug}`}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
          aria-label="View details"
        >
          <ArrowUpRight size={20} />
        </a>
      )}
      
      <div className="p-6 pt-8 flex-grow">
        {/* Title and description */}
        <div className="mb-4">
          {slug ? (
            <a href={`/projects/${slug}`} className="hover:underline">
              <h3 className="text-2xl font-semibold leading-none tracking-tight line-clamp-2">{title}</h3>
            </a>
          ) : (
            <h3 className="text-2xl font-semibold leading-none tracking-tight line-clamp-2">{title}</h3>
          )}
          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{description}</p>
        </div>
        
        {/* Main content area */}
        <div className="flex-grow">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
      
      {/* Bottom footer with GitHub on left, tags+status on right */}
      <div className="flex items-center justify-between p-6 pt-4 border-t border-border/40">
        {/* Left side - GitHub icon */}
        <div>
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
        </div>
        
        {/* Right side - Language tag followed by status badge */}
        <div className="flex items-center gap-3">
          {tags.length > 0 && (
            <span
              className="inline-flex items-center rounded-md border border-foreground/20 bg-transparent px-2 py-1 text-xs font-medium text-foreground/80"
            >
              {tags[0]}
            </span>
          )}
          
          {status && (
            <Badge variant={getStatusVariant(status)} className="flex-shrink-0">
              {status}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to determine badge variant based on status
function getStatusVariant(status?: string) {
  switch(status) {
    case 'Active':
      return 'success';
    case 'Maintained':
      return 'secondary';
    case 'Archived':
      return 'outline';
    case 'Paused':
      return 'destructive';
    case 'Concept':
      return 'accent';
    default:
      return 'default';
  }
} 