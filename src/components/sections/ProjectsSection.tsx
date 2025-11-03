'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Smartphone} from 'lucide-react';
import {SectionHeader, ProjectCard} from '@/src/components/ui';
import {PROJECTS} from '@/src/lib/constants';
import {containerVariants, itemVariants} from '@/src/lib/animations';

const ProjectsSection: React.FC = () => {
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
                        <ProjectCard project={project}/>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
export default ProjectsSection;