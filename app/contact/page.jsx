import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Nidrosoft. Let\'s discuss your project and bring your vision to life. Free consultation available.',
}

export default function ContactPage() {
  return (
    <div className="bg-dark text-white selection:bg-primary selection:text-white font-sans min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
