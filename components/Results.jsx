'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  Rocket, 
  Users, 
  Clock, 
  Star, 
  TrendingUp,
  Zap,
  Award,
  Quote
} from 'lucide-react'

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value)
      const incrementTime = (duration * 1000) / end
      const timer = setInterval(() => {
        start += 1
        setDisplayValue(start)
        if (start >= end) clearInterval(timer)
      }, Math.max(incrementTime, 10))
      
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])
  
  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

const stats = [
  { 
    value: 50, 
    suffix: '+', 
    label: 'Projects Delivered',
    description: 'End-to-end products shipped',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  { 
    value: 12, 
    suffix: '+', 
    label: 'Years Experience',
    description: 'Building digital products',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  { 
    value: 25, 
    suffix: 'K+', 
    label: 'Users Impacted',
    description: 'Across all platforms',
    icon: Users,
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500/10',
  },
  { 
    value: 99, 
    suffix: '%', 
    label: 'Client Satisfaction',
    description: 'Based on project feedback',
    icon: Star,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
  },
]

const testimonials = [
  {
    quote: "Transformed our idea into a fully functional app in just 2 weeks. The speed and quality were unmatched.",
    role: "Founder & CEO",
    industry: "HealthTech",
    emoji: "👨‍💼",
  },
  {
    quote: "Our AI automation saved us 40 hours per week. Best investment we've made for our startup.",
    role: "Co-Founder",
    industry: "E-Commerce",
    emoji: "👩‍💻",
  },
  {
    quote: "From concept to App Store in 6 weeks. Exceeded every expectation we had.",
    role: "CEO",
    industry: "FinTech",
    emoji: "👨‍🚀",
  },
  {
    quote: "The attention to detail and technical expertise is world-class. Highly recommend.",
    role: "Founder",
    industry: "EdTech",
    emoji: "👩‍🎓",
  },
  {
    quote: "Built our entire MVP while we focused on fundraising. Closed our seed round with a working product.",
    role: "Co-Founder & CTO",
    industry: "SaaS",
    emoji: "👨‍💻",
  },
  {
    quote: "Communication was flawless. Always available, always delivering ahead of schedule.",
    role: "Founder",
    industry: "Real Estate Tech",
    emoji: "👩‍💼",
  },
  {
    quote: "Our app has 50K+ users now. Started with just an idea and a conversation.",
    role: "CEO",
    industry: "Social Media",
    emoji: "👨‍🎨",
  },
  {
    quote: "The AI integration was seamless. Our customers love the smart features.",
    role: "Product Lead",
    industry: "Retail Tech",
    emoji: "👩‍🔬",
  },
  {
    quote: "Rebuilt our legacy system into a modern platform. Zero downtime during migration.",
    role: "CTO",
    industry: "Logistics",
    emoji: "👨‍✈️",
  },
  {
    quote: "Three apps delivered in one year. Nidrosoft is now our go-to development partner.",
    role: "Founder & CEO",
    industry: "Healthcare",
    emoji: "👩‍⚕️",
  },
]

const whyChooseUs = [
  {
    title: "24hr Response Time",
    description: "Never wait days for a reply. Get answers, updates, and support within 24 hours — usually much faster. Your project stays on track.",
  },
  {
    title: "$2M+ Revenue Generated",
    description: "Products I've built have collectively generated over $2 million in revenue for clients. Your success is my track record.",
  },
  {
    title: "10-14 Day MVP Delivery",
    description: "Go from idea to working product in just 10-14 business days. Launch fast, validate faster, and iterate based on real user feedback.",
  },
  {
    title: "Full-Stack Expertise",
    description: "One expert handling frontend, backend, mobile, AI, and deployment. No coordination overhead, no communication gaps.",
  },
  {
    title: "AI-First Approach",
    description: "Every product I build leverages AI where it makes sense — smarter features, automation, and experiences that delight users.",
  },
  {
    title: "Post-Launch Support",
    description: "The relationship doesn't end at launch. Get ongoing support, bug fixes, and feature updates to keep your product thriving.",
  },
]

// Typewriter Component
function Typewriter({ items, typingSpeed = 50, deletingSpeed = 30, pauseDuration = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayTitle, setDisplayTitle] = useState('')
  const [displayDesc, setDisplayDesc] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [phase, setPhase] = useState('typingTitle') // typingTitle, typingDesc, pausing, deleting
  
  useEffect(() => {
    const currentItem = items[currentIndex]
    let timeout
    
    if (phase === 'typingTitle') {
      if (displayTitle.length < currentItem.title.length) {
        timeout = setTimeout(() => {
          setDisplayTitle(currentItem.title.slice(0, displayTitle.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('typingDesc'), 200)
      }
    } else if (phase === 'typingDesc') {
      if (displayDesc.length < currentItem.description.length) {
        timeout = setTimeout(() => {
          setDisplayDesc(currentItem.description.slice(0, displayDesc.length + 1))
        }, typingSpeed / 2)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseDuration)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 100)
    } else if (phase === 'deleting') {
      if (displayDesc.length > 0) {
        timeout = setTimeout(() => {
          setDisplayDesc(displayDesc.slice(0, -2))
        }, deletingSpeed / 2)
      } else if (displayTitle.length > 0) {
        timeout = setTimeout(() => {
          setDisplayTitle(displayTitle.slice(0, -1))
        }, deletingSpeed)
      } else {
        setCurrentIndex((prev) => (prev + 1) % items.length)
        setPhase('typingTitle')
      }
    }
    
    return () => clearTimeout(timeout)
  }, [displayTitle, displayDesc, phase, currentIndex, items, typingSpeed, deletingSpeed, pauseDuration])
  
  return (
    <div className="min-h-[180px]">
      <div className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center">
        {displayTitle}
        <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse" />
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">
        {displayDesc}
      </p>
    </div>
  )
}

// Rotating Testimonials Component
function RotatingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  const currentTestimonial = testimonials[currentIndex]
  
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Quote Icon */}
          <div className="mb-6">
            <Quote size={40} className="text-primary/30" />
          </div>
          
          {/* Quote Text */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-relaxed mb-8 text-white/90">
            "{currentTestimonial.quote}"
          </blockquote>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl border border-white/10">
              {currentTestimonial.emoji}
            </div>
            <div>
              <div className="font-bold text-white text-lg">{currentTestimonial.role}</div>
              <div className="text-gray-400">{currentTestimonial.industry}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Dots */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Results() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="results" className="py-32 bg-gradient-to-b from-dark via-black to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Track Record
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Results That{' '}
            <span className="text-gradient">Speak</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl"
          >
            12 years of turning ideas into successful products. Here's the impact.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {/* Stats Cards */}
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`${stat.bgColor} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon size={22} className="text-white" />
                </div>
                
                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
                <p className="text-sm text-gray-500">{stat.description}</p>
                
                {/* Corner Glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Row - Testimonial + Why Choose Me */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Rotating Testimonials - Takes 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 relative p-8 md:p-12 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />
            
            {/* Rotating Testimonials */}
            <RotatingTestimonials />
          </motion.div>

          {/* Why Choose Me - Typewriter Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6">
              <Zap size={18} className="text-primary" />
              <h3 className="text-lg font-bold font-display text-white">Why Choose Me</h3>
            </div>
            
            {/* Typewriter Content */}
            <Typewriter items={whyChooseUs} typingSpeed={40} deletingSpeed={20} pauseDuration={4000} />
            
            {/* Progress indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Auto-cycling through 6 reasons...</span>
            </div>
            
            {/* Decorative */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Trust Badges / Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">Trusted Technologies & Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {['React', 'Next.js', 'AWS', 'OpenAI', 'Supabase', 'Vercel'].map((tech) => (
              <div key={tech} className="text-gray-400 font-medium text-lg">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
