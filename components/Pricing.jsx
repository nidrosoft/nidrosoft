'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, Zap, Rocket, Clock, ArrowRight, MessageCircle } from 'lucide-react'

// Project-based pricing
const projectPlans = [
  {
    name: "MVP Sprint",
    description: "Launch your product fast. Perfect for validating ideas.",
    price: "$5,000",
    timeline: "10-14 days",
    icon: Zap,
    color: "from-emerald-500 to-green-500",
    features: [
      "Landing page or simple web app",
      "Up to 5 core features",
      "Mobile-responsive design",
      "Basic authentication",
      "Database setup",
      "Deployment to production",
      "1 week post-launch support",
    ],
    ideal: "Idea validation & early traction",
    cta: "Start MVP"
  },
  {
    name: "Full Product",
    description: "Complete product development from design to deployment.",
    price: "$12,000",
    priceRange: "$8K - $15K",
    timeline: "4-6 weeks",
    icon: Rocket,
    color: "from-blue-500 to-purple-500",
    isPopular: true,
    features: [
      "Full UI/UX design in Figma",
      "Web or mobile app development",
      "Advanced features & integrations",
      "Admin dashboard",
      "AI/automation features",
      "Payment integration",
      "Analytics & monitoring",
      "2 weeks post-launch support",
    ],
    ideal: "Startups ready to scale",
    cta: "Build Product"
  },
  {
    name: "Enterprise",
    description: "Complex systems, AI solutions, and ongoing partnership.",
    price: "Custom",
    timeline: "Scoped per project",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    features: [
      "Enterprise-grade architecture",
      "Custom AI/ML solutions",
      "Multi-platform development",
      "API & third-party integrations",
      "Security & compliance",
      "Team training & documentation",
      "Ongoing maintenance available",
      "Dedicated support channel",
    ],
    ideal: "Established businesses & complex needs",
    cta: "Let's Talk"
  }
]

// Hourly/Retainer options
const flexOptions = [
  {
    name: "Hourly",
    price: "$150",
    unit: "/hour",
    description: "For quick fixes, consultations, or small tasks",
    minHours: "Min 5 hours",
  },
  {
    name: "Weekly Sprint",
    price: "$4,500",
    unit: "/week",
    description: "Dedicated focus on your project for a full week",
    minHours: "40 hours of work",
  },
  {
    name: "Monthly Retainer",
    price: "$8,000",
    unit: "/month",
    description: "Ongoing development, maintenance & priority support",
    minHours: "~60 hours/month",
    savings: "Save 20%",
  },
]

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('project') // 'project' or 'flexible'

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-dark via-black to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Investment
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-8"
          >
            No surprises. No hidden fees. Just quality work at fair rates.
          </motion.p>

          {/* Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10"
          >
            <button
              onClick={() => setActiveTab('project')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'project' 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setActiveTab('flexible')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'flexible' 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Hourly & Retainer
            </button>
          </motion.div>
        </div>

        {/* Project-Based Pricing */}
        <AnimatePresence mode="wait">
          {activeTab === 'project' && (
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projectPlans.map((plan, index) => {
                const Icon = plan.icon
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 group ${
                      plan.isPopular 
                        ? 'bg-white/5 border-primary/50 shadow-[0_0_40px_rgba(99,102,241,0.15)]' 
                        : 'bg-card/50 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                        Most Popular
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-2xl bg-dark flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Plan Info */}
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                      {plan.priceRange && (
                        <span className="text-gray-500 text-sm ml-2">({plan.priceRange})</span>
                      )}
                    </div>
                    
                    {/* Timeline */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <Clock size={14} />
                      <span>{plan.timeline}</span>
                    </div>

                    {/* Features */}
                    <div className="flex-grow space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For */}
                    <div className="text-xs text-gray-500 mb-6 py-3 px-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-gray-400">Ideal for:</span> {plan.ideal}
                    </div>

                    {/* CTA */}
                    <a 
                      href="#contact"
                      className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${
                        plan.isPopular 
                          ? 'bg-white text-black hover:bg-gray-100' 
                          : 'bg-white/10 text-white hover:bg-white hover:text-black'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Flexible Pricing */}
          {activeTab === 'flexible' && (
            <motion.div
              key="flexible"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {flexOptions.map((option, index) => (
                  <motion.div
                    key={option.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                      option.savings 
                        ? 'bg-white/5 border-primary/50' 
                        : 'bg-card/50 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {option.savings && (
                      <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                        {option.savings}
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{option.price}</span>
                      <span className="text-gray-500">{option.unit}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                    <div className="text-xs text-gray-500 py-2 px-3 rounded-lg bg-white/5 inline-block">
                      {option.minHours}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-8 rounded-3xl border border-white/10 bg-card/50 text-center"
              >
                <h3 className="text-xl font-bold mb-4">Not sure which option fits?</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Book a free 30-minute consultation. We'll discuss your project, timeline, and budget to find the perfect fit.
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
                >
                  <MessageCircle size={18} />
                  Free Consultation
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            All prices in USD. 50% deposit required to start. Final payment upon delivery.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
