import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.png';
import cameraBackImg from '~/assets/images/camera-back.png';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import gasImg from '~/assets/images/gas2.png';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import integrate from '~/assets/images/integrate.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';



// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ],
  actions: [
    {
      text: 'Contact Us',
      href: '/contact',      
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      All Work Done Upfront <span className="hidden md:inline">Equals Zero Risk</span> <span>, Pay When You Love it.</span> {' '}
      <span className="sm:whitespace-nowrap"></span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          Digital Lion Media LLC
        </span>{' '}
        is so confident in their work <em>we offer the completed project</em> + <em>ie. Sites, Apps, Integrations</em>.
      </span>{' '}
      before any payment is made. This allows for that real warm fuzzy feeling of no risk.
    </>
  ),
  callToAction: {
    text: 'Get Details',
    href: '#features3',
    icon: IconDownload,
    targetBlank: false,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/faqs',    
    targetBlank: false,
    btnType: 'primary',
  },
  image: {
    src: heroImg,
    alt: 'deleon media',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Great business and people are great because they show up like that',
  subtitle:
    'The first step towards greatness is humility. A wise man knows he knows very little. In other words be teachable',
  callToAction: {
    text: 'View jobs',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero Teddy',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://digitalionmedia.com',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://digitalionmedia.com',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://digitalionmedia.com',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://ai-codelabs.com/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
    {
      link: 'https://ai-codelabs.com/',
      src: integrate,
      alt: 'integrate',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Common queastions that will arrise are here. Suprisingly, the answers to questions you didn\'t even know you needed to know are here too.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What problems does DLM solve?',
      description: `DLM understands the pain points that all businesses deal with. Is my service message clear? Is my product and or brand consistent with my content etc. etc? `,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Admittedely, Digitla Lion Media is representative of all values and core principals. We believe in true diversity. Discriminatory practices are unheard of in our organization, not only because we are literally comprised of all demographics, , but the data is clear in that the greatest strengths are within the most diverse groups.`,
    },
    {
      title: 'What is our experience?',
      description: `Not only has our founder and CEO worked along side companies like The HardRock, Planet Hollywood and Entertainment behemoth Five Fingered Death Punch, but he also has experience with Social Services programs, Salvation Army, Reintegration Homes for veterans Like Clear Water Residential and is active in the Rising Stars Program at Riverside City College.`,
    },
    {
      title: 'What is our team like?',
      description: `Diverse, Diverse, Diverse. All races, religions, orientations and cultures are considered our family. Differences of ethos create solution sets that can only be achieved from the widest perspectives, so we are all inclusive and open to new paradigms-- if they contribute positively to our communuties.`,
    },
    {
      title: 'What role does DLM play in your business?',
      description: `Working with governmental and religious entities have required understanding of OSHA, Hippa, EEOC and FSLA(just to name a few) and we fully understand the unwritten societal nuance That lives in between concrete law. Scammers, Hustlers and hackers are our bread and butter and educate us on how to best protect our clients from any and all malficence. Thus, we not only create solutions from this understanding but are your confidant and consultant in matters of uncertainty which require empathy and at times robust discretion.`,
    },
    {
      title: 'Are you available when you are needed.',
      description: `We are available 24/7 for questions, and technical assistance is given according to priority and availability. BUt, all concerns and technical issues are dealt with immediately as humanly possible.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Hopefully these faq\'s will give you an insight into the type of company DLM is.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What problems does DLM solve?',
      description: `DLM understands the pain points that all businesses deal with. Is my service message clear? Is my product and or brand consistent with my content etc. etc? `,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Admittedely, Digitla Lion Media is representative of all values and core principals. We believe in true diversity. Discriminatory practices are unheard of in our organization, not only because we are literally comprised of all demographics, , but the data is clear in that the greatest strengths are within the most diverse groups.`,
    },
    {
      title: 'What is our experience?',
      description: `Not only has our founder and CEO worked along side companies like The HardRock, Planet Hollywood and Entertainment behemoth Five Fingered Death Punch, but he also has experience with Social Services programs, Salvation Army, Reintegration Homes for veterans Like Clear Water Residential and is active in the Rising Stars Program at Riverside City College.`,
    },
    {
      title: 'What is our team like?',
      description: `Diverse, Diverse, Diverse. All races, religions, orientations and cultures are considered our family. Differences of ethos create solution sets that can only be achieved from the widest perspectives, so we are all inclusive and open to new paradigms-- if they contribute positively to our communuties.`,
    },
    {
      title: 'What role does DLM play in your business?',
      description: `Working with governmental and religious entities have required understanding of OSHA, Hippa, EEOC and FSLA(just to name a few) and we fully understand the unwritten societal nuance That lives in between concrete law. Scammers, Hustlers and hackers are our bread and butter and educate us on how to best protect our clients from any and all malficence. Thus, we not only create solutions from this understanding but are your confidant and consultant in matters of uncertainty which require empathy and at times robust discretion.`,
    },
    {
      title: 'Are you available when you are needed.',
      description: `We are available 24/7 for questions, and technical assistance is given according to priority and availability. BUt, all concerns and technical issues are dealt with immediately as humanly possible.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'What problems does DLM solve?',
      description: `DLM understands the pain points that all businesses deal with. Is my service message clear? Is my product and or brand consistent with my content etc. etc? `,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Admittedely, Digitla Lion Media is representative of all values and core principals. We believe in true diversity. Discriminatory practices are unheard of in our organization, not only because we are literally comprised of all demographics, , but the data is clear in that the greatest strengths are within the most diverse groups.`,
    },
    {
      title: 'What is our experience?',
      description: `Not only has our founder and CEO worked along side companies like The HardRock, Planet Hollywood and Entertainment behemoth Five Fingered Death Punch, but he also has experience with Social Services programs, Salvation Army, Reintegration Homes for veterans Like Clear Water Residential and is active in the Rising Stars Program at Riverside City College.`,
    },
    {
      title: 'What is our team like?',
      description: `Diverse, Diverse, Diverse. All races, religions, orientations and cultures are considered our family. Differences of ethos create solution sets that can only be achieved from the widest perspectives, so we are all inclusive and open to new paradigms-- if they contribute positively to our communuties.`,
    },
    {
      title: 'What role does DLM play in your business?',
      description: `Working with governmental and religious entities have required understanding of OSHA, Hippa, EEOC and FSLA(just to name a few) and we fully understand the unwritten societal nuance That lives in between concrete law. Scammers, Hustlers and hackers are our bread and butter and educate us on how to best protect our clients from any and all malficence. Thus, we not only create solutions from this understanding but are your confidant and consultant in matters of uncertainty which require empathy and at times robust discretion.`,
    },
    {
      title: 'Are you available when you are needed.',
      description: `We are available 24/7 for questions, and technical assistance is given according to priority and availability. BUt, all concerns and technical issues are dealt with immediately as humanly possible.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'DLM understands the pain points that all businesses deal with. Is my service message clear? Is my product and or brand consistent with my content etc. etc?.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What problems does DLM solve?',
          description: `DLM understands the pain points that all businesses deal with. Is my service message clear? Is my product and or brand consistent with my content etc. etc? `,
        },
        {
          title: 'What values and principles guide our work?',
          description: `Admittedely, Digitla Lion Media is representative of all values and core principals. We believe in true diversity. Discriminatory practices are unheard of in our organization, not only because we are literally comprised of all demographics, , but the data is clear in that the greatest strengths are within the most diverse groups.`,
        },
        {
          title: 'What is our experience?',
          description: `Not only has our founder and CEO worked along side companies like The HardRock, Planet Hollywood and Entertainment behemoth Five Fingered Death Punch, but he also has experience with Social Services programs, Salvation Army, Reintegration Homes for veterans Like Clear Water Residential and is active in the Rising Stars Program at Riverside City College.`,
        },
        {
          title: 'What is our team like?',
          description: `Diverse, Diverse, Diverse. All races, religions, orientations and cultures are considered our family. Differences of ethos create solution sets that can only be achieved from the widest perspectives, so we are all inclusive and open to new paradigms-- if they contribute positively to our communuties.`,
        },
        {
          title: 'What role does DLM play in your business?',
          description: `Working with governmental and religious entities have required understanding of OSHA, Hippa, EEOC and FSLA(just to name a few) and we fully understand the unwritten societal nuance That lives in between concrete law. Scammers, Hustlers and hackers are our bread and butter and educate us on how to best protect our clients from any and all malficence. Thus, we not only create solutions from this understanding but are your confidant and consultant in matters of uncertainty which require empathy and at times robust discretion.`,
        },
        {
          title: 'Are you available when you are needed.',
          description: `We are available 24/7 for questions, and technical assistance is given according to priority and availability. BUt, all concerns and technical issues are dealt with immediately as humanly possible.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Digital Lion Media comes from my name De Leon which means the Lion in Latin and Spanish',
  subtitle:
    'We pride ourselves in honesty, integrity, fearlessness and service.',
  callToAction: {
    text: 'Get in touch',
    href: 'https://github.com/teddythelion',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Learn More',
      description: 'Check out the FAQqs',
      href: '/faqs',
    },
    {
      title: 'Contact',
      description: 'Contact Us.',
      href: '/contact',
    },
    
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What Do We Actully Do at <span className="whitespace-nowrap">Digital Lion Media?</span>
      </>
    ),
    subtitle:
      'The formula is right above in the images. AI, Data, Website, Social Media, and Integration',
    highlight: 'Formula',
  },
  items: [
    {
      title: 'Artificial Intelligence',
      description:
        'Utilizing cutting edge Ai and Data and Search algorithms used by these Ai, we can do things and understand things we never have before faster than ever .',
      icon: IconBrandTailwind,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Data',
      description:
        'Data analysis is tedious and you must be be meticilous. And it takes days and hours upon hours; So we have AI do it and deliver a nice data set with key information voila',
      icon: IconComponents,
      link: {
        label: 'Learn more',
        href: '/',
      },
    },
    {
      title: 'Website - Build or Revamp',
      description:
        'THE AUTHOR, me Ted Deleon has been building websites for 15 years. Building a prettysite is easy. Building a site that converts and inspires is what i do.',
      icon: IconListCheck,
      link: {
        label: 'Let me Build it',
        href: '/contact',
      },
    },
    {
      title: 'Social Media and SEO Campaign',
      description:
        'Social Media is the backbone of SEO and digital marketing. I build out social media prperties like I build my websites.',
      icon: IconRocket,
      link: {
        label: 'Lets Start',
        href: '/contact',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)/SEM',
      description:
        'SEO is so much more than poeple think. On-page , backlinks, and blog articles are not SEO. I will educate you and help you be a part of the process.',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Start Now',
        href: '/',
      },
    },
    {
      title: 'Integration',
      description:
        'Integration and atomation. Put all the pieces together and have Ai take care of the busy work and automate everything that doesnt require a human.',
      icon: IconBulb,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'The process requires alot of hard work, but it gets easier with skills aquisition',
      description: 'The process requires alot of hard work, but it gets easier with skills aquisition.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'The process requires alot of hard work, but it gets easier with skills aquisition',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'The process requires alot of hard work, but it gets easier with skills aquisition',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'The process requires alot of hard work, but it gets easier with skills aquisition',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'The process requires alot of hard work, but it gets easier with skills aquisition',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'The process requires alot of hard work, but it gets easier with skills aquisition',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'In order to grow your business, you first must grow.',
    subtitle: 'Some are willing to make that commitment, some are too lazy, but most dont even know this fact.',
    highlight: 'The Process',
  },
  content:
    'As a media tech company we always have to stay abreast on current technologies and information.',
  items: [
    {
      title: 'Data is mostly about human interactions.',
      description:
        'Chaotic yet sometimes, systematically mathematical human events get clarity.',
    },
    {
      title: 'The Correlation Factors',
      description:
        'Knowledge bases never before even considered relevent reveal overlaps of data.',
    },
    {
      title: 'What Stands out The Most',
      description:
        'What we often think becomes our reality.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'All things begins with a thought ',
  items: [
    {
      title: 'Thoughts Turn into actions',
    },
    {
      title: 'Actions turn into creation',
    },
    {
      title: 'Creations grow and eventually create',
    },
    {
      title: 'Worlds are created',
    },    
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'You must develop discipline beyond what is normal for longterm success.',
  items: [
    {
      title: 'Step 1',
      description:
        'Realize that self mastery is so important that it should be your main goal and vision.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:'Without self mastery as the motivation, success will not be sustainable.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'A majority of data suggests that diet, excercise, meditation, sleep and social connections are the best way to grow a business! So a great business is great due to nothing having to do with business.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'We are a small company and most of the work is done by the founder me Teddy Deleon. My wife, and one emplyee are the backbone of clerical and accounting departments.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Teddy Deleon',
      occupation: 'CEO and Founder',
      image: {
        src: '/ted.png',
        alt: 'Teddy Deleon',
      },
      items: [
        {
          title: 'Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/aicodelabs',
        },
        {
          title: 'Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/teddy-deleon-24908126b/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'digitalionmedia@gmail.com',
        },
      ],
    },
    {
      name: 'Jennifer Deleon',
      occupation: 'Accounting Policing..',
      image: {
        src: '/jenn.png',
        alt: 'Jennifer Deleon',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://www.linkedin.com/in/teddy-deleon-24908126b/',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/teddy-deleon-24908126b/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'jrdeleon2243@gmail.com',
        },
      ],
    },
    {
      name: 'Teddy Deleon',
      occupation: 'CEO and Founder',
      image: {
        src: '/ted.jpg',
        alt: 'Teddy Deleon',
      },
      items: [
        {
          title: 'Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/aicodelabs',
        },
        {
          title: 'Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/teddy-deleon-24908126b/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'digitalionmedia@gmail.com',
        },
      ],
    },
    {
      name: 'Teddy Deleon',
      occupation: 'CEO and Founder',
      image: {
        src: '/ted.jpg',
        alt: 'Teddy Deleon',
      },
      items: [
        {
          title: 'Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/aicodelabs',
        },
        {
          title: 'Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/teddy-deleon-24908126b/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'digitalionmedia@gmail.com',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'They are Great',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Teddy deleon',
      occupation: 'Marketing Manager - CEO',
      comment:
        'Teddy is amazing because Im Teddy',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Greyson Deleon',
      occupation: 'Senior Baby',
      comment:
        'My dad is amazing.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Jennifer Deleon',
      occupation: 'Co parent',
      comment:
        'I hate Teddy but hes a genius, honest, and good looking; and thats why I hate him.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for a starting point. These Prices are Very flexible',
    subtitle:
      'We have to understand what you need for a quote to be accurate. I dont want to waste my or anyone elses time so we have to get it right at the beginning'
      // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'Design and Develop',
      value: 0,
      period: 'You approve I deploy',
      texts: [
        'I research your industry ',
        'AI aggregates, and distill data',
        'I create keyword schemas that map to landing pages.',
        'Ai maps specific keywords to page layout and content',
      ],
      callToAction: {
        text: 'Lets Go!',
        href: '/contact',
      },
      hasRibbon: false,
    },
    {
      title: 'Completion/Approval',
      value: 450,
      period: 'Once upon satisfaction',
      texts: ['All the input you have.', '2 complete revisions', 'Initial SEO setup', 'Consultation Education'],
      callToAction: {
        text: 'Lets Go!',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'SEO/Marketing',
      value: 500,
      period: 'per month',
      texts: [
        'Data - research',
        'Implimentation of key-word mapping',
        'Landing page revamp creation',
        'Social media set up',
        'Social media integration',
        'Social media automation',
      ],
      callToAction: {
        text: 'Lets Go!',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "SEO - Marketing Plans",
    subtitle:
      '',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'Plan Details',
      items: [
        {
          title: 'Initial Set Up',
        },
        {
          title: 'Revisions',
        },
        {
          title: 'Social Media Set up',
        },
        {
          title: 'Soial media automation',
        },
        {
          title: 'Landing Pages ',
        },
        {
          title: 'AD\'s',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free set up with Website',
        },
        {
          title: '2',
        },
        {
          title: 'Free with Website',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: "1",
        },
        {
          title: false,
        },
      ],
      callToAction: {
        text: 'Lets go',
        href: '/contact',
        btnType: undefined,
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: '$500',
        },
        {
          title:" 5",
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: "3",
        },
        {
          title: true,
        },
        {
        title: false,
      },
      ],
      callToAction: {
        text: 'Lets go',
        href: '/',
        btnType: undefined,
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 750,
        },
        {
          title: 'Unlimited',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Lets go',
        href: '/cantact',
        btnType: undefined,
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'Lets build together',
    highlight: 'Contact',
  },
  content:
    'Send me a contact and Iwll get in touch asap. We can set up a meeting and I will go to wherever you are.',
  items: [
    {
      title: 'Our Address',
      description: ['Inland Empire', 'Riverside'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (951) 229-5779', 'Mail: digitalionmedia@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['All day everyday'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Lets create something great!',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write a message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Lets get this going! Contact Me.',
    subtitle: 'Free consultations and just plain old free everything. ',
    highlight: 'Contact',
  },
  content:
    'There is new way of doing business..give away an extreme amount of value and your customers will learn to trust you and will be loyal to you.',
  items: [
    {
      title: 'Our Address',
      description: ['Las Tunas dr Riverside CA, 92504'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (951-229-5779, Mail: digitalionmedia@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['All day everyday'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Lets Start!',
    description:
      'To do the job right there must be an inordinate amount of data collected and analized. So the sooner the better. ',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What are we gonna work on?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Free Technical help',
        },
        {
          label: 'Feedback',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'What do you need help with',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'If you want updates day by day every 4 hours or etc tell us ?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'Digital Lion Media LLC',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/teddythelion' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://ai-codelabs.com">
        {' '}
        AI Codelabs
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Riverside, CA', 'Inland Empire'],
    },
    {
      title: 'Phone',
      texts: ['951-229-5779', '1-951-229-5779'],
    },
    {
      title: 'Email',
      texts: ['digitalionmedia@gmail.com', 'digitalionmedia.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/teddythelion' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
    <span className="float-left mr-1.5 h-5 w-5 rounded-sm md:-mt-0.5 md:h-6 md:w-6"></span>
    Made by{' '}
    <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://ai-codelabs.com">
      {' '}
      AI Codelabs
    </a>{' '}
    · All rights reserved.
  </div>
  ),
};
