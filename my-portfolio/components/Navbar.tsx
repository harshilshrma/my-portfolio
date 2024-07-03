"use client"

import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Menu } from 'lucide-react';

const Navbar = () => {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Logic to toggle dark mode
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4">
            <Image src={isDarkMode ? '/mylogo-white.png' : '/mylogo-black.png'} alt="Logo" height={40} width={40} />
            <div className="hidden md:flex justify-between gap-4">
                <Link href="#about" className="mx-2 text-primary">About</Link>
                <Link href="#projects" className="mx-2 text-primary">Projects</Link>
                <Link href="#contact" className="mx-2 text-primary">Contact</Link>
            </div>
            <ModeToggle></ModeToggle>
            <button className="md:hidden ml-4" onClick={toggleMenu}>
                <Menu className="h-6 w-6 text-primary" />
            </button>
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-background flex flex-col items-center md:hidden">
                    <Link href="#about" className="py-2 text-primary" onClick={toggleMenu}>About</Link>
                    <Link href="#projects" className="py-2 text-primary" onClick={toggleMenu}>Projects</Link>
                    <Link href="#contact" className="py-2 text-primary" onClick={toggleMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
}


export default Navbar;