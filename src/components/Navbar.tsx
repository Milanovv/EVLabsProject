import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Search, ChevronDown, Menu, X, User, LogOut, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categories } from '@/data/resources'
import { useUser } from '@/contexts/UserContext'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isPremium, logout } = useUser()

  const isActive = (path: string) => location.pathname === path

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/SkillPath.png" alt="SkillPath" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive('/') 
                ? "text-text-primary" 
                : "text-text-secondary hover:text-text-primary hover:bg-background-tertiary"
            )}
          >
            Home
          </Link>
          
          <div className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary"
            >
              Categories
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {showCategories && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-border bg-background-tertiary p-2 shadow-xl">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category?cat=${encodeURIComponent(cat.name)}`}
                    onClick={() => setShowCategories(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-background-elevated hover:text-text-primary"
                  >
                    <span style={{ color: cat.color }}>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link
            to="/search"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive('/search') 
                ? "text-text-primary" 
                : "text-text-secondary hover:text-text-primary hover:bg-background-tertiary"
            )}
          >
            Search
          </Link>
          
          <Link
            to="/pricing"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive('/pricing') 
                ? "text-text-primary" 
                : "text-text-secondary hover:text-text-primary hover:bg-background-tertiary"
            )}
          >
            Pricing
          </Link>
        </div>

        {/* Search & Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="h-9 w-48 rounded-full border border-border bg-background-secondary pl-9 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none lg:w-64"
/>
          </form>
          
          <Link
            to="/submit"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-accent-indigo text-white hover:bg-accent-indigo/90"
          >
            Submit Resource
          </Link>
          
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary bg-background-secondary rounded-md"
              >
                <User className="h-4 w-4" />
                {user.name}
                {user.email === 'admin@evlabs.com' && (
                  <span className="px-1.5 py-0.5 text-xs font-medium bg-accent-gold text-background rounded">Admin</span>
                )}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-lg border border-border bg-background-tertiary py-2 shadow-xl z-50">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-background-elevated hover:text-text-primary"
                  >
                    <Star className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      navigate('/')
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-background-elevated hover:text-text-primary"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary">Login</Link>
              <Link to="/signup" className="px-3 py-1.5 text-sm font-medium bg-accent-indigo text-white rounded-md hover:bg-accent-indigo/90">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background-tertiary px-4 py-4 md:hidden">
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-sm text-text-primary"
            />
          </form>
          <div className="flex flex-col gap-2">
            <Link to="/" className="px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/category" className="px-3 py-2 text-sm font-medium">Categories</Link>
            <Link to="/search" className="px-3 py-2 text-sm font-medium">Search</Link>
            <Link to="/submit" className="px-3 py-2 text-sm font-medium text-accent-indigo">Submit Resource</Link>
            <Link to="/pricing" className="px-3 py-2 text-sm font-medium">Pricing</Link>
            {user ? (
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-background-secondary rounded-md">
                  <User className="h-4 w-4" />
                  {user.name}
                  {user.email === 'admin@evlabs.com' && (
                    <span className="px-1.5 py-0.5 text-xs font-medium bg-accent-gold text-background rounded">Admin</span>
                  )}
                </div>
                <Link
                  to="/saved"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-background-secondary rounded-md"
                >
                  <Bookmark className="h-4 w-4" />
                  Saved
                </Link>
                <button
                  onClick={() => {
                    logout()
                    navigate('/')
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-background-secondary rounded-md"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 pt-2">
                <Link to="/login" className="flex-1 px-3 py-2 text-sm font-medium text-center text-text-secondary hover:text-text-primary bg-background-secondary rounded-md">Login</Link>
                <Link to="/signup" className="flex-1 px-3 py-2 text-sm font-medium text-center text-white bg-accent-indigo rounded-md hover:bg-accent-indigo/90">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}