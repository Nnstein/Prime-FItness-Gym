"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Expert Trainers",
        description: "Work with certified professionals who will guide you every step of the way.",
    },
    {
        title: "Flexible Schedule",
        description: "Train whenever you want with our 24/7 access and diverse class timings.",
    },
    {
        title: "Community Support",
        description: "Join a motivating community that cheers for your success and growth.",
    },
    {
        title: "Top-Tier Equipment",
        description: "Experience the best workout with our state-of-the-art gym machinery.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
                        >
                            Why Choose Us
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                        >
                            Inspired to <br />
                            <span className="text-primary">Inspire Your Best Self</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto lg:mx-0"
                        >
                            We don't just provide machines; we provide a path to transformation. Our facility is designed to help you push limits and break barriers.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors"
                                >
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <CheckCircle2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
                            {/* Placeholder for a gym interior or trainer image */}
                            <div
                                className="aspect-square md:aspect-[4/5] bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <p className="text-white font-medium italic">"The only bad workout is the one that didn't happen."</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/30 rounded-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
