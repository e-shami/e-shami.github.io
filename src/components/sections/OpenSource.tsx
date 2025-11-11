'use client'

import {ProjectCard, SectionHeader} from "@/src/components/ui";
import {GitFork} from "lucide-react";
import React from "react";
import {containerVariants, itemVariants} from "@/src/lib/animations";
import {motion} from 'framer-motion';
import {OPEN_SOURCE} from "@/src/lib/constants";


const OpenSourceSection: React.FC = () => {
    return (
        <motion.section id="open-source"
                        className="py-12 md:py-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                        variants={containerVariants}
                        style={{
                            scrollMarginTop: '56px',
                        }}
        >
            <SectionHeader title={"Open Source Contribution"} icon={GitFork}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {OPEN_SOURCE.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="h-full">
                        <ProjectCard project={project} headerColor={"bg-gradient-to-r from-blue-600 to-blue-800"}/>
                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
};

export default OpenSourceSection;
