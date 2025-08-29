'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Award, Users, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: 'Elite Game Reverser',
    company: 'Underground Hacking Collective',
    period: '2023 - Present',
    location: 'Dark Web',
    description: 'Master of reverse engineering and developing advanced game hacks and tools. Specialized in bypassing anti-cheat systems and creating undetectable exploits.',
    achievements: [
      'Successfully bypassed 50+ anti-cheat systems',
      'Developed 100+ custom tools and cheats',
      'Mentored 10+ aspiring hackers in the community',
      'Created undetectable memory manipulation techniques'
    ],
    technologies: ['IDA Pro', 'x64dbg', 'Assembly', 'C++', 'Cheat Engine'],
    impact: { bypasses: '50+', tools: '100+', mentees: '10+' }
  },
  {
    title: 'Advanced Exploit Developer',
    company: 'Independent Security Researcher',
    period: '2021 - 2023',
    location: 'Anonymous',
    description: 'Specialized in finding and developing zero-day exploits and security vulnerabilities. Expert in kernel-level programming and rootkit development.',
    achievements: [
      'Discovered 25+ critical security vulnerabilities',
      'Developed 30+ proof-of-concept exploits',
      'Contributed to major security research projects',
      'Created advanced kernel drivers for system manipulation'
    ],
    technologies: ['Python', 'C++', 'Frida', 'Ghidra', 'WinDbg'],
    impact: { vulns: '25+', exploits: '30+', projects: '15+' }
  },
  {
    title: 'Cheat Developer',
    company: 'Game Hacking Community',
    period: '2019 - 2021',
    location: 'Online',
    description: 'Created and distributed game cheats and modifications for various titles. Built automated systems for cheat detection and bypass.',
    achievements: [
      'Developed 50+ game cheats and modifications',
      'Built automated cheat detection bypass systems',
      'Established reputation as reliable cheat provider',
      'Created advanced hooking and injection techniques'
    ],
    technologies: ['Cheat Engine', 'OllyDbg', 'C#', 'WinAPI', 'Assembly'],
    impact: { cheats: '50+', bypasses: '100%', reputation: 'Elite' }
  }
]

const certifications = [
  {
    name: 'Advanced Reverse Engineering',
    issuer: 'Underground Academy',
    date: '2023',
    icon: '🔍'
  },
  {
    name: 'Exploit Development Master',
    issuer: 'Hacking Collective',
    date: '2023',
    icon: '💣'
  },
  {
    name: 'Anti-Cheat Bypass Expert',
    issuer: 'Game Security Research',
    date: '2022',
    icon: '🛡️'
  },
  {
    name: 'Kernel Driver Development',
    issuer: 'System Hacking Institute',
    date: '2022',
    icon: '⚙️'
  }
]

export default function ExperienceSection() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="experience" className="py-20 relative">
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
            <span className="gradient-text">Insane</span> Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Proven track record of delivering exceptional results and pushing technological boundaries
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mb-20"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={itemVariants}
              className="relative flex items-start mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800 z-10" />
              
              <div className="ml-16 flex-1">
                <motion.div
                  className="glass-effect rounded-2xl p-8 group"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <span className="font-semibold text-primary-400">{experience.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-primary-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        {experience.impact.bypasses || experience.impact.vulns || experience.impact.cheats}
                      </div>
                      <div className="text-sm text-gray-400">
                        {experience.impact.bypasses ? 'Bypasses' : experience.impact.vulns ? 'Vulns' : 'Cheats'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        {experience.impact.tools || experience.impact.exploits || experience.impact.bypasses}
                      </div>
                      <div className="text-sm text-gray-400">
                        {experience.impact.tools ? 'Tools' : experience.impact.exploits ? 'Exploits' : 'Bypasses'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">
                        {experience.impact.mentees || experience.impact.projects || experience.impact.reputation}
                      </div>
                      <div className="text-sm text-gray-400">
                        {experience.impact.mentees ? 'Mentees' : experience.impact.projects ? 'Projects' : 'Status'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold mb-8"
          >
            <span className="gradient-text">Professional</span> Certifications
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="glass-effect rounded-xl p-6 text-center group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-primary-400 text-sm font-medium">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Years Experience', value: '5+', icon: Calendar },
            { label: 'Projects Delivered', value: '50+', icon: TrendingUp },
            { label: 'Team Members Led', value: '25+', icon: Users },
            { label: 'Success Rate', value: '100%', icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8 text-center group"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <stat.icon className="w-12 h-12 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
