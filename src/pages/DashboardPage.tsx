import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ResourceCard } from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { filterResources } from '@/data/resources'
import { Bookmark, Clock, Settings, LogOut, Star, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  const [saved] = useState<number[]>([])
  
  const recommended = filterResources().slice(0, 4)
  const recent = [
    { id: 1, category: 'Programming/Development', title: 'MDN JavaScript Guide', time: '2 hours ago' },
    { id: 4, category: 'Programming/Development', title: 'VS Code', time: 'Yesterday' },
    { id: 15, category: 'UI/UX Design', title: 'Figma Tutorial', time: '2 days ago' },
  ]

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
            <Button>Upgrade to Premium</Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-4 space-y-2">
                <Link to="#" className="flex items-center gap-3 rounded-md bg-accent-indigo/20 px-3 py-2 text-accent-indigo">
                  <Star className="h-4 w-4" /> Dashboard
                </Link>
                <Link to="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <Bookmark className="h-4 w-4" /> Saved Resources
                </Link>
                <Link to="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <Clock className="h-4 w-4" /> Recently Viewed
                </Link>
                <Link to="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <TrendingUp className="h-4 w-4" /> Recommended
                </Link>
                <Link to="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
                <Link to="/" className="flex items-center gap-3 rounded-md px-3 py-2 text-text-secondary hover:bg-background-elevated hover:text-text-primary">
                  <LogOut className="h-4 w-4" /> Logout
                </Link>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Subscription */}
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">Free Plan</h3>
                  <p className="text-sm text-text-secondary">Access to basic resources and community support</p>
                </div>
                <span className="rounded-full bg-background-elevated px-3 py-1 text-sm font-medium text-text-muted">Free</span>
              </div>

              {/* Progress */}
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-text-primary">Your Learning Path</h3>
                  <span className="text-sm text-text-muted">35%</span>
                </div>
                <div className="h-2 rounded-full bg-background-elevated overflow-hidden">
                  <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-accent-indigo to-accent-purple" />
                </div>
                <p className="mt-3 text-sm text-text-muted">Complete more resources to track your progress</p>
              </div>

              {/* Saved Resources */}
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">Saved Resources</h3>
                  <Link to="#" className="text-sm text-accent-indigo hover:underline">View All →</Link>
                </div>
                {saved.length === 0 ? (
                  <p className="text-text-muted py-4">No saved resources yet</p>
                ) : (
                  <div className="space-y-2">
                    {saved.map((id) => (
                      <div key={id} className="flex items-center gap-3 rounded-md bg-background-elevated p-3">
                        <Bookmark className="h-4 w-4 text-accent-indigo" />
                        <span className="text-sm">Resource {id}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recently Viewed */}
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">Recently Viewed</h3>
                  <Link to="#" className="text-sm text-accent-indigo hover:underline">View All →</Link>
                </div>
                <div className="space-y-2">
                  {recent.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-md bg-background-elevated p-3">
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-text-muted">{item.category} • {item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended */}
              <div className="rounded-lg border border-border bg-gradient-to-b from-accent-indigo/10 to-transparent p-6">
                <h3 className="font-semibold text-text-primary mb-4">Recommended for You</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {recommended.map((resource, index) => (
                    <ResourceCard key={resource.id} resource={resource} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}