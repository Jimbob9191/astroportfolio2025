export interface CaseStudy {
  slug: string;
  title: string;
  thumbnail: string;
  heroImage: string;
  categories: string[];
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
  role: string;
  layout: 'grid' | 'masonry' | 'fullwidth';
  timeline: string;
  client: string;
  team: string[];
  tools: string[];
  research: {
    methods: string[];
    findings: string;
    insights: string[];
  };
  process: {
    steps: {
      title: string;
      description: string;
    }[];
  };
  metrics: {
    before: Record<string, string>;
    after: Record<string, string>;
  };
  galleryImages: {
    thumbnail: string;
    large: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'metamask-onboarding',
    title: 'Improving MetaMask\'s Onboarding',
    thumbnail: '/metamaskimages/metamask-6.webp',
    heroImage: '/metamaskimages/metamask-1.webp',
    categories: ['UX/UI Design', 'Mobile App', 'Fintech'],
    overview: 'A comprehensive redesign of MetaMask\'s mobile onboarding experience to reduce confusion and build trust for new cryptocurrency users.',
    problem: 'MetaMask has millions of users worldwide and a wide range of features that they can interact with. Upon opening the app for the first time, the user is walked through a short onboarding process in order to set up their wallet. For seasoned crypto enthusiasts this shouldn\'t be an issue, but for first timers this can be a little overwhelming or confusing. The process feels half hearted and unprofessional, with inconsistent styling of buttons, inputs and typography that reduces trust in the platform.',
    approach: 'I analyzed the existing onboarding flow and identified key pain points in the user experience. My approach focused on creating consistency across all touchpoints, establishing clear visual hierarchy, and building trust through professional design patterns that align with financial application standards.',
    outcome: 'The redesigned onboarding experience provides a more cohesive and trustworthy first impression, with consistent styling, clear typography hierarchy, and improved color schemes that inspire confidence in new users entering the cryptocurrency space.',
    role: 'UX/UI Design',
    layout: 'grid',
    timeline: '1 afternoon',
    client: 'MetaMask',
    team: ['UX Designer'],
    tools: ['Figma', 'Principle', 'Maze'],
    research: {
      methods: ['Heuristic Evaluation', 'Competitive Analysis', 'User Flow Analysis'],
      findings: 'The existing onboarding process had four main steps: accepting terms of use, creating a password, reviewing recovery phrase, and entering the recovery phrase. While brief, the information was presented in an inconsistent and confusing format with significant variation in styling of buttons, inputs, and typography.',
      insights: [
        'Inconsistent UI patterns reduced user trust',
        'Typography hierarchy was unclear across steps',
        'Button and input styling varied significantly',
        'Color scheme didn\'t inspire confidence for financial app'
      ]
    },
    process: {
      steps: [
        {
          title: 'Analysis',
          description: 'Conducted thorough analysis of the existing onboarding flow, identifying inconsistencies and trust issues in the current design.'
        },
        {
          title: 'Design System',
          description: 'Established clear typography hierarchy, consolidated input and button styling, and developed a trustworthy color scheme.'
        },
        {
          title: 'Redesign',
          description: 'Applied the new design system across all onboarding steps to create a cohesive and professional experience.'
        },
        {
          title: 'Validation',
          description: 'Tested the redesigned flow to ensure improved clarity and trust-building throughout the onboarding process.'
        }
      ]
    },
    metrics: {
      before: {
        userTrust: 'Low',
        designConsistency: '30%',
        completionClarity: 'Poor'
      },
      after: {
        userTrust: 'High',
        designConsistency: '95%',
        completionClarity: 'Excellent'
      }
    },
    galleryImages: [
      {
        thumbnail: '/metamaskimages/metamask-4.webp',
        large: '/metamaskimages/metamask-4.webp',
        width: 1260,
        height: 750,
        alt: 'MetaMask redesigned onboarding screens'
      },
      {
        thumbnail: '/metamaskimages/metamask-5.webp',
        large: '/metamaskimages/metamask-5.webp',
        width: 1260,
        height: 750,
        alt: 'MetaMask onboarding flow improvements'
      },
      {
        thumbnail: '/metamaskimages/metamask-6.webp',
        large: '/metamaskimages/metamask-6.webp',
        width: 1260,
        height: 750,
        alt: 'MetaMask design system and components'
      },
      {
        thumbnail: '/metamaskimages/metamask-7.webp',
        large: '/metamaskimages/metamask-7.webp',
        width: 1260,
        height: 750,
        alt: 'MetaMask typography and color improvements'
      },
      {
        thumbnail: '/metamaskimages/metamask-8.webp',
        large: '/metamaskimages/metamask-8.webp',
        width: 1260,
        height: 750,
        alt: 'MetaMask button and input styling'
      },
      {
        thumbnail: '/metamaskimages/metamask-9.webp',
        large: '/metamaskimages/metamask-9.webp',
        width: 1260,
        height: 750,
        alt: 'MetaMask final onboarding solution'
      }
    ]
  },
  {
    slug: 'finance-app-redesign',
    title: 'Redesigning A Client Management Portal',
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: '/crsmiimages/crsmi-1.webp',
    categories: ['UX/UI Design', 'Product Strategy', 'B2B Software'],
    overview: 'A comprehensive redesign of a client management portal, improving workflow efficiency and user experience for professional service teams.',
    problem: 'Having been used for a number of years, with features slowly being added throughout — the site has grown in capabilities but has lost consistency in its design and functionality. As features were added to the site, no thought was given to their layout and how they are accessed — leading to a menu filled with mismatched reports and capabilities. These non-standardised forms and page layouts make for a very disjointed experience and trying to use the site on a page that isn\'t 16:9 made for an even worse time.',
    approach: 'I conducted extensive user research with account managers and client service teams to identify pain points, created optimized user flows and wireframes, and designed a new interface that prioritizes workflow efficiency and data accessibility.',
    outcome: 'The redesign resulted in a 45% reduction in task completion time, a 30% reduction in support tickets, and significantly improved user satisfaction scores among professional service teams.',
    role: 'UX/UI Design',
    layout: 'grid',
    timeline: '3 months',
    client: 'coeo',
    team: ['UX Designer', 'UI Designer', '2 Developers', 'Product Manager'],
    tools: ['Figma', 'Maze', 'UserTesting', 'Principle'],
    research: {
      methods: ['User Interviews', 'Usability Testing', 'Analytics Review'],
      findings: 'Through our research, we discovered that account managers struggled with fragmented client information across multiple systems and found the client communication history difficult to navigate. The portal\'s information architecture needed significant improvement.',
      insights: [
        '87% of users found the navigation confusing',
        'Users wanted better client data organization and search functionality',
        'Mobile usage was increasing but the experience wasn\'t optimized for field work'
      ]
    },
    process: {
      steps: [
        {
          title: 'Discovery',
          description: 'Conducted stakeholder interviews and analyzed existing user data to understand pain points and opportunities.'
        },
        {
          title: 'Research',
          description: 'Performed user interviews and usability testing to gather insights about user needs and pain points.'
        },
        {
          title: 'Design',
          description: 'Created wireframes, prototypes, and high-fidelity designs based on research findings and user feedback.'
        },
        {
          title: 'Testing',
          description: 'Conducted iterative testing sessions to validate design decisions and gather feedback for improvements.'
        }
      ]
    },
    metrics: {
      before: {
        taskCompletionTime: '15 min avg',
        userSatisfaction: '65%',
      },
      after: {
        taskCompletionTime: '8 min avg',
        userSatisfaction: '92%',
      }
    },
    galleryImages: [
      {
        thumbnail: '/crsmiimages/crsmi-6.webp',
        large: '/crsmiimages/crsmi-6.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal dashboard design'
      },
      {
        thumbnail: '/crsmiimages/crsmi-7.webp',
        large: '/crsmiimages/crsmi-7.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal interface design'
      },
      {
        thumbnail: '/crsmiimages/crsmi-8.webp',
        large: '/crsmiimages/crsmi-8.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal features'
      },
      {
        thumbnail: '/crsmiimages/crsmi-9.webp',
        large: '/crsmiimages/crsmi-9.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal user interface'
      },
      {
        thumbnail: '/crsmiimages/crsmi-10.webp',
        large: '/crsmiimages/crsmi-10.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal design system'
      },
      {
        thumbnail: '/crsmiimages/crsmi-4.webp',
        large: '/crsmiimages/crsmi-4.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal components'
      },
      {
        thumbnail: '/crsmiimages/crsmi-5.webp',
        large: '/crsmiimages/crsmi-5.webp',
        width: 1260,
        height: 750,
        alt: 'CRSMI client management portal final design'
      }
    ]
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['UX Research', 'UI Design', 'Product Management'],
    overview: 'An end-to-end e-commerce solution focused on conversion optimization and seamless user experience.',
    problem: 'The client needed a modern e-commerce platform that would improve conversion rates and provide a better mobile shopping experience.',
    approach: 'I led a cross-functional team through the product development lifecycle, from research and prototyping to implementation and testing.',
    outcome: 'The new platform achieved a 60% increase in mobile conversions and a 25% overall increase in sales within the first three months.',
    role: 'Product Manager and UX Designer, overseeing the entire project from concept to launch.',
    layout: 'masonry',
    timeline: '6 months',
    client: 'Retail Chain',
    team: ['Product Manager', 'UX Designer', '3 Developers', 'QA Engineer'],
    tools: ['Shopify', 'Figma', 'Hotjar', 'Google Analytics'],
    research: {
      methods: ['A/B Testing', 'Heat Mapping', 'Customer Surveys'],
      findings: 'Mobile users were abandoning carts due to a complicated checkout process and slow page load times. Desktop conversion rates were significantly higher than mobile.',
      insights: [
        'Mobile cart abandonment rate was 78%',
        'Page load times exceeded 5 seconds on mobile',
        'Users requested better product filtering options'
      ]
    },
    process: {
      steps: [
        {
          title: 'Analysis',
          description: 'Analyzed existing platform performance and identified key areas for improvement.'
        },
        {
          title: 'Strategy',
          description: 'Developed a comprehensive strategy focusing on mobile optimization and conversion rate improvement.'
        },
        {
          title: 'Implementation',
          description: 'Rebuilt the platform with a mobile-first approach and optimized checkout flow.'
        },
        {
          title: 'Optimization',
          description: 'Continuously monitored performance metrics and made iterative improvements.'
        }
      ]
    },
    metrics: {
      before: {
        mobileConversion: '1.2%',
        pageLoadTime: '5.2s',
        cartAbandonment: '78%'
      },
      after: {
        mobileConversion: '3.5%',
        pageLoadTime: '2.1s',
        cartAbandonment: '45%'
      }
    },
    galleryImages: [
      {
        thumbnail: 'https://images.pexels.com/photos/6802051/pexels-photo-6802051.jpeg?auto=compress&cs=tinysrgb&w=600',
        large: 'https://images.pexels.com/photos/6802051/pexels-photo-6802051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1260,
        height: 750,
        alt: 'E-commerce platform user flow'
      },
      {
        thumbnail: 'https://images.pexels.com/photos/6802062/pexels-photo-6802062.jpeg?auto=compress&cs=tinysrgb&w=600',
        large: 'https://images.pexels.com/photos/6802062/pexels-photo-6802062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1260,
        height: 750,
        alt: 'E-commerce platform wireframes'
      }
    ]
  },
  {
    slug: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    thumbnail: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/7089387/pexels-photo-7089387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Data Visualization', 'UX/UI Design'],
    overview: 'A patient management dashboard designed for healthcare providers to monitor and analyze patient data efficiently.',
    problem: 'Healthcare providers struggled with fragmented data systems and inefficient interfaces for tracking patient information.',
    approach: 'I designed an intuitive dashboard that centralizes critical information, utilizing user-centered design principles and iterative testing.',
    outcome: 'The dashboard reduced time spent on administrative tasks by 35% and improved data accuracy by consolidating previously disparate systems.',
    role: 'UX/UI Designer focused on information architecture and data visualization.',
    layout: 'fullwidth',
    timeline: '4 months',
    client: 'Healthcare Provider',
    team: ['UX Designer', 'Data Scientist', '2 Developers'],
    tools: ['Figma', 'D3.js', 'Amplitude', 'Miro'],
    research: {
      methods: ['Contextual Inquiry', 'Task Analysis', 'User Interviews'],
      findings: 'Healthcare providers were spending excessive time switching between multiple systems and manually compiling patient data.',
      insights: [
        'Average of 45 minutes spent per day on data entry',
        'High error rate in manual data transfer',
        'Limited real-time patient monitoring capabilities'
      ]
    },
    process: {
      steps: [
        {
          title: 'Research',
          description: 'Conducted on-site observations and interviews with healthcare providers.'
        },
        {
          title: 'Information Architecture',
          description: 'Developed a new system structure that consolidates critical patient information.'
        },
        {
          title: 'Prototyping',
          description: 'Created interactive prototypes focusing on efficient data visualization.'
        },
        {
          title: 'Implementation',
          description: 'Worked closely with developers to ensure accurate implementation of design specifications.'
        }
      ]
    },
    metrics: {
      before: {
        timeOnTasks: '45 min/day',
        errorRate: '12%',
        dataAccessTime: '5 min'
      },
      after: {
        timeOnTasks: '15 min/day',
        errorRate: '2%',
        dataAccessTime: '30 sec'
      }
    },
    galleryImages: [
      {
        thumbnail: 'https://images.pexels.com/photos/6802069/pexels-photo-6802069.jpeg?auto=compress&cs=tinysrgb&w=600',
        large: 'https://images.pexels.com/photos/6802069/pexels-photo-6802069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1260,
        height: 750,
        alt: 'Healthcare dashboard components'
      }
    ]
  },
  {
    slug: 'travel-app-design',
    title: 'Travel App Design',
    thumbnail: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['UX/UI Design', 'Mobile App'],
    overview: 'A personalized travel companion app that helps users discover, plan, and book unique travel experiences.',
    problem: 'Travelers were overwhelmed by the fragmented process of researching, planning, and booking their trips across multiple platforms.',
    approach: 'I created a streamlined, intuitive interface that guides users through the entire travel process while incorporating personalized recommendations.',
    outcome: 'The app achieved over 100,000 downloads in its first quarter and maintained a 4.7-star rating with high user retention.',
    role: 'Lead UX/UI Designer responsible for the app\'s visual design, interaction design, and prototyping.',
    layout: 'grid',
    timeline: '5 months',
    client: 'Travel Tech Startup',
    team: ['UX Designer', 'UI Designer', '3 Developers', 'Content Strategist'],
    tools: ['Figma', 'Principle', 'Firebase Analytics', 'Maze'],
    research: {
      methods: ['User Surveys', 'Competitor Analysis', 'User Journey Mapping'],
      findings: 'Users spent an average of 10 hours planning a trip across multiple websites and apps, leading to decision fatigue.',
      insights: [
        'Users wanted personalized recommendations',
        'Trip planning took multiple sessions',
        'Integration with existing travel tools was important'
      ]
    },
    process: {
      steps: [
        {
          title: 'Research',
          description: 'Analyzed user behavior and pain points in travel planning.'
        },
        {
          title: 'Design System',
          description: 'Created a comprehensive design system for consistent user experience.'
        },
        {
          title: 'Prototyping',
          description: 'Developed interactive prototypes for user testing and validation.'
        },
        {
          title: 'Launch',
          description: 'Coordinated with development team for successful app launch.'
        }
      ]
    },
    metrics: {
      before: {
        planningTime: '10 hours',
        userSatisfaction: 'N/A',
        retention: 'N/A'
      },
      after: {
        planningTime: '2 hours',
        userSatisfaction: '4.7/5',
        retention: '65%'
      }
    },
    galleryImages: [
      {
        thumbnail: 'https://images.pexels.com/photos/6802073/pexels-photo-6802073.jpeg?auto=compress&cs=tinysrgb&w=600',
        large: 'https://images.pexels.com/photos/6802073/pexels-photo-6802073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1260,
        height: 750,
        alt: 'Travel app style guide'
      }
    ]
  },
  {
    slug: 'internal-design-system',
    title: 'Enterprise Design System',
    thumbnail: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Design Systems', 'Product Management'],
    overview: 'A comprehensive design system created for a large enterprise to unify their digital products and streamline development.',
    problem: 'The company had inconsistent interfaces across products, leading to poor user experience and inefficient development processes.',
    approach: 'I led the creation of a unified design system, including component libraries, design principles, and documentation.',
    outcome: 'Development time for new features decreased by 40%, and user satisfaction improved across all digital products.',
    role: 'Product Manager and UX/UI Designer, leading both the design and implementation strategy of the system.',
    layout: 'masonry',
    timeline: '8 months',
    client: 'Enterprise Software Company',
    team: ['Design System Lead', '2 UX Designers', '3 Developers', 'Technical Writer'],
    tools: ['Figma', 'Storybook', 'GitHub', 'Notion'],
    research: {
      methods: ['Component Audit', 'Developer Interviews', 'Usage Analytics'],
      findings: 'Inconsistent UI patterns across products led to increased development time and maintenance costs.',
      insights: [
        'Over 200 button variations existed',
        'Average component development took 2 weeks',
        'Documentation was outdated or missing'
      ]
    },
    process: {
      steps: [
        {
          title: 'Audit',
          description: 'Conducted comprehensive audit of existing components and patterns.'
        },
        {
          title: 'Architecture',
          description: 'Designed scalable component architecture and naming conventions.'
        },
        {
          title: 'Development',
          description: 'Built core components and established contribution guidelines.'
        },
        {
          title: 'Documentation',
          description: 'Created extensive documentation and usage guidelines.'
        }
      ]
    },
    metrics: {
      before: {
        componentCount: '1000+',
        devTime: '2 weeks',
        consistency: '45%'
      },
      after: {
        componentCount: '200',
        devTime: '2 days',
        consistency: '95%'
      }
    },
    galleryImages: [
      {
        thumbnail: 'https://images.pexels.com/photos/6802080/pexels-photo-6802080.jpeg?auto=compress&cs=tinysrgb&w=600',
        large: 'https://images.pexels.com/photos/6802080/pexels-photo-6802080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1260,
        height: 750,
        alt: 'Design system final presentation'
      }
    ]
  },
];