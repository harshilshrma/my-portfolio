import { Copy, MoveRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useRef } from "react"

export default function ShareButton() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        const audio = new Audio('/pop.mp3');
        audioRef.current = audio;
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="submit" className="shadow-md">Get the Links here &nbsp;<MoveRight className="mr-2 h-4 w-4" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>I&apos;m sure you loved my portfolio.</DialogTitle>
                    <DialogDescription>
                        Grab the Website and GitHub links here for sharing with pals or tossing to your team, especially if it&apos;s for work!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Website
                        </Label>
                        <Input
                            id="link"
                            defaultValue="https://harshilshrma.vercel.app/"
                            readOnly
                        />
                    </div>
                    <Button
                        type="submit"
                        size="sm"
                        className="px-3"
                        onClick={() => {
                            playSound();
                            navigator.clipboard.writeText("https://harshilshrma.vercel.app/");
                            toast({
                                title: 'Website Link copied!',
                                description: 'The link has been copied to your clipboard.',
                            });
                        }}>
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            GitHub
                        </Label>
                        <Input
                            id="link"
                            defaultValue="https://github.com/harshilshrma/my-portfolio"
                            readOnly
                        />
                    </div>
                    <Button
                        type="submit"
                        size="sm"
                        className="px-3"
                        onClick={() => {
                            playSound();
                            navigator.clipboard.writeText("https://github.com/harshilshrma/my-portfolio");
                            toast({
                                title: 'GitHub Link copied!',
                                description: 'The link has been copied to your clipboard.',
                            });
                        }}>
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="submit">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
