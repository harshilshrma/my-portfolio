import { BellRing, Linkedin, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import Image from "next/image";
import YouTubeIcon from "./icon/YoutubeIcon"
import GithubIcon from "./icon/GithubIcon"

type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    progress: number;
    githubLink?: string;
    linkedinLink?: string;
    websiteLink?: string;
    youtubeLink?: string;
    className?: string;
};

export function ProjectCard({
    projectName,
    projectDescription,
    projectImage,
    progress,
    githubLink,
    linkedinLink,
    websiteLink,
    youtubeLink,
    className
}: ProjectCardProps) {
    return (
        <Card className={cn("w-[380px]", className)}>

            <CardHeader>
                <CardTitle>{projectName}</CardTitle>
                <CardDescription>{projectDescription}</CardDescription>
                <Image src={projectImage} width={250} height={200} alt={projectName} className="w-full h-auto mt-4 rounded-md" />
            </CardHeader>

            <CardContent className="grid gap-4">
                <Progress value={progress} />
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <BellRing />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                        </p>
                    </div>
                    <Switch />
                </div>
            </CardContent>

            <CardFooter className="flex justify-around">
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="">
                        <GithubIcon />
                    </a>
                )}
                {linkedinLink && (
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="">
                        <Linkedin className="h-6 w-6" />
                    </a>
                )}
                {websiteLink && (
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="">
                        <Globe className="h-6 w-6" />
                    </a>
                )}
                {youtubeLink && (
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="">
                        <YouTubeIcon />
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}
