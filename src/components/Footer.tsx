import { Link } from 'react-router-dom'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl text-accent-indigo">◈</span>
              <span className="text-lg font-bold text-text-primary">SkillPath</span>
            </div>
            <p className="text-sm text-text-secondary">
              Your curated knowledge hub for professional growth.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/category?cat=Programming/Development" className="text-sm text-text-secondary hover:text-text-primary">Programming</Link>
              <Link to="/category?cat=UI/UX Design" className="text-sm text-text-secondary hover:text-text-primary">UI/UX Design</Link>
              <Link to="/category?cat=Marketing" className="text-sm text-text-secondary hover:text-text-primary">Marketing</Link>
              <Link to="/category?cat=Product and Project Management" className="text-sm text-text-secondary hover:text-text-primary">Product</Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">Resources</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/search" className="text-sm text-text-secondary hover:text-text-primary">Browse All</Link>
              <Link to="/pricing" className="text-sm text-text-secondary hover:text-text-primary">Pricing</Link>
              <Link to="/submit" className="text-sm text-text-secondary hover:text-text-primary">Submit Resource</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="#" className="text-sm text-text-secondary hover:text-text-primary">About</Link>
              <Link to="#" className="text-sm text-text-secondary hover:text-text-primary">Contact</Link>
              <Link to="#" className="text-sm text-text-secondary hover:text-text-primary">Privacy Policy</Link>
              <Link to="#" className="text-sm text-text-secondary hover:text-text-primary">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-muted">© 2024 SkillPath. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="text-text-muted hover:text-text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-text-muted hover:text-text-primary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}