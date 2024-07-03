"use client"

import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/components/ui/badge"
export default function Projects() {
    const projects = [
        {
            projectName: 'RateMyTrain',
            projectDescription: 'RateMyTrain is a web app for collecting and managing train reviews, allowing passengers to share experiences and rate their journeys.',
            projectImage: '/ratemytrain.png',
            imagewidth: 1280,
            imageheight: 720,
            githubLink: '',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_ratemytrain-webdevelopment-nextjs-activity-7212913163296464896-_JPa?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://ratemytrain.vercel.app',
            youtubeLink: 'https://yt.openinapp.co/ratemytrain',
            xlink: 'https://twtr.openinapp.co/rmtpost',
            subhead: '',
            subtext: ''
        },
    ];

    return (
        <section className="my-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        projectDescription={project.projectDescription}
                        projectImage={project.projectImage}
                        imagewidth={project.imagewidth}
                        imageheight={project.imageheight}
                        githubLink={project.githubLink}
                        linkedinLink={project.linkedinLink}
                        websiteLink={project.websiteLink}
                        youtubeLink={project.youtubeLink}
                        xlink={project.xlink}
                        subhead={project.subhead}
                        subtext={project.subtext}
                    />
                ))} 
            </div>
        </section>
    );
}
