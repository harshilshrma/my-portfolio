import React, { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
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
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Your session has expired. Please log in again.
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
}
