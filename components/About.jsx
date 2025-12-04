'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Code2, 
  Brain, 
  Rocket, 
  Users, 
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react'

const skills = [
  { name: "Product Strategy", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "Mobile Development", level: 85 },
  { name: "AI & Automation", level: 88 },
]

const values = [
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "I believe in rapid iteration. Get your product to market quickly, learn from real users, and improve continuously."
  },
  {
    icon: Code2,
    title: "Quality Code",
    description: "Clean, maintainable, and scalable code isn't optional—it's the foundation of every product I build."
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Every decision starts with the user. Beautiful design means nothing if it doesn't solve real problems."
  },
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "I leverage AI not as a gimmick, but as a tool to create genuinely smarter, more efficient products."
  },
]

const timeline = [
  { year: "2012", title: "Started Coding", description: "Wrote my first lines of code and fell in love with building things." },
  { year: "2015", title: "First Freelance Project", description: "Delivered my first paid project—a website for a local business." },
  { year: "2018", title: "Full-Stack Mastery", description: "Expanded into backend, databases, and cloud infrastructure." },
  { year: "2020", title: "Mobile Development", description: "Built and launched multiple iOS and Android apps." },
  { year: "2022", title: "AI Integration", description: "Started integrating AI/ML into products, automating workflows." },
  { year: "2024", title: "Nidrosoft LLC", description: "Founded Nidrosoft to help startups build and scale faster." },
]

const socials = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/cyriac-zeh/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/cyrizeh' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/zehcyriac' },
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
                <Sparkles size={14} className="text-primary" />
                About Me
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Hi, I'm Cyriac.
                <br />
                <span className="text-gradient">I Build Products.</span>
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
                I'm a Senior Product Engineer with 12+ years of experience turning ideas into 
                production-ready products. I handle everything from design to deployment—no handoffs, 
                no communication gaps, just results.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  San Diego, California
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  12+ Years Experience
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="text-9xl">👨‍💻</div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-card border border-white/10 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">50+ Projects</div>
                    <div className="text-xs text-gray-500">Delivered</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I started coding in 2012, driven by curiosity and a desire to build things that matter. 
              What began as a hobby quickly became a passion—and eventually, a career.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Over the years, I've worn many hats: designer, developer, product manager, and consultant. 
              I've worked with startups, small businesses, and enterprise clients across industries like 
              healthcare, fintech, e-commerce, and social media.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I founded Nidrosoft because I saw a gap in the market. Too many founders struggle with 
              fragmented teams, endless meetings, and slow delivery. I offer a different approach: 
              one expert who handles the entire product lifecycle, from idea to launch.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, I help entrepreneurs and businesses build products that users love—fast, efficiently, 
              and without the overhead of a full team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How I Work</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My approach to building products is guided by these core principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl border border-white/10 bg-card/50 hover:border-white/20 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 text-lg">
              12 years of continuous learning and hands-on experience.
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Journey</h2>
            <p className="text-gray-400 text-lg">
              Key milestones in my career as a product engineer.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Year Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-primary border-4 border-dark" />
                  
                  <div className="text-primary font-mono text-sm mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all group"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
