import Link from "next/link"
import React, { SVGProps } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import ShareButton from "./ShareButton";


export default function Hero() {
    return (
        <section className="text-center my-8">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl text-left font-bold my-4">Hey there, welcome to my corner of the web!</h1>
                    <p className="md:text-lg text-base text-justify mb-4">
                        I&apos;m Harshil Sharma, a passionate web developer based in India. Here, you&apos;ll get a <s>polished</s> glimpse of my tech errands, where I create whatever the <i>heck</i> I want.
                    </p>
                    <div className="md:text-lg text-base text-justify mb-4 pr-4 flex md:flex-row flex-col items-center grid-cols-1 md:grid-cols-2 space-x-2">
                        <p className="text-left md:text-lg text-sm mb-2">Wanna see the code behind my portfolio?</p> 
                        <ShareButton />
                    </div>
                    
                </div>
                <div className="lg:block">
                    <Image
                        src="/me.jpg"
                        alt="Harshil Sharma"
                        width={500}
                        height={600}
                        className="mx-auto rounded-xl object-cover shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}