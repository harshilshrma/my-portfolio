"use client"

import React from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Logic to toggle dark mode
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background items-center pt-3 w-full h-16">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mb-2 space-x-2">
                    <Link href="#">
                        <Image
                            src={isDarkMode ? '/mylogo-black.png' : '/mylogo-white.png'}
                            alt="Logo"
                            width={30}
                            height={30}
                            className="h-auto w-auto"
                        />
                    </Link>
                    <div className="pl-2 text-center md:text-base text-sm">
                        &#169; {currentYear} Harshil Sharma. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;