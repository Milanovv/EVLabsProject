import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { filterResources, getResourceById, getRelatedResources, getCategoryColor } from '@/data/resources'
import { Search, Filter, Star, ThumbsUp, Bookmark, Share2, ExternalLink } from 'lucide-react'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    setSearchQuery(query)
  }, [query])

  const filtered = filterResources({ 
    search: searchQuery,
    filter: activeFilter === 'all' ? undefined : activeFilter
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ q: searchQuery })
  }

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
                placeholder="Search tutorials, tools, plugins, errors..."
                className="w-full rounded-xl border border-border bg-background-secondary py-4 pl-12 pr-4 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none focus:ring-2 focus:ring-accent-indigo/20"
              />
            </form>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {['all', 'tutorial', 'tool', 'faq', 'error'].map((filter) => (
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

          {/* Results */}
          <div className="mb-4 text-sm text-text-muted">
            <strong>{filtered.length}</strong> results found
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
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