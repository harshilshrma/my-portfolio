// contact.tsx

import React, { useState, useEffect, useRef } from "react"
import { Phone, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import YouTubeIcon from "./icon/YoutubeIcon"
import GithubIcon from "./icon/GithubIcon"
import LinkedinIcon from "./icon/LinkedinIcon"
import XIcon from "./icon/x";
import Linktree from "./icon/Linktree";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export default function ContactPage() {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { toast } = useToast();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio('/error.mp3');
        audioRef.current = audio;
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        interest: "",
        message: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const { name, value } = target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target;
        const { name, value } = target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const target = event.target;
        event.preventDefault();

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Message Sent",
                    description: "Your message has been sent successfully!",
                });
            } else {
                playSound();
                toast({
                    // variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Send me a direct mail from your app instead!",
                    action: (
                        <ToastAction altText="Send email">
                            <a href="mailto:harshilsharma.dev@gmail.com">Send email</a>
                        </ToastAction>
                    ),
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            playSound();
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request. Try sending me a mail via this button.",
                action: (
                    <ToastAction altText="Send email">
                        <a href="mailto:harshilsharma.dev@gmail.com">Send email</a>
                    </ToastAction>
                ),
            });
        }
    };


    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">Contact Me</h1>
            <p className="text-center text-lg md:text-xl mb-10">
                Want to work with me? Feel free to reach out through the contact form,
                and let&apos;s get some <s>shit</s> done.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-foreground p-8 rounded-lg shadow-md flex flex-col justify-around">
                    <div>
                        <h2 className="text-background text-2xl md:text-3xl font-bold mb-2">
                            Contact Information
                        </h2>
                        <p className="text-background text-sm md:text-lg mb-4">
                            Fill up the form and I will get back to you within 24 hours.
                        </p>
                        <div className="flex items-center space-x-4 mb-4 pt-4">
                            <Phone fill={isDarkMode ? "black" : "white"} className="h-6 w-6" />
                            <p className="text-background text-sm md:text-lg">+91 78519 22204</p>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <Mail fill={isDarkMode ? "black" : "white"} className="h-6 w-6" />
                            <p className="text-background text-sm md:text-lg">harshilsharma.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-around space-x-4">
                        <a
                            href={"https://github.com/harshilshrma"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <GithubIcon
                                sizeh={"h-12"}
                                sizew={"w-12"}
                                variant={isDarkMode ? "dark" : "light"}
                            />
                        </a>
                        <a
                            href={"https://www.linkedin.com/in/harshilshrma/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <LinkedinIcon sizeh="h-12" sizew="w-12" />
                        </a>
                        <a
                            href={"https://twtr.openinapp.co/main"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <XIcon
                                sizeh={"h-12"}
                                sizew={"w-12"}
                                variant={isDarkMode ? "dark" : "light"}
                            />
                        </a>
                        <a
                            href={"https://linktr.ee/harshilsharma"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <Linktree sizeh="h-12" sizew="w-12" />
                        </a>
                        <a
                            href={"https://yt.openinapp.co/meowcodes"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <YouTubeIcon sizeh={"h-12"} sizew={"w-12"} />
                        </a>
                    </div>
                </div>
                <div className="bg-background p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-medium text-sm mb-2" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md"
                                    id="first-name"
                                    type="text"
                                    placeholder="Lucas"
                                    name="firstName"
                                    value={formData.firstName}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-sm mb-2" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md"
                                    id="last-name"
                                    type="text"
                                    placeholder="Jones"
                                    name="lastName"
                                    value={formData.lastName}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md"
                                id="email"
                                type="email"
                                placeholder="lucas@mail.com"
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2">
                                Why are you sending this message?
                            </label>
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="interest"
                                        value="work"

                                    />
                                    <span className="text-sm ml-2">Work</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="interest"
                                        value="random"

                                    />
                                    <span className="text-sm ml-2">Something Random</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="interest"
                                        value="cool"

                                    />
                                    <span className="text-sm ml-2">I just found you cool</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md"
                                id="message"
                                placeholder="I would like to talk about..."
                                name="message"
                                value={formData.message}
                                rows={5}
                                onChange={handleChangeTextarea}
                            />
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
