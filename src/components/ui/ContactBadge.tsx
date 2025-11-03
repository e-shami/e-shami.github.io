'use client';

import { LucideIcon } from 'lucide-react'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';

interface ContactBadgeProps {
    icon: LucideIcon;
    text: string;
    href?: string;
}

const ContactBadge: React.FC<ContactBadgeProps> = ({ icon: Icon, text, href }) => {
    const content = (
        <>
            <Icon size={18} className="text-blue-600" />
            <span className="text-sm md:text-base text-gray-700">{text}</span>
        </>
    );

    const className = "flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow";

    if (href) {
        return (
            <motion.a 
                href={href} 
                className={className}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.div 
            className={className}
            variants={fadeInUp}
        >
            {content}
        </motion.div>
    );
};

export default ContactBadge;
