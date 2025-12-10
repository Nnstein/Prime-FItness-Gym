"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollNavigationMenu } from "@/components/ui/scroll-navigation-menu";
import { Home, Dumbbell, Users, Calendar, Phone, Info, BookOpen } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Trainers", href: "/trainers" },
    { name: "Membership", href: "/membership" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

// Menu items for the scroll navigation (mobile/tablet)
const scrollMenuItems = [
    { id: 1, title: "Home", url: "/", icon: <Home className="w-5 h-5" /> },
    { id: 2, title: "About", url: "/about", icon: <Info className="w-5 h-5" /> },
    { id: 3, title: "Classes", url: "/classes", icon: <Dumbbell className="w-5 h-5" /> },
    { id: 4, title: "Trainers", url: "/trainers", icon: <Users className="w-5 h-5" /> },
    { id: 5, title: "Membership", url: "/membership", icon: <Calendar className="w-5 h-5" /> },
    { id: 6, title: "Blog", url: "/blog", icon: <BookOpen className="w-5 h-5" /> },
    { id: 7, title: "Contact", url: "/contact", icon: <Phone className="w-5 h-5" /> },
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
        <>
            {/* Desktop & Tablet Navbar */}
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    mounted && isScrolled
                        ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter uppercase text-foreground flex items-center gap-2">
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
                </div>
            </nav>

            {/* Mobile & Tablet Scroll Navigation Menu */}
            <div className="md:hidden">
                <ScrollNavigationMenu menuItems={scrollMenuItems} />
            </div>
        </>
    );
}
