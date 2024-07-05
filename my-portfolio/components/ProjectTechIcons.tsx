import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

type ProjectTechIconsProps = {
    techs?: string[];
    projectName?: string;
};

export default function ProjectTechIcons({ techs = [], projectName }: ProjectTechIconsProps) {
    const [loadedIcons, setLoadedIcons] = useState<{ [key: string]: string }>({});
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    useEffect(() => {
        const loadIcons = () => {
            const icons: { [key: string]: string } = {};
            for (const tech of techs) {
                const iconPath = `/${tech}.svg`;
                icons[tech] = iconPath;
            }
            setLoadedIcons(icons);
        };

        loadIcons();
    }, [techs]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="shadow-md">
                    TechStack<MoveRight className="ml-1 h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-left">These are the technologies/frameworks that I&apos;ve used in {projectName}:</DialogTitle>
                    <DialogDescription className="text-sm text-left">(hover on the icons for their names)</DialogDescription>
                </DialogHeader>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className="grid grid-cols-5 gap-4">
                            {techs.map((tech) => (
                                loadedIcons[tech] ? (
                                    <img
                                        key={tech}
                                        src={loadedIcons[tech]}
                                        alt={tech}
                                        className="h-12 w-12"
                                        onMouseEnter={() => setHoveredTech(tech)}
                                    />
                                ) : null
                            ))}
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold capitalize">{hoveredTech}</h4>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="submit">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
