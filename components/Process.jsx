'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  Search, 
  Map, 
  Pencil, 
  Code2, 
  Rocket, 
  Cpu,
  Sparkles,
  ArrowDown
} from 'lucide-react'

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "Deep dive into your business, goals, users, and constraints. I ask the right questions to understand the full picture before writing a single line of code.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    bgGlow: "rgba(59,130,246,0.15)",
  },
  {
    id: 2,
    title: "Strategy",
    description: "Define the roadmap, architecture, and MVP scope. Every decision is intentional and aligned with your goals. No wasted effort, no scope creep.",
    icon: Map,
    color: "from-purple-500 to-pink-500",
    bgGlow: "rgba(168,85,247,0.15)",
  },
  {
    id: 3,
    title: "Design",
    description: "Create user-centered designs with rapid iteration. Beautiful interfaces backed by research and best practices that convert visitors into customers.",
    icon: Pencil,
    color: "from-pink-500 to-rose-500",
    bgGlow: "rgba(236,72,153,0.15)",
  },
  {
    id: 4,
    title: "Build",
    description: "Develop production-ready code with modern stack. Clean architecture, tested thoroughly, optimized for performance, and built to scale with your business.",
    icon: Code2,
    color: "from-emerald-500 to-green-500",
    bgGlow: "rgba(16,185,129,0.15)",
  },
  {
    id: 5,
    title: "Launch",
    description: "Deploy with confidence. Monitoring, analytics, and support from day one. Your product goes live smoothly and stays running reliably.",
    icon: Rocket,
    color: "from-orange-500 to-amber-500",
    bgGlow: "rgba(249,115,22,0.15)",
  },
  {
    id: 6,
    title: "Automate",
    description: "Implement AI and automation for ongoing efficiency. Reduce manual work, cut costs, and let your business run smarter — not harder.",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    bgGlow: "rgba(139,92,246,0.15)",
  },
]

function ProcessCard({ step, index, scrollYProgress }) {
  const Icon = step.icon
  const totalSteps = steps.length
  
  // Adjusted timing - first card appears at 0, last card ends at 1
  // Each step gets equal portion but starts earlier
  const stepStart = index === 0 ? 0 : (index * 0.15) + 0.02
  const stepEnd = index === totalSteps - 1 ? 1 : ((index + 1) * 0.15) + 0.05
  const stepMid = (stepStart + stepEnd) / 2
  
  // Card animations based on scroll position
  const scale = useTransform(
    scrollYProgress,
    [stepStart, stepMid, stepEnd],
    [0.75, 1.15, 0.75]
  )
  
  const opacity = useTransform(
    scrollYProgress,
    index === 0 
      ? [0, 0.01, stepMid, stepEnd - 0.02, stepEnd]
      : [stepStart, stepStart + 0.02, stepMid, stepEnd - 0.02, stepEnd],
    index === 0
      ? [1, 1, 1, 1, 0]
      : [0, 1, 1, 1, 0]
  )
  
  const y = useTransform(
    scrollYProgress,
    [stepStart, stepMid, stepEnd],
    index === 0 ? [0, 0, -80] : [80, 0, -80]
  )
  
  const blur = useTransform(
    scrollYProgress,
    index === 0
      ? [0, stepMid, stepEnd - 0.03, stepEnd]
      : [stepStart, stepStart + 0.03, stepMid, stepEnd - 0.03, stepEnd],
    index === 0
      ? [0, 0, 0, 8]
      : [8, 0, 0, 0, 8]
  )

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ opacity }}
    >
      <motion.div
        className="relative w-full max-w-3xl"
        style={{ scale, y, filter: useTransform(blur, (b) => `blur(${b}px)`) }}
      >
        {/* Main Card */}
        <div className="relative p-10 md:p-16 rounded-[2rem] border border-white/10 bg-card/80 backdrop-blur-xl overflow-hidden">
          {/* Background Gradient Glow */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{ 
              background: `radial-gradient(circle at 50% 50%, ${step.bgGlow} 0%, transparent 70%)` 
            }}
          />
          
          {/* Step Number - Large Background */}
          <div className="absolute top-6 right-8 text-[120px] md:text-[180px] font-bold text-white/[0.03] font-display leading-none select-none">
            {String(step.id).padStart(2, '0')}
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Step Indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === index ? `bg-gradient-to-r ${step.color}` : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">Step {step.id} of {totalSteps}</span>
            </div>

            {/* Icon */}
            <motion.div 
              className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-2xl`}
              animate={{ 
                boxShadow: [
                  `0 0 30px ${step.bgGlow}`,
                  `0 0 60px ${step.bgGlow}`,
                  `0 0 30px ${step.bgGlow}`,
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={36} className="text-white md:w-12 md:h-12" strokeWidth={1.5} />
            </motion.div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
              {step.description}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${step.color} opacity-10 rounded-full blur-3xl`} />
          <div className={`absolute -top-20 -left-20 w-48 h-48 bg-gradient-to-br ${step.color} opacity-5 rounded-full blur-3xl`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Color mapping for each step
const stepColors = [
  '#3B82F6', // blue
  '#A855F7', // purple  
  '#EC4899', // pink
  '#10B981', // emerald
  '#F97316', // orange
  '#8B5CF6', // violet
]

function ProgressBar({ scrollYProgress, isInView }) {
  return (
    <motion.div 
      className="absolute left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Step Indicators - Circular and Aligned */}
      {steps.map((step, index) => {
        const Icon = step.icon
        const stepThreshold = index === 0 ? 0 : (index * 0.15) + 0.02
        const nextThreshold = index === steps.length - 1 ? 1 : ((index + 1) * 0.15) + 0.05
        
        const isActive = useTransform(
          scrollYProgress, 
          (p) => p >= stepThreshold && p < nextThreshold
        )
        
        return (
          <motion.div
            key={step.id}
            className="relative flex items-center"
          >
            {/* Circular Icon Container - Always same size, stays aligned */}
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2"
              style={{
                backgroundColor: useTransform(isActive, (active) => 
                  active ? stepColors[index] : 'rgba(255,255,255,0.05)'
                ),
                borderColor: useTransform(isActive, (active) =>
                  active ? stepColors[index] : 'rgba(255,255,255,0.1)'
                ),
                boxShadow: useTransform(isActive, (active) =>
                  active ? `0 0 20px ${stepColors[index]}40` : 'none'
                )
              }}
            >
              <Icon 
                size={16} 
                className="text-white"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default function Process() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const stickyRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" })
  const isStickyInView = useInView(stickyRef, { margin: "-10% 0px -10% 0px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section className="relative bg-black">
      {/* Section Header */}
      <div ref={headerRef} className="py-16 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
        >
          <Sparkles size={14} className="text-primary" />
          How I Work
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4"
        >
          From Idea to{' '}
          <span className="text-gradient">Impact</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-8"
        >
          A proven process that transforms your vision into reality.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Cards Container */}
      <div ref={containerRef} className="h-[500vh] relative -mt-32">
        <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden pt-20">
          {/* Background that shifts color */}
          <motion.div 
            className="absolute inset-0 pointer-events-none transition-all duration-700"
            style={{
              background: useTransform(
                scrollYProgress,
                [0, 0.166, 0.333, 0.5, 0.666, 0.833, 1],
                [
                  `radial-gradient(circle at 50% 50%, ${steps[0].bgGlow} 0%, transparent 60%)`,
                  `radial-gradient(circle at 50% 50%, ${steps[1].bgGlow} 0%, transparent 60%)`,
                  `radial-gradient(circle at 50% 50%, ${steps[2].bgGlow} 0%, transparent 60%)`,
                  `radial-gradient(circle at 50% 50%, ${steps[3].bgGlow} 0%, transparent 60%)`,
                  `radial-gradient(circle at 50% 50%, ${steps[4].bgGlow} 0%, transparent 60%)`,
                  `radial-gradient(circle at 50% 50%, ${steps[5].bgGlow} 0%, transparent 60%)`,
                  `radial-gradient(circle at 50% 50%, ${steps[5].bgGlow} 0%, transparent 60%)`,
                ]
              )
            }}
          />

          {/* Cards */}
          {steps.map((step, index) => (
            <ProcessCard 
              key={step.id} 
              step={step} 
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Progress Bar - Only visible when in Process section */}
          <ProgressBar scrollYProgress={scrollYProgress} isInView={isStickyInView} />
        </div>
      </div>
    </section>
  )
}
