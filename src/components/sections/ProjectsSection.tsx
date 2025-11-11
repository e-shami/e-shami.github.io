'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Smartphone} from 'lucide-react';
import {SectionHeader, ProjectCard} from '@/src/components/ui';
import {PROJECTS} from '@/src/lib/constants';
import {containerVariants, itemVariants} from '@/src/lib/animations';
import {useColorScheme} from "@mui/material";

const ProjectsSection: React.FC = () => {
    const {mode, systemMode} = useColorScheme();
    const isLight = mode === 'light' || systemMode === 'light';
    const colors = [
        isLight ? 'from-orange-400 via-rose-400 to-amber-400' : 'from-orange-700 via-rose-700 to-amber-700',
        isLight ? 'from-violet-400 via-pink-400 to-rose-400' : 'from-violet-700 via-pink-700 to-rose-700',
        isLight ? 'from-emerald-300 via-teal-400 to-slate-500' : 'from-emerald-700 via-teal-700 to-slate-700'
    ];
    return (
        <motion.section
            id="projects"
            className="py-12 md:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
            variants={containerVariants}
            style={{
                scrollMarginTop: '56px',
            }}
        >
            <SectionHeader title="Featured Projects" icon={Smartphone}/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard project={project} headerColor={colors[index % colors.length]}/>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
export default ProjectsSection;