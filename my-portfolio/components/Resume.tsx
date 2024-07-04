"use client"

import React, { useState, useEffect } from "react"
import { MoveRight, Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
export default function Resume() {

    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    const handleViewResume = () => {
        toast({
            title: 'How was my resume?',
            description: 'I hope you liked it.'
        })
        window.open('/HarshilSharma_Resume.pdf', '_blank');
    }

    const handleDownloadResume = () => {
        toast({
            title: 'Downloading my resume!',
            description: 'Hold tight. Your download will begin shortly.'
        });
        const link = document.createElement('a');
        link.href = '/HarshilSharma_Resume.pdf';
        link.download = 'HarshilSharma_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid h-[400px] grid-cols-1 md:grid-cols-2 gap-8">
                {/* grid 1 */}
                <div className="bg-secondary p-8 rounded-lg shadow-md flex flex-col justify-around">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-left mb-5">My Resume</h1>
                        <p className="text-sm md:text-base mb-4">
                            Highly skilled, organized and creative Web Developer with experience in crafting functionally robust websites and web applications.
                        </p>
                        <p className="text-sm md:text-base mb-4">
                            Have a look at my resume or download it.
                        </p>

                        <div className="flex flex-col md:flex-row items-center  grid-cols-1 md:grid-cols-2 pt-6 space-x-4 mb-4">
                            <Button type="submit" onClick={handleViewResume}>
                                View Resume &nbsp;<MoveRight className="mr-2 h-4 w-4" />
                            </Button>
                            <Button type="submit" onClick={handleDownloadResume}>
                                Download Resume &nbsp;<Download className="mr-2 h-4 w-4" />
                            </Button>   
                        </div>
                    </div>
                </div>

                {/* grid 2 */}
                <div className="bg-background p-8 rounded-lg shadow-md flex flex-col justify-around">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-left mb-5">Profile Overview</h1>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2 5a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm14 0a1 1 0 00-1-1h-3a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 001-1V5zM5 6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm9 0a1 1 0 00-1-1h-3a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1V6z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M6 10a1 1 0 100 2h8a1 1 0 100-2H6zm-1 3a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>Currently pursuing B.Tech in CSE at IAT AMNCSN</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm7 2a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
                                </svg>
                                <span>Currently working at [Your Company/Role]</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
