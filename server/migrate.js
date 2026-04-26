import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const categories = [
  { name: 'Programming/Development', slug: 'programming-development', icon: '</>', color: '#22D3EE', description: 'Programming languages, frameworks, and development tools' },
  { name: 'UI/UX Design', slug: 'ui-ux-design', icon: '◐', color: '#A855F7', description: 'Design tools, principles, and user experience' },
  { name: 'Marketing', slug: 'marketing', icon: '📈', color: '#F97316', description: 'Digital marketing, SEO, and content strategies' },
  { name: 'Product and Project Management', slug: 'product-project-management', icon: '⚡', color: '#6366F1', description: 'Product management and agile methodologies' },
  { name: 'Business and Finance', slug: 'business-finance', icon: '💰', color: '#10B981', description: 'Business planning, accounting, and financial tools' },
  { name: 'Sales and Growth', slug: 'sales-growth', icon: '🚀', color: '#F43F5E', description: 'Sales strategies and growth hacking' },
  { name: 'Events and Community', slug: 'events-community', icon: '📅', color: '#FBBF24', description: 'Event planning and community building' },
  { name: 'Web and App Building', slug: 'web-app-building', icon: '🌐', color: '#06B6D4', description: 'No-code and visual website builders' },
  { name: 'UI Assets and Creative', slug: 'ui-assets-creative', icon: '🎨', color: '#EC4899', description: 'Design resources, icons, and creative tools' },
  { name: 'Content Creation', slug: 'content-creation', icon: '📹', color: '#EF4444', description: 'Video editing and content creation tools' },
  { name: 'AI and Automation', slug: 'ai-automation', icon: '🤖', color: '#8B5CF6', description: 'AI-powered tools and automation' },
  { name: 'Business Growth', slug: 'business-growth', icon: '📊', color: '#F59E0B', description: 'Startup tools and growth platforms' },
  { name: 'API and Backend', slug: 'api-backend', icon: '⚙️', color: '#14B8A6', description: 'Backend services and API tools' },
  { name: 'Knowledge and Learning', slug: 'knowledge-learning', icon: '📚', color: '#6366F1', description: 'Learning platforms and education' },
  { name: 'Security and Privacy', slug: 'security-privacy', icon: '🔒', color: '#10B981', description: 'Security tools and privacy awareness' },
];

const resources = [
  // Programming/Development - Guides and Tutorials
  ['Programming/Development', 'Guides and Tutorials', 'MDN Web Docs', 'https://developer.mozilla.org/', 'Complete reference and learning platform for web technologies like HTML, CSS, and JavaScript.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 1, 0, 4.9, 1250],
  ['Programming/Development', 'Guides and Tutorials', 'freeCodeCamp', 'https://www.freecodecamp.org/learn/', 'Structured, hands-on platform for learning programming from beginner to advanced.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 1, 0, 4.9, 1200],
  ['Programming/Development', 'Guides and Tutorials', 'Roadmap.sh', 'https://roadmap.sh/', 'Visual guide showing what to learn step-by-step for different developer roles.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 1, 0, 4.8, 980],
  ['Programming/Development', 'Guides and Tutorials', 'W3Schools', 'https://www.w3schools.com/', 'Beginner-friendly site with simple explanations and interactive coding examples.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.7, 850],
  ['Programming/Development', 'Guides and Tutorials', 'GeeksforGeeks', 'https://www.geeksforgeeks.org/', 'Large library of programming tutorials and problem explanations.', '["Intermediate","Free"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.6, 720],
  ['Programming/Development', 'Guides and Tutorials', 'Learn Microsoft', 'https://learn.microsoft.com/', 'Official documentation and tutorials for Microsoft technologies like .NET and Azure.', '["Intermediate","Free"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.7, 650],
  ['Programming/Development', 'Guides and Tutorials', 'Codecademy', 'https://www.codecademy.com/', 'Interactive platform for learning programming through guided exercises.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.5, 600],
  ['Programming/Development', 'Guides and Tutorials', 'The Odin Project', 'https://www.theodinproject.com/', 'Full curriculum for becoming a web developer through project-based learning.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.8, 580],
  ['Programming/Development', 'Guides and Tutorials', 'JavaTpoint', 'https://www.javatpoint.com/', 'Wide collection of tutorials for multiple programming languages.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.5, 520],
  ['Programming/Development', 'Guides and Tutorials', 'Stack Overflow', 'https://stackoverflow.com/', 'Q&A platform where developers solve real-world coding problems.', '["All"]', 'tutorial', 'Beginner', 0, 1, 0, 4.9, 1500],
  ['Programming/Development', 'Guides and Tutorials', 'React Official Tutorial', 'https://react.dev/learn', 'Official React documentation with interactive examples and step-by-step tutorial.', '["Intermediate"]', 'tutorial', 'Intermediate', 0, 1, 0, 4.8, 980],
  ['Programming/Development', 'Guides and Tutorials', 'TypeScript Handbook', 'https://www.typescriptlang.org/docs/', 'Official TypeScript documentation covering types, interfaces, and advanced patterns.', '["Intermediate"]', 'tutorial', 'Intermediate', 0, 0, 1, 4.7, 720],
  ['Programming/Development', 'Guides and Tutorials', 'Node.js Complete Guide', 'https://nodejs.org/en/docs/guides/', 'Official Node.js documentation and guides for backend development.', '["Backend"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.7, 650],
  ['Programming/Development', 'Guides and Tutorials', 'Rust Programming Book', 'https://doc.rust-lang.org/book/', 'The official book on learning Rust programming.', '["Systems","Advanced"]', 'tutorial', 'Advanced', 0, 1, 1, 4.8, 440],

  // Programming/Development - Video Tutorials
  ['Programming/Development', 'Video Tutorials', 'Programming Basics Crash Course', 'https://www.youtube.com/watch?v=Z1Yd7upQsXY', 'Full crash course explaining programming fundamentals and how code actually works.', '["Video","Beginner"]', 'video', 'Beginner', 0, 0, 0, 4.7, 320],
  ['Programming/Development', 'Video Tutorials', 'Python Beginner Tutorial', 'https://www.youtube.com/watch?v=rfscVS0vtbw', 'Beginner Python tutorial covering variables, loops, functions, and real examples.', '["Video","Python"]', 'video', 'Beginner', 0, 0, 0, 4.8, 450],
  ['Programming/Development', 'Video Tutorials', 'Web Development Basics', 'https://www.youtube.com/watch?v=8L2kFv4Zs4E', 'Complete web development basics (HTML, CSS, JavaScript explained clearly).', '["Video","Web"]', 'video', 'Beginner', 0, 0, 0, 4.7, 380],
  ['Programming/Development', 'Video Tutorials', 'Git and GitHub for Beginners', 'https://www.youtube.com/watch?v=3JluqTojuME', 'Git and GitHub explained for beginners with real-world workflows.', '["Video","Git"]', 'video', 'Beginner', 0, 0, 0, 4.8, 290],
  ['Programming/Development', 'Video Tutorials', 'Docker Explained', 'https://www.youtube.com/watch?v=3c-iBn73dDE', 'Docker explained simply: containers, images, and real usage examples.', '["Video","Docker"]', 'video', 'Intermediate', 0, 0, 0, 4.6, 260],
  ['Programming/Development', 'Video Tutorials', 'API Basics Tutorial', 'https://www.youtube.com/watch?v=8L2kFv4Zs4E', 'API basics explained using real examples and Postman.', '["Video","API"]', 'video', 'Beginner', 0, 0, 0, 4.5, 220],

  // Programming/Development - Tools and Softwares
  ['Programming/Development', 'Tools and Softwares', 'Visual Studio Code', 'https://code.visualstudio.com/', 'Lightweight editor for most languages with built-in debugging and extensions.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.9, 2100],
  ['Programming/Development', 'Tools and Softwares', 'Visual Studio', 'https://visualstudio.microsoft.com/', 'Full IDE for C# and .NET development.', '["IDE","Free"]', 'tool', 'Intermediate', 0, 0, 0, 4.8, 850],
  ['Programming/Development', 'Tools and Softwares', 'IntelliJ IDEA', 'https://www.jetbrains.com/idea/', 'Powerful IDE for Java development.', '["IDE","Free"]', 'tool', 'Intermediate', 0, 0, 0, 4.7, 720],
  ['Programming/Development', 'Tools and Softwares', 'PyCharm', 'https://www.jetbrains.com/pycharm/', 'Python-focused development tool.', '["Python","Free"]', 'tool', 'Beginner', 0, 0, 0, 4.7, 680],
  ['Programming/Development', 'Tools and Softwares', 'GitHub', 'https://github.com/', 'Store and collaborate on code with millions of developers.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.9, 1850],
  ['Programming/Development', 'Tools and Softwares', 'Docker', 'https://www.docker.com/', 'Run apps in isolated containers for consistency.', '["Essential","Free"]', 'tool', 'Advanced', 0, 1, 0, 4.6, 890],
  ['Programming/Development', 'Tools and Softwares', 'Postman', 'https://www.postman.com/', 'Test and debug API requests and responses.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.8, 780],
  ['Programming/Development', 'Tools and Softwares', 'MySQL Workbench', 'https://dev.mysql.com/downloads/workbench/', 'Visual tool for MySQL database design and management.', '["Database","Free"]', 'tool', 'Intermediate', 0, 0, 0, 4.5, 450],
  ['Programming/Development', 'Tools and Softwares', 'DBeaver', 'https://dbeaver.io/download/', 'Free multi-platform database SQL client.', '["Database","Free"]', 'tool', 'Intermediate', 0, 0, 0, 4.6, 520],
  ['Programming/Development', 'Tools and Softwares', 'Cursor AI', 'https://cursor.sh/', 'AI-first code editor built for pair programming with AI.', '["AI","Free"]', 'tool', 'Beginner', 0, 1, 1, 4.7, 680],

  // Programming/Development - Plugins and Extensions
  ['Programming/Development', 'Plugins and Extensions', 'Live Server', 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer', 'Launches a local development server with live reload.', '["Extension","VS Code"]', 'plugin', 'Beginner', 0, 0, 0, 4.8, 620],
  ['Programming/Development', 'Plugins and Extensions', 'Prettier', 'https://prettier.io/', 'Automatically formats your code on save to keep it consistent.', '["Extension","VS Code"]', 'plugin', 'Beginner', 0, 1, 0, 4.9, 580],
  ['Programming/Development', 'Plugins and Extensions', 'ESLint', 'https://eslint.org/', 'Highlights code issues directly in your editor.', '["Extension","VS Code"]', 'plugin', 'Intermediate', 0, 0, 0, 4.7, 450],
  ['Programming/Development', 'Plugins and Extensions', 'GitLens', 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens', 'Enhances Git capabilities inside VS Code with detailed history.', '["Extension","Git"]', 'plugin', 'Intermediate', 0, 0, 0, 4.8, 420],
  ['Programming/Development', 'Plugins and Extensions', 'Path Intellisense', 'http://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense', 'Auto-completes file paths while coding.', '["Extension","VS Code"]', 'plugin', 'Beginner', 0, 0, 0, 4.6, 340],

  // Programming/Development - FAQs and Basics
  ['Programming/Development', 'FAQs and Basics', 'What is programming?', 'https://developer.mozilla.org/', 'Programming is writing instructions that tell a computer how to perform tasks.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 340],
  ['Programming/Development', 'FAQs and Basics', 'Frontend vs Backend', 'https://developer.mozilla.org/', 'Frontend handles what users see, while backend manages logic, servers, and databases.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.6, 520],
  ['Programming/Development', 'FAQs and Basics', 'What is an API?', 'https://www.redhat.com/en/topics/api/what-is-a-rest-api', 'An API allows different software systems to communicate and exchange data.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 340],
  ['Programming/Development', 'FAQs and Basics', 'What is Git?', 'https://rogerdudler.github.io/git-guide/', 'Git tracks code changes and allows multiple developers to collaborate.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.6, 520],
  ['Programming/Development', 'FAQs and Basics', 'What is a framework?', 'https://developer.mozilla.org/', 'A framework is a pre-built structure that speeds up application development.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.4, 280],

  // Programming/Development - Common Mistakes/Issues
  ['Programming/Development', 'Common Mistakes/Issues', 'Most Common Beginner Mistake', 'https://developer.mozilla.org/', 'Not understanding basic concepts before jumping into frameworks.', '["Issue"]', 'issue', 'Beginner', 0, 0, 0, 4.3, 410],
  ['Programming/Development', 'Common Mistakes/Issues', 'Code Not Running', 'https://developer.mozilla.org/', 'Usually due to syntax errors, missing dependencies, or wrong file.', '["Error","Fix"]', 'issue', 'Beginner', 0, 0, 0, 4.4, 380],
  ['Programming/Development', 'Common Mistakes/Issues', 'Fixing CORS Errors', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', 'Understanding and resolving Cross-Origin Resource Sharing errors.', '["Error","Fix"]', 'issue', 'Intermediate', 0, 1, 0, 4.4, 410],
  ['Programming/Development', 'Common Mistakes/Issues', 'JavaScript Null vs Undefined', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null', 'Guide to understanding the difference between null and undefined.', '["Error","Fix"]', 'issue', 'Beginner', 0, 0, 0, 4.3, 280],
  ['Programming/Development', 'Common Mistakes/Issues', 'API Not Working', 'https://www.postman.com/', 'Common causes: wrong endpoint, missing auth, or incorrect request format.', '["Error","Fix"]', 'issue', 'Intermediate', 0, 0, 0, 4.2, 220],
  ['Programming/Development', 'Common Mistakes/Issues', 'Git Merge Conflict', 'https://git-scm.com/', 'Happens when two changes affect the same part of code.', '["Error","Fix"]', 'issue', 'Intermediate', 0, 0, 0, 4.3, 190],
  ['Programming/Development', 'Common Mistakes/Issues', 'Docker Container Not Starting', 'https://www.docker.com/', 'Usually due to incorrect config, missing env vars, or port conflicts.', '["Error","Fix"]', 'issue', 'Advanced', 0, 0, 0, 4.2, 160],
  ['Programming/Development', 'Common Mistakes/Issues', 'npm Install Fail', 'https://www.npmjs.com/', 'Usually caused by corrupted cache, version conflicts, or missing permissions.', '["Error","Fix"]', 'issue', 'Beginner', 0, 0, 0, 4.1, 140],

  // UI/UX Design - Guides and Tutorials
  ['UI/UX Design', 'Guides and Tutorials', 'Interaction Design', 'https://www.interaction-design.org/literature', 'In-depth UX articles and learning resources from industry experts.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.6, 420],
  ['UI/UX Design', 'Guides and Tutorials', 'NN Group', 'https://www.nngroup.com/articles/', 'Research-based UX design principles.', '["Free"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.7, 380],
  ['UI/UX Design', 'Guides and Tutorials', 'Figma Learn', 'https://www.figma.com/resources/learn-design/', 'Official Figma tutorials for UI/UX design and prototyping.', '["Free"]', 'tutorial', 'Beginner', 0, 1, 0, 4.8, 920],
  ['UI/UX Design', 'Guides and Tutorials', 'Google Material Design', 'https://m3.material.io/', "Google's design system with guidelines and components.", '["Free"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.7, 680],

  // UI/UX Design - Video Tutorials
  ['UI/UX Design', 'Video Tutorials', 'Figma Crash Course', 'https://www.youtube.com/watch?v=FTFaQWZBqQ8', 'Complete Figma UI/UX design crash course for beginners.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.7, 290],
  ['UI/UX Design', 'Video Tutorials', 'UI Design Principles', 'https://www.youtube.com/watch?v=JKx8k2rX5Jw', 'UI design principles explained with real interface examples.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.6, 250],
  ['UI/UX Design', 'Video Tutorials', 'UX Basics', 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU', 'UX basics: how users think and how to design for them.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.5, 220],

  // UI/UX Design - Tools and Softwares
  ['UI/UX Design', 'Tools and Softwares', 'Figma', 'https://www.figma.com/', 'Collaborative design tool for interfaces, prototypes, and design systems.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.9, 1500],
  ['UI/UX Design', 'Tools and Softwares', 'Adobe XD', 'https://www.adobe.com/products/xd.html', 'Design and prototyping tool focused on UX.', '["Adobe"]', 'tool', 'Intermediate', 0, 0, 0, 4.5, 380],
  ['UI/UX Design', 'Tools and Softwares', 'Sketch', 'https://www.sketch.com/', 'Vector-based design tool for UI design on macOS.', '["Mac"]', 'tool', 'Intermediate', 0, 0, 0, 4.6, 320],
  ['UI/UX Design', 'Tools and Softwares', 'Framer', 'https://www.framer.com/', 'Tool for designing interactive web experiences.', '["Advanced"]', 'tool', 'Advanced', 0, 1, 1, 4.7, 520],
  ['UI/UX Design', 'Tools and Softwares', 'Maze', 'https://maze.co/', 'Usability testing with real user feedback.', '["Testing"]', 'tool', 'Intermediate', 0, 0, 0, 4.5, 280],
  ['UI/UX Design', 'Tools and Softwares', 'Hotjar', 'https://www.hotjar.com/', 'Heatmaps and session recordings to understand user behavior.', '["Analytics"]', 'tool', 'Beginner', 0, 0, 0, 4.4, 260],
  ['UI/UX Design', 'Tools and Softwares', 'Coolors', 'https://coolors.co/', 'Generate and explore color palettes.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 240],

  // UI/UX Design - Plugins and Extensions
  ['UI/UX Design', 'Plugins and Extensions', 'Figmotion', 'https://www.figma.com/community/plugin/733025261168520714/figmotion', 'Animation capabilities inside Figma.', '["Extension"]', 'plugin', 'Intermediate', 0, 0, 0, 4.5, 180],
  ['UI/UX Design', 'Plugins and Extensions', 'Unsplash Plugin', 'https://www.figma.com/community/plugin/738454987945972471/unsplash', 'Insert high-quality images into designs.', '["Extension"]', 'plugin', 'Beginner', 0, 0, 0, 4.6, 160],

  // UI/UX Design - FAQs and Basics
  ['UI/UX Design', 'FAQs and Basics', 'UI vs UX', 'https://www.interaction-design.org/', 'UI focuses on visuals, while UX focuses on user experience.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 290],
  ['UI/UX Design', 'FAQs and Basics', 'What is a wireframe?', 'https://www.figma.com/', 'Basic layout showing structure without detailed design.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.4, 220],

  // UI/UX Design - Common Mistakes/Issues
  ['UI/UX Design', 'Common Mistakes/Issues', 'Inconsistent Design', 'https://www.figma.com/', 'Inconsistent spacing, colors, or typography choices.', '["Issue"]', 'issue', 'Beginner', 0, 0, 0, 4.2, 180],
  ['UI/UX Design', 'Common Mistakes/Issues', 'Confusing UI for Users', 'https://www.nngroup.com/', 'Too many elements, unclear hierarchy, or poor navigation.', '["Issue"]', 'issue', 'Intermediate', 0, 0, 0, 4.3, 150],

  // Marketing - Guides and Tutorials
  ['Marketing', 'Guides and Tutorials', 'HubSpot Blog', 'https://blog.hubspot.com/marketing', 'Complete blog with guides on digital marketing strategies.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.6, 580],
  ['Marketing', 'Guides and Tutorials', 'Moz Beginner Guide to SEO', 'https://moz.com/beginners-guide-to-seo', 'Beginner-friendly guide to understanding SEO.', '["SEO"]', 'tutorial', 'Beginner', 0, 0, 0, 4.7, 520],
  ['Marketing', 'Guides and Tutorials', 'Ahrefs Blog', 'https://www.youtube.com/@AhrefsCom', 'SEO tutorials and case studies.', '["SEO"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.6, 480],
  ['Marketing', 'Guides and Tutorials', 'Neil Patel Blog', 'https://neilpatel.com/blog/', 'Practical marketing tips and SEO strategies.', '["SEO"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.5, 450],

  // Marketing - Video Tutorials
  ['Marketing', 'Video Tutorials', 'Digital Marketing Fundamentals', 'https://www.youtube.com/watch?v=6bUjJ5XgkZ0', 'Digital marketing fundamentals for beginners.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.5, 280],
  ['Marketing', 'Video Tutorials', 'SEO Explained', 'https://www.youtube.com/watch?v=V3y0H8p6G7s', 'SEO explained simply with real ranking examples.', '["Video","SEO"]', 'video', 'Beginner', 0, 0, 0, 4.4, 250],

  // Marketing - Tools and Softwares
  ['Marketing', 'Tools and Softwares', 'Google Analytics', 'https://analytics.google.com/', 'Tracks and analyzes website traffic and user behavior.', '["Essential","Free"]', 'tool', 'Intermediate', 0, 1, 0, 4.8, 720],
  ['Marketing', 'Tools and Softwares', 'Ahrefs', 'https://ahrefs.com/', 'Keyword research, backlinks, and SEO analysis.', '["SEO","Paid"]', 'tool', 'Intermediate', 1, 1, 0, 4.7, 620],
  ['Marketing', 'Tools and Softwares', 'Mailchimp', 'https://mailchimp.com/', 'Create and automate email campaigns.', '["Email"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 820],
  ['Marketing', 'Tools and Softwares', 'Canva', 'https://www.canva.com/', 'Easy-to-use design platform for marketing visuals.', '["Design"]', 'tool', 'Beginner', 0, 0, 0, 4.7, 650],
  ['Marketing', 'Tools and Softwares', 'SEMrush', 'https://www.semrush.com/', 'All-in-one toolkit for digital marketing and SEO.', '["SEO","Paid"]', 'tool', 'Intermediate', 1, 1, 0, 4.7, 620],

  // Marketing - FAQs and Basics
  ['Marketing', 'FAQs and Basics', 'What is Digital Marketing?', 'https://blog.hubspot.com/', 'Promoting products or services using online channels.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.4, 280],
  ['Marketing', 'FAQs and Basics', 'What is SEO?', 'https://moz.com/', 'Optimizing content to rank higher in search engines.', '["SEO"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 260],

  // Marketing - Common Mistakes/Issues
  ['Marketing', 'Common Mistakes/Issues', 'SEO Not Improving', 'https://moz.com/', 'Lack of keywords, poor content quality, or weak backlinks.', '["Issue"]', 'issue', 'Intermediate', 0, 0, 0, 4.2, 180],

  // Product and Project Management - Guides and Tutorials
  ['Product and Project Management', 'Guides and Tutorials', 'Atlassian Agile', 'https://www.atlassian.com/agile', 'Official guide to Agile methodology and workflows.', '["Free"]', 'tutorial', 'Intermediate', 0, 1, 0, 4.7, 680],
  ['Product and Project Management', 'Guides and Tutorials', 'Scrum.org', 'https://www.scrum.org/resources', 'Scrum framework guides and certifications.', '["Free"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.6, 520],
  ['Product and Project Management', 'Guides and Tutorials', 'Notion Help', 'https://www.notion.so/help', 'Official Notion guides for productivity.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.6, 480],

  // Product and Project Management - Video Tutorials
  ['Product and Project Management', 'Video Tutorials', 'Agile and Scrum Explained', 'https://www.youtube.com/watch?v=R9OHn5ZF4Uo', 'Agile and Scrum explained in simple terms.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.5, 260],
  ['Product and Project Management', 'Video Tutorials', 'Jira Tutorial', 'https://www.youtube.com/watch?v=8Yt3pK0m9Qw', 'Jira explained for Agile teams and sprint planning.', '["Video"]', 'video', 'Intermediate', 0, 0, 0, 4.4, 220],

  // Product and Project Management - Tools and Softwares
  ['Product and Project Management', 'Tools and Softwares', 'Jira', 'https://www.atlassian.com/software/jira', 'Tracks tasks, bugs, and agile workflows.', '["Essential","Free"]', 'tool', 'Intermediate', 0, 1, 0, 4.7, 920],
  ['Product and Project Management', 'Tools and Softwares', 'Trello', 'https://trello.com/', 'Organizes tasks visually using boards and cards.', '["Essential","Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 840],
  ['Product and Project Management', 'Tools and Softwares', 'Notion', 'https://www.notion.so/', 'Combines notes, tasks, and databases.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.8, 1100],
  ['Product and Project Management', 'Tools and Softwares', 'Asana', 'https://asana.com/', 'Manages projects, tasks, and workflows.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.5, 620],
  ['Product and Project Management', 'Tools and Softwares', 'Miro', 'https://miro.com/', 'Online whiteboard for brainstorming.', '["Collaboration"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 480],
  ['Product and Project Management', 'Tools and Softwares', 'ClickUp', 'https://app.clickup.com/', 'All-in-one tool for tasks, docs, and goals.', '["All-in-One"]', 'tool', 'Beginner', 0, 0, 0, 4.5, 420],

  // Product and Project Management - FAQs and Basics
  ['Product and Project Management', 'FAQs and Basics', 'What is Agile?', 'https://www.atlassian.com/agile', 'Flexible project management approach focused on iteration.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 380],
  ['Product and Project Management', 'FAQs and Basics', 'What is Scrum?', 'https://www.scrum.org/', 'Framework using sprints and roles.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.4, 320],

  // Product and Project Management - Common Mistakes/Issues
  ['Product and Project Management', 'Common Mistakes/Issues', 'Scope Creep', 'https://www.projectmanager.com/', 'Project keeps expanding beyond original plan.', '["Issue"]', 'issue', 'Intermediate', 0, 0, 0, 4.3, 190],

  // Business and Finance - Guides and Tutorials
  ['Business and Finance', 'Guides and Tutorials', 'Investopedia', 'https://www.investopedia.com/', 'Clear explanations of finance and business concepts.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.7, 480],
  ['Business and Finance', 'Guides and Tutorials', 'Y Combinator Library', 'https://www.ycombinator.com/library', 'Startup advice from top accelerator.', '["Free"]', 'tutorial', 'Intermediate', 0, 1, 0, 4.8, 620],

  // Business and Finance - Video Tutorials
  ['Business and Finance', 'Video Tutorials', 'Business Basics', 'https://www.youtube.com/watch?v=5eZ7e5m0X8A', 'How companies actually make money.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.5, 240],
  ['Business and Finance', 'Video Tutorials', 'Cash Flow Explained', 'https://www.youtube.com/watch?v=5f0c7Xk2m9Q', 'Cash flow and profit explained for beginners.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.4, 220],

  // Business and Finance - Tools and Softwares
  ['Business and Finance', 'Tools and Softwares', 'QuickBooks', 'https://quickbooks.intuit.com/', 'Manages business finances and accounting.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.5, 720],
  ['Business and Finance', 'Tools and Softwares', 'Stripe', 'https://stripe.com/', 'Handles online payments and subscriptions.', '["Free"]', 'tool', 'Intermediate', 0, 1, 0, 4.8, 860],
  ['Business and Finance', 'Tools and Softwares', 'PayPal', 'https://www.paypal.com/', 'Platform for sending and receiving money.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 580],
  ['Business and Finance', 'Tools and Softwares', 'Wave', 'https://www.waveapps.com/', 'Free tools for invoicing and financial tracking.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.4, 420],

  // Business and Finance - FAQs and Basics
  ['Business and Finance', 'FAQs and Basics', 'Revenue vs Profit', 'https://www.investopedia.com/', 'Revenue is total income, profit is what remains after expenses.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 320],

  // Business and Finance - Common Mistakes/Issues
  ['Business and Finance', 'Common Mistakes/Issues', 'Startup Financial Failure', 'https://www.ycombinator.com/', 'Poor cash flow management or running out of funding.', '["Issue"]', 'issue', 'Intermediate', 0, 0, 0, 4.2, 180],

  // Sales and Growth - Guides and Tutorials
  ['Sales and Growth', 'Guides and Tutorials', 'HubSpot Sales', 'https://blog.hubspot.com/sales', 'Sales strategies and CRM guides.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.6, 480],
  ['Sales and Growth', 'Guides and Tutorials', 'Salesforce Resources', 'https://www.salesforce.com/resources/', 'CRM and sales process learning.', '["Free"]', 'tutorial', 'Intermediate', 0, 0, 0, 4.5, 420],

  // Sales and Growth - Video Tutorials
  ['Sales and Growth', 'Video Tutorials', 'Sales Funnel Explained', 'https://www.youtube.com/watch?v=8Gk3pX9m2QZ', 'Sales funnels from lead to conversion.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.4, 220],
  ['Sales and Growth', 'Video Tutorials', 'Cold Emailing', 'https://www.youtube.com/watch?v=Qm7k3X9p1A2', 'Emails that actually work.', '["Video"]', 'video', 'Intermediate', 0, 0, 0, 4.3, 200],

  // Sales and Growth - Tools and Softwares
  ['Sales and Growth', 'Tools and Softwares', 'Salesforce', 'https://www.salesforce.com/', 'Manages customer relationships and pipelines.', '["Paid","Essential"]', 'tool', 'Intermediate', 1, 1, 0, 4.7, 920],
  ['Sales and Growth', 'Tools and Softwares', 'Pipedrive', 'https://www.pipedrive.com/', 'Sales-focused CRM for tracking deals.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 580],
  ['Sales and Growth', 'Tools and Softwares', 'Apollo.io', 'https://www.apollo.io/', 'Find leads and automate outreach.', '["Free"]', 'tool', 'Intermediate', 0, 0, 0, 4.5, 450],
  ['Sales and Growth', 'Tools and Softwares', 'HubSpot CRM', 'https://www.hubspot.com/products/crm', 'Free CRM with sales and marketing tools.', '["Free","Essential"]', 'tool', 'Beginner', 0, 1, 0, 4.7, 1100],
  ['Sales and Growth', 'Tools and Softwares', 'Calendly', 'https://calendly.com/', 'Simplifies booking meetings.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 520],
  ['Sales and Growth', 'Tools and Softwares', 'Intercom', 'https://www.intercom.com/', 'Live chat with customers.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.5, 380],

  // Sales and Growth - FAQs and Basics
  ['Sales and Growth', 'FAQs and Basics', 'What is a Sales Funnel?', 'https://blog.hubspot.com/', 'Journey from awareness to purchase.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.5, 340],
  ['Sales and Growth', 'FAQs and Basics', 'What is CRM?', 'https://www.salesforce.com/', 'Systems tracking customer interactions.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.4, 280],

  // Sales and Growth - Common Mistakes/Issues
  ['Sales and Growth', 'Common Mistakes/Issues', 'Sales Strategy Failure', 'https://blog.hubspot.com/', 'Poor targeting or weak messaging.', '["Issue"]', 'issue', 'Intermediate', 0, 0, 0, 4.2, 160],

  // Events and Community - Guides and Tutorials
  ['Events and Community', 'Guides and Tutorials', 'Eventbrite Blog', 'https://www.eventbrite.com/blog/', 'Event planning and promotion strategies.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.6, 420],
  ['Events and Community', 'Guides and Tutorials', 'Meetup Blog', 'https://www.meetup.com/blog/', 'Community building and event tips.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.5, 380],
  ['Events and Community', 'Guides and Tutorials', 'Discord Safety', 'https://www.discord.com/safety', 'Building and managing online communities.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.5, 340],

  // Events and Community - Video Tutorials
  ['Events and Community', 'Video Tutorials', 'Plan and Organize Events', 'https://www.youtube.com/watch?v=2Qk8mX9p3A7', 'How to plan successful events.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.4, 200],
  ['Events and Community', 'Video Tutorials', 'Community Building', 'https://www.youtube.com/watch?v=7mX3pQ9k1Z5', 'Basics and engagement strategies.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.3, 180],
  ['Events and Community', 'Video Tutorials', 'Zoom for Webinars', 'https://www.youtube.com/watch?v=9pQ2kX7m3A8', 'How to host online events.', '["Video"]', 'video', 'Beginner', 0, 0, 0, 4.4, 220],

  // Events and Community - Tools and Softwares
  ['Events and Community', 'Tools and Softwares', 'Eventbrite', 'https://www.eventbrite.com/', 'Create, promote, and manage events.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 680],
  ['Events and Community', 'Tools and Softwares', 'Meetup', 'https://www.meetup.com/', 'Organize and join communities.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.5, 520],
  ['Events and Community', 'Tools and Softwares', 'Zoom', 'https://zoom.us/', 'Host virtual meetings and webinars.', '["Free"]', 'tool', 'Beginner', 0, 1, 0, 4.7, 820],
  ['Events and Community', 'Tools and Softwares', 'Slack', 'https://slack.com/', 'Team communication through channels.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 650],
  ['Events and Community', 'Tools and Softwares', 'Discord', 'https://discord.com/', 'Communication platform for communities.', '["Free"]', 'tool', 'Beginner', 0, 1, 0, 4.7, 920],

  // Events and Community - Plugins and Extensions
  ['Events and Community', 'Plugins and Extensions', 'StreamYard', 'https://streamyard.com/', 'Stream to multiple platforms.', '["Extension"]', 'plugin', 'Intermediate', 0, 0, 0, 4.5, 280],

  // Events and Community - FAQs and Basics
  ['Events and Community', 'FAQs and Basics', 'What is Event Management?', 'https://www.eventbrite.com/', 'Planning and organizing events.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.4, 220],
  ['Events and Community', 'FAQs and Basics', 'What is Community Building?', 'https://www.meetup.com/', 'Creating engaged groups.', '["Beginner"]', 'faq', 'Beginner', 0, 0, 0, 4.3, 180],

  // Events and Community - Common Mistakes/Issues
  ['Events and Community', 'Common Mistakes/Issues', 'Events Fail', 'https://www.eventbrite.com/', 'Poor planning or weak promotion.', '["Issue"]', 'issue', 'Intermediate', 0, 0, 0, 4.2, 150],

  // Web and App Building - Tools and Softwares (Paid)
  ['Web and App Building', 'Tools and Softwares', 'Webflow', 'https://www.webflow.com/', 'Visual website builder without code.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.7, 520],
  ['Web and App Building', 'Tools and Softwares', 'Bubble', 'https://bubble.io/', 'No-code platform for full web applications.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.6, 480],
  ['Web and App Building', 'Tools and Softwares', 'Glide Apps', 'https://www.glideapps.com/', 'Turn spreadsheets into mobile apps.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.5, 320],
  ['Web and App Building', 'Tools and Softwares', 'Softr', 'https://www.softr.io/', 'Build apps from Airtable.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.4, 280],
  ['Web and App Building', 'Tools and Softwares', 'Framer', 'https://www.framer.com/', 'Modern website builder.', '["Paid"]', 'tool', 'Intermediate', 1, 1, 0, 4.7, 420],
  ['Web and App Building', 'Tools and Softwares', 'Wix', 'https://www.wix.com/', 'Website builder for business sites.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.4, 380],
  ['Web and App Building', 'Tools and Softwares', 'Squarespace', 'https://www.squarespace.com/', 'Design-focused website builder.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.5, 360],

  // UI Assets and Creative - Tools and Softwares
  ['UI Assets and Creative', 'Tools and Softwares', 'Flaticon', 'https://www.flaticon.com/', 'Large library of icons.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.6, 480],
  ['UI Assets and Creative', 'Tools and Softwares', 'undraw.co', 'https://undraw.co/', 'Free customizable illustrations.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.7, 420],
  ['UI Assets and Creative', 'Tools and Softwares', 'Freepik', 'https://www.freepik.com/', 'Vectors, icons, and templates.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.5, 380],
  ['UI Assets and Creative', 'Tools and Softwares', 'ls.graphics', 'https://www.ls.graphics/', 'High-quality mockups.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.4, 280],
  ['UI Assets and Creative', 'Tools and Softwares', 'Storyset', 'https://www.storyset.com/', 'Editable illustrations.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.5, 260],
  ['UI Assets and Creative', 'Tools and Softwares', 'Humaaans', 'https://www.humaaans.com/', 'Mix-and-match illustrations.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.4, 240],
  ['UI Assets and Creative', 'Tools and Softwares', 'Blobmaker', 'https://www.blobmaker.app/', 'Generate SVG shapes.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.3, 180],

  // Content Creation - Tools and Softwares
  ['Content Creation', 'Tools and Softwares', 'CapCut', 'https://www.capcut.com/', 'Video editing for social media.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.6, 520],
  ['Content Creation', 'Tools and Softwares', 'Canva for Design', 'https://www.canva.com/', 'Design platform for content.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.7, 480],
  ['Content Creation', 'Tools and Softwares', 'InVideo', 'https://www.invideo.io/', 'AI-powered video creation.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.4, 320],
  ['Content Creation', 'Tools and Softwares', 'Pictory', 'https://www.pictory.ai/', 'Convert text to videos.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.3, 280],
  ['Content Creation', 'Tools and Softwares', 'Remove.bg', 'https://www.remove.bg/', 'Remove backgrounds from images.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.6, 420],
  ['Content Creation', 'Tools and Softwares', 'Pexels', 'https://www.pexels.com/', 'Free stock photos and videos.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.7, 380],
  ['Content Creation', 'Tools and Softwares', 'Pixabay', 'https://www.pixabay.com/', 'Free media library.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 340],

  // AI and Automation - Tools and Softwares
  ['AI and Automation', 'Tools and Softwares', 'ChatGPT', 'https://chat.openai.com/', 'AI assistant for writing and coding.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.8, 820],
  ['AI and Automation', 'Tools and Softwares', 'Perplexity', 'https://www.perplexity.ai/', 'AI-powered search engine.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.7, 480],
  ['AI and Automation', 'Tools and Softwares', 'Notion AI', 'https://www.notion.so/product/ai', 'AI-enhanced workspace.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.6, 420],
  ['AI and Automation', 'Tools and Softwares', 'Tome', 'https://www.tome.app/', 'AI for presentations.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.4, 320],
  ['AI and Automation', 'Tools and Softwares', 'Copy.ai', 'https://www.copy.ai/', 'AI writing tool.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.3, 280],
  ['AI and Automation', 'Tools and Softwares', 'Descript', 'https://www.descript.com/', 'AI video and audio editing.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.5, 260],
  ['AI and Automation', 'Tools and Softwares', 'Runway', 'https://www.runwayml.com/', 'AI for video generation.', '["Paid"]', 'tool', 'Advanced', 1, 0, 0, 4.4, 240],

  // Business Growth - Tools and Softwares
  ['Business Growth', 'Tools and Softwares', 'Product Hunt', 'https://www.producthunt.com/', 'Discover and launch products.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 420],
  ['Business Growth', 'Tools and Softwares', 'Indie Hackers', 'https://www.indiehackers.com/', 'Startup founder community.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.5, 380],
  ['Business Growth', 'Tools and Softwares', 'Y Combinator', 'https://www.ycombinator.com/', 'Startup accelerator.', '["Paid"]', 'tool', 'Advanced', 1, 0, 0, 4.8, 520],
  ['Business Growth', 'Tools and Softwares', 'Startup School', 'https://www.startupschool.org/', 'Free startup education.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.5, 320],
  ['Business Growth', 'Tools and Softwares', 'Crunchbase', 'https://www.crunchbase.com/', 'Startup database.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.4, 280],
  ['Business Growth', 'Tools and Softwares', 'Pitch', 'https://www.pitch.com/', 'Pitch deck tool.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.3, 240],
  ['Business Growth', 'Tools and Softwares', 'Typeform', 'https://www.typeform.com/', 'Interactive forms.', '["Paid"]', 'tool', 'Beginner', 1, 0, 0, 4.4, 260],

  // API and Backend - Tools and Softwares
  ['API and Backend', 'Tools and Softwares', 'RapidAPI', 'https://rapidapi.com/', 'Marketplace for APIs.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.5, 380],
  ['API and Backend', 'Tools and Softwares', 'Supabase', 'https://www.supabase.com/', 'Backend with database and auth.', '["Paid"]', 'tool', 'Intermediate', 1, 1, 0, 4.7, 420],
  ['API and Backend', 'Tools and Softwares', 'Firebase', 'https://firebase.google.com/', 'Google backend suite.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.6, 480],
  ['API and Backend', 'Tools and Softwares', 'Appwrite', 'https://appwrite.io/', 'Open-source backend.', '["Free"]', 'tool', 'Intermediate', 0, 0, 0, 4.5, 340],
  ['API and Backend', 'Tools and Softwares', 'Heroku', 'https://www.heroku.com/', 'Cloud platform for apps.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.4, 380],
  ['API and Backend', 'Tools and Softwares', 'Vercel', 'https://vercel.com/', 'Hosting for frontend.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.7, 460],
  ['API and Backend', 'Tools and Softwares', 'Render', 'https://render.com/', 'Cloud for full-stack apps.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.5, 320],

  // Knowledge and Learning - Guides and Tutorials
  ['Knowledge and Learning', 'Guides and Tutorials', 'Roadmap.sh Learning', 'https://roadmap.sh/', 'Visual learning paths.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.7, 420],
  ['Knowledge and Learning', 'Guides and Tutorials', 'Khan Academy', 'https://www.khanacademy.org/', 'Free education platform.', '["Free"]', 'tutorial', 'Beginner', 0, 0, 0, 4.8, 380],
  ['Knowledge and Learning', 'Guides and Tutorials', 'Coursera', 'https://www.coursera.org/', 'University-level courses.', '["Paid"]', 'tutorial', 'Intermediate', 1, 0, 0, 4.6, 520],
  ['Knowledge and Learning', 'Guides and Tutorials', 'edX', 'https://www.edx.org/', 'Academic learning.', '["Paid"]', 'tutorial', 'Intermediate', 1, 0, 0, 4.5, 480],
  ['Knowledge and Learning', 'Guides and Tutorials', 'Udemy', 'https://www.udemy.com/', 'Marketplace for courses.', '["Paid"]', 'tutorial', 'Beginner', 1, 0, 0, 4.4, 580],
  ['Knowledge and Learning', 'Guides and Tutorials', 'LinkedIn Learning', 'https://www.linkedin.com/learning/', 'Professional courses.', '["Paid"]', 'tutorial', 'Intermediate', 1, 0, 0, 4.5, 360],

  // Security and Privacy - Tools and Softwares
  ['Security and Privacy', 'Tools and Softwares', 'Have I Been Pwned', 'https://haveibeenpwned.com/', 'Check if email was breached.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.7, 340],
  ['Security and Privacy', 'Tools and Softwares', 'VirusTotal', 'https://www.virustotal.com/', 'Scan for malware.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 320],
  ['Security and Privacy', 'Tools and Softwares', 'Cloudflare', 'https://www.cloudflare.com/', 'Web security and performance.', '["Paid"]', 'tool', 'Intermediate', 1, 0, 0, 4.7, 420],
  ['Security and Privacy', 'Tools and Softwares', 'EFF Tools', 'https://www.eff.org/pages/tools', 'Privacy tools collection.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 280],
  ['Security and Privacy', 'Tools and Softwares', 'GRC DNS Testing', 'https://www.grc.com/dns/dns.htm', 'DNS security testing.', '["Free"]', 'tool', 'Advanced', 0, 0, 0, 4.5, 220],
  ['Security and Privacy', 'Tools and Softwares', 'Firefox Privacy', 'https://www.mozilla.org/en-US/firefox/privacy/products/', 'Privacy-focused browser.', '["Free"]', 'tool', 'Beginner', 0, 0, 0, 4.6, 260],
];

async function migrate() {
  console.log('Starting migration...');
  
  try {
    console.log('Inserting categories...');
    for (const cat of categories) {
      await pool.execute(
        'INSERT IGNORE INTO categories (name, slug, icon, color, description) VALUES (?, ?, ?, ?, ?)',
        [cat.name, cat.slug, cat.icon, cat.color, cat.description]
      );
    }
    console.log(`Inserted ${categories.length} categories`);
    
    console.log('Inserting resources...');
    for (const r of resources) {
      await pool.execute(
        'INSERT IGNORE INTO resources (category, subcategory, title, url, description, tags, type, difficulty, is_premium, is_trending, is_new, rating, votes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        r
      );
    }
    console.log(`Inserted ${resources.length} resources`);
    
    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed:', error.message);
  }
  
  await pool.end();
}

migrate();