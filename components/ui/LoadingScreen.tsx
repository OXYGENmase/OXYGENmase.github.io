'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Zap, Shield, Sword, Target } from 'lucide-react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showContent, setShowContent] = useState(false)

  const loadingPhases = [
    { name: 'Initializing Ultra Instinct', icon: Shield, color: 'text-ultra-400' },
    { name: 'Loading Ki Energy', icon: Zap, color: 'text-ki-400' },
    { name: 'Preparing Arsenal', icon: Sword, color: 'text-primary-400' },
    { name: 'Targeting Systems Online', icon: Target, color: 'text-ki-500' }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            onLoadingComplete()
          }, 1000)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => {
        if (prev >= loadingPhases.length - 1) {
          clearInterval(phaseInterval)
          return loadingPhases.length - 1
        }
        return prev + 1
      })
    }, 800)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
      clearInterval(phaseInterval)
    }
  }, [onLoadingComplete, loadingPhases.length])

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center"
        >
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-ki-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="ultra-text">OXYGEN</span>
                <span className="ki-text">mase</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300">
                <span className="ki-text">Ultra Instinct</span> Mode Loading...
              </div>
            </motion.div>

            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  {React.createElement(loadingPhases[currentPhase].icon, {
                    className: `w-8 h-8 ${loadingPhases[currentPhase].color}`,
                  })}
                </motion.div>
                <span className={`text-lg font-medium ${loadingPhases[currentPhase].color}`}>
                  {loadingPhases[currentPhase].name}
                </span>
              </div>
            </motion.div>

            <div className="w-80 md:w-96 mx-auto mb-8">
              <div className="relative">
                <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-ki-400 via-ki-500 to-ultra-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="text-center mt-2">
                <span className="text-ki-400 font-bold text-lg">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 mx-auto mb-8"
            >
              <div className="w-full h-full border-4 border-ki-400 border-t-transparent rounded-full animate-spin" />
            </motion.div>

            <motion.div
              key={loadingProgress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-sm"
            >
              {loadingProgress < 25 && 'Initializing systems...'}
              {loadingProgress >= 25 && loadingProgress < 50 && 'Loading core modules...'}
              {loadingProgress >= 50 && loadingProgress < 75 && 'Preparing interface...'}
              {loadingProgress >= 75 && loadingProgress < 100 && 'Finalizing setup...'}
              {loadingProgress >= 100 && 'Coded fully by OXYGENmase (I don\'t do frontend) ⚡'}
            </motion.div>
          </div>

          <div className="absolute top-8 left-8 w-16 h-16 border-2 border-ki-400/30 rounded-lg" />
          <div className="absolute top-8 right-8 w-16 h-16 border-2 border-ultra-400/30 rounded-lg" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-primary-400/30 rounded-lg" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-ki-500/30 rounded-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
