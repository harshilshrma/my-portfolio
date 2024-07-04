"use client"

import React, { useState, useEffect, useRef } from "react"
import { MoveRight, Download, NotebookPen } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { ToastAction } from "@/components/ui/toast";

export default function Resume() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    useEffect(() => {
        const audio = new Audio('/pop.mp3');
        audioRef.current = audio;
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    const handleViewResume = () => {
        playSound();
        toast({
            title: 'How was my resume?',
            description: 'I hope you liked it.'
        })
        window.open('/HarshilSharma_Resume.pdf', '_blank');
    }

    const handleDownloadResume = () => {
        playSound();
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
                        <p className="text-sm md:text-lg mb-4">
                            Highly skilled, organized and creative Web Developer with experience in crafting functionally robust websites and web applications.
                        </p>
                        <p className="text-sm md:text-lg mb-4">
                            Have a look at my resume or download it.
                        </p>

                        <div className="flex flex-col md:flex-row items-center grid-cols-1 md:grid-cols-2 pt-6 space-x-4 mb-4">
                            <Button type="submit" onClick={handleViewResume} className="shadow-md">
                                View Resume &nbsp;<MoveRight className="mr-2 h-4 w-4" />
                            </Button>
                            <Button type="submit" onClick={handleDownloadResume} className="shadow-md">
                                Download Resume &nbsp;<Download className="mr-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="bg-background p-8 rounded-lg shadow-md flex flex-col justify-around">
                    <div className="flex flex-col justify-around space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-left mb-1">Profile Overview</h1>
                        <div className="flex items-center flex-grow space-x-4 ">
                            <NotebookPen width={58} height={58} />
                            <p className="text-sm md:text-lg">B.Tech (Final Year) in Computer Science & Engineering from BIT Mesra</p>
                        </div>
                        <div className="flex items-center flex-grow space-x-4 ">
                            <NotebookPen width={58} height={58} />
                            <p className="text-sm md:text-lg">B.Tech (Final Year) in Computer Science & Engineering from BIT Mesra</p>
                        </div>
                        <div className="flex items-center flex-grow space-x-4 ">
                            <NotebookPen width={58} height={58} />
                            <p className="text-sm md:text-lg">B.Tech (Final Year) in Computer Science & Engineering from BIT Mesra</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}