'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How do you handle communication during a project?",
    answer: "I communicate primarily via email to keep everything documented and organized. You'll receive regular updates on progress, and I'm responsive to questions within 24 hours (usually much faster). For urgent matters, we can arrange quick calls as needed."
  },
  {
    question: "What's your typical project timeline?",
    answer: "MVPs typically take 10-14 days. Full products range from 4-6 weeks depending on complexity. I'll provide a detailed timeline during our discovery call based on your specific requirements."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely. I'm happy to sign an NDA before we discuss any sensitive details about your project. Your ideas and business information are always kept confidential."
  },
  {
    question: "What's your payment structure?",
    answer: "I require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments. All payments are processed securely."
  },
  {
    question: "What happens after launch?",
    answer: "Every project includes post-launch support (1-2 weeks depending on the package). After that, I offer monthly retainer options for ongoing maintenance, updates, and new feature development."
  },
  {
    question: "Can you work with my existing codebase?",
    answer: "Yes! I regularly work with existing codebases. I'll start with a code review to understand the architecture, then provide recommendations before making any changes."
  },
  {
    question: "Do you provide design services?",
    answer: "Yes, I offer full UI/UX design services including user research, wireframing, and high-fidelity designs in Figma. I can also work with designs provided by your team."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, React Native, Node.js, Python, and AI/ML integrations. For databases, I work with PostgreSQL, Supabase, and MongoDB. Cloud infrastructure on AWS, GCP, and Vercel."
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            <HelpCircle size={14} className="text-primary" />
            FAQ
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          
          <p className="text-gray-400 text-lg">
            Everything you need to know before we start working together.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-card/30 hover:border-white/20 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === index ? 'bg-primary' : 'bg-white/10'
                }`}>
                  {openIndex === index ? (
                    <Minus size={16} className="text-white" />
                  ) : (
                    <Plus size={16} className="text-white" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:hello@nidrosoft.com"
            className="text-primary hover:underline font-medium"
          >
            Send me an email →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
