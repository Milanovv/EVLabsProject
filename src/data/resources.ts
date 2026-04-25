export interface Resource {
  id: number
  category: string
  subcategory: string
  title: string
  url: string
  description: string
  tags: string[]
  type: 'tutorial' | 'tool' | 'faq' | 'error'
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

export const categories: Category[] = [
  { id: 1, name: 'Programming/Development', slug: 'programming-development', icon: '</>', color: '#22D3EE', description: 'Programming languages, frameworks, and development tools' },
  { id: 2, name: 'UI/UX Design', slug: 'ui-ux-design', icon: '◐', color: '#A855F7', description: 'Design tools, principles, and user experience' },
  { id: 3, name: 'Marketing', slug: 'marketing', icon: '📈', color: '#F97316', description: 'Digital marketing, SEO, and content strategies' },
  { id: 4, name: 'Product and Project Management', slug: 'product-project-management', icon: '⚡', color: '#6366F1', description: 'Product management and agile methodologies' },
  { id: 5, name: 'Business and Finance', slug: 'business-finance', icon: '💰', color: '#10B981', description: 'Business planning, accounting, and financial tools' },
  { id: 6, name: 'Sales and Growth', slug: 'sales-growth', icon: '🚀', color: '#F43F5E', description: 'Sales strategies and growth hacking' },
  { id: 7, name: 'Events and Community', slug: 'events-community', icon: '📅', color: '#FBBF24', description: 'Event planning and community building' },
]

export const subcategories = [
  'Guides and Tutorials',
  'Tools and Softwares', 
  'FAQs and Basics',
  'Common Mistakes/Issues'
]

export const resources: Resource[] = [
  { id: 1, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'MDN Web Docs - JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', description: 'Comprehensive guide to JavaScript fundamentals and advanced concepts from Mozilla.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1250 },
  { id: 2, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'React Official Tutorial', url: 'https://react.dev/learn', description: 'Official React documentation with interactive examples and step-by-step tutorial.', tags: ['Free', 'Interactive'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 980 },
  { id: 3, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', description: 'Official TypeScript documentation covering types, interfaces, and advanced patterns.', tags: ['Free', 'AI'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: true, rating: 4.7, votes: 720 },
  { id: 4, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Powerful code editor with built-in debugging, Git integration, and extensions.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 2100 },
  { id: 5, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'GitHub', url: 'https://github.com', description: 'Platform for version control and collaboration with millions of developers.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 1850 },
  { id: 6, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Docker Desktop', url: 'https://www.docker.com/products/docker-desktop/', description: 'Containerization platform for building and sharing containerized applications.', tags: ['Free', 'Advanced'], type: 'tool', difficulty: 'Advanced', isPremium: false, isTrending: true, isNew: false, rating: 4.6, votes: 890 },
  { id: 7, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'What is an API?', url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api', description: "Beginner's guide to understanding APIs and how they work.", tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 8, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'Git Basics Explained', url: 'https://rogerdudler.github.io/git-guide/', description: 'Simple and clear Git guide for beginners covering essential commands.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 9, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'Fixing CORS Errors', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', description: 'Understanding and resolving Cross-Origin Resource Sharing errors.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.4, votes: 410 },
  { id: 10, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'JavaScript Null vs Undefined', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null', description: 'Guide to understanding the difference between null and undefined in JavaScript.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 280 },
  { id: 11, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Node.js Complete Guide', url: 'https://nodejs.org/en/docs/guides/', description: 'Official Node.js documentation and guides for backend development.', tags: ['Free', 'Backend'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 650 },
  { id: 12, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Postman', url: 'https://www.postman.com/', description: 'API development and testing tool for building and consuming APIs.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 780 },
  { id: 13, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Rust Programming Book', url: 'https://doc.rust-lang.org/book/', description: 'The official book on learning Rust programming.', tags: ['Free', 'Systems'], type: 'tutorial', difficulty: 'Advanced', isPremium: false, isTrending: true, isNew: true, rating: 4.8, votes: 440 },
  { id: 14, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Cursor AI', url: 'https://cursor.sh/', description: 'AI-first code editor built for pair programming with AI.', tags: ['Free', 'AI'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: true, rating: 4.7, votes: 680 },
  
  { id: 15, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'Figma Complete Guide', url: 'https://www.figma.com/resource-library/guide/', description: 'Comprehensive tutorial series for learning Figma from basics to advanced.', tags: ['Free', 'Essential'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 920 },
  { id: 16, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'Google Material Design', url: 'https://m3.material.io/', description: "Google's design system with guidelines, components, and color tools.", tags: ['Free', 'Design System'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 680 },
  { id: 17, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'UX Design Principles', url: 'https://www.interaction-design.org/literature/article/human-design-principles', description: 'Introduction to fundamental design principles for better user experiences.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 18, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Figma', url: 'https://www.figma.com/', description: 'Collaborative interface design tool for teams with real-time editing.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1500 },
  { id: 19, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html', description: 'Vector-based UX design tool for prototyping and sharing designs.', tags: ['Free', 'Adobe'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 20, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Framer', url: 'https://www.framer.com/', description: 'Interactive design tool with powerful prototyping features.', tags: ['Free', 'Advanced'], type: 'tool', difficulty: 'Advanced', isPremium: false, isTrending: true, isNew: true, rating: 4.7, votes: 520 },
  { id: 21, category: 'UI/UX Design', subcategory: 'FAQs and Basics', title: 'Color Theory Basics', url: 'https://www.colormatters.com/color-theory', description: 'Understanding colors and how to use them effectively in design.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 290 },
  { id: 22, category: 'UI/UX Design', subcategory: 'Common Mistakes/Issues', title: 'Fixing Font Rendering Issues', url: 'https://fonts.google.com/specimen/Roboto', description: 'Solutions for common font display problems across different browsers.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 150 },
  { id: 23, category: 'UI/UX Design', subcategory: 'Common Mistakes/Issues', title: 'Responsive Design Breakpoints', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_breakpoints', description: 'Guide to setting correct breakpoints for responsive layouts.', tags: ['Error', 'Responsive'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 180 },
  
  { id: 24, category: 'Marketing', subcategory: 'Guides and Tutorials', title: 'Google Analytics 4 Tutorial', url: 'https://support.google.com/analytics/answer/10089679', description: 'Official guide to setting up and using Google Analytics 4.', tags: ['Free', 'Essential'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.6, votes: 580 },
  { id: 25, category: 'Marketing', subcategory: 'Guides and Tutorials', title: 'SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals', description: "Google's official SEO guide for improving search rankings.", tags: ['Free', 'SEO'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 720 },
  { id: 26, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'Mailchimp', url: 'https://mailchimp.com/', description: 'Email marketing platform with automation and analytics tools.', tags: ['Free', 'Email'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 820 },
  { id: 27, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'Hootsuite', url: 'https://www.hootsuite.com/', description: 'Social media management platform for scheduling and analytics.', tags: ['Free', 'Social'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 460 },
  { id: 28, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'SEMrush', url: 'https://www.semrush.com/', description: 'All-in-one toolkit for digital marketing and SEO.', tags: ['Paid', 'SEO'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 620 },
  { id: 29, category: 'Marketing', subcategory: 'FAQs and Basics', title: 'Email Marketing Best Practices', url: 'https://www.mailchimp.com/resources/email-marketing-best-practices/', description: 'Essential tips for effective email marketing campaigns.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 280 },
  { id: 30, category: 'Marketing', subcategory: 'Common Mistakes/Issues', title: 'Common SEO Mistakes', url: 'https://www.searchenginejournal.com/common-seo-mistakes/', description: 'List of frequent SEO errors and how to avoid them.', tags: ['Error', 'SEO'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 310 },
  
  { id: 31, category: 'Product and Project Management', subcategory: 'Guides and Tutorials', title: 'Agile Methodology Guide', url: 'https://www.atlassian.com/agile', description: 'Comprehensive guide to Agile and Scrum methodologies.', tags: ['Free', 'Agile'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 680 },
  { id: 32, category: 'Product and Project Management', subcategory: 'Guides and Tutorials', title: 'Product Management 101', url: 'https://www.productplan.com/product-management-101/', description: 'Introduction to product management roles and responsibilities.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 33, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Jira', url: 'https://www.atlassian.com/software/jira', description: 'Project management and issue tracking tool for agile teams.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 920 },
  { id: 34, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Trello', url: 'https://trello.com/', description: 'Visual project management with boards, lists, and cards.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 840 },
  { id: 35, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Notion', url: 'https://www.notion.so/', description: 'All-in-one workspace for notes, docs, and project management.', tags: ['Free', 'Productivity'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 1100 },
  { id: 36, category: 'Product and Project Management', subcategory: 'FAQs and Basics', title: 'Kanban vs Scrum', url: 'https://www.atlassian.com/agile/kanban/scrum-vs-kanban', description: 'Comparison of popular agile methodologies.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 37, category: 'Product and Project Management', subcategory: 'Common Mistakes/Issues', title: 'Managing Scope Creep', url: 'https://www.projectmanager.com/blog/scope-creep', description: 'Strategies for controlling project scope and requirements.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 190 },
  
  { id: 38, category: 'Business and Finance', subcategory: 'Guides and Tutorials', title: 'Financial Modeling Guide', url: 'https://corporatefinanceinstitute.com/courses/financial-modeling/', description: 'Learn how to build financial models from scratch.', tags: ['Free', 'Finance'], type: 'tutorial', difficulty: 'Advanced', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 480 },
  { id: 39, category: 'Business and Finance', subcategory: 'Guides and Tutorials', title: 'Startup Funding Guide', url: 'https://www.ycombinator.com/library/', description: "Y Combinator's guide to startup funding and growth.", tags: ['Free', 'Startup'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 620 },
  { id: 40, category: 'Business and Finance', subcategory: 'Tools and Softwares', title: 'QuickBooks', url: 'https://quickbooks.intuit.com/', description: 'Accounting software for small businesses.', tags: ['Paid', 'Accounting'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 720 },
  { id: 41, category: 'Business and Finance', subcategory: 'Tools and Softwares', title: 'Stripe', url: 'https://stripe.com/', description: 'Payment processing platform for internet businesses.', tags: ['Free', 'Payments'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 860 },
  { id: 42, category: 'Business and Finance', subcategory: 'FAQs and Basics', title: 'Understanding P&L Statements', url: 'https://www.investopedia.com/terms/p/profit-and-loss-statement.asp', description: 'Guide to reading and creating profit and loss statements.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 320 },
  { id: 43, category: 'Business and Finance', subcategory: 'Common Mistakes/Issues', title: 'Common Accounting Errors', url: 'https://www.accountingtools.com/articles/common-accounting-errors', description: 'Frequent accounting mistakes and how to avoid them.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 180 },
  
  { id: 44, category: 'Sales and Growth', subcategory: 'Guides and Tutorials', title: 'Sales Methodology Guide', url: 'https://www.salesforce.com/resources/articles/sales-methodology/', description: 'Overview of popular sales methodologies and frameworks.', tags: ['Free', 'Sales'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.6, votes: 480 },
  { id: 45, category: 'Sales and Growth', subcategory: 'Guides and Tutorials', title: 'Growth Hacking 101', url: 'https://growthhackers.com/growth-hacking-101', description: 'Introduction to growth hacking strategies for startups.', tags: ['Free', 'Growth'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 360 },
  { id: 46, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'Salesforce', url: 'https://www.salesforce.com/', description: 'Leading CRM platform for sales and customer relationship management.', tags: ['Paid', 'Essential'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 920 },
  { id: 47, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'HubSpot CRM', url: 'https://www.hubspot.com/products/crm', description: 'Free CRM with sales, marketing, and service tools.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 1100 },
  { id: 48, category: 'Sales and Growth', subcategory: 'FAQs and Basics', title: 'Sales Funnel Explained', url: 'https://www.smartinsights.com/marketing-sales/sales-funnel/', description: 'Understanding the customer journey through the sales funnel.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 49, category: 'Sales and Growth', subcategory: 'Common Mistakes/Issues', title: 'Common Sales Objections', url: 'https://www.saleshunter.com/sales-objections', description: 'How to handle and overcome common sales objections.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 280 },
  
  { id: 50, category: 'Events and Community', subcategory: 'Guides and Tutorials', title: 'Event Planning Guide', url: 'https://www.eventbrite.com/blog/event-planning-guide/', description: 'Complete guide to planning successful events.', tags: ['Free', 'Events'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 51, category: 'Events and Community', subcategory: 'Guides and Tutorials', title: 'Community Building 101', url: 'https://www.communitybuildingguide.com/', description: 'Strategies for building and engaging online communities.', tags: ['Free', 'Community'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 380 },
  { id: 52, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Eventbrite', url: 'https://www.eventbrite.com/', description: 'Platform for creating and discovering events.', tags: ['Free', 'Events'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 680 },
  { id: 53, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Discord', url: 'https://discord.com/', description: 'Communication platform for online communities.', tags: ['Free', 'Community'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 920 },
  { id: 54, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Circle', url: 'https://circle.so/', description: 'Community platform for creators and brands.', tags: ['Free', 'Community'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.6, votes: 340 },
  { id: 55, category: 'Events and Community', subcategory: 'FAQs and Basics', title: 'Event Marketing Tips', url: 'https://www.eventmarketer.com/event-marketing-guide', description: 'How to promote your event effectively.', tags: ['Beginner', 'Free'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 56, category: 'Events and Community', subcategory: 'Common Mistakes/Issues', title: 'Low Event Attendance', url: 'https://www.eventbrite.com/blog/low-attendance', description: 'Solutions for improving event turnout.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 190 },
]

export const typeLabels = {
  tutorial: 'Tutorial',
  tool: 'Tool',
  faq: 'FAQ',
  error: 'Issue'
}

export const typeColors = {
  tutorial: '#22D3EE',
  tool: '#34D399',
  faq: '#A855F7',
  error: '#F87171'
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Programming/Development': '#22D3EE',
    'UI/UX Design': '#A855F7',
    'Marketing': '#F97316',
    'Product and Project Management': '#6366F1',
    'Business and Finance': '#10B981',
    'Sales and Growth': '#F43F5E',
    'Events and Community': '#FBBF24',
  }
  return colors[category] || '#6366F1'
}

export function filterResources(options: {
  category?: string
  filter?: string
  subcategory?: string
  search?: string
  trending?: boolean
  newResources?: boolean
} = {}): Resource[] {
  const { category, filter, subcategory, search, trending, newResources } = options
  
  return resources.filter(resource => {
    const matchesCategory = !category || category === 'all' || resource.category === category
    const matchesFilter = !filter || filter === 'all' || resource.type === filter
    const matchesSubcategory = !subcategory || subcategory === 'all' || resource.subcategory === subcategory
    const matchesSearch = !search || search === '' || 
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase()) ||
      resource.category.toLowerCase().includes(search.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    const matchesTrending = !trending || resource.isTrending
    const matchesNew = !newResources || resource.isNew
    
    return matchesCategory && matchesFilter && matchesSubcategory && matchesSearch && matchesTrending && matchesNew
  })
}

export function getResourceById(id: number): Resource | undefined {
  return resources.find(r => r.id === id)
}

export function getRelatedResources(resource: Resource, limit = 4): Resource[] {
  return resources
    .filter(r => r.category === resource.category && r.id !== resource.id)
    .slice(0, limit)
}

export function calculateCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = { all: resources.length }
  resources.forEach(r => {
    counts[r.category] = (counts[r.category] || 0) + 1
  })
  return counts
}