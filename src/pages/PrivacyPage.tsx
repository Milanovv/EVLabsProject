import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold text-text-primary">Privacy Policy</h1>
          
          <p className="text-text-secondary">Last Updated: April 26, 2026</p>
          
          <p className="text-text-secondary">
            SkillPath respects your privacy. This policy explains how we collect and use your data.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">1. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-text-primary">a. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Email address (for accounts or subscriptions)</li>
              <li>Payment details (processed securely via third-party providers)</li>
              <li>Any information you submit voluntarily</li>
            </ul>

            <h3 className="text-lg font-medium text-text-primary">b. Automatically Collected Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>IP address</li>
              <li>Browser type and device info</li>
              <li>Usage data (pages visited, interactions)</li>
            </ul>

            <h3 className="text-lg font-medium text-text-primary">c. Cookies</h3>
            <p className="text-text-secondary">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Improve user experience</li>
              <li>Analyze traffic</li>
              <li>Remember preferences</li>
            </ul>
            <p className="text-text-secondary">You can disable cookies in your browser settings.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">2. How We Use Your Information</h2>
            <p className="text-text-secondary">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Provide and improve our services</li>
              <li>Personalize content and recommendations</li>
              <li>Process payments</li>
              <li>Communicate updates or offers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">3. Sharing of Information</h2>
            <p className="text-text-secondary">We do not sell your personal data.</p>
            <p className="text-text-secondary">We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Legal authorities (if required by law)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">4. Data Security</h2>
            <p className="text-text-secondary">
              We take reasonable measures to protect your data, but no system is completely secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">5. Third-Party Links</h2>
            <p className="text-text-secondary">SkillPath links to external resources.</p>
            <p className="text-text-secondary">We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Their privacy practices</li>
              <li>Their content or security</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">6. Your Rights</h2>
            <p className="text-text-secondary">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Access your data</li>
              <li>Request deletion</li>
              <li>Correct inaccurate information</li>
            </ul>
            <p className="text-text-secondary">To exercise these rights, contact us.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">7. Data Retention</h2>
            <p className="text-text-secondary">We retain data only as long as necessary for:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Providing services</li>
              <li>Legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">8. Changes to This Policy</h2>
            <p className="text-text-secondary">
              We may update this Privacy Policy. Continued use of SkillPath means you accept the changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">9. Contact</h2>
            <p className="text-text-secondary">For privacy-related questions: admin@evlabs.com</p>
          </section>

          <div className="pt-8">
            <Link to="/" className="text-accent-indigo hover:underline">← Back to Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}