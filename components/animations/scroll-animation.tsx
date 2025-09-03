"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: delay
          }
        },
        hidden: {
          opacity: 0
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredScrollItem() {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  )
}
