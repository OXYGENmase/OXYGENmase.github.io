'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Code, Zap, Brain, Rocket } from 'lucide-react'
import InteractiveButton from '@/components/ui/InteractiveButton'

const skills = [
  { icon: Code, text: 'Game Reversing', color: 'text-ki-400' },
  { icon: Zap, text: 'Tools & Cheats', color: 'text-primary-400' },
  { icon: Brain, text: 'Reverse • Build • Bypass', color: 'text-ultra-400' },
  { icon: Rocket, text: 'Next-Gen Hacks', color: 'text-ki-500' },
]

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  }

  const scrollToNext = () => {
    const element = document.querySelector('#skills')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToSkills = () => {
    const element = document.querySelector('#skills')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
                                 <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 px-4 ultra-text"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Ultra Instinct Mode: ON ⚡
            </motion.h1>
        </motion.div>

                           <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Master of <span className="ki-text font-semibold">Game Reversing</span> and 
              <span className="ultra-text font-semibold"> Advanced Tools & Cheats</span>. 
              Specializing in <span className="gradient-text font-semibold">Reverse • Build • Bypass</span> 
              with focus on <span className="ki-text font-semibold">next-gen hacks & tools</span> that push the boundaries of what's possible.
            </p>
          </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                className="glass-effect rounded-xl p-4 md:p-6 text-center group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon 
                  className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                />
                <p className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

                 <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                       <InteractiveButton
              onClick={scrollToSkills}
              variant="primary"
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
            >
              View My Arsenal
            </InteractiveButton>
            
            <InteractiveButton
              onClick={scrollToContact}
              variant="primary"
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
            >
              Let's Collaborate! 🔥
            </InteractiveButton>
         </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>

             {/* Floating particles */}
       <div className="absolute inset-0 pointer-events-none">
         {Array.from({ length: 20 }, (_, i) => ({
           id: i,
           left: ((i * 89.3) % 100).toFixed(2) + '%',
           top: ((i * 67.1) % 100).toFixed(2) + '%',
           duration: 8 + (i % 8) * 3,
           delay: i * 0.2,
           xOffset: ((i * 31.4) % 100 - 50).toFixed(2),
           yOffset: ((i * 19.7) % 100 - 50).toFixed(2),
         })).map((particle) => (
           <motion.div
             key={particle.id}
             className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
             animate={{
               x: [0, parseFloat(particle.xOffset)],
               y: [0, parseFloat(particle.yOffset)],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: particle.duration,
               delay: particle.delay,
               repeat: Infinity,
               ease: "linear",
             }}
             style={{
               left: particle.left,
               top: particle.top,
             }}
           />
         ))}
       </div>
    </section>
  )
}
