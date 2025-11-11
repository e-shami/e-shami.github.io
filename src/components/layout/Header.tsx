'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {Menu} from 'lucide-react';
import MobileMenu from './MobileMenu';
import {useActiveSection} from '@/src/hooks/useActiveSection';
import {useScrollPosition} from '@/src/hooks/useScrollPosition';
import {NAV_ITEMS} from '@/src/lib/constants';
import React from 'react';
import ThemeToggle from "@/src/components/ThemeToggle";
import {useColorScheme} from "@mui/material";

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {mode, systemMode} = useColorScheme();
    const lightMode = mode === 'light' || systemMode === 'light';
    const activeSection = useActiveSection();
    const scrollY = useScrollPosition();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    const navColor = scrollY > 50 ? `${ lightMode? 'bg-white/20' : 'bg-black/40'} backdrop-blur-lg shadow-lg` : 'bg-transparent';

    return (
        <>
            <motion.header
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    navColor
                }`}
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{type: 'spring' as const, stiffness: 100}}
            >
                <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                    <div className={"flex justify-between items-center h-16 md:h-20"}>
                        {/* Logo */}
                        <motion.div
                            className={"flex items-center gap-3 cursor-pointer"}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            onClick={() => scrollToSection('home')}
                        >
                            <div
                                className={"w-fit h-fit px-3 py-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg"}>
                                丂卄卂爪丨
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className={"hidden md:flex items-center gap-2"}>
                            {NAV_ITEMS.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                                        activeSection === item.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : `${lightMode ?  'text-gray-700 hover:bg-white/85' : 'text-slate-200 hover:bg-black/15'}`
                                    }`}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    {item.icon}
                                    <span className="hidden lg:inline">{item.label}</span>
                                </motion.button>
                            ))}
                            <ThemeToggle />
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className={lightMode ? 'text-gray-700' : 'text-slate-200'} size={24}/>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                activeSection={activeSection}
                onNavigate={scrollToSection}
            />
        </>
    );
};

export default Header;