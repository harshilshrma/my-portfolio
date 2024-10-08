import { Globe, CalendarDays } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Image from "next/image";
import YouTubeIcon from "./icon/YoutubeIcon"
import GithubIcon from "./icon/GithubIcon"
import LinkedinIcon from "./icon/LinkedinIcon"
import XIcon from "./icon/x";
import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import ProjectTechIcons from "./ProjectTechIcons";

type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    imagewidth: number;
    imageheight: number;
    githubLink?: string;
    linkedinLink?: string;
    websiteLink?: string;
    youtubeLink?: string;
    xlink?: string;
    subhead?: string;
    subtext?: string;
    techs?: string[];
    date?: string;
};

export function ProjectCard({
    projectName,
    projectDescription,
    projectImage,
    imagewidth,
    imageheight,
    githubLink,
    linkedinLink,
    websiteLink,
    youtubeLink,
    xlink,
    subhead,
    subtext,
    techs,
    date,
}: ProjectCardProps) {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (

        <Card className={cn("w-full md:w-[380px] shadow-md")}>
            <CardHeader className="gap-2">
                <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                        Completed on {date}
                    </span>
                </div>
                <CardTitle>{projectName}</CardTitle>
                <CardDescription>{projectDescription}</CardDescription>
                <Image src={projectImage} quality={100} width={imagewidth} height={imageheight} alt={projectName} className="w-full h-auto mt-4 rounded-md" />
            </CardHeader>

            <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {subhead}
                        </p>
                    </div>
                    <ProjectTechIcons techs={techs} projectName={projectName} />
                </div>
            </CardContent>

            <CardFooter className="flex justify-around">
                {websiteLink && (
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="">
                        <Globe className="h-7 w-7" />
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="">
                        <GithubIcon sizeh="h-7" sizew="w-7" variant={isDarkMode ? 'light' : 'dark'} />
                    </a>
                )}
                {linkedinLink && (
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="">
                        <LinkedinIcon sizeh="h-7" sizew="w-7" />
                    </a>
                )}
                {youtubeLink && (
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="">
                        <YouTubeIcon sizeh="h-7" sizew="w-7" />
                    </a>
                )}
                {xlink && (
                    <a href={xlink} target="_blank" rel="noopener noreferrer" className="">
                        <XIcon sizeh="h-6" sizew="w-6" variant={isDarkMode ? 'light' : 'dark'} />
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}
