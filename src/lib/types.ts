import React from 'react'

export interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    current: boolean;
    type?: string;
    achievements: string[];
}

export interface Project {
    title: string;
    year: string;
    role: string;
    badge?: string;
    description: string;
    tech: string[];
    link?: string;
    externalLink?: boolean;
}

export interface SkillCategory {
    category: string;
    icon: React.ReactElement;
    items: string[];
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
}