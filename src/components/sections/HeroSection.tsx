'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Award } from 'lucide-react';
import { ContactBadge } from '@/src/components/ui';
import { CONTACT_INFO } from '@/src/lib/constants';
import { containerVariants, itemVariants, scaleIn, slideInFromRight } from '@/src/lib/animations';
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
    return (
        <motion.section
            id="home"
            className="min-h-screen flex items-center py-12 md:py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-full">
                <div className="text-center mb-12">
                    {/* Avatar with animated gradient */}
                    <motion.div
                        className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-8"
                        variants={scaleIn}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse" />
                        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl md:text-5xl">
                                <Image
                                    src={"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/0739dd10303f2fd968bf7b92e5a4ea07-1682693275142/f07ca94b-1fc9-4302-b4f1-3004f7eb856a.png"}
                                    alt="avatar"
                                    fill
                                    sizes="(max-width: 768px) 8rem, 10rem"
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name and Title */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3">
                            Ehtisham Rehmat
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                            React Native Developer
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
                    >
                        <ContactBadge icon={MapPin} text={CONTACT_INFO.location} href={`https://www.google.com/maps/search/?api=1&query=${CONTACT_INFO.location}`}/>
                        <ContactBadge
                            icon={Mail}
                            text={CONTACT_INFO.email}
                            href={`mailto:${CONTACT_INFO.email}`}
                        />
                        <ContactBadge icon={Phone} text={CONTACT_INFO.phone} href={`tel:${CONTACT_INFO.phone}`} />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <motion.a
                            href="/cv.pdf"
                            download="Ehtisham_Rehmat_CV.pdf"
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={24} />
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>

                {/* Summary Card */}
                <motion.div variants={slideInFromRight} >
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Award className="text-blue-600" size={24} />
                            </div>
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            Skilled React Native Developer with 2 years of experience building and deploying cross-platform mobile apps using React Native and Expo. Possess a strong understanding of JavaScript and TypeScript, and mobile development concepts. Adept at creating reusable UI components, implementing native functionality, and optimizing app performance for both Android and iOS platforms. Excellent problem-solving and communication skills with a proven ability to collaborate effectively in agile development teams. Eager to learn and apply the latest industry trends and best practices. Committed to delivering high-quality code and exceeding user expectations.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
