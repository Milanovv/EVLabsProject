import { motion } from 'framer-motion'
import { ArrowUpRight, Star, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Resource, getCategoryColor, typeLabels } from '@/data/resources'
import { useUser } from '@/contexts/UserContext'

interface ResourceCardProps {
  resource: Resource
  index?: number
}

export function ResourceCard({ resource, index = 0 }: ResourceCardProps) {
  const categoryColor = getCategoryColor(resource.category)
  const { isPremium: userIsPremium } = useUser()
  
  // Show blur only if resource is premium AND user is NOT premium
  const showBlur = resource.isPremium && !userIsPremium
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "relative rounded-lg border transition-all duration-200",
        showBlur 
          ? "border-accent-gold/30 bg-background-tertiary/60" 
          : "border-border bg-background-tertiary/80 hover:border-accent-indigo/50 hover:shadow-glow hover:-translate-y-1"
      )}
    >
      {/* Premium blur overlay */}
      {showBlur && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-background/60 backdrop-blur-sm">
          <Lock className="mb-2 h-8 w-8 text-accent-gold" />
          <span className="text-sm font-medium text-accent-gold">Premium Content</span>
          <span className="mt-1 text-xs text-text-muted">Upgrade to access</span>
        </div>
      )}
      
      {/* Top accent line */}
      <div 
        className={cn(
          "absolute left-0 right-0 top-0 h-0.5 rounded-t-lg",
          showBlur ? "bg-accent-gold/50" : ""
        )}
        style={{ backgroundColor: showBlur ? undefined : categoryColor }}
      />
      
      <Link
        to={showBlur ? "/upgrade" : `/resource?id=${resource.id}`}
        className={cn(
          "group block p-5",
          showBlur && "pointer-events-none opacity-50"
        )}
        onClick={(e) => {
          if (showBlur) {
            e.preventDefault()
          }
        }}
      >
        {/* Meta */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
            {resource.category}
          </span>
          <span 
            className="rounded px-2 py-0.5 text-xs font-semibold uppercase"
            style={{ 
              backgroundColor: `${categoryColor}20`,
              color: categoryColor 
            }}
          >
            {typeLabels[resource.type]}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent-indigo">
          {resource.title}
        </h3>
        
        {/* Description - always visible */}
        <p className="mb-3 line-clamp-2 text-sm text-text-secondary">
          {resource.description}
        </p>
        
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {resource.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="rounded-full bg-background-elevated px-2 py-0.5 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <Star className="h-3 w-3 fill-accent-gold text-accent-gold" />
            {resource.rating}
          </div>
          
          <div className={cn(
            "flex items-center gap-2 text-sm transition-opacity",
            showBlur ? "text-text-muted" : "text-accent-indigo opacity-0 group-hover:opacity-100"
          )}>
            {showBlur ? (
              <Link 
                to="/upgrade"
                className="text-xs text-accent-gold hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Upgrade to view
              </Link>
            ) : (
              <>
                View
                <ArrowUpRight className="h-3 w-3" />
              </>
            )}
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute right-3 top-3 flex gap-1">
          {resource.isTrending && (
            <span className="rounded bg-accent-pink/20 px-1.5 py-0.5 text-[10px] font-semibold text-accent-pink">
              Trending
            </span>
          )}
          {resource.isNew && (
            <span className="rounded bg-accent-cyan/20 px-1.5 py-0.5 text-[10px] font-semibold text-accent-cyan">
              New
            </span>
          )}
          {resource.isPremium && (
            <span className="rounded bg-accent-gold/20 px-1.5 py-0.5 text-[10px] font-semibold text-accent-gold">
              Premium
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}