"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dumbbell, Users, Clock } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
            </div>

            {/* Content */}
            <div className="container mx-auto relative z-10 px-4 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 uppercase">
                        Sculpt <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Your Body</span> <br />
                        Elevate <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Your Spirit</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
                >
                    Transform Your Body. Elevate Your Mind. Join our elite fitness community with personalized coaching and expert guidance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-bold uppercase tracking-wider rounded-full">
                        Start Your Journey
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 font-bold uppercase tracking-wider rounded-full">
                        View Classes
                    </Button>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl"
                >
                    {[
                        { icon: Dumbbell, label: "Expert Trainers", value: "50+" },
                        { icon: Users, label: "Members Joined", value: "1000+" },
                        { icon: Clock, label: "Operating Hours", value: "24/7" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors group">
                            <div className="bg-primary/20 p-3 rounded-full group-hover:bg-primary/40 transition-colors">
                                <stat.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
