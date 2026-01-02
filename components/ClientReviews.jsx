'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Michael T.",
    role: "Founder",
    industry: "Healthcare SaaS",
    review: "Cyriac transformed our idea into a fully functional telemedicine platform in just 6 weeks. The attention to detail and technical expertise exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "CEO",
    industry: "E-Commerce",
    review: "Our AI-powered recommendation engine increased sales by 40%. Cyriac understood our vision immediately and delivered beyond what we imagined.",
    rating: 5,
  },
  {
    id: 3,
    name: "David L.",
    role: "Co-Founder",
    industry: "FinTech Startup",
    review: "From MVP to launch in 3 weeks. The speed and quality were unmatched. We closed our seed round with a working product thanks to Nidrosoft.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jennifer M.",
    role: "Product Lead",
    industry: "EdTech",
    review: "The mobile app Cyriac built for us has 50K+ downloads and a 4.8 star rating. Communication was flawless throughout the entire project.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert H.",
    role: "Founder & CTO",
    industry: "Real Estate Tech",
    review: "Rebuilt our legacy system into a modern platform with zero downtime. The migration was seamless and our users love the new experience.",
    rating: 5,
  },
  {
    id: 6,
    name: "Amanda C.",
    role: "CEO",
    industry: "Food Delivery",
    review: "Our delivery app handles 10K+ orders daily without a hiccup. Cyriac's architecture decisions were spot-on from day one.",
    rating: 5,
  },
  {
    id: 7,
    name: "James W.",
    role: "Founder",
    industry: "Social App",
    review: "Night Owl went from concept to App Store in 8 weeks. The AI-powered features Cyriac implemented set us apart from competitors.",
    rating: 5,
  },
  {
    id: 8,
    name: "Lisa P.",
    role: "COO",
    industry: "Healthcare",
    review: "Patient engagement increased 60% after launching our new portal. Cyriac made complex HIPAA compliance feel effortless.",
    rating: 5,
  },
  {
    id: 9,
    name: "Kevin R.",
    role: "Founder",
    industry: "Automotive SaaS",
    review: "The inventory management system Cyriac built saves our dealerships 20+ hours per week. ROI was immediate.",
    rating: 5,
  },
  {
    id: 10,
    name: "Michelle S.",
    role: "CEO",
    industry: "Travel Tech",
    review: "Our booking platform handles peak traffic flawlessly. Cyriac's cloud architecture expertise was exactly what we needed.",
    rating: 5,
  },
  {
    id: 11,
    name: "Brian D.",
    role: "Co-Founder",
    industry: "SaaS",
    review: "Three products delivered in one year. Nidrosoft is now our go-to development partner for everything we build.",
    rating: 5,
  },
  {
    id: 12,
    name: "Emily F.",
    role: "Product Manager",
    industry: "E-Commerce",
    review: "The AI chatbot Cyriac built handles 80% of our customer inquiries automatically. Support costs dropped significantly.",
    rating: 5,
  },
  {
    id: 13,
    name: "Chris N.",
    role: "Founder",
    industry: "FinTech",
    review: "Secure, scalable, and beautifully designed. Our payment platform processes millions monthly without issues.",
    rating: 5,
  },
  {
    id: 14,
    name: "Rachel G.",
    role: "CEO",
    industry: "Healthcare Startup",
    review: "From wireframes to launch, Cyriac handled everything. Our mental health app is now helping thousands of users daily.",
    rating: 5,
  },
  {
    id: 15,
    name: "Daniel B.",
    role: "CTO",
    industry: "Logistics SaaS",
    review: "The real-time tracking system Cyriac built is the backbone of our operations. Reliable, fast, and exactly what we needed.",
    rating: 5,
  },
  {
    id: 16,
    name: "Stephanie A.",
    role: "Founder",
    industry: "EdTech",
    review: "Our learning platform serves 100K+ students. Cyriac's technical decisions scaled perfectly as we grew.",
    rating: 5,
  },
  {
    id: 17,
    name: "Mark J.",
    role: "CEO",
    industry: "Real Estate",
    review: "Property listings, virtual tours, and AI-powered matching—all delivered in one cohesive platform. Exceptional work.",
    rating: 5,
  },
  {
    id: 18,
    name: "Nicole V.",
    role: "Founder",
    industry: "Mobile App",
    review: "Both iOS and Android apps delivered simultaneously with shared codebase. Saved us months of development time.",
    rating: 5,
  },
  {
    id: 19,
    name: "Andrew P.",
    role: "Co-Founder",
    industry: "SaaS",
    review: "The dashboard Cyriac built gives us insights we never had before. Data-driven decisions are now effortless.",
    rating: 5,
  },
  {
    id: 20,
    name: "Jessica L.",
    role: "CEO",
    industry: "Social Platform",
    review: "User engagement tripled after the redesign. Cyriac understood our users better than we did. Highly recommend.",
    rating: 5,
  },
]

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)

  const reviewsPerView = 3
  const totalSlides = Math.ceil(reviews.length / reviewsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const visibleReviews = reviews.slice(
    currentIndex * reviewsPerView,
    currentIndex * reviewsPerView + reviewsPerView
  )

  return (
    <section className="py-24 bg-gradient-to-b from-dark via-black to-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            Client Reviews
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What Clients Say About{' '}
            <span className="text-gradient">Working Together</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from founders, CEOs, and product leaders I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative" ref={containerRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleReviews.map((review) => (
                <motion.div
                  key={review.id}
                  className="p-8 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm hover:border-white/20 transition-all group"
                >
                  {/* Quote Icon */}
                  <Quote size={32} className="text-primary/30 mb-4" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "{review.review}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-lg font-bold border border-white/10">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-white">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.role} • {review.industry}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all z-10"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all z-10"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Trusted by <span className="text-white font-medium">50+ clients</span> across{' '}
            <span className="text-white font-medium">10+ industries</span> worldwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
