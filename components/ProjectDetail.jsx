'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  Smartphone, 
  Globe,
  Zap,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ProjectDetail = ({ project }) => {
  const router = useRouter()
  
  if (!project) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <p className="text-gray-400">Project not found</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            {/* Back Button */}
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => router.push('/#work')} 
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </motion.button>
            
            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {project.tags?.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
            >
              {project.title}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl"
            >
              {project.subtitle}
            </motion.p>
            
            {/* Meta Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-white/60">
                {project.platforms?.includes('iOS') || project.platforms?.includes('Android') ? (
                  <Smartphone size={18} />
                ) : (
                  <Globe size={18} />
                )}
                <span>{project.platforms?.join(' & ')}</span>
              </div>
              <span className="text-white/40">•</span>
              <span className="text-white/60">{project.year}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60">{project.category}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Live Link */}
            {project.liveUrl && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-white text-black rounded-2xl font-medium hover:bg-gray-100 transition-colors group"
              >
                <ExternalLink size={18} />
                View Live Project
              </motion.a>
            )}
            
            {/* Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-white/10 rounded-2xl bg-card"
            >
              <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-white/10 rounded-2xl bg-card"
            >
              <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Results */}
            {project.results && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-2xl bg-card"
              >
                <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <TrendingUp size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Overview</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>
            
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <Target size={24} className="text-orange-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">The Challenge</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
            
            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  <Lightbulb size={24} className="text-emerald-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">The Solution</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Want something similar?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how I can help bring your vision to life with the same level of quality and attention to detail.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Start a Conversation
                <Zap size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail