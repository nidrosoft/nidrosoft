'use client'

import { useRef, useState } from 'react'
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

// Mobile Tech Card - Simple layout without hover
function MobileTechCard({ category, index }) {
  const Icon = category.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative p-4 rounded-2xl border border-white/10 bg-card/50"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`${category.bgColor} w-10 h-10 rounded-xl flex items-center justify-center`}>
          <Icon size={20} className="text-white" />
        </div>
        <h3 className="text-base font-bold text-white">{category.name}</h3>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {category.tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center">
            <div className="w-10 h-10 p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
            </div>
            <span className="mt-1 text-[10px] text-gray-500 text-center truncate w-full">{tool.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Desktop Exploding Card with hover
function ExplodingCard({ category, index }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`relative h-56 rounded-3xl border border-white/10 bg-card/50 cursor-pointer overflow-hidden transition-colors duration-300 ${isExpanded ? 'border-white/30 bg-card/80' : ''}`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500 ${isExpanded ? 'opacity-10' : ''}`} />
        
        {/* Collapsed State */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
            >
              <div className={`${category.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.tools.length} tools</p>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-xs text-gray-600">Hover to explore</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
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

              <div className="relative w-full h-full flex items-center justify-center">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: explosionPositions[toolIndex].x,
                      y: explosionPositions[toolIndex].y
                    }}
                    exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: toolIndex * 0.05
                    }}
                    className="absolute flex flex-col items-center"
                  >
                    <div className="w-14 h-14 p-2 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                      <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                    </div>
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
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const sectionRef = useRef(null)

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Effects - Simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div ref={sectionRef} className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-4 md:mb-6">
            <Sparkles size={14} className="text-primary" />
            Tech Stack
          </div>
          
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6">
            Tools I <span className="text-gradient">Work With</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-xl">
            <span className="md:hidden">Technologies powering your next product.</span>
            <span className="hidden md:inline">Hover to explore the technologies powering your next product.</span>
          </p>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {techCategories.map((category, index) => (
            <MobileTechCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <ExplodingCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
