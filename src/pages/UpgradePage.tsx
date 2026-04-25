import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { useUser } from '@/contexts/UserContext'
import { Crown, Check, Star, Lock } from 'lucide-react'

export default function UpgradePage() {
  const { isPremium, upgrade, togglePremium } = useUser()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-gold/20">
              <Crown className="h-10 w-10 text-accent-gold" />
            </div>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Unlock Premium Content
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Get unlimited access to all premium resources, tools, and guides.
              Upgrade today and take your skills to the next level.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-background-tertiary/50 p-8"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-2">Free</h2>
              <p className="text-3xl font-bold text-text-primary mb-6">$0<span className="text-lg font-normal text-text-muted">/month</span></p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-green" />
                  Access to free resources
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-green" />
                  Basic search filters
                </li>
                <li className="flex items-center gap-3 text-text-muted">
                  <Lock className="h-5 w-5" />
                  Premium resources hidden
                </li>
              </ul>

              <Button variant="outline" className="w-full" disabled>
                Current Plan
              </Button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-accent-gold bg-gradient-to-b from-accent-gold/10 to-background-tertiary p-8 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gold px-4 py-1 text-sm font-semibold text-background">
                RECOMMENDED
              </div>
              
              <h2 className="text-2xl font-bold text-text-primary mb-2">Premium</h2>
              <p className="text-3xl font-bold text-accent-gold mb-6">$4.99<span className="text-lg font-normal text-text-muted">/month</span></p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-gold" />
                  All free features
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-gold" />
                  <span className="font-semibold">Full access</span> to premium resources
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-gold" />
                  Unblur all links
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-gold" />
                  Priority support
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-5 w-5 text-accent-gold" />
                  Early access to new resources
                </li>
              </ul>

              <Button 
                onClick={upgrade}
                className="w-full bg-accent-gold hover:bg-accent-gold/90"
              >
                <Crown className="mr-2 h-5 w-5" />
                Upgrade Now
              </Button>

              {/* Test Toggle Button */}
              {isPremium && (
                <button
                  onClick={togglePremium}
                  className="mt-4 w-full text-xs text-text-muted hover:text-text-secondary"
                >
                  (Test: Click to downgrade)
                </button>
              )}
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Frequently Asked Questions</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-4">
                <h4 className="font-semibold text-text-primary mb-2">What is premium content?</h4>
                <p className="text-sm text-text-secondary">
                  Premium content includes exclusive tools, resources, and guides that are only available to paid members. These include paid software, premium courses, and exclusive content.
                </p>
              </div>
              
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-4">
                <h4 className="font-semibold text-text-primary mb-2">Can I cancel anytime?</h4>
                <p className="text-sm text-text-secondary">
                  Yes, you can cancel your subscription at any time. Your premium access will remain until the end of your billing period.
                </p>
              </div>
              
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-4">
                <h4 className="font-semibold text-text-primary mb-2">How do I access premium links?</h4>
                <p className="text-sm text-text-secondary">
                  Once upgraded, all premium links will be unblurred and fully accessible. You can view them in search results and on resource cards.
                </p>
              </div>
              
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-4">
                <h4 className="font-semibold text-text-primary mb-2">Is there a free trial?</h4>
                <p className="text-sm text-text-secondary">
                  We offer a 7-day free trial for new users. Contact support to request a trial extension if needed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}