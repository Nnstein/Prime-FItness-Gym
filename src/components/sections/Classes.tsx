"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const classes = [
    {
        title: "Cardio Training",
        description: "Boost your endurance and heart health with our high-energy cardio sessions.",
        image: "https://images.unsplash.com/photo-1538805060512-e28285769c73?q=80&w=1469&auto=format&fit=crop",
    },
    {
        title: "Strength Build",
        description: "Build muscle and increase power with our comprehensive strength training programs.",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1470&auto=format&fit=crop",
    },
    {
        title: "Fat Loss",
        description: "Effective fat-burning workouts designed to help you reach your ideal weight.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
    },
    {
        title: "HIIT Workouts",
        description: "High-Intensity Interval Training for maximum calorie burn in minimum time.",
        image: "https://images.unsplash.com/photo-1601422407692-ec4ee6265b5d?q=80&w=1374&auto=format&fit=crop",
    },
];

export function Classes() {
    return (
        <section id="classes" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
                    >
                        Our Classes
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Train Smarter, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Unleash Your Potential</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {classes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-400">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
