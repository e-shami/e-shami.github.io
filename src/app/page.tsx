import React from "react";
import {
    EducationSection,
    ExperienceSection,
    HeroSection,
    ProjectsSection,
    SkillsSection
} from "@/src/components/sections";

export default function Home() {

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
            <HeroSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <EducationSection/>
            <SkillsSection/>
        </main>
    );
}
