'use client'

import {motion} from "framer-motion";
import {Briefcase} from "lucide-react";
import React from "react";
import {EXPERIENCES} from "@/src/lib/constants";
import {containerVariants, slideInFromLeft, slideInFromRight} from "@/src/lib/animations";
import {SectionHeader, ExperienceCard} from '@/src/components/ui'

const ExperienceSection: React.FC = () => {
    return (
        <motion.section
            id="experience"
            className="py-12 md:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
            variants={containerVariants}
        >
            <SectionHeader title="Professional Experience" icon={Briefcase}/>

            {EXPERIENCES.map((exp, index) => (
                <motion.div 
                    key={index} 
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight} 
                    className="mb-8"
                >
                   <ExperienceCard experience={exp}/>
                </motion.div>
            ))}
        </motion.section>
    )
}

export default ExperienceSection;
