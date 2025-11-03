'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '@/src/lib/constants';
import React from 'react';

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
    const handleNavigate = (sectionId: string) => {
        onNavigate(sectionId);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden shadow-2xl"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25 }}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-gray-100"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className="space-y-2">
                                {NAV_ITEMS.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => handleNavigate(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${
                                            activeSection === item.id
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
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
    );
};

export default MobileMenu;
