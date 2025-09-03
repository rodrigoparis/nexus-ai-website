"use client"

import { motion } from "framer-motion"
import type React from "react"

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
