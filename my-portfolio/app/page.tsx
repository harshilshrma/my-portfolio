"use client"

import Image from "next/image";
import {Button } from "@/components/ui/button";
import type { JSX } from 'react'; 
import { ModeToggle } from "@/components/mode-toggle";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button>Click me</Button>
        <ModeToggle></ModeToggle>
      </div>
    </main>
  );
}
