"use client"

import { motion } from "framer-motion"
import type React from "react"

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.25, 0, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
