'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { File, Syringe, Gamepad2, Zap, CheckCircle, AlertCircle } from 'lucide-react'

interface InjectionState {
  fileInSyringe: boolean
  injecting: boolean
  success: boolean
  error: boolean
}

export default function DllInjectionGame() {
  const [injectionState, setInjectionState] = useState<InjectionState>({
    fileInSyringe: false,
    injecting: false,
    success: false,
    error: false
  })
  
  const fileRef = useRef<HTMLDivElement>(null)
  const syringeRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<HTMLDivElement>(null)

  const handleFileDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'file')
  }

  const handleSyringeDragStart = (e: React.DragEvent) => {
    if (injectionState.fileInSyringe) {
      e.dataTransfer.setData('text/plain', 'syringe')
    } else {
      e.preventDefault()
    }
  }

  const handleSyringeDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    if (data === 'file' && !injectionState.fileInSyringe) {
      setInjectionState(prev => ({ ...prev, fileInSyringe: true }))
    }
  }

  const handleSyringeDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleGameDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    if (data === 'syringe' && injectionState.fileInSyringe && !injectionState.injecting) {
      startInjection()
    }
  }

  const handleGameDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  // Mobile touch handlers
  const handleFileTouchStart = (e: React.TouchEvent) => {
    if (!injectionState.fileInSyringe) {
      e.preventDefault()
      // Simulate drag for mobile
      setTimeout(() => {
        if (syringeRef.current && !injectionState.fileInSyringe) {
          setInjectionState(prev => ({ ...prev, fileInSyringe: true }))
        }
      }, 500)
    }
  }

  const handleSyringeTouchStart = (e: React.TouchEvent) => {
    if (injectionState.fileInSyringe && !injectionState.injecting) {
      e.preventDefault()
      // Simulate drag for mobile
      setTimeout(() => {
        if (gameRef.current && injectionState.fileInSyringe && !injectionState.injecting) {
          startInjection()
        }
      }, 500)
    }
  }

  const startInjection = () => {
    setInjectionState(prev => ({ ...prev, injecting: true }))
    
    // Simulate injection process
    setTimeout(() => {
      const success = Math.random() > 0.3 // 70% success rate
      setInjectionState(prev => ({ 
        ...prev, 
        injecting: false, 
        success, 
        error: !success 
      }))
      
      // Reset after showing result
      setTimeout(() => {
        setInjectionState({
          fileInSyringe: false,
          injecting: false,
          success: false,
          error: false
        })
      }, 3000)
    }, 2000)
  }

  const resetGame = () => {
    setInjectionState({
      fileInSyringe: false,
      injecting: false,
      success: false,
      error: false
    })
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 glass-effect rounded-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          <span className="ki-text">DLL</span> <span className="ultra-text">Injection</span> <span className="ki-text">Simulator</span>
        </h3>
        <p className="text-gray-300">
          {typeof window !== 'undefined' && 'ontouchstart' in window 
            ? 'Tap the file, then tap the syringe, then tap the game!' 
            : 'Drag the file into the syringe, then inject it into the game!'}
        </p>
      </div>

      {/* Game Area */}
      <div className="relative h-96 bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl border border-ki-400/20 overflow-hidden">
        
        {/* File */}
        <div
          ref={fileRef}
          draggable={!injectionState.fileInSyringe}
          onDragStart={handleFileDragStart}
          onTouchStart={handleFileTouchStart}
          className={`absolute top-4 left-4 cursor-grab active:cursor-grabbing z-10 transition-all duration-300 ${
            injectionState.fileInSyringe ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <motion.div 
            className="flex items-center space-x-2 p-3 glass-effect rounded-lg border border-primary-400/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <File className="w-6 h-6 text-primary-400" />
            <span className="text-white font-medium">hack.dll</span>
          </motion.div>
        </div>

        {/* Syringe */}
        <div
          ref={syringeRef}
          draggable={injectionState.fileInSyringe && !injectionState.injecting}
          onDragStart={handleSyringeDragStart}
          onDrop={handleSyringeDrop}
          onDragOver={handleSyringeDragOver}
          onTouchStart={handleSyringeTouchStart}
          className={`absolute top-4 right-4 cursor-grab active:cursor-grabbing z-10 ${
            injectionState.injecting ? 'animate-pulse' : ''
          }`}
        >
          <motion.div 
            className={`flex items-center space-x-2 p-3 glass-effect rounded-lg border transition-all duration-300 ${
              injectionState.fileInSyringe 
                ? 'border-ki-400/50 bg-ki-400/10' 
                : 'border-gray-600'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Syringe className={`w-6 h-6 ${
              injectionState.fileInSyringe ? 'text-ki-400' : 'text-gray-400'
            }`} />
            <span className={`font-medium ${
              injectionState.fileInSyringe ? 'text-ki-400' : 'text-gray-400'
            }`}>
              {injectionState.fileInSyringe ? 'Ready to Inject' : 'Empty Syringe'}
            </span>
          </motion.div>
        </div>

        {/* Game */}
        <div
          ref={gameRef}
          onDrop={handleGameDrop}
          onDragOver={handleGameDragOver}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className={`flex items-center space-x-2 p-4 glass-effect rounded-lg border transition-all duration-300 ${
              injectionState.injecting 
                ? 'border-ki-400/50 bg-ki-400/10' 
                : injectionState.success
                ? 'border-green-400/50 bg-green-400/10'
                : injectionState.error
                ? 'border-red-400/50 bg-red-400/10'
                : 'border-gray-600'
            }`}
            animate={{
              scale: injectionState.injecting ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 0.5, repeat: injectionState.injecting ? Infinity : 0 }}
          >
            <Gamepad2 className={`w-8 h-8 ${
              injectionState.injecting ? 'text-ki-400' :
              injectionState.success ? 'text-green-400' :
              injectionState.error ? 'text-red-400' : 'text-gray-400'
            }`} />
            <div>
              <div className="text-white font-medium">Target Game</div>
              <div className={`text-sm ${
                injectionState.injecting ? 'text-ki-400' :
                injectionState.success ? 'text-green-400' :
                injectionState.error ? 'text-red-400' : 'text-gray-400'
              }`}>
                {injectionState.injecting ? 'Injecting...' :
                 injectionState.success ? 'Injection Successful!' :
                 injectionState.error ? 'Injection Failed!' : 'Waiting for injection'}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Injection Animation */}
        {injectionState.injecting && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-4"
              >
                <Zap className="w-full h-full text-ki-400" />
              </motion.div>
              <div className="text-ki-400 font-bold text-lg">Injecting DLL...</div>
            </div>
          </motion.div>
        )}

        {/* Success Animation */}
        {injectionState.success && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4"
              >
                <CheckCircle className="w-full h-full text-green-400" />
              </motion.div>
              <div className="text-green-400 font-bold text-lg">Injection Successful!</div>
              <div className="text-gray-300 text-sm">DLL loaded into target process</div>
            </div>
          </motion.div>
        )}

        {/* Error Animation */}
        {injectionState.error && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4"
              >
                <AlertCircle className="w-full h-full text-red-400" />
              </motion.div>
              <div className="text-red-400 font-bold text-lg">Injection Failed!</div>
              <div className="text-gray-300 text-sm">Anti-cheat detected the injection</div>
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        {!injectionState.fileInSyringe && !injectionState.injecting && !injectionState.success && !injectionState.error && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-gray-400 text-sm">
              {typeof window !== 'undefined' && 'ontouchstart' in window ? (
                <>
                  <div className="mb-2">1. Tap the DLL file</div>
                  <div>2. Tap the syringe</div>
                  <div>3. Tap the game to inject</div>
                </>
              ) : (
                <>
                  <div className="mb-2">1. Drag the DLL file into the syringe</div>
                  <div>2. Drag the syringe to the game to inject</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Reset Button */}
      <div className="text-center mt-6">
        <motion.button
          onClick={resetGame}
          className="px-6 py-2 bg-gradient-to-r from-ki-400 to-ki-500 rounded-lg text-white font-medium hover:from-ki-300 hover:to-ki-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset Game
        </motion.button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="glass-effect rounded-lg p-3">
          <div className="text-ki-400 font-bold text-lg">70%</div>
          <div className="text-gray-300 text-sm">Success Rate</div>
        </div>
        <div className="glass-effect rounded-lg p-3">
          <div className="text-primary-400 font-bold text-lg">2s</div>
          <div className="text-gray-300 text-sm">Injection Time</div>
        </div>
        <div className="glass-effect rounded-lg p-3">
          <div className="text-ultra-400 font-bold text-lg">Realistic</div>
          <div className="text-gray-300 text-sm">Anti-Cheat</div>
        </div>
      </div>
    </div>
  )
}
