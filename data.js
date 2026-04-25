const resources = [
    {
        category: "Programming/Development",
        subcategory: "Guides and Tutorials",
        title: "MDN Web Docs - JavaScript Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        description: "Comprehensive guide to JavaScript fundamentals and advanced concepts from Mozilla."
    },
    {
        category: "Programming/Development",
        subcategory: "Guides and Tutorials",
        title: "React Official Tutorial",
        url: "https://react.dev/learn",
        description: "Official React documentation with interactive examples and step-by-step tutorial."
    },
    {
        category: "Programming/Development",
        subcategory: "Tools and Softwares",
        title: "Visual Studio Code",
        url: "https://code.visualstudio.com/",
        description: "Powerful code editor with built-in debugging, Git integration, and extensions."
    },
    {
        category: "Programming/Development",
        subcategory: "Tools and Softwares",
        title: "GitHub",
        url: "https://github.com",
        description: "Platform for version control and collaboration with millions of developers."
    },
    {
        category: "Programming/Development",
        subcategory: "FAQs and Basics",
        title: "What is an API?",
        url: "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
        description: "Beginner's guide to understanding APIs and how they work."
    },
    {
        category: "Programming/Development",
        subcategory: "FAQs and Basics",
        title: "Git Basics Explained",
        url: "https://rogerdudler.github.io/git-guide/",
        description: "Simple and clear Git guide for beginners covering essential commands."
    },
    {
        category: "Programming/Development",
        subcategory: "Common Mistakes/Issues",
        title: "Fixing CORS Errors",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
        description: "Understanding and resolving Cross-Origin Resource Sharing errors."
    },
    {
        category: "Programming/Development",
        subcategory: "Common Mistakes/Issues",
        title: "JavaScript Null vs Undefined",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",
        description: "Guide to understanding the difference between null and undefined in JavaScript."
    },
    {
        category: "UI/UX Design",
        subcategory: "Guides and Tutorials",
        title: "Figma Complete Guide",
        url: "https://www.figma.com/resource-library/guide/",
        description: "Comprehensive tutorial series for learning Figma from basics to advanced."
    },
    {
        category: "UI/UX Design",
        subcategory: "Guides and Tutorials",
        title: "Google Material Design",
        url: "https://m3.material.io/",
        description: "Google's design system with guidelines, components, and color tools."
    },
    {
        category: "UI/UX Design",
        subcategory: "Tools and Softwares",
        title: "Figma",
        url: "https://www.figma.com/",
        description: "Collaborative interface design tool for teams with real-time editing."
    },
    {
        category: "UI/UX Design",
        subcategory: "Tools and Softwares",
        title: "Adobe XD",
        url: "https://www.adobe.com/products/xd.html",
        description: "Vector-based UX design tool for prototyping and sharing designs."
    },
    {
        category: "UI/UX Design",
        subcategory: "FAQs and Basics",
        title: "Design Principles 101",
        url: "https://www.interaction-design.org/literature/article/human-design-principles",
        description: "Introduction to fundamental design principles for better user experiences."
    },
    {
        category: "UI/UX Design",
        subcategory: "FAQs and Basics",
        title: "Color Theory Basics",
        url: "https://www.colormatters.com/color-theory",
        description: "Understanding colors and how to use them effectively in design."
    },
    {
        category: "UI/UX Design",
        subcategory: "Common Mistakes/Issues",
        title: "Fixing Font Rendering Issues",
        url: "https://fonts.google.com/specimen/Roboto",
        description: "Solutions for common font display problems across different browsers."
    },
    {
        category: "UI/UX Design",
        subcategory: "Common Mistakes/Issues",
        title: "Responsive Design Breakpoints",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_breakpoints",
        description: "Guide to setting correct breakpoints for responsive layouts."
    },
    {
        category: "Marketing",
        subcategory: "Guides and Tutorials",
        title: "Google Analytics 4 Tutorial",
        url: "https://support.google.com/analytics/answer/10089679",
        description: "Official guide to setting up and using Google Analytics 4."
    },
    {
        category: "Marketing",
        subcategory: "Guides and Tutorials",
        title: "SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals",
        description: "Google's official SEO guide for improving search rankings."
    },
    {
        category: "Marketing",
        subcategory: "Tools and Softwares",
        title: "Mailchimp",
        url: "https://mailchimp.com/",
        description: "Email marketing platform with automation and analytics tools."
    },
    {
        category: "Marketing",
        subcategory: "Tools and Softwares",
        title: "Hootsuite",
        url: "https://www.hootsuite.com/",
        description: "Social media management platform for scheduling and analytics."
    },
    {
        category: "Marketing",
        subcategory: "FAQs and Basics",
        title: "What is Content Marketing?",
        url: "https://contentmarketinginstitute.com/what-is-content-marketing/",
        description: "Introduction to content marketing strategies and best practices."
    },
    {
        category: "Marketing",
        subcategory: "FAQs and Basics",
        title: "Email Marketing Best Practices",
        url: "https://www.mailchimp.com/resources/email-marketing-best-practices/",
        description: "Essential tips for effective email marketing campaigns."
    },
    {
        category: "Marketing",
        subcategory: "Common Mistakes/Issues",
        title: "Fixing Low Email Open Rates",
        url: "https://www.campaignmonitor.com/blog/low-email-open-rates/",
        description: "Solutions for improving email engagement and open rates."
    },
    {
        category: "Marketing",
        subcategory: "Common Mistakes/Issues",
        title: "Common SEO Mistakes",
        url: "https://www.searchenginejournal.com/common-seo-mistakes/",
        description: "List of frequent SEO errors and how to avoid them."
    },
    {
        category: "Product and Project Management",
        subcategory: "Guides and Tutorials",
        title: "Agile Methodology Guide",
        url: "https://www.atlassian.com/agile",
        description: "Comprehensive guide to Agile and Scrum methodologies."
    },
    {
        category: "Product and Project Management",
        subcategory: "Guides and Tutorials",
        title: "Product Management 101",
        url: "https://www.productplan.com/product-management-101/",
        description: "Introduction to product management roles and responsibilities."
    },
    {
        category: "Product and Project Management",
        subcategory: "Tools and Softwares",
        title: "Jira",
        url: "https://www.atlassian.com/software/jira",
        description: "Project management and issue tracking tool for agile teams."
    },
    {
        category: "Product and Project Management",
        subcategory: "Tools and Softwares",
        title: "Trello",
        url: "https://trello.com/",
        description: "Visual project management with boards, lists, and cards."
    },
    {
        category: "Product and Project Management",
        subcategory: "FAQs and Basics",
        title: "Kanban vs Scrum",
        url: "https://www.atlassian.com//agile/kanban/scrum-vs-kanban",
        description: "Comparison of popular agile methodologies."
    },
    {
        category: "Product and Project Management",
        subcategory: "FAQs and Basics",
        title: "Sprint Planning Guide",
        url: "https://www.scrum.org/resources/sprint-planning",
        description: "How to run effective sprint planning meetings."
    },
    {
        category: "Product and Project Management",
        subcategory: "Common Mistakes/Issues",
        title: "Managing Scope Creep",
        url: "https://www.projectmanager.com/blog/scope-creep",
        description: "Strategies for controlling project scope and requirements."
    },
    {
        category: "Product and Project Management",
        subcategory: "Common Mistakes/Issues",
        title: "Prioritization Frameworks",
        url: "https://www.producthunt.com/prioriitization-frameworks-for-pms",
        description: "Overview of popular prioritization methods like RICE and MoSCoW."
    },
    {
        category: "Business and Finance",
        subcategory: "Guides and Tutorials",
        title: "Financial Modeling Guide",
        url: "https://corporatefinanceinstitute.com/courses/financial-modeling/",
        description: "Learn how to build financial models from scratch."
    },
    {
        category: "Business and Finance",
        subcategory: "Guides and Tutorials",
        title: "Startup Funding Guide",
        url: "https://www.ycombinator.com/library/",
        description: "Y Combinator's guide to startup funding and growth."
    },
    {
        category: "Business and Finance",
        subcategory: "Tools and Softwares",
        title: "QuickBooks",
        url: "https://quickbooks.intuit.com/",
        description: "Accounting software for small businesses."
    },
    {
        category: "Business and Finance",
        subcategory: "Tools and Softwares",
        title: "Xero",
        url: "https://www.xero.com/",
        description: "Cloud-based accounting platform for small businesses."
    },
    {
        category: "Business and Finance",
        subcategory: "FAQs and Basics",
        title: "Understanding P&L Statements",
        url: "https://www.investopedia.com/terms/p/profit-and-loss-statement.asp",
        description: "Guide to reading and creating profit and loss statements."
    },
    {
        category: "Business and Finance",
        subcategory: "FAQs and Basics",
        title: "Cash Flow Management",
        url: "https://www.fundera.com/blog/cash-flow-management-guide",
        description: "Essential tips for managing business cash flow."
    },
    {
        category: "Business and Finance",
        subcategory: "Common Mistakes/Issues",
        title: "Common Accounting Errors",
        url: "https://www.accountingtools.com/articles/common-accounting-errors",
        description: "Frequent accounting mistakes and how to avoid them."
    },
    {
        category: "Business and Finance",
        subcategory: "Common Mistakes/Issues",
        title: "Tax Deduction Mistakes",
        url: "https://www.turbotax.com/tax-deductions/common-mistakes",
        description: "Common tax errors small businesses should avoid."
    },
    {
        category: "Sales and Growth",
        subcategory: "Guides and Tutorials",
        title: "Sales Methodology Guide",
        url: "https://www.salesforce.com/resources/articles/sales-methodology/",
        description: "Overview of popular sales methodologies and frameworks."
    },
    {
        category: "Sales and Growth",
        subcategory: "Guides and Tutorials",
        title: "Growth Hacking 101",
        url: "https://growthhackers.com/growth-hacking-101",
        description: "Introduction to growth hacking strategies for startups."
    },
    {
        category: "Sales and Growth",
        subcategory: "Tools and Softwares",
        title: "Salesforce",
        url: "https://www.salesforce.com/",
        description: "Leading CRM platform for sales and customer relationship management."
    },
    {
        category: "Sales and Growth",
        subcategory: "Tools and Softwares",
        title: "HubSpot CRM",
        url: "https://www.hubspot.com/products/crm",
        description: "Free CRM with sales, marketing, and service tools."
    },
    {
        category: "Sales and Growth",
        subcategory: "FAQs and Basics",
        title: "Sales Funnel Explained",
        url: "https://www.smartinsights.com/marketing-sales/sales-funnel/",
        description: "Understanding the customer journey through the sales funnel."
    },
    {
        category: "Sales and Growth",
        subcategory: "FAQs and Basics",
        title: "Cold Calling Tips",
        url: "https://www.salescoach.org/cold-calling-tips",
        description: "Best practices for successful cold calling."
    },
    {
        category: "Sales and Growth",
        subcategory: "Common Mistakes/Issues",
        title: "Common Sales Objections",
        url: "https://www.saleshunter.com/sales-objections",
        description: "How to handle and overcome common sales objections."
    },
    {
        category: "Sales and Growth",
        subcategory: "Common Mistakes/Issues",
        title: "Closing Techniques",
        url: "https://www.closes.com/closing-techniques",
        description: "Effective sales closing methods and mistakes to avoid."
    },
    {
        category: "Events and Community",
        subcategory: "Guides and Tutorials",
        title: "Event Planning Guide",
        url: "https://www.eventbrite.com/blog/event-planning-guide/",
        description: "Complete guide to planning successful events."
    },
    {
        category: "Events and Community",
        subcategory: "Guides and Tutorials",
        title: "Community Building 101",
        url: "https://www.communitybuildingguide.com/",
        description: "Strategies for building and engaging online communities."
    },
    {
        category: "Events and Community",
        subcategory: "Tools and Softwares",
        title: "Eventbrite",
        url: "https://www.eventbrite.com/",
        description: "Platform for creating and discovering events."
    },
    {
        category: "Events and Community",
        subcategory: "Tools and Softwares",
        title: "Meetup",
        url: "https://www.meetup.com/",
        description: "Platform for organizing and joining local groups and events."
    },
    {
        category: "Events and Community",
        subcategory: "FAQs and Basics",
        title: "Event Marketing Tips",
        url: "https://www.eventmarketer.com/event-marketing-guide",
        description: "How to promote your event effectively."
    },
    {
        category: "Events and Community",
        subcategory: "FAQs and Basics",
        title: "Community Management Basics",
        url: "https://www.maven.co/community-management-guide",
        description: "Introduction to managing online communities."
    },
    {
        category: "Events and Community",
        subcategory: "Common Mistakes/Issues",
        title: "Low Event Attendance",
        url: "https://www.eventbrite.com/blog/low-attendance",
        description: "Solutions for improving event turnout."
    },
    {
        category: "Events and Community",
        subcategory: "Common Mistakes/Issues",
        title: "Engagement Strategies",
        url: "https://www.communityroundtable.com/engagement",
        description: "Ways to increase community member engagement."
    }
];