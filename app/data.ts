type Project = {
  name: string
  description: string
  link: string
  image: string
  tech: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

// type BlogPost = {
//   title: string
//   description: string
//   link: string
//   uid: string
// }

type SocialLink = {
  label: string
  link: string
}



export const PROJECTS = [
  {
    name: 'Financial Data Processing',
    description:
      'Transaction management with RBAC, ORM optimization, and real-time aggregation.',
    link: 'https://github.com/Muskan-Tarafder/Finance_Backend_Assignment',
    image: 'https://opengraph.githubassets.com/1/Muskan-Tarafder/Finance_Backend_Assignment',
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'RBAC'],
    id: 'project1',
  },
  {
    name: 'ATS Integration Middleware',
    description:
      'SAP SuccessFactors integration via OData v2 for candidate creation and job tracking.',
    link: 'https://github.com/Muskan-Tarafder/ATS-Integration',
    image: '/images/ATS.png',
    tech: ['Django', 'OData v2', 'SAP SuccessFactors', 'Serverless'],
    id: 'project2',
  },
  {
    name: 'Hospital Management System',
    description:
      'Patient records and scheduling on AWS Lambda + Django with async PostgreSQL and RBAC.',
    link: 'https://github.com/Muskan-Tarafder/ATS-Integration', // update if needed
    image: '/images/HMS.png',
    tech: ['AWS Lambda', 'Django', 'PostgreSQL', 'Async', 'RBAC'],
    id: 'project3',
  },
  {
    name: 'Library Management System',
    description:
      'Inventory and student tracking APIs with optimized indexing.',
    link: 'https://github.com/Muskan-Tarafder/Library-Management',
    image: './images/LMS.png',
    tech: ['Flask', 'MySQL', 'REST API'],
    id: 'project4',
  },
  {
    name: 'ProseAndMelody',
    description:
      'Generates Spotify playlists from book preferences using hybrid SVD.',
    link: 'https://proseandmelody.onrender.com',
    image: '/images/PandM.jpg',
    tech: ['Flask', 'MongoDB', 'Spotify API', 'OpenLibrary API', 'SVD'],
    id: 'project5',
  },
  {
    name: 'Customer Churn Prediction',
    description:
      '86.6% accuracy churn classifier with a MySQL-backed inference API and dashboard.',
    link: 'https://github.com/Muskan-Tarafder/ChurnPrediction',
    image: 'https://opengraph.githubassets.com/1/Muskan-Tarafder/ChurnPrediction',
    tech: ['scikit-learn', 'Pandas', 'MySQL'],
    id: 'project6',
  }
];

// export const WORK_EXPERIENCE: WorkExperience[] = [
//   {
//     company: 'Reglazed Studio',
//     title: 'CEO',
//     start: '2024',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work1',
//   },
//   {
//     company: 'Freelance',
//     title: 'Design Engineer',
//     start: '2022',
//     end: '2024',
//     link: 'https://ibelick.com',
//     id: 'work2',
//   },
//   {
//     company: 'Freelance',
//     title: 'Front-end Developer',
//     start: '2017',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work3',
//   },
// ]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
//   {
//     title: 'Why I left my job to start my own company',
//     description:
//       'A deep dive into my decision to leave my job and start my own company',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-2',
//   },
//   {
//     title: 'What I learned from my first year of freelancing',
//     description:
//       'A look back at my first year of freelancing and what I learned',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-3',
//   },
//   {
//     title: 'How to Export Metadata from MDX for Next.js SEO',
//     description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
//     link: '/blog/example-mdx-metadata',
//     uid: 'blog-4',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/muskan-tarafder',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/muskan-tarafder',
  }
]

export const EMAIL = 'muskantarafder357@email.com'

