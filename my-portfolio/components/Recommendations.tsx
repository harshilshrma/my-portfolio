import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Recommendations() {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    // Mock data for recommendations
    const recommendations = [
        {
            id: 1,
            name: "Priyam Raj",
            company: "TubeMagic LLC, Miami, Florida (USA)",
            position: "CTO, Founder",
            text: "Lorem ipsum dolor sit amet, consectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur aconsectetur adipiscing elit. Nulla convallis libero vitae magna.",
            image: '/1.png'
        },
        {
            id: 2,
            name: "Jane Smith",
            company: "Innovative Tech Ltd.",
            position: "Product Manager",
            text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: '/jane_smith.png'
        },
        {
            id: 2,
            name: "Jane Smith",
            company: "Innovative Tech Ltd.",
            position: "Product Manager",
            text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: '/jane_smith.png'
        },
        
        // Add more recommendations as needed
    ];

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">Recommendations</h1>
            <p className="text-center text-base md:text-xl mb-10">
                Have a look at these heartfelt recommendations from the fantastic individuals I&apos;ve had the joy of working alongside!
            </p>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-screen-lg mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-4">
                    {recommendations.map((recommendation, index) => (
                        <CarouselItem key={index} className="pl-4">
                            <div className="p-1">
                                <Card className={cn("shadow-md flex flex-row items-center")}>
                                    <div className="flex-shrink-0 h-16 w-16 md:h-32 md:w-32 rounded-full overflow-hidden m-4">
                                        <img className="h-full w-full object-cover" src={recommendation.image} alt={`${recommendation.name}`} />
                                    </div>
                                    <div className="flex flex-col ml-2">
                                        <CardHeader className="pt-4 pl-4 pr-4 pb-0">
                                            <CardTitle>{recommendation.name}</CardTitle>
                                            <CardDescription className="text-base">{recommendation.position} at {recommendation.company}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-2 pl-4 pr-4 pb-4 flex-grow">
                                            <p className="text-base mt-2">{recommendation.text}</p>
                                        </CardContent>
                                    </div>
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
