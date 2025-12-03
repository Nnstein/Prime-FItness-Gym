"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body>
                <div className="flex h-screen w-full flex-col items-center justify-center gap-6 text-center px-4 bg-black text-white">
                    <h2 className="text-3xl font-bold">Critical Error</h2>
                    <p className="text-gray-400 max-w-md">
                        A critical error occurred. Please try refreshing the page.
                    </p>
                    <Button
                        onClick={() => reset()}
                        className="bg-primary text-black hover:bg-primary/90 font-bold uppercase"
                    >
                        Try again
                    </Button>
                </div>
            </body>
        </html>
    );
}
