'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Brain, Target, Flame, Crown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const powerLevels = [
  {
    name: 'Hacking Power',
    level: 9999999,
    icon: Zap,
    color: 'text-ki-400',
    bgColor: 'bg-ki-400/20',
    description: 'Raw hacking and reversing capabilities'
  },
  {
    name: 'Stealth Level',
    level: 9999999,
    icon: Shield,
    color: 'text-ultra-400',
    bgColor: 'bg-ultra-400/20',
    description: 'Ability to remain undetected'
  },
  {
    name: 'Exploit Mastery',
    level: 9999999,
    icon: Brain,
    color: 'text-primary-400',
    bgColor: 'bg-primary-400/20',
    description: 'Advanced exploit development skills'
  },
  {
    name: 'Anti-Cheat Bypass',
    level: 9999999,
    icon: Target,
    color: 'text-ki-500',
    bgColor: 'bg-ki-500/20',
    description: 'Success rate in bypassing protection'
  },
  {
    name: 'Tool Development',
    level: 9999999,
    icon: Flame,
    color: 'text-primary-500',
    bgColor: 'bg-primary-500/20',
    description: 'Custom tool and cheat creation'
  },
  {
    name: 'Elite Status',
    level: 9999999,
    icon: Crown,
    color: 'text-ultra-500',
    bgColor: 'bg-ultra-500/20',
    description: 'Overall elite hacker ranking'
  }
]

export default function PowerLevelSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="power" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            <span className="ultra-text">Power</span> <span className="ki-text">Level</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            IT'S OVER 9,000! My hacking abilities have reached legendary levels! 🔥
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4"
        >
          {powerLevels.map((power, index) => (
            <motion.div
              key={power.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-effect border-0 overflow-hidden group">
                <CardHeader className={`${power.bgColor} pb-4`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg md:text-xl">{power.name}</CardTitle>
                    <power.icon className={`w-6 h-6 md:w-8 md:h-8 ${power.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="text-center mb-4">
                    <div className={`text-2xl md:text-4xl font-bold ${power.color} mb-2`}>
                      {power.level.toLocaleString()}
                    </div>
                    <Badge variant="secondary" className="bg-primary-500/20 text-primary-400 border-primary-500/30">
                      MAXIMUM
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Power Level</span>
                      <span className="text-white font-bold">9999999</span>
                    </div>
                    <Progress 
                      value={100} 
                      className="h-2 bg-gray-700"
                      style={{
                        background: `linear-gradient(90deg, ${power.color.replace('text-', '')} 0%, ${power.color.replace('text-', '')} 100%)`
                      }}
                    />
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-4 text-center">
                    {power.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12 md:mt-16 px-4"
        >
          <div className="glass-effect rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="ultra-text">Total Power Level:</span> <span className="ki-text">59,999,994</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              This is the power of Ultra Instinct Mode! My hacking abilities transcend normal limits! ⚡
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="outline" className="border-ki-400 text-ki-400">
                Elite Hacker
              </Badge>
              <Badge variant="outline" className="border-ultra-400 text-ultra-400">
                Game Master
              </Badge>
              <Badge variant="outline" className="border-primary-400 text-primary-400">
                Exploit Legend
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
