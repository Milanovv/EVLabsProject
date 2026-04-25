import { useSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { categories, filterResources, subcategories, getCategoryColor } from '@/data/resources'
import { Search, Filter } from 'lucide-react'

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('cat') || 'Programming/Development'
  const [activeSubcategory, setActiveSubcategory] = useState('all')

  const category = categories.find(c => c.name === categoryParam) || categories[0]
  const categoryColor = getCategoryColor(category.name)
  
  const filtered = filterResources({ 
    category: categoryParam,
    subcategory: activeSubcategory === 'all' ? undefined : activeSubcategory 
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
                    {subcategories.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubcategory(sub)}
                        className={`w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                          activeSubcategory === sub || (activeSubcategory === 'all' && sub === 'all')
                            ? 'bg-accent-indigo/20 text-accent-indigo'
                            : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Filters</h3>
                  <div className="space-y-2">
                    {['All', 'Free', 'Premium'].map((filter) => (
                      <button
                        key={filter}
                        className="w-full px-3 py-2 text-sm text-left rounded-md text-text-secondary hover:bg-background-tertiary hover:text-text-primary"
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Tabs */}
              <div className="mb-6 flex gap-2 border-b border-border overflow-x-auto">
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                      activeSubcategory === sub
                        ? 'border-accent-indigo text-accent-indigo'
                        : 'border-transparent text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Results count */}
              <div className="mb-4 text-sm text-text-muted">
                {filtered.length} resources
              </div>

              {/* Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map((resource, index) => (
                  <ResourceCard key={resource.id} resource={resource} index={index} />
                ))}
              </div>

              {filtered.length === 0 && (
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