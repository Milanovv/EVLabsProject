import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categories } from '@/data/resources'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl text-accent-indigo animate-pulse">◈</span>
          <span className="text-xl font-bold bg-gradient-to-r from-text-primary to-accent-indigo bg-clip-text text-transparent">
            SkillPath
          </span>
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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-48 rounded-full border border-border bg-background-secondary pl-9 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none lg:w-64"
            />
          </div>
          
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm">Sign Up</Button>
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
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-sm text-text-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/" className="px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/category" className="px-3 py-2 text-sm font-medium">Categories</Link>
            <Link to="/search" className="px-3 py-2 text-sm font-medium">Search</Link>
            <Link to="/pricing" className="px-3 py-2 text-sm font-medium">Pricing</Link>
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">Login</Button>
              <Button size="sm" className="flex-1">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}