import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import api from '@/services/api'
import { categories, getCategoryColor } from '@/data/resources'
import { Search, Filter, Loader2 } from 'lucide-react'
import type { Resource } from '@/data/resources'

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('cat') || 'Programming/Development'
  const [activeSubcategory, setActiveSubcategory] = useState('all')
  const [activeFilter, setActiveFilter] = useState<'all' | 'free' | 'premium'>('all')
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)

  const category = categories.find(c => c.name === categoryParam) || categories[0]
  const categoryColor = getCategoryColor(category.name)

  const dynamicSubcategories = useMemo(() => {
    const subs = new Set(resources.map(r => r.subcategory))
    return ['all', ...Array.from(subs)]
  }, [resources])

  useEffect(() => {
    setActiveSubcategory('all')
  }, [categoryParam])

  useEffect(() => {
    async function fetchCategoryResources() {
      setLoading(true)
      try {
        const data = await api.resources.getAll({ category: categoryParam })
        setResources(data)
      } catch (error) {
        console.error('Failed to fetch resources:', error)
        setResources([])
      } finally {
        setLoading(false)
      }
    }
    fetchCategoryResources()
  }, [categoryParam])

  const filtered = resources.filter(r => {
    if (activeSubcategory !== 'all' && r.subcategory !== activeSubcategory) return false
    if (activeFilter === 'free' && r.isPremium) return false
    if (activeFilter === 'premium' && !r.isPremium) return false
    return true
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-text-muted">
            <Link to="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <span className="text-text-primary">{category.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="rounded-lg p-3"
                style={{ backgroundColor: `${categoryColor}20` }}
              >
                <span style={{ color: categoryColor }} className="text-2xl">{category.icon}</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-text-primary">{category.name}</h1>
                <p className="text-text-secondary">{category.description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Subcategories */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Subcategories</h3>
                  <div className="space-y-1">
                    {dynamicSubcategories.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubcategory(sub)}
                        className={`w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                          activeSubcategory === sub
                            ? 'bg-accent-indigo/20 text-accent-indigo'
                            : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                        }`}
                      >
                        {sub === 'all' ? 'All' : sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Filters</h3>
                  <div className="space-y-1">
                    {(['all', 'free', 'premium'] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                          activeFilter === filter
                            ? 'bg-accent-indigo/20 text-accent-indigo'
                            : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                        }`}
                      >
                        {filter === 'all' ? 'All' : filter === 'free' ? 'Free' : 'Premium'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Results count */}
              <div className="mb-4 text-sm text-text-muted">
                {loading ? '...' : filtered.length} resources
              </div>

              {/* Grid */}
              {loading ? (
                <div className="flex justify-center py-16">
                  <Loader2 className="h-8 w-8 animate-spin text-accent-indigo" />
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {filtered.map((resource, index) => (
                    <ResourceCard key={resource.id} resource={resource} index={index} />
                  ))}
                </div>
              )}

              {!loading && filtered.length === 0 && (
                <div className="py-12 text-center text-text-muted">
                  No resources found in this subcategory.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}