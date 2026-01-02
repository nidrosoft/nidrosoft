'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function BookingCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-secondary/10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            <Calendar size={14} className="text-primary" />
            Let's Connect
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ready to Discuss Your{' '}
            <span className="text-gradient">Project?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call. We'll discuss your vision, explore solutions, 
            and see if we're a good fit to work together.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock size={18} className="text-primary" />
              <span>Free 30-minute call</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={18} className="text-emerald-400" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={18} className="text-emerald-400" />
              <span>Get actionable advice</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://calendar.app.google/GCtfuTx3Ms6K7d579"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] group"
          >
            Book a Free Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Subtext */}
          <p className="text-gray-500 text-sm mt-6">
            Pick a time that works for you. I'll send a Google Meet link.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
