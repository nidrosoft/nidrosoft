'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Calendar, Send, CheckCircle, Loader2, Linkedin, Instagram, Twitter } from "lucide-react"

const services = [
  "MVP Sprint ($5K)",
  "Full Product Development ($8K-$15K)",
  "Mobile App Development",
  "Web Application",
  "AI & Automation",
  "UI/UX Design",
  "Technical Consulting",
  "Hourly Engagement",
  "Monthly Retainer",
  "Other",
]

const socials = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/cyriac-zeh/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/cyrizeh' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/zehcyriac' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Inquiry: ${formData.service}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Interested: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open email client
    window.location.href = `mailto:cyriac@nidrosoft.com?subject=${subject}&body=${body}`
    
    // Simulate submission delay for UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-dark relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Info */}
          <div className="lg:text-left text-center">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
            >
              <Send size={14} className="text-primary" />
              Get in Touch
            </motion.span>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Let's start a
              <br />
              <span className="text-gradient">conversation.</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg lg:mb-12 mb-8 mx-auto lg:mx-0 max-w-md"
            >
              Have a project in mind? Fill out the form and I'll get back to you within 24 hours. 
              Let's discuss how to bring your vision to life.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 lg:block hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:hello@nidrosoft.com" className="text-lg font-medium hover:text-primary transition-colors">
                    hello@nidrosoft.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-lg font-medium">San Diego, California</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Book a Call</div>
                  <a 
                    href="https://cal.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Schedule Free Consultation
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-sm text-gray-500 mb-4">Connect with me</div>
                <div className="flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                        aria-label={social.name}
                      >
                        <Icon size={18} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-white/10 rounded-3xl p-8 md:p-10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-6 max-w-sm">
                  Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', service: '', message: '' })
                  }}
                  className="text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Service Interested In *
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-dark">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-dark">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  Or email directly at{' '}
                  <a href="mailto:hello@nidrosoft.com" className="text-primary hover:underline">
                    hello@nidrosoft.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Mobile Contact Info */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:hidden"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <a href="mailto:hello@nidrosoft.com" className="text-lg font-medium hover:text-primary transition-colors">
                  hello@nidrosoft.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Location</div>
                <div className="text-lg font-medium">San Diego, California</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:col-span-2">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Book a Call</div>
                <a 
                  href="https://cal.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="sm:col-span-2 pt-4 border-t border-white/10">
              <div className="text-sm text-gray-500 mb-4">Connect with me</div>
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
