import {Experience} from "@/src/lib/types";
import React from "react";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import {useTailwindColorScheme} from "@/src/hooks";
import {useColorScheme} from "@mui/material";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({experience}) => {
    const scheme = useTailwindColorScheme();
    const {mode} = useColorScheme();
    const isLight = mode === 'light';

    return (
        <div
            className={`card ${scheme.cardColor}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                    <h3 className={`text-xl md:text-2xl font-bold ${scheme.titleColor} mb-2`}>
                        {experience.title}
                    </h3>
                    <p className={`text-lg md:text-xl ${scheme.importantTextColor} font-semibold flex items-center gap-2`}>
                        {experience.company}
                        {experience.type && (
                            <span
                                className={`text-sm px-3 py-1 ${isLight ? "bg-purple-100 text-purple-700" : "bg-purple-100-600 text-purple-100"} rounded-full`}>
                          {experience.type}
                        </span>
                        )}
                    </p>
                </div>
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${
                    experience.current
                        ? ` ${isLight ? " bg-green-100 text-green-700" : "bg-green-800 text-green-200"}`
                        : `${scheme.textPrimaryColor} ${scheme.segmentBgColor}`
                }`}>
                    {experience.period}
                </div>
            </div>

            <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"/>

            <ul className="space-y-3">
                {experience.achievements.map((achievement, i) => (
                    <motion.li
                        key={i}
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{delay: i * 0.05}}
                        className={`flex items-start gap-3 ${scheme.textPrimaryColor}`}
                    >
                        <ChevronRight className={`${scheme.importantTextColor}  flex-shrink-0 mt-0.5`} size={20}/>
                        <span className="text-base md:text-lg">{achievement}</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
};

export default ExperienceCard;