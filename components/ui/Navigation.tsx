'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Power', href: '#power' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/OXYGENmase', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect backdrop-blur-md border-b border-ki-400/20' : 'bg-dark-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <span className="text-xl sm:text-2xl font-bold gradient-text">OXYGENmase</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center">
              <div className="flex items-baseline space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-ki-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:ultra-glow"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                                 <motion.a
                   key={social.label}
                   href={social.href}
                   target={social.label === 'GitHub' ? '_blank' : undefined}
                   rel={social.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                   whileHover={{ scale: 1.2, y: -2 }}
                   whileTap={{ scale: 0.9 }}
                   className="text-gray-400 hover:text-ki-400 transition-all duration-200 hover:ki-glow"
                   onClick={social.label === 'Email' ? (e) => e.preventDefault() : undefined}
                 >
                   <social.icon size={20} />
                 </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-ki-400 focus:outline-none transition-colors duration-200 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 glass-effect backdrop-blur-md border-b border-ki-400/20 shadow-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-ki-400 block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gray-800/50"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="flex space-x-6 pt-4 px-4">
                                     {socialLinks.map((social) => (
                     <motion.a
                       key={social.label}
                       href={social.href}
                       target={social.label === 'GitHub' ? '_blank' : undefined}
                       rel={social.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                       whileTap={{ scale: 0.9 }}
                       className="text-gray-400 hover:text-ki-400 transition-all duration-200 p-2"
                       onClick={social.label === 'Email' ? (e) => e.preventDefault() : undefined}
                     >
                       <social.icon size={24} />
                     </motion.a>
                   ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
