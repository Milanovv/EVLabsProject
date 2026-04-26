import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import api from '@/services/api'
import { useUser } from '@/contexts/UserContext'
import { Bookmark, Clock, Settings, LogOut, Star, TrendingUp, Loader2 } from 'lucide-react'
import type { Resource } from '@/data/resources'

export default function DashboardPage() {
  const navigate = useNavigate()
  const { user, isPremium, logout } = useUser()
  const [savedResources, setSavedResources] = useState<Resource[]>([])
  const [recommended, setRecommended] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchData() {
      try {
        const [saved, allResources] = await Promise.all([
          user ? api.resources.getSaved() : Promise.resolve([]),
          api.resources.getAll()
        ])
        setSavedResources(saved)
        setRecommended(allResources.slice(0, 4))
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }
fetchData()
  }, [user])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Welcome back!</h1>
              <p className="text-text-secondary">Here's your learning dashboard</p>
            </div>
            {!isPremium && (
              <Link to="/upgrade">
                <Button>Upgrade to Premium</Button>
              </Link>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-4 space-y-2">
                <Link to="/dashboard" className="flex items-center gap-3 rounded-md bg-accent-indigo/20 px-3 py-2 text-accent-indigo">
                  <Star className="h-4 w-4" /> Dashboard
                </Link>
                <Link to="/saved" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <Bookmark className="h-4 w-4" /> Saved Resources
                </Link>
                <Link to="/search" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <Clock className="h-4 w-4" /> Browse All
                </Link>
                <Link to="/" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <TrendingUp className="h-4 w-4" /> Home
                </Link>
                <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Subscription */}
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">{isPremium ? 'Premium Plan' : 'Free Plan'}</h3>
                  <p className="text-sm text-text-secondary">{isPremium ? 'Full access to all resources and features' : 'Access to basic resources and community support'}</p>
                </div>
                <span className="rounded-full bg-background-elevated px-3 py-1 text-sm font-medium text-text-muted">{isPremium ? 'Premium' : 'Free'}</span>
              </div>

              {/* Saved Resources */}
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">Saved Resources</h3>
                  <Link to="/saved" className="text-sm text-accent-indigo hover:underline">View All →</Link>
                </div>
                {loading ? (
                  <div className="flex justify-center py-4">
                    <Loader2 className="h-6 w-6 animate-spin text-accent-indigo" />
                  </div>
                ) : savedResources.length === 0 ? (
                  <p className="text-text-muted py-4">No saved resources yet</p>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {savedResources.slice(0, 4).map((resource, index) => (
                      <ResourceCard key={resource.id} resource={resource} index={index} />
                    ))}
                  </div>
                )}
              </div>

              {/* Recommended */}
              <div className="rounded-lg border border-border bg-gradient-to-b from-accent-indigo/10 to-transparent p-6">
                <h3 className="font-semibold text-text-primary mb-4">Recommended for You</h3>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-accent-indigo" />
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {recommended.map((resource, index) => (
                      <ResourceCard key={resource.id} resource={resource} index={index} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}