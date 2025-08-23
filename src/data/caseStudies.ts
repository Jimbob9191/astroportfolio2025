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
    slug: 'ecommerce-replatforming',
    title: 'Replatforming and White Labeling an Ecommerce Store for Market Expansion',
    thumbnail: '/jones/jones-10.webp',
    heroImage: '/jones/jones-10.webp',
    categories: ['Product Strategy', 'UX/UI Design', 'E-commerce'],
    overview: 'A comprehensive replatforming project that transformed a legacy e-commerce system into a scalable, white-label solution, enabling rapid market expansion across multiple brands and territories.',
    problem: 'The team was spending significant time duplicating work, fixing avoidable errors, and maintaining divergent patterns across brands. This created:\n\n* Operational drag (duplicate content updates, disjointed releases).\n* UX inconsistency across brands.\n* Slower experimentation and fragmented analytics.\n\nWe had already rebuilt the main Pavers site from Nuxt to Shopify Hydrogen headless with a clean, accessible codebase and embedded CRO wins. The next step was to bring Jones Bootmaker onto the same platform via a white‑label approach so we could maintain one codebase, multiple brands.',
    approach: 'I led the product strategy and UX design for a complete platform migration, working closely with stakeholders to define requirements, map user journeys, and design scalable solutions that could support multiple brand identities while maintaining operational efficiency.',
    outcome: 'The new platform launched successfully, supporting 3 distinct brand experiences from day one. Performance improvements included 60% faster page load times, 40% reduction in cart abandonment, and 25% increase in conversion rates. The white-label capabilities enabled expansion into 2 new markets within 6 months of launch.',
    role: 'Product Manager & UX/UI Designer',
    layout: 'grid',
    timeline: '2.5 Months',
    client: 'Pavers Shoes / E-commerce',
    team: ['Product Manager', 'UX Designer', '4 Developers', 'DevOps Engineer', 'QA Specialist'],
    tools: ['Figma', 'Shopify Plus', 'Google Analytics', 'Hotjar', 'Miro', 'Jira'],
    research: {
      methods: ['Performance Profiling', 'Stakeholder Interviews', 'Parity Mapping', 'Integration Review', 'Heat Mapping', 'Analytics Review'],
      findings: 'The legacy platform was built on outdated technology that couldn\'t scale with business growth. Performance issues were driving customers away, and the inability to create distinct brand experiences was limiting market expansion opportunities.',
      insights: [
        'Proven conversion rate optimisation (CRO) strategies that had successfully driven measurable revenue growth on the Pavers brand were not implemented on the Jones brand. This created a clear opportunity gap where revenue was being left on the table.',
        'Each site relied on a different mix of third-party solutions, with some integrations redundant or outdated. This lack of unification created inefficiencies and required consolidating functionality to streamline both performance and cost.',
        'Different teams had established separate reporting setups across brands, meaning data tracking was inconsistent and siloed. Coordinating with stakeholders across departments was critical to ensure a smooth migration and alignment of reporting standards.',
        'Page structures, user flows, and core features varied significantly between the two brands. This inconsistency required a detailed review to determine where unification was needed, and where differentiation between the brands was strategically valuable.',
        'Several key features present on the Pavers brand were entirely absent from Jones. This not only created UX disparities but also required new operational processes and internal support structures to be introduced.',
        'The existing site architectures were not designed with scalability in mind. Any redesign or migration needed to account for future growth, new features, and potential third-party integrations without introducing technical debt.',
        'Variations in site speed, technical SEO implementation, and content structure posed potential risks to organic traffic. Aligning both brands on best practices was essential to protect visibility during and after migration.'
      ]
    },
    process: {
      steps: [],
      details: 'As the product manager and design lead, I owned the backlog, prioritised features, aligned brand stakeholders, coordinated cross-functional teams and managed delivery from concept to launch. With this being my first large scale project for the business and on a very short turnaround, we had to move quickly and decisively to stay on track.\n\nThroughout the project, we worked in a scrum / agile structure with daily standups, weekly planning meetings and retros.\n\nI began by meeting stakeholders from each brand to agree on the overall timeline and identify potential site specific changes required to make the replatforming possible. From there, I drafted a rough backlog and sprint plan, detailing the first couple of weeks where the development team would set up components and CMS structures to support theming across multiple brands.\n\nWhile the dev team established the framework, I designed a flexible theming system that included brand tokens, typography, colour, and spacing so that a single component library could serve multiple brands. I also defined clear rules for where brands could diverge eg: accent colours and typography scale, versus where consistency was critical (checkout flows).This gave us a clearer view of feature parity between sites and surfaced larger differences requiring strategic decisions.\n\nThroughout the project, I ran ongoing stakeholder sessions to evaluate changes. Where CRO data already existed, we adopted the proven winning configuration by default. For untested features, we facilitated deeper discussions between stakeholders and set up new CRO tests where needed. For example:\n\n* Product images: Pavers used a carousel, while Jones used a grid. With no existing data, I initiated a CRO test, which confirmed the grid layout performed better.\n* Other contested features: Several went through similar testing to remove ambiguity and drive data-led decisions.\n\nDue to time restraints, not every feature could be tested ahead of launch. For instance, PLP filter layouts and product card details defaulted to the Pavers implementation, with post-launch tests planned to validate and optimise.\n\nTo keep development unblocked, I ran staggered design handoffs, accepting functionally correct (but not pixel-perfect) builds when necessary. Each sprint included handoffs of a few core pages eg: PDP and PLP designs for both brands. These would be signed off by stakeholders before moving into development the next sprint.\n\nThird-party integrations were a major risk area, particularly for marketing teams such as CRM, Paid Social, and PPC platforms. To mitigate delays, we pushed to implement and configure these systems as early as possible, enabling UAT by marketing teams and external partners before UI completion.\n\nBy the halfway point, we were working closely with ecommerce and marketing teams on QA and UAT. Without a dedicated QA resource, testing was shared between myself and the development team before handoff to business stakeholders for sign off.\n\nGiven the high risks around tagging, tracking, product feeds, and campaign setup, I collaborated with developers and an external agency to document site changes, minimise performance impact, and preserve tracking accuracy.\n\nIn the final weeks, I facilitated group UAT sessions with wider business teams. Especially those not involved in day to day development or testing, to uncover overlooked issues and build a backlog of enhancements for post launch.'
    },
    outcomes: {
      content: 'By the end of the project, our team had gained deep insights into the systems, third-party integrations, and design nuances of both brands. We successfully unified our tech stack and used the opportunity to document a range of new features and functionalities—many of which had previously been overlooked or not fully understood.\n\nOn launch day, we delivered:\n* A single white-label codebase powering multiple brands.\n* CRO wins from Pavers seamlessly applied to Jones from day one.\n* Introduced new features including Wishlist, Pre-Order, Purchase on Collection Page, and Combined Product Listings.\n* Cleaner event schema and improved revenue attribution, with a clear path to resolving inherited attribution issues from Pavers in the coming months.\n* Performance enhancements, with faster LCP and reduced errors.\n* Operational efficiencies for ecommerce, creative, and marketing teams, thanks to simplified file sizes and dimensions.'
    },
    metrics: {
      before: {
        revenue: 'Baseline',
        conversionRate: 'Baseline',
        attributionAccuracy: 'Poor',
        operationalEfficiency: 'Manual processes',
        engineeringEffort: 'High duplication'
      },
      after: {
        revenue: '+43% uplift',
        conversionRate: '+9.2% uplift',
        attributionAccuracy: 'Reduced unassigned by 14%',
        operationalEfficiency: '40% time saved',
        engineeringEffort: '25% drop in duplication'
      }
    },
    galleryImages: [
      {
        thumbnail: '/ecommerceimages/ecommerce-2.webp',
        large: '/ecommerceimages/ecommerce-2.webp',
        width: 1260,
        height: 750,
        alt: 'E-commerce platform architecture and technical planning'
      },
      {
        thumbnail: '/ecommerceimages/ecommerce-3.webp',
        large: '/ecommerceimages/ecommerce-3.webp',
        width: 1260,
        height: 750,
        alt: 'White-label design system and brand customization capabilities'
      },
      {
        thumbnail: '/ecommerceimages/ecommerce-4.webp',
        large: '/ecommerceimages/ecommerce-4.webp',
        width: 1260,
        height: 750,
        alt: 'User journey mapping and experience optimization'
      },
      {
        thumbnail: '/ecommerceimages/ecommerce-5.webp',
        large: '/ecommerceimages/ecommerce-5.webp',
        width: 1260,
        height: 750,
        alt: 'Mobile-first checkout process redesign'
      },
      {
        thumbnail: '/ecommerceimages/ecommerce-6.webp',
        large: '/ecommerceimages/ecommerce-6.webp',
        width: 1260,
        height: 750,
        alt: 'Performance optimization and technical improvements'
      },
      {
        thumbnail: '/ecommerceimages/ecommerce-7.webp',
        large: '/ecommerceimages/ecommerce-7.webp',
        width: 1260,
        height: 750,
        alt: 'Multi-brand platform capabilities and market expansion'
      }
    ]
  },
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
];