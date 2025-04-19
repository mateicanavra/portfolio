import React from "react";
import { cn } from "@/lib/utils";

interface MDXContentProps {
  children: React.ReactNode;
  className?: string;
}

export function MDXContent({ children, className }: MDXContentProps) {
  return (
    <div
      className={cn(
        "prose dark:prose-invert max-w-none",
        "prose-headings:scroll-mt-20 prose-headings:font-bold",
        "prose-h1:text-4xl prose-h1:font-extrabold",
        "prose-h2:text-3xl prose-h2:font-bold",
        "prose-h3:text-2xl",
        "prose-h4:text-xl",
        "prose-blockquote:border-l-primary",
        "prose-blockquote:not-italic prose-blockquote:font-normal",
        "prose-blockquote:text-muted-foreground",
        "prose-img:rounded-lg",
        "prose-code:bg-muted prose-code:rounded-sm prose-code:px-1 prose-code:py-0.5",
        "prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:bg-card prose-pre:border",
        className
      )}
    >
      {children}
    </div>
  );
} 