import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  useEffect(() => { document.title = '404 — SkillPath' }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-accent-indigo/30 mb-4">404</div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">Page not found</h1>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}