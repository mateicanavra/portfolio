import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "default" | "warning" | "danger" | "success";
  title?: string;
  className?: string;
}

const icons = {
  default: Info,
  warning: AlertTriangle,
  danger: AlertCircle,
  success: CheckCircle,
};

export function Callout({
  children,
  type = "default",
  title,
  className,
  ...props
}: CalloutProps) {
  const IconComponent = icons[type];

  return (
    <div
      className={cn(
        "my-6 flex gap-4 rounded-lg border p-4",
        {
          "bg-muted text-foreground border-border": type === "default",
          "bg-yellow-50 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800":
            type === "warning",
          "bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-200 border-red-200 dark:border-red-800":
            type === "danger",
          "bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-200 border-green-200 dark:border-green-800":
            type === "success",
        },
        className
      )}
      {...props}
    >
      <div className="mt-1 flex-shrink-0">
        <IconComponent
          className={cn("h-5 w-5", {
            "text-primary": type === "default",
            "text-yellow-700 dark:text-yellow-400": type === "warning",
            "text-red-700 dark:text-red-400": type === "danger",
            "text-green-700 dark:text-green-400": type === "success",
          })}
        />
      </div>
      <div className="flex-1 space-y-2">
        {title && <p className="font-semibold">{title}</p>}
        <div className="prose-compact">{children}</div>
      </div>
    </div>
  );
} 