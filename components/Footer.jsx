'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

const socials = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/cyriac-zeh/' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://instagram.com/cyrizeh' 
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: 'https://twitter.com/zehcyriac' 
  },
]

const sitemapLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#expertise' },
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Big CTA */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Have an idea?
              <br />
              <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Ready to turn your vision into reality? Let's start a conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:hello@nidrosoft.com" 
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all"
              >
                <Mail size={18} />
                hello@nidrosoft.com
              </a>
              <a 
                href="https://cal.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/5 transition-all"
              >
                Book a Call
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Sitemap */}
            <div>
              <h4 className="text-gray-500 mb-6 font-mono uppercase text-xs tracking-wider">Sitemap</h4>
              <ul className="space-y-3">
                {sitemapLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-gray-500 mb-6 font-mono uppercase text-xs tracking-wider">Connect</h4>
              <ul className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <li key={social.name}>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Icon size={16} />
                        {social.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-gray-500 mb-6 font-mono uppercase text-xs tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary flex items-center justify-center rounded">
              <span className="font-bold text-xs text-white">N</span>
            </div>
            <span>© {currentYear} Nidrosoft LLC. All rights reserved.</span>
          </div>
          
          {/* Made with love */}
          <div className="mb-4 md:mb-0 text-gray-400">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://www.linkedin.com/in/cyriac-zeh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              Cyriac Zeh
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label={social.name}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer