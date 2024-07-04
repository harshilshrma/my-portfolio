"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Clients() {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Logic to toggle dark mode
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (
        <section className="my-8 text-center">
            <h2 className="text-4xl font-bold mb-4">I&apos;ve worked at</h2>
            <div className="flex justify-center items-center space-x-4">
                <Link href={"https://tubemagic.com/"} target="_blank">
                    <Image
                        src={isDarkMode ? "/tubemagic.png" : "/tm.png"}
                        alt="tubemagic"
                        width={250}
                        height={100}
                    />
                </Link>
                <div className="text-lg">... and maybe with you  next?</div>
            </div>
            <div className="my-8"></div>
        </section>
    );
}
