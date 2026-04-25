export type ResourceType = 'tutorial' | 'tool' | 'faq' | 'error' | 'video' | 'plugin'

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
]

export const subcategories = [
  'Guides and Tutorials',
  'Video Tutorials',
  'Tools and Softwares',
  'Plugins and Extensions',
  'FAQs and Basics',
  'Common Mistakes/Issues'
]

export const resources: Resource[] = [
  // ==================== PROGRAMMING/DEVELOPMENT ====================
  // Guides and Tutorials
  { id: 1, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Complete reference and learning platform for web technologies like HTML, CSS, and JavaScript.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1250 },
  { id: 2, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/', description: 'Structured, hands-on platform for learning programming from beginner to advanced.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1200 },
  { id: 3, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Roadmap.sh', url: 'https://roadmap.sh/', description: 'Visual guide showing what to learn step-by-step for different developer roles.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 980 },
  { id: 4, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'W3Schools', url: 'https://www.w3schools.com/', description: 'Beginner-friendly site with simple explanations and interactive coding examples.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 850 },
  { id: 5, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', description: 'Large library of programming tutorials and problem explanations.', tags: ['Intermediate', 'Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 720 },
  { id: 6, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Learn Microsoft', url: 'https://learn.microsoft.com/', description: 'Official documentation and tutorials for Microsoft technologies like .NET and Azure.', tags: ['Intermediate', 'Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 650 },
  { id: 7, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Codecademy', url: 'https://www.codecademy.com/', description: 'Interactive platform for learning programming through guided exercises.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 600 },
  { id: 8, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'The Odin Project', url: 'https://www.theodinproject.com/', description: 'Full curriculum for becoming a web developer through project-based learning.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 580 },
  { id: 9, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'JavaTpoint', url: 'https://www.javatpoint.com/', description: 'Wide collection of tutorials for multiple programming languages.', tags: ['Beginner', 'Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 520 },
  { id: 10, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Stack Overflow', url: 'https://stackoverflow.com/', description: 'Q&A platform where developers solve real-world coding problems.', tags: ['All'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1500 },
  { id: 11, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'React Official Tutorial', url: 'https://react.dev/learn', description: 'Official React documentation with interactive examples and step-by-step tutorial.', tags: ['Intermediate'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 980 },
  { id: 12, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', description: 'Official TypeScript documentation covering types, interfaces, and advanced patterns.', tags: ['Intermediate'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: true, rating: 4.7, votes: 720 },
  { id: 13, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Node.js Complete Guide', url: 'https://nodejs.org/en/docs/guides/', description: 'Official Node.js documentation and guides for backend development.', tags: ['Backend'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 650 },
  { id: 14, category: 'Programming/Development', subcategory: 'Guides and Tutorials', title: 'Rust Programming Book', url: 'https://doc.rust-lang.org/book/', description: 'The official book on learning Rust programming.', tags: ['Systems', 'Advanced'], type: 'tutorial', difficulty: 'Advanced', isPremium: false, isTrending: true, isNew: true, rating: 4.8, votes: 440 },

  // Video Tutorials
  { id: 15, category: 'Programming/Development', subcategory: 'Video Tutorials', title: 'Programming Basics Crash Course', url: 'https://www.youtube.com/watch?v=Z1Yd7upQsXY', description: 'Full crash course explaining programming fundamentals and how code actually works.', tags: ['Video', 'Beginner'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 320 },
  { id: 16, category: 'Programming/Development', subcategory: 'Video Tutorials', title: 'Python Beginner Tutorial', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', description: 'Beginner Python tutorial covering variables, loops, functions, and real examples.', tags: ['Video', 'Python'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 450 },
  { id: 17, category: 'Programming/Development', subcategory: 'Video Tutorials', title: 'Web Development Basics', url: 'https://www.youtube.com/watch?v=8L2kFv4Zs4E', description: 'Complete web development basics (HTML, CSS, JavaScript explained clearly).', tags: ['Video', 'Web'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 380 },
  { id: 18, category: 'Programming/Development', subcategory: 'Video Tutorials', title: 'Git and GitHub for Beginners', url: 'https://www.youtube.com/watch?v=3JluqTojuME', description: 'Git and GitHub explained for beginners with real-world workflows.', tags: ['Video', 'Git'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 290 },
  { id: 19, category: 'Programming/Development', subcategory: 'Video Tutorials', title: 'Docker Explained', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', description: 'Docker explained simply: containers, images, and real usage examples.', tags: ['Video', 'Docker'], type: 'video', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 260 },
  { id: 20, category: 'Programming/Development', subcategory: 'Video Tutorials', title: 'API Basics Tutorial', url: 'https://www.youtube.com/watch?v=8L2kFv4Zs4E', description: 'API basics explained using real examples and Postman.', tags: ['Video', 'API'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 220 },

  // Tools and Softwares
  { id: 21, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Lightweight editor for most languages with built-in debugging and extensions.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 2100 },
  { id: 22, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Visual Studio', url: 'https://visualstudio.microsoft.com/', description: 'Full IDE for C# and .NET development.', tags: ['IDE', 'Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 850 },
  { id: 23, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'IntelliJ IDEA', url: 'https://www.jetbrains.com/idea/', description: 'Powerful IDE for Java development.', tags: ['IDE', 'Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 720 },
  { id: 24, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'PyCharm', url: 'https://www.jetbrains.com/pycharm/', description: 'Python-focused development tool.', tags: ['Python', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 680 },
  { id: 25, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'GitHub', url: 'https://github.com/', description: 'Store and collaborate on code with millions of developers.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1850 },
  { id: 26, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Docker', url: 'https://www.docker.com/', description: 'Run apps in isolated containers for consistency.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Advanced', isPremium: false, isTrending: true, isNew: false, rating: 4.6, votes: 890 },
  { id: 27, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Postman', url: 'https://www.postman.com/', description: 'Test and debug API requests and responses.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 780 },
  { id: 28, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'MySQL Workbench', url: 'https://dev.mysql.com/downloads/workbench/', description: 'Visual tool for MySQL database design and management.', tags: ['Database', 'Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 450 },
  { id: 29, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'DBeaver', url: 'https://dbeaver.io/download/', description: 'Free multi-platform database SQL client.', tags: ['Database', 'Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 30, category: 'Programming/Development', subcategory: 'Tools and Softwares', title: 'Cursor AI', url: 'https://cursor.sh/', description: 'AI-first code editor built for pair programming with AI.', tags: ['AI', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: true, rating: 4.7, votes: 680 },

  // Plugins and Extensions
  { id: 31, category: 'Programming/Development', subcategory: 'Plugins and Extensions', title: 'Live Server', url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer', description: 'Launches a local development server with live reload.', tags: ['Extension', 'VS Code'], type: 'plugin', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 620 },
  { id: 32, category: 'Programming/Development', subcategory: 'Plugins and Extensions', title: 'Prettier', url: 'https://prettier.io/', description: 'Automatically formats your code on save to keep it consistent.', tags: ['Extension', 'VS Code'], type: 'plugin', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 580 },
  { id: 33, category: 'Programming/Development', subcategory: 'Plugins and Extensions', title: 'ESLint', url: 'https://eslint.org/', description: 'Highlights code issues directly in your editor.', tags: ['Extension', 'VS Code'], type: 'plugin', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 450 },
  { id: 34, category: 'Programming/Development', subcategory: 'Plugins and Extensions', title: 'GitLens', url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens', description: 'Enhances Git capabilities inside VS Code with detailed history.', tags: ['Extension', 'Git'], type: 'plugin', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 420 },
  { id: 35, category: 'Programming/Development', subcategory: 'Plugins and Extensions', title: 'Path Intellisense', url: 'http://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense', description: 'Auto-completes file paths while coding.', tags: ['Extension', 'VS Code'], type: 'plugin', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 340 },

  // FAQs
  { id: 36, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'What is programming?', url: 'https://developer.mozilla.org/', description: 'Programming is writing instructions that tell a computer how to perform tasks.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 37, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'Frontend vs Backend', url: 'https://developer.mozilla.org/', description: 'Frontend handles what users see, while backend manages logic, servers, and databases.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 38, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'What is an API?', url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api', description: 'An API allows different software systems to communicate and exchange data.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 39, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'What is Git?', url: 'https://rogerdudler.github.io/git-guide/', description: 'Git tracks code changes and allows multiple developers to collaborate.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 40, category: 'Programming/Development', subcategory: 'FAQs and Basics', title: 'What is a framework?', url: 'https://developer.mozilla.org/', description: 'A framework is a pre-built structure that speeds up application development.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 280 },

  // Common Mistakes
  { id: 41, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'Most Common Beginner Mistake', url: 'https://developer.mozilla.org/', description: 'Not understanding basic concepts before jumping into frameworks.', tags: ['Error'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 410 },
  { id: 42, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'Code Not Running', url: 'https://developer.mozilla.org/', description: 'Usually due to syntax errors, missing dependencies, or wrong file.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 380 },
  { id: 43, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'Fixing CORS Errors', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', description: 'Understanding and resolving Cross-Origin Resource Sharing errors.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.4, votes: 410 },
  { id: 44, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'JavaScript Null vs Undefined', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null', description: 'Guide to understanding the difference between null and undefined.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 280 },
  { id: 45, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'API Not Working', url: 'https://www.postman.com/', description: 'Common causes: wrong endpoint, missing auth, or incorrect request format.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 220 },
  { id: 46, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'Git Merge Conflict', url: 'https://git-scm.com/', description: 'Happens when two changes affect the same part of code.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 190 },
  { id: 47, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'Docker Container Not Starting', url: 'https://www.docker.com/', description: 'Usually due to incorrect config, missing env vars, or port conflicts.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Advanced', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 160 },
  { id: 48, category: 'Programming/Development', subcategory: 'Common Mistakes/Issues', title: 'npm Install Fail', url: 'https://www.npmjs.com/', description: 'Usually caused by corrupted cache, version conflicts, or missing permissions.', tags: ['Error', 'Fix'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.1, votes: 140 },

  // ==================== UI/UX DESIGN ====================
  { id: 49, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'Interaction Design', url: 'https://www.interaction-design.org/literature', description: 'In-depth UX articles and learning resources from industry experts.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 50, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'NN Group', url: 'https://www.nngroup.com/articles/', description: 'Research-based UX design principles.', tags: ['Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 380 },
  { id: 51, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'Figma Learn', url: 'https://www.figma.com/resources/learn-design/', description: 'Official Figma tutorials for UI/UX design and prototyping.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 920 },
  { id: 52, category: 'UI/UX Design', subcategory: 'Guides and Tutorials', title: 'Google Material Design', url: 'https://m3.material.io/', description: "Google's design system with guidelines and components.", tags: ['Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 680 },
  { id: 53, category: 'UI/UX Design', subcategory: 'Video Tutorials', title: 'Figma Crash Course', url: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8', description: 'Complete Figma UI/UX design crash course for beginners.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 290 },
  { id: 54, category: 'UI/UX Design', subcategory: 'Video Tutorials', title: 'UI Design Principles', url: 'https://www.youtube.com/watch?v=JKx8k2rX5Jw', description: 'UI design principles explained with real interface examples.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 250 },
  { id: 55, category: 'UI/UX Design', subcategory: 'Video Tutorials', title: 'UX Basics', url: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU', description: 'UX basics: how users think and how to design for them.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 220 },
  { id: 56, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Figma', url: 'https://www.figma.com/', description: 'Collaborative design tool for interfaces, prototypes, and design systems.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.9, votes: 1500 },
  { id: 57, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html', description: 'Design and prototyping tool focused on UX.', tags: ['Adobe'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 58, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Sketch', url: 'https://www.sketch.com/', description: 'Vector-based design tool for UI design on macOS.', tags: ['Mac'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 320 },
  { id: 59, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Framer', url: 'https://www.framer.com/', description: 'Tool for designing interactive web experiences.', tags: ['Advanced'], type: 'tool', difficulty: 'Advanced', isPremium: false, isTrending: true, isNew: true, rating: 4.7, votes: 520 },
  { id: 60, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Maze', url: 'https://maze.co/', description: 'Usability testing with real user feedback.', tags: ['Testing'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 280 },
  { id: 61, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Hotjar', url: 'https://www.hotjar.com/', description: 'Heatmaps and session recordings to understand user behavior.', tags: ['Analytics'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 260 },
  { id: 62, category: 'UI/UX Design', subcategory: 'Tools and Softwares', title: 'Coolors', url: 'https://coolors.co/', description: 'Generate and explore color palettes.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 240 },
  { id: 63, category: 'UI/UX Design', subcategory: 'Plugins and Extensions', title: 'Figmotion', url: 'https://www.figma.com/community/plugin/733025261168520714/figmotion', description: 'Animation capabilities inside Figma.', tags: ['Extension'], type: 'plugin', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 180 },
  { id: 64, category: 'UI/UX Design', subcategory: 'Plugins and Extensions', title: 'Unsplash Plugin', url: 'https://www.figma.com/community/plugin/738454987945972471/unsplash', description: 'Insert high-quality images into designs.', tags: ['Extension'], type: 'plugin', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 160 },
  { id: 65, category: 'UI/UX Design', subcategory: 'FAQs and Basics', title: 'UI vs UX', url: 'https://www.interaction-design.org/', description: 'UI focuses on visuals, while UX focuses on user experience.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 290 },
  { id: 66, category: 'UI/UX Design', subcategory: 'FAQs and Basics', title: 'What is a wireframe?', url: 'https://www.figma.com/', description: 'Basic layout showing structure without detailed design.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 67, category: 'UI/UX Design', subcategory: 'Common Mistakes/Issues', title: 'Inconsistent Design', url: 'https://www.figma.com/', description: 'Inconsistent spacing, colors, or typography choices.', tags: ['Error'], type: 'error', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 180 },
  { id: 68, category: 'UI/UX Design', subcategory: 'Common Mistakes/Issues', title: 'Confusing UI for Users', url: 'https://www.nngroup.com/', description: 'Too many elements, unclear hierarchy, or poor navigation.', tags: ['Error'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 150 },

  // ==================== MARKETING ====================
  { id: 69, category: 'Marketing', subcategory: 'Guides and Tutorials', title: 'HubSpot Blog', url: 'https://blog.hubspot.com/marketing', description: 'Complete blog with guides on digital marketing strategies.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 580 },
  { id: 70, category: 'Marketing', subcategory: 'Guides and Tutorials', title: 'Moz Beginner Guide to SEO', url: 'https://moz.com/beginners-guide-to-seo', description: 'Beginner-friendly guide to understanding SEO.', tags: ['SEO'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 520 },
  { id: 71, category: 'Marketing', subcategory: 'Guides and Tutorials', title: 'Ahrefs Blog', url: 'https://www.youtube.com/@AhrefsCom', description: 'SEO tutorials and case studies.', tags: ['SEO'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 480 },
  { id: 72, category: 'Marketing', subcategory: 'Guides and Tutorials', title: 'Neil Patel Blog', url: 'https://neilpatel.com/blog/', description: 'Practical marketing tips and SEO strategies.', tags: ['SEO'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 450 },
  { id: 73, category: 'Marketing', subcategory: 'Video Tutorials', title: 'Digital Marketing Fundamentals', url: 'https://www.youtube.com/watch?v=6bUjJ5XgkZ0', description: 'Digital marketing fundamentals for beginners.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 280 },
  { id: 74, category: 'Marketing', subcategory: 'Video Tutorials', title: 'SEO Explained', url: 'https://www.youtube.com/watch?v=V3y0H8p6G7s', description: 'SEO explained simply with real ranking examples.', tags: ['Video', 'SEO'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 250 },
  { id: 75, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'Google Analytics', url: 'https://analytics.google.com/', description: 'Tracks and analyzes website traffic and user behavior.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 720 },
  { id: 76, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'Ahrefs', url: 'https://ahrefs.com/', description: 'Keyword research, backlinks, and SEO analysis.', tags: ['SEO', 'Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 620 },
  { id: 77, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'Mailchimp', url: 'https://mailchimp.com/', description: 'Create and automate email campaigns.', tags: ['Email'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 820 },
  { id: 78, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'Canva', url: 'https://www.canva.com/', description: 'Easy-to-use design platform for marketing visuals.', tags: ['Design'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 650 },
  { id: 79, category: 'Marketing', subcategory: 'Tools and Softwares', title: 'SEMrush', url: 'https://www.semrush.com/', description: 'All-in-one toolkit for digital marketing and SEO.', tags: ['SEO', 'Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 620 },
  { id: 80, category: 'Marketing', subcategory: 'FAQs and Basics', title: 'What is Digital Marketing?', url: 'https://blog.hubspot.com/', description: 'Promoting products or services using online channels.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 280 },
  { id: 81, category: 'Marketing', subcategory: 'FAQs and Basics', title: 'What is SEO?', url: 'https://moz.com/', description: 'Optimizing content to rank higher in search engines.', tags: ['SEO'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 260 },
  { id: 82, category: 'Marketing', subcategory: 'Common Mistakes/Issues', title: 'SEO Not Improving', url: 'https://moz.com/', description: 'Lack of keywords, poor content quality, or weak backlinks.', tags: ['Error'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 180 },

  // ==================== PRODUCT AND PROJECT MANAGEMENT ====================
  { id: 83, category: 'Product and Project Management', subcategory: 'Guides and Tutorials', title: 'Atlassian Agile', url: 'https://www.atlassian.com/agile', description: 'Official guide to Agile methodology and workflows.', tags: ['Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 680 },
  { id: 84, category: 'Product and Project Management', subcategory: 'Guides and Tutorials', title: 'Scrum.org', url: 'https://www.scrum.org/resources', description: 'Scrum framework guides and certifications.', tags: ['Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 85, category: 'Product and Project Management', subcategory: 'Guides and Tutorials', title: 'Notion Help', url: 'https://www.notion.so/help', description: 'Official Notion guides for productivity.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 480 },
  { id: 86, category: 'Product and Project Management', subcategory: 'Video Tutorials', title: 'Agile and Scrum Explained', url: 'https://www.youtube.com/watch?v=R9OHn5ZF4Uo', description: 'Agile and Scrum explained in simple terms.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 260 },
  { id: 87, category: 'Product and Project Management', subcategory: 'Video Tutorials', title: 'Jira Tutorial', url: 'https://www.youtube.com/watch?v=8Yt3pK0m9Qw', description: 'Jira explained for Agile teams and sprint planning.', tags: ['Video'], type: 'video', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 88, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Jira', url: 'https://www.atlassian.com/software/jira', description: 'Tracks tasks, bugs, and agile workflows.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 920 },
  { id: 89, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Trello', url: 'https://trello.com/', description: 'Organizes tasks visually using boards and cards.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 840 },
  { id: 90, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Notion', url: 'https://www.notion.so/', description: 'Combines notes, tasks, and databases.', tags: ['Essential', 'Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 1100 },
  { id: 91, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Asana', url: 'https://asana.com/', description: 'Manages projects, tasks, and workflows.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 620 },
  { id: 92, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'Miro', url: 'https://miro.com/', description: 'Online whiteboard for brainstorming.', tags: ['Collaboration'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 480 },
  { id: 93, category: 'Product and Project Management', subcategory: 'Tools and Softwares', title: 'ClickUp', url: 'https://app.clickup.com/', description: 'All-in-one tool for tasks, docs, and goals.', tags: ['All-in-One'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 420 },
  { id: 94, category: 'Product and Project Management', subcategory: 'FAQs and Basics', title: 'What is Agile?', url: 'https://www.atlassian.com/agile', description: 'Flexible project management approach focused on iteration.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 95, category: 'Product and Project Management', subcategory: 'FAQs and Basics', title: 'What is Scrum?', url: 'https://www.scrum.org/', description: 'Framework using sprints and roles.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 320 },
  { id: 96, category: 'Product and Project Management', subcategory: 'Common Mistakes/Issues', title: 'Scope Creep', url: 'https://www.projectmanager.com/', description: 'Project keeps expanding beyond original plan.', tags: ['Error'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 190 },

  // ==================== BUSINESS AND FINANCE ====================
  { id: 97, category: 'Business and Finance', subcategory: 'Guides and Tutorials', title: 'Investopedia', url: 'https://www.investopedia.com/', description: 'Clear explanations of finance and business concepts.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 480 },
  { id: 98, category: 'Business and Finance', subcategory: 'Guides and Tutorials', title: 'Y Combinator Library', url: 'https://www.ycombinator.com/library', description: 'Startup advice from top accelerator.', tags: ['Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 620 },
  { id: 99, category: 'Business and Finance', subcategory: 'Video Tutorials', title: 'Business Basics', url: 'https://www.youtube.com/watch?v=5eZ7e5m0X8A', description: 'How companies actually make money.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 240 },
  { id: 100, category: 'Business and Finance', subcategory: 'Video Tutorials', title: 'Cash Flow Explained', url: 'https://www.youtube.com/watch?v=5f0c7Xk2m9Q', description: 'Cash flow and profit explained for beginners.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 101, category: 'Business and Finance', subcategory: 'Tools and Softwares', title: 'QuickBooks', url: 'https://quickbooks.intuit.com/', description: 'Manages business finances and accounting.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 720 },
  { id: 102, category: 'Business and Finance', subcategory: 'Tools and Softwares', title: 'Stripe', url: 'https://stripe.com/', description: 'Handles online payments and subscriptions.', tags: ['Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: true, isNew: false, rating: 4.8, votes: 860 },
  { id: 103, category: 'Business and Finance', subcategory: 'Tools and Softwares', title: 'PayPal', url: 'https://www.paypal.com/', description: 'Platform for sending and receiving money.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 580 },
  { id: 104, category: 'Business and Finance', subcategory: 'Tools and Softwares', title: 'Wave', url: 'https://www.waveapps.com/', description: 'Free tools for invoicing and financial tracking.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 420 },
  { id: 105, category: 'Business and Finance', subcategory: 'FAQs and Basics', title: 'Revenue vs Profit', url: 'https://www.investopedia.com/', description: 'Revenue is total income, profit is what remains after expenses.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 320 },
  { id: 106, category: 'Business and Finance', subcategory: 'Common Mistakes/Issues', title: 'Startup Financial Failure', url: 'https://www.ycombinator.com/', description: 'Poor cash flow management or running out of funding.', tags: ['Error'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 180 },

  // ==================== SALES AND GROWTH ====================
  { id: 107, category: 'Sales and Growth', subcategory: 'Guides and Tutorials', title: 'HubSpot Sales', url: 'https://blog.hubspot.com/sales', description: 'Sales strategies and CRM guides.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 480 },
  { id: 108, category: 'Sales and Growth', subcategory: 'Guides and Tutorials', title: 'Salesforce Resources', url: 'https://www.salesforce.com/resources/', description: 'CRM and sales process learning.', tags: ['Free'], type: 'tutorial', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 420 },
  { id: 109, category: 'Sales and Growth', subcategory: 'Video Tutorials', title: 'Sales Funnel Explained', url: 'https://www.youtube.com/watch?v=8Gk3pX9m2QZ', description: 'Sales funnels from lead to conversion.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 110, category: 'Sales and Growth', subcategory: 'Video Tutorials', title: 'Cold Emailing', url: 'https://www.youtube.com/watch?v=Qm7k3X9p1A2', description: 'Emails that actually work.', tags: ['Video'], type: 'video', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 200 },
  { id: 111, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'Salesforce', url: 'https://www.salesforce.com/', description: 'Manages customer relationships and pipelines.', tags: ['Paid', 'Essential'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 920 },
  { id: 112, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'Pipedrive', url: 'https://www.pipedrive.com/', description: 'Sales-focused CRM for tracking deals.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 580 },
  { id: 113, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'Apollo.io', url: 'https://www.apollo.io/', description: 'Find leads and automate outreach.', tags: ['Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 450 },
  { id: 114, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'HubSpot CRM', url: 'https://www.hubspot.com/products/crm', description: 'Free CRM with sales and marketing tools.', tags: ['Free', 'Essential'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 1100 },
  { id: 115, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'Calendly', url: 'https://calendly.com/', description: 'Simplifies booking meetings.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 116, category: 'Sales and Growth', subcategory: 'Tools and Softwares', title: 'Intercom', url: 'https://www.intercom.com/', description: 'Live chat with customers.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 117, category: 'Sales and Growth', subcategory: 'FAQs and Basics', title: 'What is a Sales Funnel?', url: 'https://blog.hubspot.com/', description: 'Journey from awareness to purchase.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 118, category: 'Sales and Growth', subcategory: 'FAQs and Basics', title: 'What is CRM?', url: 'https://www.salesforce.com/', description: 'Systems tracking customer interactions.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 280 },
  { id: 119, category: 'Sales and Growth', subcategory: 'Common Mistakes/Issues', title: 'Sales Strategy Failure', url: 'https://blog.hubspot.com/', description: 'Poor targeting or weak messaging.', tags: ['Error'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 160 },

  // ==================== EVENTS AND COMMUNITY ====================
  { id: 120, category: 'Events and Community', subcategory: 'Guides and Tutorials', title: 'Eventbrite Blog', url: 'https://www.eventbrite.com/blog/', description: 'Event planning and promotion strategies.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 121, category: 'Events and Community', subcategory: 'Guides and Tutorials', title: 'Meetup Blog', url: 'https://www.meetup.com/blog/', description: 'Community building and event tips.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 122, category: 'Events and Community', subcategory: 'Guides and Tutorials', title: 'Discord Safety', url: 'https://www.discord.com/safety', description: 'Building and managing online communities.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 123, category: 'Events and Community', subcategory: 'Video Tutorials', title: 'Plan and Organize Events', url: 'https://www.youtube.com/watch?v=2Qk8mX9p3A7', description: 'How to plan successful events.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 200 },
  { id: 124, category: 'Events and Community', subcategory: 'Video Tutorials', title: 'Community Building', url: 'https://www.youtube.com/watch?v=7mX3pQ9k1Z5', description: 'Basics and engagement strategies.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 180 },
  { id: 125, category: 'Events and Community', subcategory: 'Video Tutorials', title: 'Zoom for Webinars', url: 'https://www.youtube.com/watch?v=9pQ2kX7m3A8', description: 'How to host online events.', tags: ['Video'], type: 'video', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 126, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Eventbrite', url: 'https://www.eventbrite.com/', description: 'Create, promote, and manage events.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 680 },
  { id: 127, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Meetup', url: 'https://www.meetup.com/', description: 'Organize and join communities.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 520 },
  { id: 128, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Zoom', url: 'https://zoom.us/', description: 'Host virtual meetings and webinars.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 820 },
  { id: 129, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Slack', url: 'https://slack.com/', description: 'Team communication through channels.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 650 },
  { id: 130, category: 'Events and Community', subcategory: 'Tools and Softwares', title: 'Discord', url: 'https://discord.com/', description: 'Communication platform for communities.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: true, isNew: false, rating: 4.7, votes: 920 },
  { id: 131, category: 'Events and Community', subcategory: 'Plugins and Extensions', title: 'StreamYard', url: 'https://streamyard.com/', description: 'Stream to multiple platforms.', tags: ['Extension'], type: 'plugin', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 280 },
  { id: 132, category: 'Events and Community', subcategory: 'FAQs and Basics', title: 'What is Event Management?', url: 'https://www.eventbrite.com/', description: 'Planning and organizing events.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 220 },
  { id: 133, category: 'Events and Community', subcategory: 'FAQs and Basics', title: 'What is Community Building?', url: 'https://www.meetup.com/', description: 'Creating engaged groups.', tags: ['Beginner'], type: 'faq', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 180 },
  { id: 134, category: 'Events and Community', subcategory: 'Common Mistakes/Issues', title: 'Events Fail', url: 'https://www.eventbrite.com/', description: 'Poor planning or weak promotion.', tags: ['Error'], type: 'error', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.2, votes: 150 },

  // ==================== PAID RESOURCES - WEB AND APP BUILDING ====================
  { id: 135, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Webflow', url: 'https://www.webflow.com/', description: 'Visual website builder without code.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 520 },
  { id: 136, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Bubble', url: 'https://bubble.io/', description: 'No-code platform for full web applications.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: true, isNew: false, rating: 4.6, votes: 480 },
  { id: 137, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Glide Apps', url: 'https://www.glideapps.com/', description: 'Turn spreadsheets into mobile apps.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 320 },
  { id: 138, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Softr', url: 'https://www.softr.io/', description: 'Build apps from Airtable.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 280 },
  { id: 139, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Framer', url: 'https://www.framer.com/', description: 'Modern website builder.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 420 },
  { id: 140, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Wix', url: 'https://www.wix.com/', description: 'Website builder for business sites.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 380 },
  { id: 141, category: 'Web and App Building', subcategory: 'Tools and Softwares', title: 'Squarespace', url: 'https://www.squarespace.com/', description: 'Design-focused website builder.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 360 },

  // ==================== PAID - UI ASSETS AND CREATIVE ====================
  { id: 142, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'Flaticon', url: 'https://www.flaticon.com/', description: 'Large library of icons.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.6, votes: 480 },
  { id: 143, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'undraw.co', url: 'https://undraw.co/', description: 'Free customizable illustrations.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 420 },
  { id: 144, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'Freepik', url: 'https://www.freepik.com/', description: 'Vectors, icons, and templates.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 145, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'ls.graphics', url: 'https://www.ls.graphics/', description: 'High-quality mockups.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 280 },
  { id: 146, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'Storyset', url: 'https://www.storyset.com/', description: 'Editable illustrations.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 260 },
  { id: 147, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'Humaaans', url: 'https://www.humaaans.com/', description: 'Mix-and-match illustrations.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.4, votes: 240 },
  { id: 148, category: 'UI Assets and Creative', subcategory: 'Tools and Softwares', title: 'Blobmaker', url: 'https://www.blobmaker.app/', description: 'Generate SVG shapes.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.3, votes: 180 },

  // ==================== PAID - CONTENT CREATION ====================
  { id: 149, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'CapCut', url: 'https://www.capcut.com/', description: 'Video editing for social media.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: true, isNew: false, rating: 4.6, votes: 520 },
  { id: 150, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'Canva for Design', url: 'https://www.canva.com/', description: 'Design platform for content.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.7, votes: 480 },
  { id: 151, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'InVideo', url: 'https://www.invideo.io/', description: 'AI-powered video creation.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 320 },
  { id: 152, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'Pictory', url: 'https://www.pictory.ai/', description: 'Convert text to videos.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.3, votes: 280 },
  { id: 153, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'Remove.bg', url: 'https://www.remove.bg/', description: 'Remove backgrounds from images.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 154, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'Pexels', url: 'https://www.pexels.com/', description: 'Free stock photos and videos.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 380 },
  { id: 155, category: 'Content Creation', subcategory: 'Tools and Softwares', title: 'Pixabay', url: 'https://www.pixabay.com/', description: 'Free media library.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 340 },

  // ==================== PAID - AI AND AUTOMATION ====================
  { id: 156, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'ChatGPT', url: 'https://chat.openai.com/', description: 'AI assistant for writing and coding.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: true, isNew: false, rating: 4.8, votes: 820 },
  { id: 157, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'Perplexity', url: 'https://www.perplexity.ai/', description: 'AI-powered search engine.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 480 },
  { id: 158, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'Notion AI', url: 'https://www.notion.so/product/ai', description: 'AI-enhanced workspace.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 159, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'Tome', url: 'https://www.tome.app/', description: 'AI for presentations.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 320 },
  { id: 160, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'Copy.ai', url: 'https://www.copy.ai/', description: 'AI writing tool.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.3, votes: 280 },
  { id: 161, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'Descript', url: 'https://www.descript.com/', description: 'AI video and audio editing.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 260 },
  { id: 162, category: 'AI and Automation', subcategory: 'Tools and Softwares', title: 'Runway', url: 'https://www.runwayml.com/', description: 'AI for video generation.', tags: ['Paid'], type: 'tool', difficulty: 'Advanced', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 240 },

  // ==================== PAID - BUSINESS GROWTH ====================
  { id: 163, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Product Hunt', url: 'https://www.producthunt.com/', description: 'Discover and launch products.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 420 },
  { id: 164, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Indie Hackers', url: 'https://www.indiehackers.com/', description: 'Startup founder community.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 165, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Y Combinator', url: 'https://www.ycombinator.com/', description: 'Startup accelerator.', tags: ['Paid'], type: 'tool', difficulty: 'Advanced', isPremium: true, isTrending: false, isNew: false, rating: 4.8, votes: 520 },
  { id: 166, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Startup School', url: 'https://www.startupschool.org/', description: 'Free startup education.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 320 },
  { id: 167, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Crunchbase', url: 'https://www.crunchbase.com/', description: 'Startup database.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 280 },
  { id: 168, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Pitch', url: 'https://www.pitch.com/', description: 'Pitch deck tool.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.3, votes: 240 },
  { id: 169, category: 'Business Growth', subcategory: 'Tools and Softwares', title: 'Typeform', url: 'https://www.typeform.com/', description: 'Interactive forms.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 260 },

  // ==================== PAID - API AND BACKEND ====================
  { id: 170, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'RapidAPI', url: 'https://rapidapi.com/', description: 'Marketplace for APIs.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 380 },
  { id: 171, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'Supabase', url: 'https://www.supabase.com/', description: 'Backend with database and auth.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 420 },
  { id: 172, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'Firebase', url: 'https://firebase.google.com/', description: 'Google backend suite.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.6, votes: 480 },
  { id: 173, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'Appwrite', url: 'https://appwrite.io/', description: 'Open-source backend.', tags: ['Free'], type: 'tool', difficulty: 'Intermediate', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 340 },
  { id: 174, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'Heroku', url: 'https://www.heroku.com/', description: 'Cloud platform for apps.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 380 },
  { id: 175, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'Vercel', url: 'https://vercel.com/', description: 'Hosting for frontend.', tags: ['Paid'], type: 'tool', difficulty: 'Beginner', isPremium: true, isTrending: true, isNew: false, rating: 4.7, votes: 460 },
  { id: 176, category: 'API and Backend', subcategory: 'Tools and Softwares', title: 'Render', url: 'https://render.com/', description: 'Cloud for full-stack apps.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 320 },

  // ==================== PAID - KNOWLEDGE AND LEARNING ====================
  { id: 177, category: 'Knowledge and Learning', subcategory: 'Guides and Tutorials', title: 'Roadmap.sh Learning', url: 'https://roadmap.sh/', description: 'Visual learning paths.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 420 },
  { id: 178, category: 'Knowledge and Learning', subcategory: 'Guides and Tutorials', title: 'Khan Academy', url: 'https://www.khanacademy.org/', description: 'Free education platform.', tags: ['Free'], type: 'tutorial', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.8, votes: 380 },
  { id: 179, category: 'Knowledge and Learning', subcategory: 'Guides and Tutorials', title: 'Coursera', url: 'https://www.coursera.org/', description: 'University-level courses.', tags: ['Paid'], type: 'tutorial', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.6, votes: 520 },
  { id: 180, category: 'Knowledge and Learning', subcategory: 'Guides and Tutorials', title: 'edX', url: 'https://www.edx.org/', description: 'Academic learning.', tags: ['Paid'], type: 'tutorial', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 480 },
  { id: 181, category: 'Knowledge and Learning', subcategory: 'Guides and Tutorials', title: 'Udemy', url: 'https://www.udemy.com/', description: 'Marketplace for courses.', tags: ['Paid'], type: 'tutorial', difficulty: 'Beginner', isPremium: true, isTrending: false, isNew: false, rating: 4.4, votes: 580 },
  { id: 182, category: 'Knowledge and Learning', subcategory: 'Guides and Tutorials', title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', description: 'Professional courses.', tags: ['Paid'], type: 'tutorial', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.5, votes: 360 },

  // ==================== PAID - SECURITY AND PRIVACY ====================
  { id: 183, category: 'Security and Privacy', subcategory: 'Tools and Softwares', title: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Check if email was breached.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.7, votes: 340 },
  { id: 184, category: 'Security and Privacy', subcategory: 'Tools and Softwares', title: 'VirusTotal', url: 'https://www.virustotal.com/', description: 'Scan for malware.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 320 },
  { id: 185, category: 'Security and Privacy', subcategory: 'Tools and Softwares', title: 'Cloudflare', url: 'https://www.cloudflare.com/', description: 'Web security and performance.', tags: ['Paid'], type: 'tool', difficulty: 'Intermediate', isPremium: true, isTrending: false, isNew: false, rating: 4.7, votes: 420 },
  { id: 186, category: 'Security and Privacy', subcategory: 'Tools and Softwares', title: 'EFF Tools', url: 'https://www.eff.org/pages/tools', description: 'Privacy tools collection.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 280 },
  { id: 187, category: 'Security and Privacy', subcategory: 'Tools and Softwares', title: 'GRC DNS Testing', url: 'https://www.grc.com/dns/dns.htm', description: 'DNS security testing.', tags: ['Free'], type: 'tool', difficulty: 'Advanced', isPremium: false, isTrending: false, isNew: false, rating: 4.5, votes: 220 },
  { id: 188, category: 'Security and Privacy', subcategory: 'Tools and Softwares', title: 'Firefox Privacy', url: 'https://www.mozilla.org/en-US/firefox/privacy/products/', description: 'Privacy-focused browser.', tags: ['Free'], type: 'tool', difficulty: 'Beginner', isPremium: false, isTrending: false, isNew: false, rating: 4.6, votes: 260 },
]

export const typeLabels = {
  tutorial: 'Tutorial',
  tool: 'Tool',
  faq: 'FAQ',
  error: 'Issue',
  video: 'Video',
  plugin: 'Plugin'
}

export const typeColors = {
  tutorial: '#22D3EE',
  tool: '#34D399',
  faq: '#A855F7',
  error: '#F87171',
  video: '#F59E0B',
  plugin: '#EC4899'
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
    'Web and App Building': '#06B6D4',
    'UI Assets and Creative': '#EC4899',
    'Content Creation': '#EF4444',
    'AI and Automation': '#8B5CF6',
    'Business Growth': '#F59E0B',
    'API and Backend': '#14B8A6',
    'Knowledge and Learning': '#6366F1',
    'Security and Privacy': '#10B981',
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
  includePremium?: boolean
} = {}): Resource[] {
  const { category, filter, subcategory, search, trending, newResources, includePremium } = options
  
  return resources.filter(resource => {
    const matchesCategory = !category || category === 'all' || resource.category === category
    const matchesSubcategory = !subcategory || subcategory === 'all' || resource.subcategory === subcategory
    const matchesSearch = !search || search === '' || 
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase()) ||
      resource.category.toLowerCase().includes(search.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    const matchesTrending = !trending || resource.isTrending
    const matchesNew = !newResources || resource.isNew
    
    // Handle content type filter (tutorial, tool, faq, error, video, plugin)
    const matchesTypeFilter = !filter || filter === 'all' || filter === undefined || resource.type === filter
    
    // Handle free/paid filter
    const matchesPremiumFilter = 
      filter === 'free' ? resource.isPremium === false :
      filter === 'paid' ? resource.isPremium === true :
      filter === 'all' || !filter || filter === undefined ? true : matchesTypeFilter
    
    // Include premium content based on toggle and user status
    const showAllPremium = includePremium === true || includePremium === undefined
    const matchesPremium = showAllPremium || !resource.isPremium
    
    return matchesCategory && matchesSubcategory && matchesSearch && matchesTrending && matchesNew && matchesPremiumFilter && matchesPremium
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

export function calculateSubcategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {}
  resources.forEach(r => {
    counts[r.subcategory] = (counts[r.subcategory] || 0) + 1
  })
  return counts
}