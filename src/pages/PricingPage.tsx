import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Check, X, Star, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import api from '@/services/api'
import { useUser } from '@/contexts/UserContext'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [upgrading, setUpgrading] = useState(false)
  const { upgrade } = useUser()

  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Access to all free resources',
        'Basic search functionality',
        'Community support',
      ],
      notIncluded: [
        'Premium tools & tutorials',
        'Rare issue solutions',
        'Downloadable roadmaps',
      ],
      cta: 'Get Started',
      variant: 'secondary' as const,
    },
    {
      name: 'Premium',
      price: isAnnual ? 47.99  : 4.99,
      period: isAnnual ? '/year' : '/month',
      description: 'For serious learners',
      featured: true,
      features: [
        'Everything in Free',
        'Exclusive curated links',
        'Rare issue solutions',
        'Premium toolkits',
        'Downloadable roadmaps',
        'Priority support',
      ],
      cta: 'Get Premium',
      variant: 'default' as const,
    },
    {
      name: 'Support Us',
      price: null,
      description: 'Help us keep it free',
      features: [
        'Our gratitude',
        'Help with server costs',
        'Support open source',
        'Early access to features',
      ],
      cta: 'Donate',
      variant: 'secondary' as const,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">Simple, transparent pricing</h1>
            <p className="text-lg text-text-secondary">
              Choose the plan that works best for you. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Toggle */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className={cn('text-sm', !isAnnual ? 'text-text-primary font-medium' : 'text-text-muted')}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                'relative h-7 w-12 rounded-full transition-colors',
                isAnnual ? 'bg-accent-indigo' : 'bg-background-tertiary'
              )}
            >
              <span
                className={cn(
                  'absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform',
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </button>
            <span className={cn('text-sm', isAnnual ? 'text-text-primary font-medium' : 'text-text-muted')}>
              Yearly <span className="text-accent-green">(Save 20%)</span>
            </span>
          </div>

          {/* Plans */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'relative rounded-xl border p-6',
                  plan.featured
                    ? 'border-accent-gold bg-gradient-to-b from-accent-gold/10 to-transparent'
                    : 'border-border bg-background-tertiary/50'
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gold px-3 py-1 text-xs font-semibold text-background">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-text-primary">{plan.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{plan.description}</p>

                <div className="my-6">
                  {plan.price !== null ? (
                    <>
                      <span className="text-4xl font-bold text-text-primary">
                        ${plan.price}
                      </span>
                      <span className="text-text-muted">{plan.period || '/month'}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-text-primary">Custom</span>
                  )}
                </div>

                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Check className="h-4 w-4 text-accent-green" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <X className="h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.name === 'Premium' ? (
                  <Button
                    variant={plan.variant}
                    className="w-full"
                    onClick={() => setShowModal(true)}
                  >
                    {plan.cta}
                  </Button>
                ) : (
                  <Button
                    variant={plan.variant}
                    className="w-full"
                    asChild={plan.name !== 'Support Us'}
                  >
                    {plan.name === 'Support Us' ? (
                      <span>{plan.cta}</span>
                    ) : (
                      <Link to={plan.price === 0 ? '/' : '/dashboard'}>{plan.cta}</Link>
                    )}
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and Google Pay.',
                },
                {
                  q: 'Is there a refund policy?',
                  a: 'Yes, we offer a 30-day money-back guarantee for all Premium plans.',
                },
                {
                  q: 'Can I switch plans?',
                  a: 'Absolutely! You can upgrade or downgrade your plan at any time from your dashboard.',
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-lg border border-border bg-background-tertiary/50 p-4">
                  <h4 className="font-semibold text-text-primary mb-2">{faq.q}</h4>
                  <p className="text-sm text-text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Premium Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />
          <div className="relative z-10 mx-4 w-full max-w-md rounded-xl border border-border bg-background-tertiary p-6 shadow-xl">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/20">
                <Star className="h-6 w-6 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Get Premium?</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Unlock exclusive curated links, rare issue solutions, premium toolkits, and priority support.
              </p>
            </div>
            
            <div className="mt-6 flex flex-col gap-3">
              <Button
                className="w-full bg-accent-gold text-background hover:bg-accent-gold/90"
                disabled={upgrading}
                onClick={async () => {
                  setUpgrading(true)
                  try {
                    await upgrade()
                    setShowModal(false)
                  } catch (error) {
                    console.error('Failed to upgrade:', error)
                  } finally {
                    setUpgrading(false)
                  }
                }}
              >
                {upgrading ? 'Upgrading...' : 'Buy Premium Subscription'}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowModal(false)}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}