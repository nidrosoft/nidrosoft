'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Palette, Layout, Server, Brain, Cloud, Smartphone } from 'lucide-react'

// Tech stack with real logo URLs - 4 tools per category
const techCategories = [
  {
    name: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    tools: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Framer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
      { name: "Webflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" },
      { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    ]
  },
  {
    name: "Frontend",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    tools: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ]
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    tools: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ]
  },
  {
    name: "AI & ML",
    icon: Brain,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    tools: [
      { name: "OpenAI", logo: "https://static.cdnlogo.com/logos/o/38/openai.svg" },
      { name: "Claude", logo: "https://cdn.worldvectorlogo.com/logos/anthropic-2.svg" },
      { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    ]
  },
  {
    name: "Cloud",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    tools: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  },
  {
    name: "Mobile",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    tools: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ]
  },
]

// Explosion positions for 4 tools (2x2 grid pattern around center)
const explosionPositions = [
  { x: -60, y: -60 },  // top-left
  { x: 60, y: -60 },   // top-right
  { x: -60, y: 60 },   // bottom-left
  { x: 60, y: 60 },    // bottom-right
]

function ExplodingCard({ category, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <motion.div
        className={`relative h-48 md:h-56 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-colors duration-300 ${isHovered ? 'border-white/30 bg-card/80' : ''}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`} />
        
        {/* Collapsed State - Category Info */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
            >
              {/* Icon */}
              <div className={`${category.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                <Icon size={28} className="text-white" />
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              
              {/* Tool Count */}
              <p className="text-sm text-gray-500">{category.tools.length} tools</p>
              
              {/* Hover Hint */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-xs text-gray-600">Hover to explore</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State - Exploded Tools */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Category Name at Top */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute top-4 left-0 right-0 text-center"
              >
                <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </span>
              </motion.div>

              {/* Exploding Tools Grid */}
              <div className="relative w-full h-full flex items-center justify-center">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: explosionPositions[toolIndex].x,
                      y: explosionPositions[toolIndex].y
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0,
                      x: 0,
                      y: 0
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: toolIndex * 0.05
                    }}
                    className="absolute flex flex-col items-center"
                  >
                    {/* Tool Logo */}
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    {/* Tool Name */}
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + toolIndex * 0.05 }}
                      className="mt-2 text-xs text-gray-400 whitespace-nowrap"
                    >
                      {tool.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner Glow */}
        <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-0 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`} />
      </motion.div>
    </motion.div>
  )
}

export default function TechStack() {
  const sectionRef = useRef(null)

  return (
    <section id="tech-stack" className="py-32 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Tech Stack
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Tools I{' '}
            <span className="text-gradient">Work With</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl"
          >
            Hover to explore the technologies powering your next product.
          </motion.p>
        </div>

        {/* 2x3 Grid of Exploding Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {techCategories.map((category, index) => (
            <ExplodingCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
