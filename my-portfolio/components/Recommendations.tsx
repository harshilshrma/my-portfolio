import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Recommendations() {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    // Mock data for recommendations
    const recommendations = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            company: "Tech Solutions Inc.",
            position: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vitae magna.",
            image: ' '
        },
        {
            id: 2,
            name: "Jane Smith",
            designation: "Product Manager",
            company: "Innovative Tech Ltd.",
            text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        // Add more recommendations as needed
    ];

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">Recommendations</h1>
            <p className="text-center text-base md:text-xl mb-10">
                Have a look at what my recruiters / people i have worked with have to say about me.
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
                                <Card className="flex items-center">
                                    {/* Image on the right */}
                                    <div className="flex-shrink-0 h-20 w-20 rounded-full overflow-hidden">
                                        <img className="h-full w-full object-cover" src={`images/${recommendation.id}.jpg`} alt={`${recommendation.name}`} />
                                    </div>
                                    {/* Text on the left */}
                                    <CardContent className="ml-4 flex-grow">
                                        <h2 className="text-lg font-semibold">{recommendation.name}</h2>
                                        <p className="text-sm text-gray-500">{recommendation.position} at {recommendation.company}</p>
                                        <p className="text-sm mt-2">{recommendation.text}</p>
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
    );
}
