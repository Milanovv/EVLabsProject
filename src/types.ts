export type ResourceType = 'tutorial' | 'tool' | 'faq' | 'issue' | 'video' | 'plugin'

export interface Resource {
  id: number
  category: string
  subcategory: string
  title: string
  url: string
  description: string
  tags: string[]
  type: ResourceType
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  isPremium: boolean
  isTrending: boolean
  isNew: boolean
  rating: number
  votes: number
}

export interface Category {
  id: number
  name: string
  slug: string
  icon: string
  color: string
  description: string
}
