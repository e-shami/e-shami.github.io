'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {Github, Linkedin, Mail} from 'lucide-react';
import {CONTACT_INFO} from '@/src/lib/constants';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            className="py-12 border-t border-gray-200"
        >
            <div className="text-center">
                <div className="flex justify-center gap-4 mb-6">
                    <motion.a
                        href={CONTACT_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        aria-label="GitHub"
                    >
                        <Github size={20}/>
                    </motion.a>
                    <motion.a
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20}/>
                    </motion.a>
                    <motion.a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        aria-label="Email"
                    >
                        <Mail size={20}/>
                    </motion.a>
                </div>
                <p className="text-gray-600 mb-2 text-sm md:text-base">
                    © 2024 Ehtisham Rehmat. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                    Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;

