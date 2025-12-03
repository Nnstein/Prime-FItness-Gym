"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Trainers", href: "/trainers" },
    { name: "Membership", href: "/membership" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                mounted && isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-foreground flex items-center gap-2">
                    <span className="text-primary">Prime</span> Fitness
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/membership">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
                            Join Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-l border-border">
                            <div className="flex flex-col gap-8 mt-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-bold text-foreground hover:text-primary transition-colors uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href="/membership">
                                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
                                        Join Now
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
