"use client"

import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            projectName: 'RateMyTrain',
            projectDescription: 'RateMyTrain is a web app for collecting and managing train reviews, allowing passengers to share experiences and rate their journeys.',
            projectImage: '/ratemytrain.png',
            imagewidth: 1280,
            imageheight: 720,
            githubLink: 'https://github.com/harshilshrma/rate-my-train',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_ratemytrain-webdevelopment-nextjs-activity-7212913163296464896-_JPa?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://ratemytrain.vercel.app',
            youtubeLink: 'https://yt.openinapp.co/ratemytrain',
            xlink: 'https://twtr.openinapp.co/rmtpost',
            subhead: 'RateMyTrain is my first user-driven web app!',
            subtext: '',
            techs: ["html5", "css3", "javascript", "react", "nextdotjs", "supabase", "vercel", "bootstrap", "git", "github", "vscode"],
            date: "June 2024"
        },
        {
            projectName: 'alloc8',
            projectDescription: "Alloc8 is a smart and intuitive budget allocation app. It helps you manage your company's finances by tracking your budget and expenses in real time.",
            projectImage: '/alloc8.png',
            imagewidth: 1282,
            imageheight: 720,
            githubLink: 'https://github.com/harshilshrma/alloc8',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_html-css-ibm-activity-7199033624208306176-A26Q?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://harshilshrma.github.io/alloc8/',
            youtubeLink: '',
            xlink: 'https://x.com/harshilshrma/status/1793268128731820519',
            subhead: "alloc8 helped me strengthen my React skills.",
            subtext: '',
            techs: ["html5", "css3", "javascript", "react", "bootstrap", "git", "github", "vscode"],
            date: "May 2024"
        },
        {
            projectName: 'Mindport',
            projectDescription: "MindPort is a React-based notes-making app that helps you capture and organize your thoughts effortlessly.",
            projectImage: '/mindport.png',
            imagewidth: 1280,
            imageheight: 720,
            githubLink: 'https://github.com/harshilshrma/Mindport',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_react-webdev-html-activity-7199010398316945408-4tAd?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://harshilshrma.github.io/Mindport/',
            youtubeLink: '',
            xlink: 'https://x.com/harshilshrma/status/1793245029621805281',
            subhead: "This was my first project using React!",
            subtext: '',
            techs: ["html5", "css3", "javascript", "react", "git", "github", "vscode"],
            date: "May 2024"
        },
        {
            projectName: 'Drumkit',
            projectDescription: "DrumKit is a fun and interactive web app that turns your keyboard into a drum set.",
            projectImage: '/drumkit.png',
            imagewidth: 1280,
            imageheight: 720,
            githubLink: 'https://github.com/harshilshrma/DrumKit',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_webdev-webdevelopment-javascript-activity-7198961105824591872-d0jw?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://harshilshrma.github.io/DrumKit/',
            youtubeLink: '',
            xlink: 'https://x.com/harshilshrma/status/1793195636998676896',
            subhead: "Drumming is my off-screen passion.",
            subtext: '',
            techs: ["html5", "css3", "javascript", "git", "github", "vscode"],
            date: "May 2024"
        },
        {
            projectName: 'Coinverter',
            projectDescription: "Coinverter is a sleek, efficient currency converter web app for quick and accurate currency conversions with up-to-date exchange rates.",
            projectImage: '/coinverter.png',
            imagewidth: 1280,
            imageheight: 720,
            githubLink: 'https://github.com/harshilshrma/Coinverter',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_html-css-javascript-activity-7155950380512636929-XIFu?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://harshilshrma.github.io/Coinverter/',
            youtubeLink: '',
            xlink: 'https://x.com/harshilshrma/status/1750191964082110749',
            subhead: "Drumming is my off-screen passion.",
            subtext: '',
            techs: ["html5", "css3", "javascript", "git", "github", "vscode"],
            date: "Jan 2024"
        },
        {
            projectName: 'CataFax',
            projectDescription: "CataFax is a web app that displays cat facts on each button press, highlighting dynamic JavaScript functionality.",
            projectImage: '/catafax.png',
            imagewidth: 1280,
            imageheight: 720,
            githubLink: 'https://github.com/harshilshrma/CataFax',
            linkedinLink: 'https://www.linkedin.com/posts/harshilshrma_catafax-webdevelopment-html-activity-7155304035678359552-XExk?utm_source=share&utm_medium=member_desktop',
            websiteLink: 'https://harshilshrma.github.io/CataFax/',
            youtubeLink: '',
            xlink: 'https://x.com/harshilshrma/status/1749547195957973132',
            subhead: "I love cats and CataFax helped me learn about APIs.",
            subtext: '',
            techs: ["html5", "css3", "javascript", "git", "github", "vscode"],
            date: "Jan 2024"
        },
    ];

    return (
        <section className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">My Projects</h1>
            <p className="text-center text-lg md:text-xl mb-10">
                Check out some of the cool projects I&apos;ve created!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        techs={project.techs}
                        date={project.date}
                    />
                ))}
            </div>
            <div className="flex items-center mb-5 mt-8 justify-center text-center text-lg md:text-xl">
                ... and many more on my&nbsp;
                <Link href="https://github.com/harshilshrma/" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline items-center text-center text-lg md:text-xl">GitHub<MoveUpRight width={22} height={22} className="inline-block mb-1" /></Link>
            </div>
        </section>
    );
}
