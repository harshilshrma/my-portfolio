"use client"

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Logic to toggle dark mode
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Event listener to check scroll position
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };

    return (
        <Button
            className={`fixed bottom-6 right-6 p-3 text rounded-full shadow-md ${isVisible ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
            type="submit"
        >
            <div className="pl-2 flex justify-center text-background items-center">
                Back to top&nbsp;<ArrowUp size={20} />
            </div>
        </Button>
    );
};
