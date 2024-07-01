"use client"

import { ProjectCard } from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            projectName: 'Project 1',
            projectDescription: 'This project involves building a web application for managing customer data.',
            progress: 34,

    // projectImage,
    // progress,
    // githubLink,
    // linkedinLink,
    // websiteLink,
    // youtubeLink,
            
        },
        {
            projectName: 'Project 2',
            projectDescription: 'Developing a mobile app for tracking fitness activities and health metrics.',
            progress: 12,
        },
        {
            projectName: 'Project 3',
            projectDescription: 'Creating a machine learning model for predicting stock prices based on historical data.',
            progress: 87,
        },
    ];

    return (
        <section className="my-8">
            <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
            <div className="grid grid-cols-3 gap-4">
                {/* Add your project cards here */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        projectDescription={project.projectDescription}
                        progress={project.progress}
                        className=""
                    />
                ))}
            </div>
        </section>
    );
}
