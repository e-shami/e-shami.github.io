'use client';

import {motion} from 'framer-motion';
import {ExternalLink} from 'lucide-react';
import {Project} from '@/src/lib/types';
import React from 'react';

interface ProjectCardProps {
    project: Project;
}
 const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <motion.div whileHover={{y: -5}} className="h-full">
            <div
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8 border border-gray-100 h-full flex flex-col">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${project.color} rounded-xl p-6 mb-6 text-white`}>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              {project.year}
            </span>
                    </div>
                    {project.badge && (
                        <span
                            className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold">
              {project.badge}
            </span>
                    )}
                </div>

                <p className="text-blue-600 font-semibold mb-3 text-base md:text-lg">
                    {project.role}
                </p>
                <p className="text-gray-700 mb-6 flex-grow text-base md:text-lg leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
              {tech}
            </span>
                    ))}
                </div>

                {project.link && (
                    <motion.a
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        View Project
                        <ExternalLink size={18}/>
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
