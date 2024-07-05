"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const skills = [
    { id: 1, name: "HTML", category: "Markup Language", logo: "/html5.svg" },
    { id: 2, name: "CSS", category: "Style Sheet Language", logo: "/css3.svg" },
    { id: 3, name: "JavaScript", category: "Programming Language", logo: "/javascript.svg" },
    { id: 22, name: "TypeScript", category: "Programming Language", logo: "/typescript.svg" },
    { id: 4, name: "React", category: "JavaScript Library", logo: "/react.svg" },
    { id: 5, name: "Next.js", category: "React Framework", logo: "/nextdotjs.svg" },
    { id: 13, name: "Vercel", category: "Deployment Platform", logo: "/vercel.svg" },
    { id: 7, name: "Tailwind CSS", category: "CSS Framework", logo: "/tailwindcss.svg" },
    { id: 6, name: "Node.js", category: "JavaScript Runtime", logo: "/nodedotjs.svg" },
    { id: 8, name: "Supabase", category: "Backend as a Service", logo: "/supabase.svg" },
    { id: 9, name: "npm", category: "Package Manager", logo: "/npm.svg" },
    { id: 10, name: "Java", category: "Programming Language", logo: "/java.svg" },
    { id: 11, name: "C", category: "Programming Language", logo: "/c.svg" },
    { id: 12, name: "MySQL", category: "Database System", logo: "/mysql.svg" },
    { id: 13, name: "PostgreSQL", category: "Database System", logo: "/postgresql.svg" },
    { id: 14, name: "Python", category: "Programming Language", logo: "/python.svg" },
    { id: 15, name: "Bootstrap", category: "CSS Framework", logo: "/bootstrap.svg" },
    { id: 16, name: "Express.js", category: "Web Framework", logo: "/express.svg" },
    { id: 17, name: "Git", category: "Version Control", logo: "/git.svg" },
    { id: 18, name: "GitHub", category: "Version Control Platform", logo: "/github.svg" },
    { id: 19, name: "VS Code", category: "Code Editor", logo: "/vscode.svg" },
    { id: 20, name: "IntelliJ IDEA", category: "IDE", logo: "/intellijidea.svg" },
    { id: 21, name: "And Many More...", category: "I can't list all of them here...", logo: "/plus.svg" }
];

export default function Skills() {
    const plugin = React.useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));
    const [api, setApi] = React.useState<CarouselApi>()

    return (
        <div className="container mx-auto py-10 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">I&apos;ve worked with</h1>
            <div className="text-center">
                <span className="text-sm font-semibold">
                    Total Slides: {skills.length}
                </span>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full max-w-screen-lg mx-auto"
                setApi={setApi}
            >
                <CarouselContent className="-ml-4">
                    {skills.map((skill, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                            <div className="p-1">
                                <Card className={cn("shadow-md flex flex-row items-center")}>
                                    <div className="flex-shrink h-9 w-9 md:h-10 md:w-10 overflow-hidden m-4">
                                        <img className="h-full w-full object-cover" src={skill.logo} alt={skill.name} />
                                    </div>
                                    <CardHeader className="pl-2">
                                        <CardTitle className="md:text-xl text-lg">{skill.name}</CardTitle>
                                        <CardDescription className="md:text-base text-sm">{skill.category}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
}
