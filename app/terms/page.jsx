import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | Nidrosoft',
  description: 'Terms of Service for Nidrosoft LLC - Terms and conditions for our product engineering and development services.',
}

export default function TermsOfService() {
  const lastUpdated = "December 1, 2024"

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: {lastUpdated}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                By engaging Nidrosoft LLC ("Company," "we," "our," or "us") for any services, you ("Client," "you," or "your") 
                agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-300">
                These terms apply to all services provided by Nidrosoft LLC, including but not limited to product design, 
                web development, mobile app development, AI solutions, and consulting services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Services</h2>
              <p className="text-gray-300 mb-4">
                Nidrosoft LLC provides product engineering and development services including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Product Design & Strategy (UI/UX design, prototyping)</li>
                <li>Web Application Development</li>
                <li>Mobile Application Development (iOS, Android, Cross-platform)</li>
                <li>AI & Automation Solutions</li>
                <li>Cloud Infrastructure & DevOps</li>
                <li>Technical Consulting</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Project Engagement & Proposals</h2>
              <p className="text-gray-300 mb-4">
                All projects begin with a discovery call and written proposal. The proposal will outline:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment schedule</li>
                <li>Technical requirements and assumptions</li>
              </ul>
              <p className="text-gray-300">
                A project is considered confirmed only upon written acceptance of the proposal and receipt of the initial deposit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">4.1 Deposit</h3>
              <p className="text-gray-300 mb-4">
                A <strong>50% non-refundable deposit</strong> is required to begin any project. This deposit secures your spot 
                in our schedule and covers initial discovery, planning, and design work.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.2 Payment Schedule</h3>
              <p className="text-gray-300 mb-4">Standard payment structure:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong>50%</strong> — Due upon project commencement (non-refundable deposit)</li>
                <li><strong>50%</strong> — Due upon project completion, before final delivery</li>
              </ul>
              <p className="text-gray-300 mb-4">
                For larger projects, milestone-based payments may be arranged as specified in the proposal.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.3 Hourly & Retainer Work</h3>
              <p className="text-gray-300 mb-4">
                For hourly engagements, invoices are sent weekly or bi-weekly. Payment is due within 7 days of invoice date. 
                Retainer fees are due at the beginning of each month.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.4 Late Payments</h3>
              <p className="text-gray-300">
                Payments not received within 14 days of the due date will incur a late fee of 1.5% per month. 
                Work may be paused on accounts with outstanding balances exceeding 30 days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Project Timeline & Delivery</h2>
              <p className="text-gray-300 mb-4">
                Estimated timelines are provided in good faith based on the defined scope. Actual delivery may vary due to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Scope changes or additions requested by the Client</li>
                <li>Delays in Client feedback or approvals</li>
                <li>Third-party dependencies (APIs, services, etc.)</li>
                <li>Technical complexities discovered during development</li>
              </ul>
              <p className="text-gray-300">
                We commit to transparent communication about any timeline changes and will provide updated estimates promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Client Responsibilities</h2>
              <p className="text-gray-300 mb-4">To ensure project success, the Client agrees to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide timely feedback and approvals (within 3 business days unless otherwise agreed)</li>
                <li>Supply all necessary content, assets, and access credentials</li>
                <li>Designate a single point of contact for project communications</li>
                <li>Review and test deliverables within the agreed timeframe</li>
                <li>Make payments according to the agreed schedule</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Revisions & Scope Changes</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">7.1 Included Revisions</h3>
              <p className="text-gray-300 mb-4">
                Each project phase includes up to 2 rounds of revisions within the original scope. 
                Revisions must be submitted in consolidated feedback to avoid scope creep.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">7.2 Scope Changes</h3>
              <p className="text-gray-300">
                Requests for work outside the original scope will be documented in a change order with additional time 
                and cost estimates. Work on scope changes will begin only upon written approval and any required additional payment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">8. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">8.1 Client Ownership</h3>
              <p className="text-gray-300 mb-4">
                Upon full payment, the Client receives full ownership of all custom code, designs, and deliverables 
                created specifically for their project.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">8.2 Third-Party Components</h3>
              <p className="text-gray-300 mb-4">
                Projects may include third-party libraries, frameworks, or assets subject to their own licenses 
                (e.g., open-source licenses). The Client is responsible for compliance with these licenses.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">8.3 Portfolio Rights</h3>
              <p className="text-gray-300">
                Nidrosoft LLC reserves the right to display completed work in our portfolio and marketing materials, 
                unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">9. Confidentiality</h2>
              <p className="text-gray-300">
                Both parties agree to keep confidential any proprietary information shared during the engagement. 
                This includes business strategies, technical specifications, user data, and any information marked as confidential. 
                This obligation survives the termination of our engagement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">10. Warranties & Disclaimers</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">10.1 Workmanship Warranty</h3>
              <p className="text-gray-300 mb-4">
                We warrant that our work will be performed in a professional manner consistent with industry standards. 
                Bug fixes for issues within the original scope are provided free of charge for 30 days after project completion.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">10.2 Disclaimer</h3>
              <p className="text-gray-300">
                Services are provided "as is." We do not guarantee specific business outcomes, revenue, user acquisition, 
                or app store approval. We are not liable for issues arising from Client modifications, third-party services, 
                or hosting environments outside our control.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">11. Limitation of Liability</h2>
              <p className="text-gray-300">
                To the maximum extent permitted by law, Nidrosoft LLC's total liability for any claims arising from 
                our services shall not exceed the total amount paid by the Client for the specific project in question. 
                We are not liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">12. Termination</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">12.1 By Client</h3>
              <p className="text-gray-300 mb-4">
                The Client may terminate the project at any time with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>The initial deposit is non-refundable</li>
                <li>Payment is due for all work completed up to the termination date</li>
                <li>Completed deliverables will be transferred upon full payment</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">12.2 By Nidrosoft</h3>
              <p className="text-gray-300">
                We reserve the right to terminate a project if the Client fails to meet payment obligations, 
                becomes unresponsive for more than 30 days, or engages in abusive or unethical behavior.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">13. Dispute Resolution</h2>
              <p className="text-gray-300">
                Any disputes arising from these terms or our services shall first be addressed through good-faith negotiation. 
                If unresolved, disputes shall be settled through binding arbitration in San Diego County, California, 
                in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">14. Governing Law</h2>
              <p className="text-gray-300">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, 
                United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">15. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. 
                Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">16. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Nidrosoft LLC</p>
                <p className="text-gray-300">San Diego, California, USA</p>
                <p className="text-gray-300">Email: hello@nidrosoft.com</p>
              </div>
            </section>

            {/* Agreement Box */}
            <section className="mt-16 p-8 bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-white text-center">
                By engaging Nidrosoft LLC for services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
