'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { itemVariants } from '@/src/lib/animations';
import React from 'react';

interface SectionHeaderProps {
    title: string;
    icon: LucideIcon;
}
 const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon }) => {
    return (
        <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                <Icon className="text-blue-600" size={36} />
                {title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </motion.div>
    );
};

export default SectionHeader;
