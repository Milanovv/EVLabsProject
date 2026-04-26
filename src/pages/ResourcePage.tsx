import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { getResourceById, getRelatedResources, getCategoryColor, typeLabels, categories } from '@/data/resources'
import { useUser } from '@/contexts/UserContext'
import api from '@/services/api'
import { Star, ThumbsUp, Bookmark, Share2, ExternalLink, Clock, CheckCircle, Lock } from 'lucide-react'

export default function ResourcePage() {
  const [searchParams] = useSearchParams()
  const id = parseInt(searchParams.get('id') || '1')
  const resource = getResourceById(id)
  const [saved, setSaved] = useState(false)
  const [voted, setVoted] = useState(false)
  const [saving, setSaving] = useState(false)
  const { isPremium: userIsPremium, user } = useUser()

  // Check if premium content should be locked
  const isLocked = resource?.isPremium && !userIsPremium

  // Load saved status
  useEffect(() => {
    if (user) {
      checkSavedStatus()
    }
  }, [id, user])

  const checkSavedStatus = async () => {
    try {
      const savedResources = await api.resources.getSaved()
      console.log('Saved resources:', savedResources)
      // Handle case where response is an object (error) instead of array
      if (savedResources && typeof savedResources === 'object' && !Array.isArray(savedResources)) {
        setSaved(false)
        return
      }
      const resourcesArray = Array.isArray(savedResources) ? savedResources : []
      const isSaved = resourcesArray.some((r: any) => r.id === id)
      setSaved(isSaved)
      console.log('Is saved:', isSaved)
    } catch (error: any) {
      console.error('Error checking save status:', error?.message || error)
      setSaved(false)
    }
  }

  const handleSave = async () => {
    if (!user) {
      return
    }
    
    setSaving(true)
    try {
      console.log('handleSave called. id:', id, 'saved:', saved)
      if (saved) {
        await api.resources.unsave(id)
        setSaved(false)
      } else {
        await api.resources.save(id)
        setSaved(true)
      }
    } catch (error: any) {
      console.error('Error saving resource:', error?.message || error)
    } finally {
      setSaving(false)
    }
  }

  // Scroll to top when the resource ID changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

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
            
            <h1 className={`text-3xl font-bold text-text-primary mb-4 ${isLocked ? 'blur-title' : ''}`}>
              {resource.title}
            </h1>
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
              {isLocked ? (
                <>
                  <Button size="lg" className="opacity-50 cursor-not-allowed" disabled>
                    <Lock className="h-4 w-4 mr-2" />
                    Premium Content
                  </Button>
                  <Link to="/upgrade">
                    <Button size="lg" className="bg-accent-gold hover:bg-accent-gold/90">
                      Upgrade to Access
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Button size="lg" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit Resource
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  {user && (
                    <Button variant="secondary" size="lg" onClick={handleSave} disabled={saving}>
                      <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                      {saving ? 'Saving...' : saved ? 'Saved' : 'Save'}
                    </Button>
                  )}
                  {!user && (
                    <Link to="/login">
                      <Button variant="secondary" size="lg">
                        <Bookmark className="h-4 w-4" />
                        Save
                      </Button>
                    </Link>
                  )}
                  <Button variant="ghost" size="lg">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </>
              )}
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