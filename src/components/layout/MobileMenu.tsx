'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {X} from 'lucide-react';
import {NAV_ITEMS} from '@/src/lib/constants';
import React from 'react';
import {useTailwindColorScheme} from "@/src/hooks";
import {useColorScheme} from "@mui/material";
import ThemeToggle from "@/src/components/ThemeToggle";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    activeSection: string;
    onNavigate: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
                                                   isOpen,
                                                   onClose,
                                                   activeSection,
                                                   onNavigate
                                               }) => {

    const {mode, systemMode} = useColorScheme();
    const lightMode = mode === 'light' || systemMode === 'light';
    const handleNavigate = (sectionId: string) => {
        onNavigate(sectionId);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={'w-full h-full fixed inset-0 z-50 md:hidden'}>
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-50 md:hidden"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={onClose}
                    />
                    <motion.div
                        className={`absolute top-0 right-0 bottom-0 w-[60%] ${lightMode ? 'bg-white' : 'bg-slate-900'} z-50 md:hidden shadow-2xl`}
                        initial={{x: '100%'}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{type: 'spring', damping: 25}}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className={`text-2xl font-bold ${lightMode ? 'text-gray-800' : 'text-gray-100'} `}>Menu</h2>
                                <button
                                    onClick={onClose}
                                >
                                    <X size={24}/>
                                </button>
                            </div>
                            <nav className="space-y-4">
                                {NAV_ITEMS.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => handleNavigate(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${
                                            activeSection === item.id
                                                ? 'bg-blue-600 text-white'
                                                : `${lightMode ? 'text-gray-700' : 'text-slate-400'}`
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
                            <div
                                className={`w-full text-left mt-6 py-3 font-medium transition-all flex items-center justify-between ${lightMode ? 'text-gray-700' : 'text-slate-300'} gap-3`}>
                                <p> Change theme</p>
                                <ThemeToggle/>
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
