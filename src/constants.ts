import type { ResourceType, Category } from '@/types'

export const categories: Category[] = [
  { id: 1, name: 'Programming/Development', slug: 'programming-development', icon: '</>', color: '#22D3EE', description: 'Programming languages, frameworks, and development tools' },
  { id: 2, name: 'UI/UX Design', slug: 'ui-ux-design', icon: '◐', color: '#A855F7', description: 'Design tools, principles, and user experience' },
  { id: 3, name: 'Marketing', slug: 'marketing', icon: '📈', color: '#F97316', description: 'Digital marketing, SEO, and content strategies' },
  { id: 4, name: 'Product and Project Management', slug: 'product-project-management', icon: '⚡', color: '#6366F1', description: 'Product management and agile methodologies' },
  { id: 5, name: 'Business and Finance', slug: 'business-finance', icon: '💰', color: '#10B981', description: 'Business planning, accounting, and financial tools' },
  { id: 6, name: 'Sales and Growth', slug: 'sales-growth', icon: '🚀', color: '#F43F5E', description: 'Sales strategies and growth hacking' },
  { id: 7, name: 'Events and Community', slug: 'events-community', icon: '📅', color: '#FBBF24', description: 'Event planning and community building' },
  { id: 8, name: 'Web and App Building', slug: 'web-app-building', icon: '🌐', color: '#06B6D4', description: 'No-code and visual website builders' },
  { id: 9, name: 'UI Assets and Creative', slug: 'ui-assets-creative', icon: '🎨', color: '#EC4899', description: 'Design resources, icons, and creative tools' },
  { id: 10, name: 'Content Creation', slug: 'content-creation', icon: '📹', color: '#EF4444', description: 'Video editing and content creation tools' },
  { id: 11, name: 'AI and Automation', slug: 'ai-automation', icon: '🤖', color: '#8B5CF6', description: 'AI-powered tools and automation' },
  { id: 12, name: 'Business Growth', slug: 'business-growth', icon: '📊', color: '#F59E0B', description: 'Startup tools and growth platforms' },
  { id: 13, name: 'API and Backend', slug: 'api-backend', icon: '⚙️', color: '#14B8A6', description: 'Backend services and API tools' },
  { id: 14, name: 'Knowledge and Learning', slug: 'knowledge-learning', icon: '📚', color: '#6366F1', description: 'Learning platforms and education' },
  { id: 15, name: 'Security and Privacy', slug: 'security-privacy', icon: '🔒', color: '#10B981', description: 'Security tools and privacy awareness' },
  { id: 16, name: 'Unsafe Sites', slug: 'unsafe-sites', icon: '⚠️', color: '#EF4444', description: 'Resources about unsafe websites, scams, and phishing' },
]

export const subcategories = [
  'Guides and Tutorials',
  'Video Tutorials',
  'Tools and Softwares',
  'Plugins and Extensions',
  'FAQs and Basics',
  'Common Mistakes/Issues'
]

export const typeLabels: Record<ResourceType, string> = {
  tutorial: 'Tutorial',
  tool: 'Tool',
  faq: 'FAQ',
  issue: 'Issue',
  video: 'Video',
  plugin: 'Plugin'
}

export function getCategoryColor(categoryName: string): string {
  const category = categories.find(c => c.name === categoryName)
  return category?.color || '#6B7280'
}
