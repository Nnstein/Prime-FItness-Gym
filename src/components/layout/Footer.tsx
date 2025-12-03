import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-foreground flex items-center gap-2">
                            <span className="text-primary">Prime</span> Fitness
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Transform Your Body. Elevate Your Mind. Personalized coaching and expert guidance for fitness, bodybuilding, and nutrition.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/primefitnesskw/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-foreground">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/classes" className="text-muted-foreground hover:text-primary transition-colors text-sm">Classes</Link></li>
                            <li><Link href="/trainers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Trainers</Link></li>
                            <li><Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors text-sm">Membership</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-foreground">Support</h3>
                        <ul className="space-y-3">
                            {["FAQ", "Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-foreground">Newsletter</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to get the latest fitness tips and exclusive offers.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-secondary/50 border-border focus:border-primary"
                            />
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="bg-border mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Prime Fitness Gym. All rights reserved.</p>
                    <p>Designed with power.</p>
                </div>
            </div>
        </footer>
    );
}
