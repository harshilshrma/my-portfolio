// // recommendations.tsx

// import React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
// import { Card, CardContent } from "@/components/ui/card";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// type Recommendation = {
//     id: number;
//     name: string;
//     position: string;
//     company: string;
//     text: string;
// };

// const recommendations: Recommendation[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         position: "Senior Developer",
//         company: "Tech Solutions Inc.",
//         text: "John is a highly skilled developer with a strong commitment to quality and innovation.",
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         position: "UX Designer",
//         company: "Design Studios",
//         text: "Jane has a keen eye for detail and a passion for creating user-centric designs.",
//     },
//     {
//         id: 3,
//         name: "Michael Johnson",
//         position: "Product Manager",
//         company: "Tech Enterprises",
//         text: "Michael excels in driving product strategy and delivering exceptional user experiences.",
//     },
//     {
//         id: 4,
//         name: "Emily Brown",
//         position: "Marketing Manager",
//         company: "Digital Marketing Agency",
//         text: "Emily is a creative marketer known for developing effective campaigns that drive results.",
//     },
//     {
//         id: 5,
//         name: "David Clark",
//         position: "Software Engineer",
//         company: "Innovative Tech",
//         text: "David is passionate about coding and developing scalable software solutions.",
//     },
// ];

// const EmblaCarousel: React.FC<{ slides: number[] }> = (props) => {
//     const { slides } = props;
//     const options: EmblaOptionsType = {
//         loop: true,
//         speed: 500,
//         draggable: true,
//         autoplay: false,
//         axis: 'x',
//     };

//     return (
//         <Carousel options={options} slides={slides} />
//     );
// };

// export default function RecommendationsPage() {
//     const plugin = React.useRef(Autoplay({ delay: 5000 }));

//     return (
//         <div className="container mx-auto py-10">
//             <h1 className="text-4xl font-bold mb-5 text-center">Recommendations</h1>
//             <EmblaCarousel slides={recommendations.map((rec) => rec.id)}>
//                 <CarouselContent className="-ml-4">
//                     {recommendations.map((recommendation) => (
//                         <CarouselItem key={recommendation.id} className="pl-4">
//                             <div className="p-1">
//                                 <Card>
//                                     <CardContent className="flex items-center p-6">
//                                         <div className="flex-shrink-0 h-20 w-20 rounded-full overflow-hidden">
//                                             <img className="h-full w-full object-cover" src={`images/${recommendation.id}.jpg`} alt={`${recommendation.name}`} />
//                                         </div>
//                                         <div className="ml-4">
//                                             <h2 className="text-lg font-semibold">{recommendation.name}</h2>
//                                             <p className="text-sm text-gray-500">{recommendation.position} at {recommendation.company}</p>
//                                             <p className="text-sm mt-2">{recommendation.text}</p>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </EmblaCarousel>
//         </div>
//     );
// }
