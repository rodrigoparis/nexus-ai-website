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
  // Split the text into words
  const words = text[0].split(" ")
  
  // Define which words should have the gradient style
  const shouldHaveGradient = (word: string) => {
    return word === "Automatizado" || word === "con" || word === "IA"
  }
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      className="inline-flex flex-nowrap"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className={`inline-block ${shouldHaveGradient(word) ? "luxury-gradient-text" : ""}`}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.div>
  )
}
