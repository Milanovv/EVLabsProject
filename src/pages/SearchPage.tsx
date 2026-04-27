import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import api from '@/services/api'
import { useUser } from '@/contexts/UserContext'
import { Search, Filter, Crown, Lock, Loader2 } from 'lucide-react'
import type { Resource } from '@/data/resources'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const [activeFilter, setActiveFilter] = useState('all') // all, free, paid, tutorial, tool, faq, issue, video, plugin
  const [showPremium, setShowPremium] = useState(true)
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const { isPremium } = useUser()

  useEffect(() => {
    setSearchQuery(query)
  }, [query])

  useEffect(() => {
    async function fetchResources() {
      setLoading(true)
      try {
        let data: Resource[]
        if (searchQuery) {
          data = await api.resources.search(searchQuery)
        } else {
          data = await api.resources.getAll()
        }
        setResources(data)
      } catch (error) {
        console.error('Failed to fetch resources:', error)
        setResources([])
      } finally {
        setLoading(false)
      }
    }
    fetchResources()
  }, [searchQuery])

  const filtered = resources.filter(r => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'free') return !r.isPremium
    if (activeFilter === 'paid') return r.isPremium
    return r.type === activeFilter
  }).filter(r => {
    const showAllPremium = showPremium || isPremium
    return showAllPremium || !r.isPremium
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ q: searchQuery })
  }

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Premium' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">Search Resources</h1>
            
            <form onSubmit={handleSearch} className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tutorials, tools, plugins, issues..."
                className="w-full rounded-xl border border-border bg-background-secondary py-4 pl-12 pr-4 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none focus:ring-2 focus:ring-accent-indigo/20"
              />
            </form>
          </div>

          {/* Filter Bar with Paid/Free */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              {['all', 'tutorial', 'tool', 'faq', 'issue', 'video', 'plugin'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                    activeFilter === filter
                      ? 'bg-accent-indigo border-accent-indigo text-white'
                      : 'border-border text-text-secondary hover:border-text-muted'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Filter: Free vs Paid */}
          <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-4">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeFilter === option.value
                    ? option.value === 'paid'
                      ? 'bg-accent-gold border-accent-gold text-background'
                      : 'bg-accent-indigo border-accent-indigo text-white'
                    : 'border-border text-text-secondary hover:border-text-muted'
                }`}
              >
                {option.value === 'paid' && <Crown className="h-4 w-4" />}
                {option.label}
              </button>
            ))}
            
            {!isPremium && (
              <Link
                to="/pricing"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-accent-gold/50 bg-accent-gold/10 text-accent-gold hover:bg-accent-gold/20 transition-colors"
              >
                <Lock className="h-4 w-4" />
                Upgrade to Premium
              </Link>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-4 flex items-center justify-between text-sm text-text-muted">
            <span>
              <strong>{loading ? '...' : filtered.length}</strong> results found
            </span>
            {activeFilter === 'paid' && !isPremium && (
              <span className="flex items-center gap-2 text-accent-gold">
                <Lock className="h-4 w-4" />
                Premium links are blurred until you upgrade
              </span>
            )}
          </div>

          {/* Results Grid */}
          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-accent-indigo" />
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="py-16 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">No results found</h3>
              <p className="text-text-muted">Try a different search term or filters</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}