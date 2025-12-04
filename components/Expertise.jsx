'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Layers, 
  Code2, 
  Cpu, 
  Cloud, 
  Lightbulb,
  Rocket,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'product-design',
    title: "Product Design & Strategy",
    shortTitle: "Design",
    description: "Beautiful, functional designs backed by research — not guesswork.",
    longDescription: "From user research to pixel-perfect interfaces, I create intuitive experiences that users love and businesses profit from.",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    features: ["User Research & Discovery", "UX Strategy & Architecture", "UI Design (Web & Mobile)", "Design Systems & Components", "Interactive Prototyping"],
  },
  {
    id: 'mvp-prototyping',
    title: "MVP & Rapid Prototyping",
    shortTitle: "MVP",
    description: "Go from idea to working product in weeks, not months.",
    longDescription: "Fast-track your vision with lean MVPs that validate ideas quickly and attract investors or early customers.",
    icon: Rocket,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-400",
    features: ["Idea Validation & Scoping", "Rapid Prototype Development", "MVP Architecture Design", "Launch-Ready Products", "Investor-Ready Demos"],
  },
  {
    id: 'development',
    title: "Full-Stack Development",
    shortTitle: "Development",
    description: "Web & mobile apps built with production-grade code that scales.",
    longDescription: "End-to-end development across all platforms — React, Next.js, React Native, Flutter, iOS, Android, and robust backend systems.",
    icon: Code2,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    features: ["Web Apps (React, Next.js, Vue)", "Mobile Apps (React Native, Flutter, Native)", "Backend & API Development", "Database Design & Optimization", "Third-Party Integrations"],
  },
  {
    id: 'ai-consulting',
    title: "AI Consulting & Automation",
    shortTitle: "AI",
    description: "Strategic AI guidance and automation that transforms your business.",
    longDescription: "From AI strategy to implementation — I help you identify opportunities, build custom solutions, and automate operations.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    features: ["AI Strategy & Roadmapping", "Custom AI/ML Solutions", "LLM Fine-tuning & RAG Systems", "Workflow & Process Automation", "AI Chatbots & Assistants"],
  },
  {
    id: 'cloud-devops',
    title: "Cloud & DevOps",
    shortTitle: "Cloud",
    description: "Reliable, scalable infrastructure that doesn't break the bank.",
    longDescription: "Cloud architecture, CI/CD pipelines, and infrastructure that scales automatically, stays secure, and optimizes costs.",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    features: ["Cloud Architecture (AWS, GCP, Azure)", "CI/CD Pipeline Setup", "Docker & Kubernetes", "Monitoring & Security", "Cost Optimization"],
  },
  {
    id: 'consulting',
    title: "Product Consulting",
    shortTitle: "Consulting",
    description: "Strategic guidance from someone who's built and shipped real products.",
    longDescription: "Technical due diligence, architecture reviews, and fractional CTO/CPO services for growing teams.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    features: ["Technical Due Diligence", "Architecture & Code Reviews", "Fractional CTO/CPO Services", "Team Mentorship & Training", "Product Roadmap Strategy"],
  },
]

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="expertise" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            What I Do
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            End-to-End{' '}
            <span className="text-gradient">Expertise</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            One expert covering the entire product lifecycle — from strategy and design 
            to development, deployment, and AI automation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-500 ${
                  isHovered ? 'border-white/20 scale-[1.02]' : ''
                }`}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Animated Border Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, ${service.color.includes('blue') ? 'rgba(59,130,246,0.1)' : service.color.includes('emerald') ? 'rgba(16,185,129,0.1)' : service.color.includes('purple') ? 'rgba(168,85,247,0.1)' : service.color.includes('orange') ? 'rgba(249,115,22,0.1)' : 'rgba(234,179,8,0.1)'} 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`mb-6 p-4 ${service.bgColor} w-fit rounded-2xl ${service.textColor} transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 font-display group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400"
                      >
                        <div className={`w-1 h-1 rounded-full ${service.textColor} opacity-60`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    className={`flex items-center gap-2 text-sm font-medium ${service.textColor} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    initial={{ x: -10 }}
                    animate={isHovered ? { x: 0 } : { x: -10 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">
            Need something specific? Let's discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <span>Get in Touch</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
