import Link from "next/link"
import React, { SVGProps } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="text-center my-8">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold my-4">Welcome to my Portfolio!</h1>
                    <p className="text-lg mb-4">
                        I'm Harshil Sharma, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
                    </p>
                    <div className="flex justify-center items-center space-x-2">
                        <Label htmlFor="email">Your email</Label>
                        <Input id="email" type="email" placeholder="Email" />
                        <Button>Subscribe</Button>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 h-10 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src="/your-image.jpg" // Replace with your actual image path
                        alt="Harshil Sharma"
                        width={600}
                        height={500}
                        className="mx-auto rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}