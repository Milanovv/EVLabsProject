import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { useUser } from '@/contexts/UserContext'
import { getCategoryColor, typeLabels } from '@/constants'
import api from '@/services/api'
import { Star, ThumbsUp, Bookmark, Share2, ExternalLink, CheckCircle, Lock } from 'lucide-react'
import type { Resource } from '@/types'

export default function ResourcePage() {
  const [searchParams] = useSearchParams()
  const id = parseInt(searchParams.get('id') || '1')
  const [resource, setResource] = useState<Resource | null>(null)
  const [related, setRelated] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [saved, setSaved] = useState(false)
  const [voteType, setVoteType] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)
  const [notification, setNotification] = useState('')
  const [notificationType, setNotificationType] = useState<'success' | 'error' | null>(null)
  const [error, setError] = useState('')
  const { isPremium: userIsPremium, user } = useUser()

  useEffect(() => { document.title = resource ? `${resource.title} — SkillPath` : 'SkillPath' }, [resource])

  // Fetch resource from API
  useEffect(() => {
    const fetchResource = async () => {
      setLoading(true)
      setError('')
      try {
        const data = await api.resources.getById(id)
        setResource(data)
        if (data) {
          const relatedData = await api.resources.related(data.category, id)
          setRelated(relatedData.data.slice(0, 4))
        }
      } catch (err: any) {
        console.error('Error fetching resource:', err)
        setResource(null)
        setRelated([])
        setError('Resource not found')
      } finally {
        setLoading(false)
      }
    }
    fetchResource()
  }, [id])

  // Check if premium content should be locked
  const isLocked = resource?.isPremium && !userIsPremium

  // Load saved and vote status
  useEffect(() => {
    if (!user || !resource) return

    const checkSavedStatus = async () => {
      try {
        const result = await api.resources.isSaved(id)
        setSaved(result.saved)
      } catch (error: any) {
        console.error('Error checking save status:', error?.message || error, error)
        setSaved(false)
      }
    }

    const checkVoteStatus = async () => {
      try {
        const result = await api.resources.getVoteStatus(id)
        setVoteType(result.voteType)
      } catch (error: any) {
        console.error('Error checking vote status:', error?.message || error, error)
        setVoteType(null)
      }
    }

    checkSavedStatus()
    checkVoteStatus()
  }, [id, user, resource])

  const handleSave = async () => {
    if (!user) {
      setError('Please login to save resources')
      return
    }
    
    setSaving(true)
    setError('')
    setNotification('')
    
    try {
      if (saved) {
        await api.resources.unsave(id)
        setSaved(false)
        setNotification('Resource removed from saved')
      } else {
        await api.resources.save(id)
        setSaved(true)
        setNotification('Resource saved!')
      }
      
      // Clear notification after 3 seconds
      setTimeout(() => setNotification(''), 3000)
    } catch (error: any) {
      console.error('Error saving resource:', error?.message || error)
      const errorMsg = error?.message || 'Failed to save resource'
      setError(errorMsg)
    } finally {
      setSaving(false)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setNotification('Link copied!')
      setTimeout(() => setNotification(''), 3000)
    } catch {
      setError('Failed to copy link')
    }
  }

  const handleVote = async (type: number) => {
    if (!user) {
      setError('Please login to vote')
      return
    }

    try {
      const result = await api.resources.vote(id, type)
      setVoteType(result.voteType)
      setResource(prev => prev ? { ...prev, votes: result.votes } : prev)

      if (result.voted) {
        setNotification(type === 1 ? 'Marked as helpful!' : 'Marked as not helpful')
        setNotificationType(type === 1 ? 'success' : 'error')
      } else {
        setNotification('')
        setNotificationType(null)
      }

      setTimeout(() => {
        setNotification('')
        setNotificationType(null)
      }, 3000)
    } catch (err: any) {
      setError(err?.message || 'Failed to vote')
    }
  }

  // Scroll to top when the resource ID changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-text-secondary">Loading...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Resource not found</h2>
            <p className="text-text-secondary mb-4">
              This resource may not be available in the database yet.
            </p>
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
  const relatedResources = related

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
                  <Link to="/pricing">
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
                  <Button variant="ghost" size="lg" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </>
              )}
              
              {/* Notification/Error display */}
              {(notificationType || error) && (
                <div className={`w-full py-2 px-4 rounded-lg ${error ? 'bg-red-500/20 text-red-500' : notificationType === 'error' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
                  {error || notification}
                </div>
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
                variant={voteType === 1 ? 'default' : 'secondary'} 
                onClick={() => handleVote(1)}
              >
                <ThumbsUp className="h-4 w-4" />
                Yes, helpful!
              </Button>
              <Button 
                variant={voteType === -1 ? 'default' : 'secondary'} 
                onClick={() => handleVote(-1)}
              >
                <ThumbsUp className="h-4 w-4 rotate-180" />
                Not really
              </Button>
            </div>
          </div>

          {/* Related */}
          {relatedResources.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Similar Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedResources.map((res, index) => (
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