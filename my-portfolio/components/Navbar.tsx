"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, MoveUpRight } from 'lucide-react';
import Image from "next/image";
import { useTheme } from 'next-themes';
import { ModeToggle } from './mode-toggle';
import * as Separator from '@radix-ui/react-separator';


const Navbar = () => {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 relative">
            <Link href="#">
                <Image src={isDarkMode ? '/mylogo-white.png' : '/mylogo-black.png'} alt="Logo" height={40} width={40} />
            </Link>

            <div className="hidden md:flex justify-between gap-4">
                <Link href="#experiences" className="mx-2 text-primary">Experience</Link>
                <Link href="#resume" className="mx-2 text-primary">Resume</Link>
                <Link href="#projects" className="mx-2 text-primary">Projects</Link>
                <Link href="#recs" className="mx-2 text-primary">Recommendations</Link>
                <Link href="#contact" className="mx-2 text-primary">Contact Me</Link>
                {/* <Link href="https://github.com/harshilshrma/my-portfolio" target="_blank" rel="noopener noreferrer" className="mx-2 text-primary no-underline hover:underline">GitHub <MoveUpRight width={16} height={16} className="inline-block mb-1" /></Link> */}
            </div>

            <ModeToggle />

            <button className="md:hidden ml-4" onClick={toggleMenu}>
                <Menu className="h-6 w-6 text-primary" />
            </button>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background z-50">
                    <div className="flex flex-col items-center py-4 space-y-2">
                        <Link href="#experiences" className="mx-2 text-primary">Experience</Link>
                        <Link href="#resume" className="mx-2 text-primary">Resume</Link>
                        <Link href="#projects" className="mx-2 text-primary">Projects</Link>
                        <Link href="#recs" className="mx-2 text-primary">Recommendations</Link>
                        <Link href="#contact" className="mx-2 text-primary">Contact Me</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
