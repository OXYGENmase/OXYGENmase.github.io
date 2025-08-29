'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HoverCardProps {
  children: React.ReactNode
  content: React.ReactNode
  className?: string
}

export default function HoverCard({ children, content, className = "" }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 p-4 rounded-lg glass-effect backdrop-blur-md border border-ki-400/20 shadow-2xl shadow-ki-400/20 min-w-[200px]"
          >
            <div className="text-sm text-gray-300">
              {content}
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-gradient-to-br from-ki-400 to-ultra-300 rotate-45 border-l border-t border-ki-400/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
