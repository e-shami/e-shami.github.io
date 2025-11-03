import type {Metadata} from "next";
import { Roboto, Roboto_Mono} from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../theme/ThemeRegistry";
import {Footer, Header} from "@/src/components/layout";
import React from "react";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Ehtisham Rehmat | React Native Developer',
    description: 'Portfolio of Ehtisham Rehmat - Skilled React Native Developer with 2 years of experience building cross-platform mobile applications using React Native and Expo',
    keywords: ['React Native', 'Developer', 'Mobile App Development', 'Expo', 'JavaScript', 'TypeScript', 'Node.js', 'Full Stack'],
    authors: [{ name: 'Ehtisham Rehmat' }],
    openGraph: {
        title: 'Ehtisham Rehmat | React Native Developer',
        description: 'Portfolio showcasing mobile and web development projects',
        type: 'website',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"scroll-smooth"}>
        <body className={`${roboto.variable} ${robotoMono.variable} bg-gradient-to-br from-slate-50 via-white to-slate-100 antialiased`}>
        <ThemeRegistry>
            <Header/>
            {children}
            <Footer/>
        </ThemeRegistry>
        </body>
        </html>
    );
}
