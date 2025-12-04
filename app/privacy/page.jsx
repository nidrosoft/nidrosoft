import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Nidrosoft',
  description: 'Privacy Policy for Nidrosoft LLC - How we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = "December 1, 2024"

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: {lastUpdated}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Nidrosoft LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or engage our services.
              </p>
              <p className="text-gray-300">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
              <p className="text-gray-300 mb-4">We may collect personally identifiable information, including but not limited to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (company name, job title)</li>
                <li>Project details and requirements you share with us</li>
                <li>Payment and billing information</li>
                <li>Communication records between you and Nidrosoft</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Automatically Collected Information</h3>
              <p className="text-gray-300 mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you about projects, updates, and promotional offers</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (e.g., payment processors, hosting providers)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Data Retention</h2>
              <p className="text-gray-300">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, 
                unless a longer retention period is required or permitted by law. Project-related data may be retained for up to 7 years 
                for legal and accounting purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Your Rights</h2>
              <p className="text-gray-300 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">8. Cookies</h2>
              <p className="text-gray-300">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, some features of our website may not function properly without cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">9. Third-Party Links</h2>
              <p className="text-gray-300">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">10. Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you become aware that a child has provided us with personal information, 
                please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">11. Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the 
                new privacy policy on this page and updating the "Last updated" date. You are advised to review this 
                privacy policy periodically for any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">12. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Nidrosoft LLC</p>
                <p className="text-gray-300">San Diego, California, USA</p>
                <p className="text-gray-300">Email: hello@nidrosoft.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
