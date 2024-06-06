import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/codepen-profile.webp';
import porfolioImage2 from '../images/portfolio/devto-profile.webp';
import porfolioImage3 from '../images/portfolio/hashnode-profile.png';
import porfolioImage4 from '../images/portfolio/medium-profile.webp';
import profilepic from '../images/profilepic.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Manthan Ankolekar's NextJS Portfolio",
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Profile: 'Profile',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Manthan Ankolekar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Kanrnataka, India based <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Blackcoffer</strong> building projects in MEAN Stack.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Code, <strong className="text-stone-100"> Learn</strong>, Eat & Sleep.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1Ba40AaV2Ol5hueeVe5wCI1GeBEtcPJXp3mzm-HZ6BHk/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi there! I am Manthan! You might also know me as manthanank. I've been coding over 4 years now. I started my journey in web development and enrolled for training programme and also done various internships in front-end as well as backend. Currently working as Software Engineer.`,
  aboutItems: [
    {label: 'Location', text: 'Karnataka, India', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Photography', Icon: SparklesIcon},
    {label: 'Study', text: 'Sahyadri College of Engineering and Management', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Blackcoffer.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Angular',
        level: 9,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      }
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB',
        level: 9,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Codepen Profile',
    description: 'Check out my Codepen profile for some cool pens.',
    url: 'https://codepen.io/manthanank',
    image: porfolioImage1,
  },
  {
    title: 'Dev.to Profile',
    description: 'Check out my Dev.to profile for some cool blogs.',
    url: 'https://dev.to/manthanank',
    image: porfolioImage2,
  },
  {
    title: 'Hashnode Profile',
    description: 'Check out my Hashnode profile for some cool blogs.',
    url: 'https://hashnode.com/@manthanank',
    image: porfolioImage3,
  },
  {
    title: 'Medium Profile',
    description: 'Check out my Medium profile for some cool blogs.',
    url: 'https://medium.com/@manthanank',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2020',
    location: 'Sahyadri College of Engineering and Management',
    title: "Bachelor's Degree",
    content: <p>Graduated in Computer Science.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2023 - Present',
    location: 'Blackcoffer',
    title: 'Software Engineer',
    content: (
      <p>
        Worked for 6 months as Associate Software Engineer. Worked in both Front End as well as Backend Projects. Work in most of the dashboard type projects. And also manage the projects & deploy it. Angular Framework in Front End & In backend Nodejs. Stack is MEAN.
      </p>
    ),
  },
  {
    date: 'May 2022 - Dec 2022',
    location: 'AppiVa Software Pvt.Ltd',
    title: 'Full Stack Developer Intern',
    content: (
      <p>
        Worked for 3 months as Intern. Worked in both Front End as well as Backend Projects. Work is to design and develop in projects. And also manage the projects & deploy it. Angular Framework in Front End & In backend Nodejs + Python. With Frebase as Databse.
      </p>
    ),
  },
  {
    date: '22 Nov 2021 - 25 Apr 2022',
    location: 'Faclon Labs Pvt.Ltd',
    title: 'Angular Developer Intern',
    content: (
      <p>
        Worked for 3 months as Intern And 3 months as Full Time Front End Angular Developer. Work was to design and develop in projects like Admin Panel, IOSense(Main Project), Report UI.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for any queries or just to say hi!',
  items: [
    {
      type: ContactType.Email,
      text: 'manthan.ank46@gmail.com',
      href: 'mailto:manthan.ank46@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Karwar, Karnataka, India',
      href: 'https://www.google.ca/maps/place/Karwar,+Karnataka/@14.8211335,74.1218802,14z/data=!3m1!4b1!4m6!3m5!1s0x3bbe60ce1a0140d7:0x3ceab1e851eb586a!8m2!3d14.8073777!4d74.129898!16zL20vMDVuNWRt?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@manthan_ank',
      href: 'https://www.instagram.com/manthan_ank/',
    },
    {
      type: ContactType.Github,
      text: 'manthanank',
      href: 'https://github.com/manthanank',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/manthanank'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/14292971/manthan-ankolekar'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/manthan-ankolekar-597b07a8/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/manthan_ank/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/manthan_ank'},
];
