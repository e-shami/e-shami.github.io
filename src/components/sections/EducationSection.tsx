'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {GraduationCap, ChevronRight} from 'lucide-react';
import {CourseSegment, SectionHeader} from '@/src/components/ui';
import {COURSES} from '@/src/lib/constants';
import {containerVariants, fadeInUp, scaleIn, slideInFromLeft} from '@/src/lib/animations';
import {useTailwindColorScheme} from "@/src/hooks";
import {useColorScheme} from "@mui/material";

const EducationSection: React.FC = () => {
    const scheme = useTailwindColorScheme();
    const {mode, systemMode} = useColorScheme();
    const isLight = mode === 'light' || systemMode === 'light';
    return (
        <motion.section
            id="education"
            className="py-12 md:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
            variants={containerVariants}
            style={{
                scrollMarginTop: '56px',
            }}
        >
            <SectionHeader title="Education" icon={GraduationCap}/>

            <motion.div variants={slideInFromLeft}>
                <div className={`card ${scheme.cardColor}`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div className="mb-4 md:mb-0">
                            <h3 className={`text-xl md:text-2xl font-bold ${scheme.titleColor} mb-2`}>
                                Bachelor's Degree in Software Engineering
                            </h3>
                            <p className={`text-lg md:text-xl ${scheme.importantTextColor} font-semibold`}>
                                COMSATS University Islamabad
                            </p>
                        </div>
                        <span
                            className={`px-4 py-2 ${isLight ? "bg-blue-100 text-blue-700" : "bg-blue-600 text-blue-100"} rounded-full font-semibold text-sm`}>
        2019 - 2024
        </span>
                    </div>

                    <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"/>

                    <h4 className={`text-lg md:text-xl font-bold ${scheme.textPrimaryColor} mb-4`}>Relevant Courses</h4>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {COURSES.map((course, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{delay: index * 0.05}}
                            >
                                <CourseSegment course={course}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default EducationSection;
