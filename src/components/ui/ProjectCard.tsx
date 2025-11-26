'use client';

import {motion} from 'framer-motion';
import {ExternalLink} from 'lucide-react';
import {Project} from '@/src/lib/types';
import React from 'react';
import {useTailwindColorScheme} from "@/src/hooks";
import {useColorScheme} from "@mui/material";
import {isAndroid, isIOS} from "react-device-detect";
import Image from 'next/image';
import AndroidIcon from '@/public/svgs/android.svg'
import AppleIcon from '@/public/svgs/apple.svg'

interface ProjectCardProps {
    project: Project;
    headerColor: string;
}
 const ProjectCard: React.FC<ProjectCardProps> = ({project, headerColor}) => {

    const scheme = useTailwindColorScheme();
    const {mode} = useColorScheme();
    const isLight = mode === 'light';
    const isExternalLinkCombined = project?.externalLink && !isIOS && !isAndroid;

    let androidLink, iosLink;
    if (isExternalLinkCombined) {
        const split = project.link?.split('<=>');
        androidLink = split?.[0];
        iosLink = split?.[1];
    }

    return (
        <motion.div whileHover={{y: -5}} className="h-full">
            <div
                className={`card ${scheme.cardColor}`}>
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${headerColor} rounded-xl p-6 mb-6 text-white antialiased`}>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                        <span className={`px-3 py-1 ${isLight ? 'bg-white/20' : 'bg-black/20'} backdrop-blur-sm rounded-full text-sm font-semibold`}>
              {project.year}
            </span>
                    </div>
                    {project.badge && (
                        <span
                            className={`inline-block px-3 py-1 ${isLight ? 'bg-white/30' : 'bg-black/30'} backdrop-blur-sm rounded-full text-sm font-semibold`}>
              {project.badge}
            </span>
                    )}
                </div>

                <p className={`${scheme.importantTextColor} font-semibold mb-3 text-base md:text-lg`}>
                    {project.role}
                </p>
                <p className={`${scheme.textPrimaryColor} mb-6 flex-grow text-base md:text-lg leading-relaxed`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className={`px-3 py-1 ${scheme.textPrimaryColor} ${scheme.segmentBgColor} rounded-lg text-sm font-medium`}
                        >
              {tech}
            </span>
                    ))}
                </div>

                {isExternalLinkCombined ? (
                        <div className={'flex justify-center gap-6'}>
                            <motion.a
                                href={`https://${androidLink}`}
                                target={`_blank`}
                                rel={`noopener noreferrer`}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`w-fit px-3 py-1.5 bg-gradient-to-r ${scheme.buttonColor} from text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                            >
                                <Image src={AndroidIcon} alt={'Android Icon'} width={40} height={40}/>
                            </motion.a>

                            <motion.a
                                href={`https://${iosLink}`}
                                target={`_blank`}
                                rel={`noopener noreferrer`}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`w-fit px-3 py-1.5 bg-gradient-to-r ${scheme.buttonColor} from text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                                >
                                <Image src={AppleIcon} alt={'Apple Icon'} width={40} height={40}/>
                            </motion.a>
                        </div>
                )
                :
                    (

                project.link && (
                    <motion.a
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full px-6 py-3 bg-gradient-to-r ${scheme.buttonColor} from text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        View Project
                        <ExternalLink size={18}/>
                    </motion.a>
                )
                    )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
