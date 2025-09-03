import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ children, className, size = "xl" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-7xl",
    full: "max-w-full",
  }

  return <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>{children}</div>
}
