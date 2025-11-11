import {Experience, Project, SkillCategory, ContactInfo, NavItem} from './types';
import {Smartphone, Server, Globe, Database, Zap, Terminal, Code, Briefcase, GraduationCap, GitFork} from 'lucide-react';
import React from 'react';

const CodeIcon = React.createElement(Code, {size: 20});
const GitForkIcon = React.createElement(GitFork, {size: 20});
const BriefcaseIcon = React.createElement(Briefcase, {size: 20});
const SmartphoneIcon = React.createElement(Smartphone, {size: 20});
const GraduationCapIcon = React.createElement(GraduationCap, {size: 20});
const TerminalIcon = React.createElement(Terminal, {size: 20,});
const SmartPhoneIconLarge = React.createElement(Smartphone, {size: 24, className: 'text-blue-500'});
const ServerIcon = React.createElement(Server, {size: 24, className: 'text-green-500'});
const GlobeIcon = React.createElement(Globe, {size: 24, className: 'text-purple-500'});
const DatabaseIcon = React.createElement(Database, {size: 24, className: 'text-orange-500'});
const ZapIcon = React.createElement(Zap, {size: 24, className: 'text-yellow-500'});
const TerminalIconLarge = React.createElement(Terminal, {size: 24, className: 'text-red-500'});
const CodeIconLarge = React.createElement(Code, {size: 24, className: 'text-teal-500'});
const TerminalIconLargeInverted = React.createElement(Terminal, {size: 24, className: 'text-pink-500'});

export const NAV_ITEMS: NavItem[] = [
    {id: 'home', label: 'Home', icon: CodeIcon},
    {id: 'experience', label: 'Experience', icon: BriefcaseIcon},
    {id: 'projects', label: 'Projects', icon: SmartphoneIcon},
    {id: 'education', label: 'Education', icon: GraduationCapIcon},
    {id: 'skills', label: 'Skills', icon: TerminalIcon},
    {id: 'open-source', label: 'Contributions', icon: GitForkIcon}
];
export const CONTACT_INFO: ContactInfo = {
    email: 'im_shami@icloud.com',
    phone: '+92 313 1666276',
    location: 'Sector I-8/2, Islamabad, Pakistan',
    github: 'https://github.com/e-shami',
    linkedin: 'https://linkedin.com/in/ehtisham-rehmat-267048121'
};

export const EXPERIENCES: Experience[] = [
    {
        title: 'Mobile Application Developer',
        company: 'SageTeck',
        period: 'May 2024 - Present',
        current: true,
        achievements: [
            'Developed and deployed Tuneup Golf (all-in-one golf learning app) using React Native, Expo, and JavaScript',
            'Implemented native features: camera, file sharing, gallery access, screen recording, push notifications, video player',
            'Worked with backend team to implement APIs on mobile application',
            'Used Zustand and React-Native-MMKV for state management and persistence',
            'Contributed to open-source by fixing bugs in expo-screen-recorder package'
        ]
    },
    {
        title: 'React Native Developer',
        company: 'Fiverr',
        period: '2022 - Present',
        current: false,
        type: 'Freelancing',
        achievements: [
            'Developed cross-platform mobile apps with React Native, Expo, JavaScript/TypeScript',
            'Integrated backend services with Node.js and Django',
            'Built and optimized RESTful APIs',
            'Implemented data structures and algorithms',
            'Wrote Arduino scripts for IoT applications',
            'Designed UI/UX components and conducted code reviews',
            'Assisted in software requirements gathering and documentation'
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: "Tune-up Golfing",
        year: '2024',
        role: 'Mobile Application Developer',
        badge: 'SageTeck',
        description: "Developed a cross-platform mobile app for golf enthusiasts using React Native and Expo. Designed for learners and instructors, the app enables booking and managing online or in-person lessons, with support for paid packages. Implemented features like live video annotation, in-app chat, social posting with likes and comments, and slot booking for individuals or groups.",
        tech: ['React', 'React Native', 'Expo', 'EAS', 'Push Notifications', 'Video Player', 'Screen Recording', 'File Sharing', 'Gallery Access', 'Camera Access', 'Zustand', 'React-Native-MMKV', 'WebSockets'],
        link: 'rb.gy/qilbr4',
    },

    {
        title: 'Tankerwala',
        year: '2023',
        role: 'Full-stack Developer',
        badge: 'FYP',
        description: 'Developed mobile application using React Native with Expo. Implemented IoT device functionality for real-time water storage monitoring. Added user interfaces, Uber-like tanker ordering system, in-app chatting with WebSockets, and customer support. Developed admin panel using React.',
        tech: ['React Native', 'Expo', 'Google Maps API', 'IoT', 'WebSockets', 'React', 'Node.js', 'Django', 'RESTful APIs', 'Data Structures', 'Algorithms', 'Arduino', 'UI/UX Design', 'SQLite', 'Git', 'GitHub', 'Jira', 'Cypress', 'Automated Testing'],
        link: 'github.com/e-shami/FYP',
    },
    {
        title: 'Butterfly Effect Universe',
        year: '2023',
        role: 'Back-end Developer',
        description: 'Worked as back-end developer using Node.js with TypeScript. Conducted thorough feasibility analysis and reported feedback to design team for risk analysis and cost estimations.',
        link: 'butterfly-effect-universe.vercel.app/',
        tech: ['Node.js', 'TypeScript', 'Backend API'],
    },
];

export const SKILLS: SkillCategory[] = [
    {
        category: 'Mobile Development',
        icon: SmartPhoneIconLarge,
        items: ['React Native', 'Expo', 'Cross-platform Development', 'Native Features Integration']
    },
    {
        category: 'Backend Development',
        icon: ServerIcon,
        items: ['Node.js', 'Django', 'Express.js', 'RESTful APIs', 'IoT Integration']
    },
    {
        category: 'Frontend Development',
        icon: GlobeIcon,
        items: ['React', 'Next.js', 'Laravel', 'UI/UX Design']
    },
    {
        category: 'Databases',
        icon: DatabaseIcon,
        items: ['Firebase', 'MongoDB', 'PostgreSQL', 'SQLite']
    },
    {
        category: 'DevOps & Tools',
        icon: ZapIcon,
        items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab']
    },
    {
        category: 'Testing & QA',
        icon: TerminalIconLarge,
        items: ['Jira', 'Selenium', 'Cypress', 'Automated Testing']
    },
    {
        category: 'Programming Languages',
        icon: CodeIconLarge,
        items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C++', 'Java']
    },
    {
        category: 'Operating Systems',
        icon: TerminalIconLargeInverted,
        items: ['UNIX/Linux', 'Windows', 'MacOS']
    }
];

export const COURSES = [
    'Mobile Application Development',
    'Web Technologies',
    'Operating Systems',
    'Software Testing',
    'Database Management',
    'DevOps',
    'Artificial Intelligence',
    'Software Requirement Analysis',
    'Software Design And Architecture',
    'Data Structures and Algorithms',
];

export const OPEN_SOURCE: Project[] = [
    {
        title: 'expo-screen-recorder',
        year: '2024',
        role: 'Contributor',
        badge: 'GitHub',
        description: 'Contributed to open-source by fixing bugs in expo-screen-recorder package',
        tech: ['Expo Modules', "Kotlin", "HB Recorder", 'Swift', 'ReplayKit', 'npm', 'GitHub', 'Git'],
        link: 'www.npmjs.com/package/expo-screen-recorder',
    }
]