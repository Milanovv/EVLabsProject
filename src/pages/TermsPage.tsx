import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold text-text-primary">Terms of Service</h1>
          
          <p className="text-text-secondary">Last Updated: April 26, 2026</p>
          
          <p className="text-text-secondary">
            Welcome to SkillPath. By accessing or using our website and services, you agree to these Terms of Service.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">1. Use of the Service</h2>
            <p className="text-text-secondary">
              SkillPath provides curated resources, tools, tutorials, and recommendations to help users learn skills efficiently.
            </p>
            <p className="text-text-secondary">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Use the platform only for lawful purposes</li>
              <li>Not misuse, copy, or exploit content without permission</li>
              <li>Not attempt to disrupt or harm the platform</li>
            </ul>
            <p className="text-text-secondary">
              We reserve the right to suspend or terminate access if these terms are violated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">2. Accounts</h2>
            <p className="text-text-secondary">Some features may require an account.</p>
            <p className="text-text-secondary">You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities under your account</li>
            </ul>
            <p className="text-text-secondary">We are not liable for unauthorized account access.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">3. Premium Membership</h2>
            <p className="text-text-secondary">
              SkillPath may offer a paid premium membership.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Payments are billed as described at purchase</li>
              <li>Premium features may change over time</li>
              <li>We may modify pricing with notice</li>
              <li>Refund policies (if any) should be clearly stated here</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">4. Content and Resources</h2>
            <p className="text-text-secondary">
              SkillPath aggregates and recommends third-party content.
            </p>
            <p className="text-text-secondary">We do not own all external resources. We are not responsible for accuracy, legality, or availability of third-party content. Use external resources at your own risk.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">5. Intellectual Property</h2>
            <p className="text-text-secondary">
              All original content on SkillPath (branding, design, curated lists) is owned by us unless otherwise stated.
            </p>
            <p className="text-text-secondary">You may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Copy or redistribute content without permission</li>
              <li>Use our branding without authorization</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">6. Disclaimer</h2>
            <p className="text-text-secondary">
              SkillPath is provided "as is."
            </p>
            <p className="text-text-secondary">We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Accuracy or completeness of resources</li>
              <li>Specific learning outcomes</li>
              <li>Continuous availability of the platform</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">7. Limitation of Liability</h2>
            <p className="text-text-secondary">
              To the fullest extent permitted by law, SkillPath is not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Indirect or consequential damages</li>
              <li>Loss of data, profits, or opportunities</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">8. Changes to the Terms</h2>
            <p className="text-text-secondary">
              We may update these Terms at any time. Continued use of the platform means you accept the updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary">9. Contact</h2>
            <p className="text-text-secondary">For questions, contact: admin@evlabs.com</p>
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