'use client';

import {motion} from 'framer-motion';
import {LucideIcon} from 'lucide-react';
import {itemVariants} from '@/src/lib/animations';
import React from 'react';
import {useTailwindColorScheme} from "@/src/hooks";

interface SectionHeaderProps {
    title: string;
    icon: LucideIcon;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, icon: Icon}) => {
    const scheme = useTailwindColorScheme();
    return (
        <motion.div variants={itemVariants} className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${scheme.titleColor} mb-3 flex items-center gap-3`}>
                <Icon className={scheme.importantTextColor} size={36}/>
                {title}
            </h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${scheme.buttonColor} rounded-full`}/>
        </motion.div>
    );
};

export default SectionHeader;