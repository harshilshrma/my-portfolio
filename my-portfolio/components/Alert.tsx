import React, { useState, useEffect } from "react";
import { Frown } from "lucide-react";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

export default function AlertText() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 1024);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {isSmallScreen && (
                <Alert variant="destructive">
                    <Frown className="h-4 w-4" />
                    <AlertTitle>Oops! This site isn&apos;t fully optimized for smaller screens yet. You can do either of the following:</AlertTitle>
                    <AlertDescription>
                        1. Switch to a desktop or laptop for the <strong>best</strong> experience.
                    </AlertDescription>
                    <AlertDescription>
                        2. Go to your browser&apos;s settings (usually those 3 dots in the top right corner), select &quot;Desktop site&quot;, and zoom out for a <strong>better</strong> view.
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
}
