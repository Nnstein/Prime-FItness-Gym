import { Skeleton } from "@/components/ui/skeleton";

export function SectionSkeleton() {
    return (
        <section className="py-20 w-full bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-8">
                    {/* Title Skeleton */}
                    <Skeleton className="h-12 w-64 md:w-96 rounded-lg" />

                    {/* Subtitle Skeleton */}
                    <Skeleton className="h-6 w-full max-w-2xl rounded-md" />

                    {/* Content Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
                        <Skeleton className="h-64 w-full rounded-xl" />
                        <Skeleton className="h-64 w-full rounded-xl" />
                        <Skeleton className="h-64 w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
