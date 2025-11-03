'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {GraduationCap, ChevronRight} from 'lucide-react';
import {SectionHeader} from '@/src/components/ui';
import {COURSES} from '@/src/lib/constants';
import {containerVariants, fadeInUp, slideInFromLeft} from '@/src/lib/animations';

const EducationSection: React.FC = () => {
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
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                Bachelor's Degree in Software Engineering
                            </h3>
                            <p className="text-lg md:text-xl text-blue-600 font-semibold">
                                COMSATS University Islamabad
                            </p>
                        </div>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
        2019 - 2024
        </span>
                    </div>

                    <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"/>

                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Relevant Courses</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {COURSES.map((course, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{delay: index * 0.05}}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="text-blue-600 flex-shrink-0" size={20}/>
                                <span className="text-gray-700 font-medium">{course}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default EducationSection;
