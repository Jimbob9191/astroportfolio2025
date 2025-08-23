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
  outcomes?: {
    content: string;
  };
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
    slug: 'payment-portal-redesign',
    title: 'Redesigning A Payment Portal',
    thumbnail: '/mycrsimages/mycrs-1.webp',
    heroImage: '/mycrsimages/mycrs-1.webp',
    categories: ['UX/UI Design', 'Mobile Optimisation', 'Accessibility'],
    overview: 'A comprehensive redesign of MYCRS payment portal, transforming it from a desktop-focused platform to a mobile-first solution that improved user trust and payment completion rates.',
    problem: 'By 2019, the customer portal had become outdated and ineffective. The last redesign in 2017 had overlooked accessibility standards and failed to prioritise user experience. The platform\'s heavy reliance on JavaScript caused frequent errors across devices, resulting in an inconsistent and frustrating user journey. Customers were often unable to complete essential tasks smoothly, leading to decreased trust, reduced satisfaction, and ultimately, a measurable decline in revenue.\n\nI aimed to redesign the customer portal to deliver a consistent, accessible, and user friendly experience across devices, restoring customer trust, increasing satisfaction and driving revenue higher.',
    approach: 'I worked with the web development team to improve the user experience on mobile to take our platform back to a market-leading position as it had been in the past. Taking into account accessibility, customer satisfaction and future expandability.',
    outcome: 'After shipping the first iteration of the new portal in October 2021 we saw an immediate decrease in bounce rate of nearly 20%, meaning users were much more trusting of the site from the get-go. We also continued to track payment performance, and users on the new portal were 20% more likely to clear their account in a single payment during their first visit to the site, whilst users setting up a payment arrangement were 50% more likely to make a token payment on the first day.',
    role: 'Lead UX/UI Designer',
    layout: 'masonry',
    timeline: '2 months',
    client: 'CRS / Finance',
    team: ['Lead Designer', 'Web Development Team', 'UX Researcher'],
    tools: ['Figma', 'Hotjar', 'Google Analytics', 'Trustpilot Analytics'],
    research: {
      methods: ['Heat Mapping', 'User Personas', 'Analytics Review', 'Customer Feedback Analysis'],
      insights: [
        'Customers did not immediately recognise the CRS brand and often dismissed it as unrelated to their debts. This led to confusion, mistrust and lower engagement with the service.',
        'Most customer interactions took place via SMS and email, typically accessed on a customer\'s mobile device during the workday or shortly after. To support this behaviour, a quick and seamless login process is essential to ensure an efficient and frictionless user journey.',
        'Frustrating experiences were leading to negative online reviews. Poor ratings then eroded trust, discourage new customers, and reinforce a cycle of low expectations and reduced engagement.',
        'Technical issues were reducing customer trust, stopping users from completing payments even after login had been completed.',
        'The homepage demanded too much personal information upfront, discouraging customers before they could explore.',
        'Before login, customers were given just enough information to contact CRS, but not enough to build the trust needed to make payments directly, leading most to reach out by email or phone first.'
      ]
    },
    process: {
      steps: [],
      details: 'As the lead designer, I was responsible for a complete overhaul of the portal\'s design, ensuring it was secure, intuitive and aligned with business goals. Given the portal\'s role as a primary revenue channel, timelines were extremely tight. My process consisted of:\n\n* Implementing heat mapping to analyse behaviour and identify pain points.\n* Conducted interviews with stakeholders and customer support agents to get a better understanding of the business goals and customer behaviour.\n* Creating user personas to guide design decisions.\n* Conducted quick user testing sessions internally using prototypes and wireframes to get early feedback.\n* Restructuring user flows to be more intuitive.\n* Establishing a consistent design system, consolidating the existing style for clarity and coherence.'
    },
    outcomes: {
      content: 'Throughout the project we had learned a lot about the user base and the niche use cases that users were running into whilst trying to use our platform. Whilst we couldn\'t implement all the functionality we wanted to at launch, we did manage to ship with a set of new features and some great performance improvements:\n\n* As we had to verify users identities with sensitive information, we changed some of the login questions to be hidden until a user had submitted a single piece of information, this played into the hands of commitment bias.\n* We developed some self-service tools inside the portal, including an interactive FAQ and account management features to reduce reliance on the call centre.\n* We design and developed an early example of CRS\' white label capabilities to expand the platform\'s potential for future growth. The added white labelling of customers brands would later boost trust significantly.\n* We added much clearer interaction feedback to assist customers from the beginning to the end of the payment process, reassuring customers whenever possible.\n* We implemented a much more in-depth account dashboard that allowed customers to fully understand the length of their payment arrangement, how much they were paying and when.'
    },
    metrics: {
      before: {
        bounceRate: '50%+',
        singlePaymentCompletion: 'Baseline',
        tokenPaymentRate: 'Baseline',
      },
      after: {
        bounceRate: '30%',
        singlePaymentCompletion: '+20%',
        tokenPaymentRate: '+50%'
      }
    },
    galleryImages: [
      {
        thumbnail: '/mycrsimages/mycrs-8.webp',
        large: '/mycrsimages/mycrs-8.webp',
        width: 1260,
        height: 750,
        alt: 'MYCRS payment portal redesign interface'
      },
      {
        thumbnail: '/mycrsimages/mycrs-5.webp',
        large: '/mycrsimages/mycrs-5.webp',
        width: 1260,
        height: 750,
        alt: 'MYCRS payment portal user experience improvements'
      },
      {
        thumbnail: '/mycrsimages/mycrs-6.webp',
        large: '/mycrsimages/mycrs-6.webp',
        width: 1260,
        height: 750,
        alt: 'MYCRS payment portal mobile optimization'
      },
      {
        thumbnail: '/mycrsimages/mycrs-7.webp',
        large: '/mycrsimages/mycrs-7.webp',
        width: 1260,
        height: 750,
        alt: 'MYCRS payment portal accessibility features'
      },
      {
        thumbnail: '/mycrsimages/mycrs-4.webp',
        large: '/mycrsimages/mycrs-4.webp',
        width: 1260,
        height: 750,
        alt: 'MYCRS payment portal design system'
      }
    ]
  },
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
    thumbnail: '/crsmiimages/crsmi-1.webp',
    heroImage: '/crsmiimages/crsmi-1.webp',
    categories: ['UX/UI Design', 'Product Strategy', 'B2B Software'],
    overview: 'A comprehensive redesign of a client management portal, improving workflow efficiency and user experience for professional service teams.',
    problem: 'Over time, the CRSMI site had grown through incremental feature additions. While these expanded its capabilities, they also introduced significant inconsistency across design and functionality. Features were added without a clear structure or information hierarchy, resulting in a cluttered menu of mismatched reports and tools. Inconsistent page layouts and non-standardised forms created a fragmented user experience, which became even more frustrating on devices and screens outside of a 16:9 ratio.\n\nTo address these challenges, the project set out to rebuild the client reporting functionality from the ground up. The aim was to establish a unified design language, streamline navigation and make features more intuitive to access.',
    approach: 'I conducted extensive user research with account managers and client service teams to identify pain points, created optimized user flows and wireframes, and designed a new interface that prioritizes workflow efficiency and data accessibility.',
    outcome: 'The redesign resulted in a 45% reduction in task completion time, a 30% reduction in support tickets, and significantly improved user satisfaction scores among professional service teams.',
    role: 'UX/UI Design',
    layout: 'grid',
    timeline: '3 months',
    client: 'coeo / Finance',
    team: ['UX Designer', 'UI Designer', '2 Developers', 'Product Manager'],
    tools: ['Figma', 'Maze', 'UserTesting', 'Principle'],
    research: {
      methods: ['User Interviews', 'Usability Testing', 'Analytics Review', 'Heat Mapping', 'Card Sorting'],
      findings: 'Through our research, we discovered that account managers struggled with fragmented client information across multiple systems and found the client communication history difficult to navigate. The portal had become outdated and ineffective, with inconsistent design patterns that reduced user trust and efficiency. Users were often unable to complete essential tasks smoothly, leading to decreased satisfaction and productivity.',
      insights: [
        'Clients found the portal\'s dark theme dated and difficult to use, particularly when trying to read tables and graphs. This reduced overall readability and trust in the platform.',
        'Locating specific reports within the menu was time consuming and confusing. Many clients abandoned their search altogether, opting to contact their account manager instead, undermining the purpose of the self service portal.',
        'The absence of sort and filter options meant clients couldn\'t easily customise views or focus on the data most relevant to them, leading to frustration and inefficiency.',
        'Users were often unaware when new features were released. As a result, development efforts were underutilised, with valuable resources spent on features that went unnoticed.',
        'Tables and data were presented with poor spacing and layout, making them difficult to scan and interpret quickly.',
        'Adding or removing users from client accounts required manual intervention from the support team, rather than giving clients direct control - slowing down workflows.',
        'Most account management happened on laptops during office hours, where the portal\'s layout felt cramped and failed to adapt well to smaller screens.'
      ]
    },
    process: {
      steps: [],
      details: 'As the lead designer on the project, I was responsible for shaping the user experience by gathering insights and restructuring content to better serve both internal teams and clients. My approach combined research, testing and iterative design. Focusing on reducing complexity and improving usability, I went about this by doing the following:\n\n* Partnered with account managers to understand the information clients most frequently request, then surfaced these priorities through the homepage and navigation.\n* Conducted card-sorting exercises with internal teams to reorganise reports, reducing cognitive load and making it easier for users to locate key content.\n* Leveraged Hotjar heat mapping to identify which tools were most used and where users encountered friction, informing design refinements.\n* Analysed competitor platforms that handle complex data to establish best practices and opportunities for differentiation.\n* Designed and validated end-to-end user journeys, ensuring clear pathways to critical reports and insights.\n* Facilitated prototype testing sessions with account managers to validate design decisions and gather actionable feedback.'
    },
    outcomes: {
      content: 'I worked with the development team and key stakeholders to improve the user experience and take our platform back to a market leading position as it had been in the past. Taking into account accessibility, user satisfaction and future expandability. After shipping the first iteration of the new portal we saw an immediate improvement in user satisfaction and task completion times. We also continued to track user behaviour and users on the new portal were significantly more efficient at completing their daily tasks.\n\n* We simplified the platform\'s navigation by reducing menu items by 30% and grouping features into intuitive categories that better align with user mental models.\n* We built a comprehensive design system that standardised all UI components, ensuring consistency across the platform and accelerating development of new features. This system was later extended to other internal tools used by customer service and others, creating a seamless experience across the organisation.\n* We introduced clearer, more intuitive data visualisations and reporting tools, enabling users to quickly interpret client performance and make more informed decisions.\n* We implemented responsive design principles so the platform delivers a smooth, consistent experience across all devices—supporting the growing number of users accessing it via mobile.\n* We added powerful search and filtering capabilities, allowing users to quickly locate client information and reports, cutting down on administrative time.\n* We gave users the ability to manage their own teams—adding and removing members, and adjusting access levels instantly, without relying on admin support.\n* We introduced a centralised notifications area, keeping users informed about new report types, portfolio performance updates, and the latest published content from Coeo.'
    },
    metrics: {
      before: {
        taskCompletionTime: '15 min avg',
        userSatisfaction: '65%',
        supportTickets: 'Baseline'
      },
      after: {
        taskCompletionTime: '8 min avg',
        userSatisfaction: '92%',
        supportTickets: '-30%'
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