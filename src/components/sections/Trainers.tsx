"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const trainers = [
    {
        name: "Jacob Jones",
        role: "Head Coach",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop",
    },
    {
        name: "Liam Smith",
        role: "Strength Trainer",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1374&auto=format&fit=crop",
    },
    {
        name: "Logan White",
        role: "Cardio Specialist",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop",
    },
];

export function Trainers() {
    return (
        <section id="trainers" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
                    >
                        Our Team
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Your Fitness Goals, <br />
                        <span className="text-primary">Their Expertise</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-transparent border-none overflow-hidden group">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        style={{ backgroundImage: `url('${trainer.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex gap-4">
                                            <Link href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-primary hover:text-black transition-colors text-white">
                                                <Instagram className="h-5 w-5" />
                                            </Link>
                                            <Link href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-primary hover:text-black transition-colors text-white">
                                                <Twitter className="h-5 w-5" />
                                            </Link>
                                            <Link href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-primary hover:text-black transition-colors text-white">
                                                <Linkedin className="h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">{trainer.name}</h4>
                                    <p className="text-primary font-medium">{trainer.role}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
