'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Sparkles, Zap, Clock, CheckCircle2 } from 'lucide-react'

const benefits = [
  { icon: Zap, text: "Ship in weeks, not months" },
  { icon: Clock, text: "Free 30-min consultation" },
  { icon: CheckCircle2, text: "No commitment required" },
]

export default function CTA() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
      
      {/* Static Orbs - No parallax on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/20 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative p-6 md:p-16 rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-card/80 backdrop-blur-sm md:backdrop-blur-xl overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8"
              >
                <Sparkles size={14} />
                Let's Build Something Great
              </motion.div>

              {/* Headline */}
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
                Ready to Turn Your
                <br />
                <span className="text-gradient">Idea Into Reality?</span>
              </h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
              >
                Book a free consultation and let's discuss how to bring your vision to life. 
                No pressure, no commitment — just a conversation about your goals.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                {/* Primary CTA */}
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar size={20} />
                    Book Free Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>

                {/* Secondary CTA */}
                <a
                  href="mailto:hello@nidrosoft.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 text-white hover:bg-white/5 transition-all"
                >
                  Send Email
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <Icon size={16} className="text-primary" />
                      <span>{benefit.text}</span>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>

          {/* Floating Elements - Hidden on mobile via CSS */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute -top-6 -left-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary items-center justify-center shadow-lg shadow-primary/20"
          >
            <Sparkles size={20} className="text-white" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:flex absolute -bottom-4 -right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 items-center justify-center shadow-lg shadow-emerald-500/20"
          >
            <Zap size={18} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          Typically respond within 24 hours
        </motion.p>
      </div>
    </section>
  )
}
