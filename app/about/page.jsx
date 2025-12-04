import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'

export const metadata = {
  title: 'About',
  description: 'Meet Cyriac Zeh, Senior Product Engineer with 12+ years of experience. From idea to deployment, I help startups build products that users love.',
}

export default function AboutPage() {
  return (
    <div className="bg-dark text-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <About />
      </main>
      
      <Footer />
    </div>
  )
}
