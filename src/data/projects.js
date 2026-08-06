const PROJECTS = [
  {
    title: 'DeepHunt AI | FYP',
    category: 'AI',
    desc: 'DeepHunt AI is a cloud-ready, multi-agent AI platform that automates career opportunity discovery by autonomously scraping and aggregating jobs, internships, and scholarships from global sources.',
    highlights: [
      'Built LangGraph-based agent pipelines to autonomously scrape and aggregate global career opportunities',
      'Engineered an LLM-powered personalization engine utilizing semantic vector search (pgvector) and a reinforcement learning-based contextual bandit model',
      'Implemented skill gap detection and adaptive learning path recommendations',
      'Developed a Smart Application Assistant to auto-generate tailored resumes and cover letters'
    ],
    tech: ['LangChain', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #0D1B2A, #1B263B)',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    title: '4-Phase C++ Logic Compiler',
    category: 'Python',
    desc: 'Developed a web-based four-phase C++ compiler using Python and Flask, featuring a browser-based interface for real-time code writing and execution.',
    highlights: [
      'Implemented full lexical, syntax, and semantic analysis alongside code generation',
      'Engineered the backend compiler logic in Python',
      'Integrated a real-time browser-based interface using Flask'
    ],
    tech: ['Python', 'Flask', 'C++'],
    gradient: 'linear-gradient(135deg, #1A0B2E, #32174D)',
    demo: '#',
    github: '#',
  },
  {
    title: 'Smart Traffic Monitoring System',
    category: 'Python',
    desc: 'Developed a real-time intelligent traffic monitoring system using computer vision techniques for precise vehicle detection.',
    highlights: [
      'Leveraged computer vision techniques for real-time vehicle detection',
      'Implemented Non-Maximum Suppression (NMS) to improve detection accuracy',
      'Simulated adaptive traffic signal control utilizing Pygame'
    ],
    tech: ['Python', 'Computer Vision', 'Pygame'],
    gradient: 'linear-gradient(135deg, #061A0F, #0A2417)',
    demo: '#',
    github: '#',
  },
  {
    title: 'Facial Attendance System',
    category: 'Python',
    desc: 'Built an AI-based facial attendance system capable of recognizing individuals in real time using computer vision and machine learning.',
    highlights: [
      'Utilized computer vision and machine learning for real-time individual recognition',
      'Implemented SVM-based face classification for optimized accuracy',
      'Incorporated automated duplicate attendance prevention to ensure reliability'
    ],
    tech: ['Python', 'Machine Learning', 'SVM', 'Computer Vision'],
    gradient: 'linear-gradient(135deg, #1A0F14, #2E1B24)',
    demo: '#',
    github: '#',
  },
  {
    title: 'Movie Recommendation System',
    category: 'C++',
    desc: 'Developed a preference-based movie recommendation system with user authentication and subscription-based functionality.',
    highlights: [
      'Engineered recommendation logic to personalize movie suggestions based on user preferences',
      'Implemented secure user authentication and subscription management',
      'Designed tailored content delivery algorithms in C++'
    ],
    tech: ['C++'],
    gradient: 'linear-gradient(135deg, #0A1128, #121F45)',
    demo: '#',
    github: '#',
  },
]

export default Object.freeze(PROJECTS)
