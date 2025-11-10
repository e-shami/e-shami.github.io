'use client';

import { LucideIcon } from 'lucide-react'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';
import {useColorScheme} from "@mui/material";

interface ContactBadgeProps {
    icon: LucideIcon;
    text: string;
    href?: string;
}

const ContactBadge: React.FC<ContactBadgeProps> = ({ icon: Icon, text, href }) => {
    const {mode} = useColorScheme();
    const isLight = mode === "light";
    const colors = {
        icon: isLight ? "text-blue-600" : "text-blue-400",
        text: isLight ? "text-gray-700" : "text-gray-100",
        badge: isLight ? "bg-white" : "bg-slate-800",
    }
    const content = (
        <>
            <Icon size={18} className={colors.icon} />
            <span className={`text-sm md:text-base ${colors.text}`}>{text}</span>
        </>
    );

    const className = `flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full shadow-md hover:shadow-lg transition-shadow`;

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
