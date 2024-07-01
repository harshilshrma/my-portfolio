"use client"

import type { JSX } from 'react';
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Skills from "@/components/Skills";
import Projects from '@/components/Projects';

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <Clients />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
