'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '@/src/lib/types';
import React from 'react';

interface SkillCardProps {
    skill: SkillCategory;
}

const SkillsCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <motion.div whileHover={{ y: -5 }} className="h-full">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                        {skill.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2 text-gray-700"
                        >
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default SkillsCard;
