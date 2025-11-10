"use client";
import React from "react";
import {useColorScheme} from "@mui/material/styles";
import {useTailwindColorScheme} from "@/src/hooks";

interface AppWrapperProps {
    restClassName: string;
    children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({children, restClassName}) => {
    const scheme = useTailwindColorScheme();

    return (
        <body className={`bg-gradient-to-br ${scheme.backgroundColor} antialiased ${restClassName}`}>
            {children}
        </body>
    );
};

export default AppWrapper;