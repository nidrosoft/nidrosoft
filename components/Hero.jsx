"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket, Cpu } from "lucide-react";
import Link from "next/link";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "Python", icon: "🐍" },
  { name: "Supabase", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
  { name: "OpenAI", icon: "🤖" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" 
      />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
        
        {/* Horizontal Beam Lines */}
        <motion.div
          className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[1px]"
          style={{ top: '15%', left: '-200px' }}
          animate={{ x: ['0%', 'calc(100vw + 400px)'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 0 }}
        />
        <motion.div
          className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-[1px]"
          style={{ top: '35%', left: '-300px' }}
          animate={{ x: ['0%', 'calc(100vw + 600px)'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
        <motion.div
          className="absolute h-[1px] w-[150px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-[1px]"
          style={{ top: '55%', left: '-150px' }}
          animate={{ x: ['0%', 'calc(100vw + 300px)'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 5 }}
        />
        <motion.div
          className="absolute h-[1px] w-[250px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-[1px]"
          style={{ top: '70%', left: '-250px' }}
          animate={{ x: ['0%', 'calc(100vw + 500px)'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear', delay: 3 }}
        />
        <motion.div
          className="absolute h-[1px] w-[180px] bg-gradient-to-r from-transparent via-secondary/25 to-transparent blur-[1px]"
          style={{ top: '85%', left: '-180px' }}
          animate={{ x: ['0%', 'calc(100vw + 360px)'] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay: 7 }}
        />
        <motion.div
          className="absolute h-[1px] w-[220px] bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent blur-[1px]"
          style={{ top: '45%', left: '-220px' }}
          animate={{ x: ['0%', 'calc(100vw + 440px)'] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        
        {/* Vertical Beam Lines */}
        <motion.div
          className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/25 to-transparent blur-[1px]"
          style={{ left: '15%', top: '-200px' }}
          animate={{ y: ['0%', 'calc(100vh + 400px)'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        <motion.div
          className="absolute w-[1px] h-[250px] bg-gradient-to-b from-transparent via-secondary/20 to-transparent blur-[1px]"
          style={{ left: '35%', top: '-250px' }}
          animate={{ y: ['0%', 'calc(100vh + 500px)'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay: 4 }}
        />
        <motion.div
          className="absolute w-[1px] h-[180px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent blur-[1px]"
          style={{ left: '55%', top: '-180px' }}
          animate={{ y: ['0%', 'calc(100vh + 360px)'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear', delay: 6 }}
        />
        <motion.div
          className="absolute w-[1px] h-[220px] bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-[1px]"
          style={{ left: '75%', top: '-220px' }}
          animate={{ y: ['0%', 'calc(100vh + 440px)'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-start md:items-center md:text-center gap-6">
          {/* Status Badge with Border Beam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm text-sm text-gray-300 overflow-hidden"
          >
            {/* Border Beam Animation */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent animate-border-beam" />
              <div className="absolute inset-[1px] rounded-full bg-dark" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />
            
            <span className="relative z-10 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="relative z-10">Available for new projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight z-20 relative"
          >
            From Idea to Impact.
            <br />
            <span className="text-gradient">One Expert. Full Stack.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed z-20 relative"
          >
            I help small businesses build products, automate operations, and
            scale with AI — without the overhead of a full team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col xs:flex-row w-full xs:w-auto gap-4 mt-4 z-30 relative"
          >
            <Link
              href="/contact"
              className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Start a Project
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <a
              href="#work"
              className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm text-center"
            >
              View My Work
            </a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 z-20"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 text-center">
              Technologies I Work With
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Cards - Positioned around the content */}
        <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
          {/* Top Left - End-to-End Product Delivery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1 },
              x: { duration: 0.8, delay: 1 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="absolute left-[1%] top-[5%] p-4 bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400">
              <Rocket size={22} />
            </div>
            <div>
              <div className="text-xs text-gray-400">End-to-End</div>
              <div className="font-bold text-sm">Product Delivery</div>
            </div>
          </motion.div>

          {/* Bottom Left - Full-Stack Development */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1.2 },
              x: { duration: 0.8, delay: 1.2 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute left-[3%] bottom-[28%] p-4 bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
              <Code2 size={22} />
            </div>
            <div>
              <div className="text-xs text-gray-400">Full-Stack</div>
              <div className="font-bold text-sm">Development</div>
            </div>
          </motion.div>

          {/* Top Right - AI-Powered Automation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, 18, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1.4 },
              x: { duration: 0.8, delay: 1.4 },
              y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }
            }}
            className="absolute right-[1%] top-[5%] p-4 bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="p-2.5 bg-purple-500/20 rounded-xl text-purple-400">
              <Cpu size={22} />
            </div>
            <div>
              <div className="text-xs text-gray-400">AI-Powered</div>
              <div className="font-bold text-sm">Automation</div>
            </div>
          </motion.div>

          {/* Bottom Right - Custom AI Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -14, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1.6 },
              x: { duration: 0.8, delay: 1.6 },
              y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }
            }}
            className="absolute right-[3%] bottom-[30%] p-4 bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="p-2.5 bg-amber-500/20 rounded-xl text-amber-400">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-xs text-gray-400">Custom</div>
              <div className="font-bold text-sm">AI Solutions</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
          className="text-gray-500 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
