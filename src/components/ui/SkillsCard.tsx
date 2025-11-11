'use client';

import {motion} from 'framer-motion';
import {SkillCategory} from '@/src/lib/types';
import React from 'react';
import {useTailwindColorScheme} from "@/src/hooks";
import {useColorScheme} from "@mui/material";

interface SkillCardProps {
    skill: SkillCategory;
}

const SkillsCard: React.FC<SkillCardProps> = ({skill}) => {
    const scheme = useTailwindColorScheme();
    const {mode, systemMode} = useColorScheme();
    const isLight = mode === 'light' || systemMode === 'light';
    return (
        <motion.div whileHover={{y: -5}} className="h-full">
            <div className={`card ${scheme.cardColor}`}>
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className={`w-12 h-12 bg-gradient-to-br ${isLight ? 'from-blue-100 to-purple-100' : 'from-slate-600 via-gray-800 to-purple-700 to-175%'}  rounded-xl flex items-center justify-center`}>
                        {skill.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${scheme.titleColor}`}>{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{opacity: 0, x: -10}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{delay: i * 0.05}}
                            className={`flex items-center gap-2 ${scheme.textPrimaryColor}`}
                        >
                            <div className={`w-2 h-2 bg-gradient-to-r ${scheme.buttonColor} rounded-full`}/>
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default SkillsCard;
