import { TrainFront, Globe, Icon } from "lucide-react"

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
import { Separator } from "@/components/ui/separator"


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
    className?: string;
    subhead?: string;
    subtext?: string;
    icon?: string;
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
    className,
    subhead,
    subtext,
    icon
}: ProjectCardProps) {
    return (
        <Card className={cn("w-[380px]", className)}>

            <CardHeader>
                <CardTitle>{projectName}</CardTitle>
                <CardDescription>{projectDescription}</CardDescription>
                <Separator />
                <Image src={projectImage} quality={100} width={imagewidth} height={imageheight} alt={projectName} className="w-full h-auto mt-4 rounded-md" />
            </CardHeader>

            <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <TrainFront />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {subhead}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {subtext}
                        </p>
                    </div>
                    {/* <Switch /> */}
                </div>
            </CardContent>

            <CardFooter className="flex justify-around">
                {websiteLink && (
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="">
                        <Globe className="h-6 w-6" />
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="">
                        <GithubIcon />
                    </a>
                )}
                {linkedinLink && (
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="">
                        <LinkedinIcon />
                    </a>
                )}
                {youtubeLink && (
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="">
                        <YouTubeIcon />
                    </a>
                )}
                {xlink && (
                    <a href={xlink} target="_blank" rel="noopener noreferrer" className="">
                    <XIcon />
                </a> 
                )}
            </CardFooter>
        </Card>
    )
}
