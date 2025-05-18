import React from "react";
import { Callout } from "./ui/callout";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FilterableProjectGrid } from "./mdx/FilterableProjectGrid";

export const components = {
  // Custom components
  Callout: Callout,
  Button: Button,
  Card: Card,
  CardContent: CardContent,
  CardDescription: CardDescription,
  CardFooter: CardFooter,
  CardHeader: CardHeader,
  CardTitle: CardTitle,
  FilterableProjectGrid: FilterableProjectGrid,
  
  // Override default elements
  h1: (props: any) => <h1 className="text-5xl font-extrabold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-4xl font-bold mt-8 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />,
  
  a: (props: any) => (
    <a
      className="text-primary underline underline-offset-4 hover:text-primary/80 font-medium"
      {...props}
    />
  ),
  
  img: (props: any) => (
    <img className="rounded-lg my-8 w-full" {...props} />
  ),
  
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
  ),
  
  ul: (props: any) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
  
  hr: () => <hr className="my-6 border-border" />,
}; 