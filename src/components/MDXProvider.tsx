import React from "react";
import { components } from "./MDXComponents";

interface MDXProviderProps {
  children: React.ReactNode;
}

export function MDXProvider({ children }: MDXProviderProps) {
  return <>{children}</>;
}

// Export components for explicit imports
export { components }; 