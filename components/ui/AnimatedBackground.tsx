'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: string
  y: string
  size: number
  opacity: number
  color: string
  twinkleDuration: number
  twinkleDelay: number
  brightness: number
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate professional stars with realistic properties
    const starColors = [
      '#FFFFFF', // White
      '#F0F8FF', // Alice Blue
      '#E6E6FA', // Lavender
      '#FFD700', // Gold
      '#FFA500', // Orange
      '#FF6347', // Tomato
      '#87CEEB', // Sky Blue
      '#DDA0DD', // Plum
    ]

    const staticStars: Star[] = Array.from({ length: 200 }, (_, i) => {
      const brightness = 0.3 + Math.random() * 0.7
      const size = 0.5 + Math.random() * 3
      const color = starColors[Math.floor(Math.random() * starColors.length)]
      
      return {
        id: i,
        x: ((i * 137.5 + Math.random() * 50) % 100).toFixed(2) + '%',
        y: ((i * 89.3 + Math.random() * 50) % 100).toFixed(2) + '%',
        size,
        opacity: brightness,
        color,
        twinkleDuration: 2 + Math.random() * 4,
        twinkleDelay: Math.random() * 5,
        brightness,
      }
    })
    setStars(staticStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Professional star field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}, 0 0 ${star.size * 4}px ${star.color}`,
          }}
          animate={{
            scale: [1, 1.2, 0.8, 1],
            opacity: [star.opacity, star.opacity * 1.5, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.twinkleDuration,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Atmospheric gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/30 via-transparent to-dark-900/30" />
      
      {/* Subtle nebula-like effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl" />
      </div>
    </div>
  )
}
