"use client"

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Assuming you have an arrow icon component

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

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
        <button
            className={`fixed bottom-6 right-6 bg-secondary text-foreground p-3 rounded-full shadow-md ${isVisible ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <div className='pl-2 flex justify-center items-center text-primary'>
                Back to top <ArrowUp size={24} />
            </div>
        </button>
    );
};
