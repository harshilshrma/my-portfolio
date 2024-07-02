"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const recommendations = [
    { id: 1, text: "Recommendation 1" },
    { id: 2, text: "Recommendation 2" },
    { id: 3, text: "Recommendation 3" },
    { id: 4, text: "Recommendation 4" },
    { id: 5, text: "Recommendation 5" },
]

export default function ClientsPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-4 text-center">Recommendations</h1>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                className="w-full h-full max-w-3xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-4">
                    {recommendations.map((recommendation) => (
                        <CarouselItem key={recommendation.id} className="pl-4">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{recommendation.text}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}