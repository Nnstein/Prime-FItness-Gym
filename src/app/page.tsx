import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

import { SectionSkeleton } from "@/components/ui/section-skeleton";

// Lazy load below-the-fold sections to reduce initial bundle size
const Features = dynamic(() => import("@/components/sections/Features").then((mod) => mod.Features), {
  loading: () => <SectionSkeleton />,
});
const Classes = dynamic(() => import("@/components/sections/Classes").then((mod) => mod.Classes), {
  loading: () => <SectionSkeleton />,
});
const Trainers = dynamic(() => import("@/components/sections/Trainers").then((mod) => mod.Trainers), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials), {
  loading: () => <SectionSkeleton />,
});
const CallToAction = dynamic(() => import("@/components/sections/CallToAction").then((mod) => mod.CallToAction), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />
      <Classes />
      <Trainers />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
