"use client"

import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle';
import { useTheme } from 'next-themes';
import {useState, useEffect} from 'react';
import Image from "next/image";

const Navbar = () => {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Logic to toggle dark mode
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (
        <nav className="flex justify-between p-4 ">
            <Image src={isDarkMode ? '/mylogo-white.png' : '/mylogo-black.png'} alt="Logo" height={40} width={40}/>
            <div className="flex justify-between gap-4">
                <Link href="#about" className="mx-2 text-primary">About</Link>
                <Link href="#projects" className="mx-2 text-primary">Projects</Link>
                <Link href="#contact" className="mx-2 text-primary">Contact</Link>
            </div>
            <ModeToggle></ModeToggle>
        </nav>
    );
}


export default Navbar;