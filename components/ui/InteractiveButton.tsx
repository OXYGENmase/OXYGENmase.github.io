'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface InteractiveButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ultra'
}

export default function InteractiveButton({ 
  children, 
  onClick, 
  className = "",
  variant = 'primary' 
}: InteractiveButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y
    }

    setRipples(prev => [...prev, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border-gray-600'
      case 'ultra':
        return 'bg-gradient-to-r from-ultra-400 to-ultra-500 hover:from-ultra-300 hover:to-ultra-400 border-ultra-300 shadow-ultra-glow'
      default:
        return 'bg-gradient-to-r from-ki-400 to-ki-500 hover:from-ki-300 hover:to-ki-400 border-ki-300 shadow-ki-glow'
    }
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-white border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${getVariantClasses()} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0
          }}
          animate={{
            width: 300,
            height: 300,
            x: -150,
            y: -150,
            opacity: [0.5, 0]
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  )
}
