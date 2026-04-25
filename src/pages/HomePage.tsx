import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowRight, BookOpen, Terminal, Megaphone, Kanban, TrendingUp, Calendar, DollarSign } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { categories, filterResources, calculateCategoryCounts } from '@/data/resources'

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming/Development': <Terminal className="h-6 w-6" />,
  'UI/UX Design': <BookOpen className="h-6 w-6" />,
  'Marketing': <Megaphone className="h-6 w-6" />,
  'Product and Project Management': <Kanban className="h-6 w-6" />,
  'Business and Finance': <DollarSign className="h-6 w-6" />,
  'Sales and Growth': <TrendingUp className="h-6 w-6" />,
  'Events and Community': <Calendar className="h-6 w-6" />,
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const counts = calculateCategoryCounts()
  const trending = filterResources({ trending: true }).slice(0, 6)
  const recent = filterResources({ newResources: true }).slice(0, 6)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-text-primary via-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Find the best tools, tutorials, and solutions — faster.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-lg text-text-secondary lg:text-xl"
          >
            Your curated knowledge hub for professional resources in Programming, Design, Marketing, Product Management, Business, Sales, and Community building.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSearch} className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tutorials, tools, plugins, issues..."
                className="w-full rounded-xl border border-border bg-background-secondary py-4 pl-12 pr-4 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none focus:ring-2 focus:ring-accent-indigo/20"
              />
            </form>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center gap-12"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-indigo">100+</div>
              <div className="text-sm text-text-muted">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-indigo">7</div>
              <div className="text-sm text-text-muted">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-indigo">4</div>
              <div className="text-sm text-text-muted">Types</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-text-primary">Explore Categories</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={`/category?cat=${encodeURIComponent(category.name)}`}
                  className="group relative block rounded-lg border border-border bg-background-tertiary/50 p-6 transition-all hover:border-transparent hover:shadow-lg"
                  style={{
                    '--accent': category.color,
                  } as React.CSSProperties}
                >
                  <div 
                    className="mb-4 rounded-lg p-3 w-fit"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <span style={{ color: category.color }}>{categoryIcons[category.name]}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary group-hover:text-accent-indigo">
                    {category.name}
                  </h3>
                  <p className="mb-2 text-sm text-text-secondary line-clamp-2">
                    {category.description}
                  </p>
                  <span className="text-sm text-text-muted">
                    {counts[category.name] || 0} resources
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">Trending Resources</h2>
            <Link to="/search?trending=true" className="text-sm text-accent-indigo hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trending.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">Recently Added</h2>
            <Link to="/search?new=true" className="text-sm text-accent-indigo hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-border bg-gradient-to-b from-accent-indigo/10 to-transparent p-8 text-center lg:p-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">Ready to accelerate your learning?</h2>
            <p className="mb-6 text-text-secondary">
              Join thousands of professionals finding the best resources daily.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/pricing">
                <Button size="lg">Get Started Free</Button>
              </Link>
              <Link to="/submit">
                <Button variant="outline" size="lg">Submit a Resource</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}