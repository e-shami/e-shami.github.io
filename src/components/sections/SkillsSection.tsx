'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Terminal} from 'lucide-react';
import {SectionHeader, SkillCard} from '@/src/components/ui';
import {SKILLS} from '@/src/lib/constants';
import {containerVariants, itemVariants} from '@/src/lib/animations';

const SkillsSection: React.FC = () => {
    return (
        <motion.section
            id="skills"
            className="py-12 md:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
            variants={containerVariants}
            style={{
                scrollMarginTop: '56px',
            }}
        >
            <SectionHeader title="Skills & Technologies" icon={Terminal}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants} className="h-full">
                        <SkillCard skill={skill}/>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;