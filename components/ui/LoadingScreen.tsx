'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Zap, Shield, Sword, Crown, Star, Sparkles } from 'lucide-react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [progress, setProgress] = useState(0)

  const phases = [
    { name: 'Initializing Ultra Instinct', icon: Zap, color: 'text-ki-400' },
    { name: 'Loading Power Levels', icon: Crown, color: 'text-ultra-400' },
    { name: 'Preparing Arsenal', icon: Sword, color: 'text-primary-400' },
    { name: 'Activating Defenses', icon: Shield, color: 'text-ki-400' },
    { name: 'Charging Energy', icon: Sparkles, color: 'text-ultra-400' },
    { name: 'Finalizing Setup', icon: Star, color: 'text-primary-400' }
  ]

  useEffect(() => {
    const totalDuration = 8000 // 8 seconds total
    const phaseDuration = totalDuration / phases.length
    const progressInterval = 50 // Update progress every 50ms

    let currentProgress = 0
    const progressTimer = setInterval(() => {
      currentProgress += (100 / (totalDuration / progressInterval))
      setProgress(Math.min(currentProgress, 100))
    }, progressInterval)

    const phaseTimer = setInterval(() => {
      setCurrentPhase(prev => {
        if (prev < phases.length - 1) {
          return prev + 1
        } else {
          clearInterval(phaseTimer)
          clearInterval(progressTimer)
          // Add extra delay at the end for satisfaction
          setTimeout(() => {
            onLoadingComplete()
          }, 1500) // 1.5 second delay at the end
          return prev
        }
      })
    }, phaseDuration)

    return () => {
      clearInterval(phaseTimer)
      clearInterval(progressTimer)
    }
  }, [phases.length, onLoadingComplete])

  const CurrentIcon = phases[currentPhase]?.icon || Zap

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-ki-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Energy Waves */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Logo/Title */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-bold mb-4">
              <span className="ki-text">OXYGEN</span>
              <span className="ultra-text">mase</span>
            </h1>
            <div className="text-xl text-gray-300 font-medium">
              Ultra Instinct Mode: ON ⚡
            </div>
          </motion.div>

          {/* Current Phase */}
          <motion.div
            key={currentPhase}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <CurrentIcon className={`w-8 h-8 ${phases[currentPhase]?.color}`} />
              </motion.div>
              <span className="text-2xl font-semibold text-white">
                {phases[currentPhase]?.name}
              </span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-96 mx-auto mb-8">
            <div className="relative h-3 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-ki-400 via-ultra-400 to-primary-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="text-center mt-2">
              <span className="text-ki-400 font-bold text-lg">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Loading Dots */}
          <motion.div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-ki-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Phase Indicator */}
          <div className="mt-8">
            <div className="flex justify-center space-x-2">
              {phases.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index <= currentPhase ? 'bg-ki-400' : 'bg-gray-600'
                  }`}
                  animate={{
                    scale: index === currentPhase ? [1, 1.3, 1] : 1,
                  }}
                  transition={{ duration: 0.5, repeat: index === currentPhase ? Infinity : 0 }}
                />
              ))}
            </div>
          </div>

          {/* Status Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-gray-400 text-sm"
          >
            Preparing your ultimate portfolio experience...
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
