"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Clients() {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Logic to toggle dark mode
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (
        <section className="my-8 text-center">
            <h2 className="text-4xl font-bold mb-4">I've worked at</h2>
            <div className="flex justify-center space-x-4">
                <Image
                    src={isDarkMode ? "/tubemagic.png" : "/tm-bl.png"}
                    alt="tubemagic"
                    width={150}
                    height={100}
                />
                <span>With You?</span>
            </div>
        </section>
    );
}
