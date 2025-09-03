"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GridAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GridAnimation({ children, className = "", delay = 0 }: GridAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
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

export function GridItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        visible: { 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 20
          }
        },
        hidden: { 
          opacity: 0, 
          scale: 0.95, 
          rotate: 4 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
