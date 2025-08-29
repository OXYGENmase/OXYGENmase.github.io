'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, 
  Brain, 
  Cpu,
  Palette,
  Lock,
  Shield
} from 'lucide-react'
import HoverCard from '@/components/ui/HoverCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import DllInjectionGame from '@/components/ui/DllInjectionGame'

const skillCategories = [
  {
    title: 'Tools & Cheats',
    icon: Lock,
    skills: [
      { name: 'Memory Hacking', level: 95, color: 'from-ki-400 to-ki-600' },
      { name: 'Code Injection', level: 92, color: 'from-primary-400 to-primary-600' },
      { name: 'Anti-Cheat Bypass', level: 88, color: 'from-ultra-400 to-ultra-600' },
      { name: 'Hook Development', level: 90, color: 'from-ki-500 to-ki-700' },
    ]
  },
  {
    title: 'Usermode Development',
    icon: Palette,
    skills: [
      { name: 'UI Manipulation', level: 85, color: 'from-primary-500 to-primary-700' },
      { name: 'ESP Development', level: 88, color: 'from-ki-400 to-ki-600' },
      { name: 'Overlay Systems', level: 82, color: 'from-ultra-400 to-ultra-600' },
      { name: 'Visual Hacks', level: 90, color: 'from-primary-400 to-primary-600' },
    ]
  },
  {
    title: 'Kernel Development',
    icon: Cpu,
    skills: [
      { name: 'Kernel Drivers', level: 92, color: 'from-ki-500 to-ki-700' },
      { name: 'Ring-0 Access', level: 88, color: 'from-primary-400 to-primary-600' },
      { name: 'System Hooks', level: 85, color: 'from-ultra-400 to-ultra-600' },
      { name: 'Rootkit Development', level: 90, color: 'from-ki-400 to-ki-600' },
    ]
  }
]



export default function SkillsSection() {
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
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="ultra-text">Ultra</span> <span className="ki-text">Arsenal</span>
          </motion.h2>
                                 <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Master of tools & cheats, usermode development, and kernel-level hacking techniques
            </motion.p>
        </motion.div>

        {/* Skill Categories */}
                 <motion.div 
           variants={containerVariants}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 max-w-6xl mx-auto px-4"
         >
          {skillCategories.map((category, index) => (
                         <motion.div
               key={category.title}
               variants={itemVariants}
               className="glass-effect rounded-2xl p-6 md:p-8 group"
               whileHover={{ 
                 scale: 1.02, 
                 y: -5,
                 transition: { duration: 0.3 }
               }}
             >
              <div className="flex items-center mb-6">
                <HoverCard
                  content={
                    <div>
                      <p className="font-semibold mb-2">Advanced {category.title}</p>
                      <p className="text-xs text-gray-400">
                        Master-level expertise in {category.title.toLowerCase()} with years of experience in development and implementation.
                      </p>
                    </div>
                  }
                >
                                     <div className="flex items-center cursor-pointer hover:text-ki-400 transition-colors">
                     <category.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-400 mr-2 md:mr-3" />
                     <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                   </div>
                </HoverCard>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>



                 {/* Performance Stats */}
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4"
         >
          {[
            { label: 'Hacking Power', value: '99/100', icon: Zap },
            { label: 'Stealth Level', value: 'A+', icon: Shield },
            { label: 'Success Rate', value: '95%', icon: Brain },
          ].map((stat, index) => (
                         <motion.div
               key={stat.label}
               variants={itemVariants}
               className="glass-effect rounded-2xl p-6 md:p-8 text-center group"
               whileHover={{ 
                 scale: 1.05, 
                 y: -10,
                 transition: { duration: 0.3 }
               }}
             >
               <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-primary-400 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
               <div className="text-gray-300 font-medium text-sm md:text-base">{stat.label}</div>
             </motion.div>
          ))}
                 </motion.div>

        {/* DLL Injection Game */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <DllInjectionGame />
        </motion.div>
      </div>
    </section>
  )
}
