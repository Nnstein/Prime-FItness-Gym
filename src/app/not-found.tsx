import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-6 text-center px-4">
            <h2 className="text-4xl font-bold text-white">404</h2>
            <p className="text-xl text-gray-400">Page Not Found</p>
            <p className="text-gray-500 max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link href="/">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase">
                    Return Home
                </Button>
            </Link>
        </div>
    );
}
