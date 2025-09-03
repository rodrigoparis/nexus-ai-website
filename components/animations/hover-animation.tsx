"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HoverAnimationProps {
  children: ReactNode
  className?: string
  glowColor?: string
  scale?: number
  lift?: number
}

export function HoverAnimation({ 
  children, 
  className = "", 
  glowColor = "rgba(255, 255, 255, 0.1)",
  scale = 1.03,
  lift = -4
}: HoverAnimationProps) {
  return (
    <motion.div
      whileHover={{ 
        scale, 
        y: lift,
        boxShadow: `0 0 20px ${glowColor}`,
      }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface GrayscaleHoverProps {
  children: ReactNode
  className?: string
}

export function GrayscaleHover({ children, className = "" }: GrayscaleHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1,
        filter: "grayscale(0%)"
      }}
      initial={{
        filter: "grayscale(100%)"
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
