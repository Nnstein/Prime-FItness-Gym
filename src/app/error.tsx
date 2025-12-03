"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-6 text-center px-4">
            <h2 className="text-3xl font-bold text-white">Something went wrong!</h2>
            <p className="text-gray-400 max-w-md">
                We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="bg-primary text-black hover:bg-primary/90 font-bold uppercase"
            >
                Try again
            </Button>
        </div>
    );
}
