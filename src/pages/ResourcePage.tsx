import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { getResourceById, getRelatedResources, getCategoryColor, typeLabels, categories } from '@/data/resources'
import { Star, ThumbsUp, Bookmark, Share2, ExternalLink, Clock, CheckCircle } from 'lucide-react'

export default function ResourcePage() {
  const [searchParams] = useSearchParams()
  const id = parseInt(searchParams.get('id') || '1')
  const resource = getResourceById(id)
  const [saved, setSaved] = useState(false)
  const [voted, setVoted] = useState(false)

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Resource not found</h2>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const categoryColor = getCategoryColor(resource.category)
  const category = categories.find(c => c.name === resource.category)
  const related = getRelatedResources(resource, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-text-muted">
            <Link to="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <Link to={`/category?cat=${encodeURIComponent(resource.category)}`} className="hover:text-text-primary">
              {resource.category}
            </Link>
            <span>/</span>
            <span className="text-text-primary">{resource.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <span 
                className="rounded px-2 py-1 text-xs font-semibold uppercase"
                style={{ 
                  backgroundColor: `${categoryColor}20`,
                  color: categoryColor 
                }}
              >
                {typeLabels[resource.type]}
              </span>
              {resource.isTrending && (
                <span className="rounded bg-accent-pink/20 px-2 py-1 text-xs font-semibold text-accent-pink">
                  Trending
                </span>
              )}
              {resource.isNew && (
                <span className="rounded bg-accent-cyan/20 px-2 py-1 text-xs font-semibold text-accent-cyan">
                  New
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-text-primary mb-4">{resource.title}</h1>
            <p className="text-lg text-text-secondary mb-6">{resource.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent-gold text-accent-gold" />
                <span className="font-semibold">{resource.rating}</span>
                <span className="text-text-muted">({resource.votes} votes)</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Clock className="h-5 w-5" />
                <span>Est. time varies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent-green" />
                <span className={resource.isPremium ? 'text-accent-gold' : 'text-accent-green'}>
                  {resource.isPremium ? 'Premium' : 'Free'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  Visit Resource
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" onClick={() => setSaved(!saved)}>
                <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                {saved ? 'Saved' : 'Save'}
              </Button>
              <Button variant="ghost" size="lg">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Details Card */}
          <div className="rounded-lg border border-border bg-background-tertiary/50 p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-sm text-text-muted">Category</div>
                <div className="text-text-primary">{resource.category}</div>
              </div>
              <div>
                <div className="text-sm text-text-muted">Subcategory</div>
                <div className="text-text-primary">{resource.subcategory}</div>
              </div>
              <div>
                <div className="text-sm text-text-muted">Type</div>
                <div className="text-text-primary capitalize">{typeLabels[resource.type]}</div>
              </div>
              <div>
                <div className="text-sm text-text-muted">Difficulty</div>
                <div className="text-text-primary">{resource.difficulty}</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span 
                  key={tag}
                  className="rounded-full bg-background-elevated px-3 py-1 text-sm text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="rounded-lg border border-border bg-background-tertiary/50 p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Was this resource helpful?</h2>
            <div className="flex gap-3">
              <Button 
                variant={voted ? 'default' : 'secondary'} 
                onClick={() => setVoted(!voted)}
              >
                <ThumbsUp className="h-4 w-4" />
                Yes, helpful!
              </Button>
              <Button variant="secondary">
                <ThumbsUp className="h-4 w-4 rotate-180" />
                Not really
              </Button>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Similar Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((res, index) => (
                  <ResourceCard key={res.id} resource={res} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}