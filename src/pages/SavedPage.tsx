import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { useUser } from '@/contexts/UserContext'
import api from '@/services/api'
import { Bookmark } from 'lucide-react'

export default function SavedPage() {
  const { user, isLoading } = useUser()
  const navigate = useNavigate()
  const [savedResources, setSavedResources] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login')
    } else if (user) {
      loadSavedResources()
    }
  }, [user, isLoading])

  const loadSavedResources = async () => {
    try {
      const resources = await api.resources.getSaved()
      setSavedResources(resources || [])
    } catch (error) {
      console.error('Error loading saved resources:', error)
      setSavedResources([])
    } finally {
      setLoading(false)
    }
  }

  if (isLoading || loading) {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary mb-2">Saved Resources</h1>
            <p className="text-text-secondary">
              Your collection of saved resources for later
            </p>
          </div>

          {savedResources.length === 0 ? (
            <div className="rounded-lg border border-border bg-background-tertiary/50 p-12 text-center">
              <Bookmark className="mx-auto h-12 w-12 text-text-muted mb-4" />
              <h2 className="text-xl font-semibold text-text-primary mb-2">No saved resources yet</h2>
              <p className="text-text-secondary mb-6">
                Start exploring and save resources you want to check out later.
              </p>
              <Link to="/search">
                <Button>Browse Resources</Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}