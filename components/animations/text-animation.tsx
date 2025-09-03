"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface TextAnimationProps {
  text: string[]
  className?: string[]
  delay?: number
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { 
      staggerChildren: 0.015,
      delayChildren: i * 0.1,
      ease: "easeOut"
    }
  })
}

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      mass: 0.5
    }
  },
  hidden: {
    opacity: 0,
    y: 10
  }
}

export function WordByWordAnimation({ text, className = [], delay = 0 }: TextAnimationProps) {
  // Calculate segment boundaries
  const segments = text.reduce<{ text: string; class: string; start: number; end: number }[]>(
    (acc, segment, index) => {
      const start = acc.length ? acc[acc.length - 1].end + 1 : 0 // +1 for space
      return [
        ...acc,
        {
          text: segment,
          class: className[index] || "",
          start,
          end: start + segment.length
        }
      ]
    },
    []
  )

  // Join all text parts with spaces and split into characters
  const characters = text.join(" ").split("")
  
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {characters.map((char, i) => {
        // Find which segment this character belongs to
        const segment = segments.find(seg => i >= seg.start && i <= seg.end)
        
        return (
          <motion.span
            key={i}
            className={`inline-block ${segment?.class || ""}`}
            variants={child}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
