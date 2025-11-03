'use client'
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Code,
    Briefcase,
    GraduationCap,
    Award,
    ExternalLink,
    Download,
    ChevronRight,
    Terminal,
    Database,
    Smartphone,
    Server,
    Globe,
    Zap
} from 'lucide-react';
import Image from 'next/image';

const HomeTemp = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {id: 'home', label: 'Home', icon: <Code size={20}/>},
        {id: 'about', label: 'About', icon: <Award size={20}/>},
        {id: 'experience', label: 'Experience', icon: <Briefcase size={20}/>},
        {id: 'projects', label: 'Projects', icon: <Smartphone size={20}/>},
        {id: 'education', label: 'Education', icon: <GraduationCap size={20}/>},
        {id: 'skills', label: 'Skills', icon: <Terminal size={20}/>}
    ];

    const skills = [
        {
            category: 'Mobile Development',
            icon: <Smartphone className="text-blue-600" size={24}/>,
            items: ['React Native', 'Expo', 'Cross-platform Development', 'Native Features Integration']
        },
        {
            category: 'Backend Development',
            icon: <Server className="text-green-600" size={24}/>,
            items: ['Node.js', 'Django', 'Express.js', 'RESTful APIs', 'IoT Integration']
        },
        {
            category: 'Frontend Development',
            icon: <Globe className="text-purple-600" size={24}/>,
            items: ['React', 'Next.js', 'Laravel', 'UI/UX Design']
        },
        {
            category: 'Databases',
            icon: <Database className="text-orange-600" size={24}/>,
            items: ['Firebase', 'MongoDB', 'PostgreSQL', 'SQLite']
        },
        {
            category: 'DevOps & Tools',
            icon: <Zap className="text-yellow-600" size={24}/>,
            items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab']
        },
        {
            category: 'Testing & QA',
            icon: <Terminal className="text-red-600" size={24}/>,
            items: ['Jira', 'Selenium', 'Cypress', 'Automated Testing']
        },
        {
            category: 'Programming Languages',
            icon: <Code className="text-indigo-600" size={24}/>,
            items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C++', 'Java']
        },
        {
            category: 'Operating Systems',
            icon: <Terminal className="text-gray-600" size={24}/>,
            items: ['UNIX/Linux', 'Windows', 'MacOS']
        }
    ];

    const experiences = [
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

    const projects = [
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

    const courses = [
        'Data Structures and Algorithms',
        'Web Technologies',
        'Mobile Application Development',
        'Operating Systems',
        'DevOps',
        'Software Testing'
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {staggerChildren: 0.1}
        }
    };

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {type: 'spring' as const, stiffness: 200}
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Header with blur effect */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrollY > 50 ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                }`}
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{type: 'spring', stiffness: 100}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3 cursor-pointer"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <div
                                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                                ER
                            </div>
                            <span className="font-bold text-lg md:text-xl text-gray-800 hidden sm:block">
                Ehtisham Rehmat
              </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-2">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                                        activeSection === item.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    {item.icon}
                                    <span className="hidden lg:inline">{item.label}</span>
                                </motion.button>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(true)}
                            whileTap={{scale: 0.9}}
                        >
                            <Menu className="text-gray-800" size={24}/>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-50 md:hidden"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden shadow-2xl"
                            initial={{x: '100%'}}
                            animate={{x: 0}}
                            exit={{x: '100%'}}
                            transition={{type: 'spring', damping: 25}}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-100"
                                    >
                                        <X size={24}/>
                                    </button>
                                </div>
                                <nav className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${
                                                activeSection === item.id
                                                    ? 'bg-blue-600 text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                            initial={{opacity: 0, x: 50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: index * 0.05}}
                                        >
                                            {item.icon}
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                {/* Hero Section */}
                <motion.section
                    id="home"
                    className="min-h-screen flex items-center py-12 md:py-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="w-full">
                        <div className="text-center mb-12">
                            {/* Avatar with animated gradient */}
                            <motion.div
                                className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
                                initial={{scale: 0, rotate: -180}}
                                animate={{scale: 1, rotate: 0}}
                                transition={{type: 'spring', stiffness: 200, delay: 0.2}}
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse"/>
                                <div
                                    className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                    <div
                                        className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl md:text-5xl">
                                        <Image
                                            src={"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/0739dd10303f2fd968bf7b92e5a4ea07-1682693275142/f07ca94b-1fc9-4302-b4f1-3004f7eb856a.png"}
                                            alt="avatar"
                                            fill
                                            sizes="(max-width: 768px) 8rem, 10rem"
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Name and Title */}
                            <motion.div variants={itemVariants}>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3">
                                    Ehtisham Rehmat
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                                    React Native Developer
                                </p>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                                    <MapPin size={18} className="text-blue-600"/>
                                    <span className="text-sm md:text-base text-gray-700">Islamabad, Pakistan</span>
                                </div>
                                <a
                                    href="mailto:im_shami@icloud.com"
                                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <Mail size={18} className="text-blue-600"/>
                                    <span className="text-sm md:text-base text-gray-700">im_shami@icloud.com</span>
                                </a>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                                    <Phone size={18} className="text-blue-600"/>
                                    <span className="text-sm md:text-base text-gray-700">+92 313 1666276</span>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div variants={itemVariants}
                                        className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                                <motion.a
                                    href="mailto:im_shami@icloud.com"
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <Mail size={20}/>
                                    Contact Me
                                </motion.a>
                                <motion.button
                                    className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-600"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <Download size={20}/>
                                    Download CV
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Summary Card */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Award className="text-blue-600" size={24}/>
                                    </div>
                                    Professional Summary
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    Skilled React Native Developer with 2 years of experience building and deploying
                                    cross-platform mobile apps using React Native and Expo. Possess a strong
                                    understanding of JavaScript and TypeScript, and mobile development concepts. Adept
                                    at creating reusable UI components, implementing native functionality, and
                                    optimizing app performance for both Android and iOS platforms. Excellent
                                    problem-solving and communication skills with a proven ability to collaborate
                                    effectively in agile development teams. Eager to learn and apply the latest industry
                                    trends and best practices. Committed to delivering high-quality code and exceeding
                                    user expectations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    id="experience"
                    className="py-12 md:py-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                            <Briefcase className="text-blue-600" size={36}/>
                            Professional Experience
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"/>
                    </motion.div>

                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={itemVariants} className="mb-8">
                            <div
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8 border border-gray-100">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-blue-600 font-semibold flex items-center gap-2">
                                            {exp.company}
                                            {exp.type && (
                                                <span
                                                    className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                          {exp.type}
                        </span>
                                            )}
                                        </p>
                                    </div>
                                    <div className={`px-4 py-2 rounded-full font-semibold text-sm ${
                                        exp.current
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"/>

                                <ul className="space-y-3">
                                    {exp.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{opacity: 0, x: -20}}
                                            whileInView={{opacity: 1, x: 0}}
                                            transition={{delay: i * 0.05}}
                                            className="flex items-start gap-3 text-gray-700"
                                        >
                                            <ChevronRight className="text-blue-600 flex-shrink-0 mt-0.5" size={20}/>
                                            <span className="text-base md:text-lg">{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    id="projects"
                    className="py-12 md:py-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                            <Smartphone className="text-blue-600" size={36}/>
                            Featured Projects
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"/>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{y: -5}}
                                className="h-full"
                            >
                                <div
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8 border border-gray-100 h-full flex flex-col">
                                    {/* Header with gradient */}
                                    <div className={`bg-gradient-to-r ${project.color} rounded-xl p-6 mb-6 text-white`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                                            <span
                                                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                                        </div>
                                        {project.badge && (
                                            <span
                                                className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                        {project.badge}
                      </span>
                                        )}
                                    </div>

                                    <p className="text-blue-600 font-semibold mb-3 text-base md:text-lg">
                                        {project.role}
                                    </p>
                                    <p className="text-gray-700 mb-6 flex-grow text-base md:text-lg leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <motion.button
                                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                        >
                                            View Project
                                            <ExternalLink size={18}/>
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    id="education"
                    className="py-12 md:py-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                            <GraduationCap className="text-blue-600" size={36}/>
                            Education
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"/>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                        Bachelor's Degree in Software Engineering
                                    </h3>
                                    <p className="text-lg md:text-xl text-blue-600 font-semibold">
                                        COMSATS University Islamabad
                                    </p>
                                </div>
                                <span
                                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
                  2019 - 2024
                </span>
                            </div>

                            <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"/>

                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Relevant Courses</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {courses.map((course, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, scale: 0.9}}
                                        whileInView={{opacity: 1, scale: 1}}
                                        transition={{delay: index * 0.05}}
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <ChevronRight className="text-blue-600 flex-shrink-0" size={20}/>
                                        <span className="text-gray-700 font-medium">{course}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    id="skills"
                    className="py-12 md:py-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                            <Terminal className="text-blue-600" size={36}/>
                            Skills & Technologies
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"/>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{y: -5}}
                            >
                                <div
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">{skill.category}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {skill.items.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{opacity: 0, x: -10}}
                                                whileInView={{opacity: 1, x: 0}}
                                                transition={{delay: i * 0.05}}
                                                className="flex items-center gap-2 text-gray-700"
                                            >
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"/>
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Footer */}
                <motion.footer
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="py-12 border-t border-gray-200"
                >
                    <div className="text-center">
                        <div className="flex justify-center gap-4 mb-6">
                            <motion.a
                                href="https://github.com/e-shami"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <Github size={20}/>
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/ehtisham-rehmat-267048121"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <Linkedin size={20}/>
                            </motion.a>
                            <motion.a
                                href="mailto:im_shami@icloud.com"
                                className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <Mail size={20}/>
                            </motion.a>
                        </div>
                        <p className="text-gray-600 mb-2 text-sm md:text-base">
                            © 2024 Ehtisham Rehmat. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                            Built with React, Next.js, Tailwind CSS & Framer Motion
                        </p>
                    </div>
                </motion.footer>
            </main>
        </div>
    );
};

export default HomeTemp;