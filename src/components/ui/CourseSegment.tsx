import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import {useTailwindColorScheme} from "@/src/hooks";
import {useColorScheme} from "@mui/material";
import React from "react";

interface CourseSegmentProps {
    course: string,
}

const CourseSegment: React.FC<CourseSegmentProps> = ({course}) => {
    const scheme = useTailwindColorScheme();
    const {mode} = useColorScheme();
    const isLight = mode === "light";
    return (
        <motion.div
            whileHover={{y: -2}}
            className={`bg-transparent`}
        >

            <div className={`flex items-center gap-3 p-3 ${scheme.segmentBgColor} rounded-lg `}>
                <ChevronRight className={scheme.importantTextColor} size={20}/>
                <span className={`${scheme.textSecondaryColor} font-medium`}>{course}</span>
            </div>
        </motion.div>
    );
};

export default CourseSegment;