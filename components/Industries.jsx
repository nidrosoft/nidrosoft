'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Home, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Plane,
  Utensils,
  Car,
  Building2,
  Smartphone
} from 'lucide-react'

const industries = [
  { name: 'Healthcare', icon: Heart, color: 'text-red-400', projects: '8+ projects' },
  { name: 'Real Estate', icon: Home, color: 'text-blue-400', projects: '6+ projects' },
  { name: 'E-Commerce', icon: ShoppingCart, color: 'text-emerald-400', projects: '10+ projects' },
  { name: 'FinTech', icon: Briefcase, color: 'text-amber-400', projects: '5+ projects' },
  { name: 'EdTech', icon: GraduationCap, color: 'text-purple-400', projects: '4+ projects' },
  { name: 'Travel', icon: Plane, color: 'text-cyan-400', projects: '3+ projects' },
  { name: 'Food & Delivery', icon: Utensils, color: 'text-orange-400', projects: '5+ projects' },
  { name: 'Automotive', icon: Car, color: 'text-indigo-400', projects: '3+ projects' },
  { name: 'SaaS', icon: Building2, color: 'text-pink-400', projects: '12+ projects' },
  { name: 'Social Apps', icon: Smartphone, color: 'text-teal-400', projects: '6+ projects' },
]

export default function Industries() {
  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            Industries I've Built For
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold">
            From Startups to Established Businesses
          </h3>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-5 rounded-2xl border border-white/10 bg-card/30 hover:border-white/20 hover:bg-card/50 transition-all text-center"
              >
                <div className={`${industry.color} mb-3 flex justify-center`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className="font-medium text-white text-sm mb-1">{industry.name}</div>
                <div className="text-xs text-gray-500">{industry.projects}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">12+</div>
            <div className="text-gray-500 text-sm">SaaS Products</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">6+</div>
            <div className="text-gray-500 text-sm">Mobile Apps</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
            <div className="text-gray-500 text-sm">Industries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-gray-500 text-sm">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
