import {Experience, Project, SkillCategory, ContactInfo, NavItem} from './types';
import {Smartphone, Server, Globe, Database, Zap, Terminal, Code, Briefcase, GraduationCap} from 'lucide-react';
import React from 'react';

const CodeIcon = React.createElement(Code, {size: 20});
const BriefcaseIcon = React.createElement(Briefcase, {size: 20});
const SmartphoneIcon = React.createElement(Smartphone, {size: 20});
const GraduationCapIcon = React.createElement(GraduationCap, {size: 20});
const TerminalIcon = React.createElement(Terminal, {size: 20, });
const SmartPhoneIconLarge = React.createElement(Smartphone, {size: 24, className: 'text-blue-600'});
const ServerIcon = React.createElement(Server, {size: 24, className: 'text-green-600'});
const GlobeIcon = React.createElement(Globe, {size: 24, className: 'text-purple-600'});
const DatabaseIcon = React.createElement(Database, {size: 24, className: 'text-orange-600'});
const ZapIcon = React.createElement(Zap, {size: 24, className: 'text-yellow-600'});
const TerminalIconLarge = React.createElement(Terminal, {size: 24, className: 'text-red-600'});
const CodeIconLarge = React.createElement(Code, {size: 24, className: 'text-indigo-600'});
const TerminalIconLargeInverted = React.createElement(Terminal, {size: 24, className: 'text-gray-600'});

export const NAV_ITEMS: NavItem[] =  [
    {id: 'home', label: 'Home', icon: CodeIcon},
    {id: 'experience', label: 'Experience', icon: BriefcaseIcon},
    {id: 'projects', label: 'Projects', icon: SmartphoneIcon},
    {id: 'education', label: 'Education', icon:GraduationCapIcon},
    {id: 'skills', label: 'Skills', icon: TerminalIcon}
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
        current: true,
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
        title: 'Butterfly Effect Universe',
        year: '2023',
        role: 'Back-end Developer',
        description: 'Worked as back-end developer using Node.js with TypeScript. Conducted thorough feasibility analysis and reported feedback to design team for risk analysis and cost estimations.',
        link: 'butterflyeffectuniverse.org',
        tech: ['Node.js', 'TypeScript', 'Backend API'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Tankerwala',
        year: '2023',
        role: 'Full-stack Developer',
        badge: 'FYP',
        description: 'Developed mobile application using React Native with Expo. Implemented IoT device functionality for real-time water storage monitoring. Added user interfaces, Uber-like tanker ordering system, in-app chatting with WebSockets, and customer support. Developed admin panel using React.',
        tech: ['React Native', 'Expo', 'IoT', 'WebSockets', 'React'],
        link: 'rb.gy/qilbr4',
        color: 'from-purple-500 to-pink-500'
    }
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
    'Data Structures and Algorithms',
    'Web Technologies',
    'Mobile Application Development',
    'Operating Systems',
    'DevOps',
    'Software Testing'
];