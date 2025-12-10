"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase mb-6 tracking-tighter"
                >
                    Connect Engage Transform
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg md:text-xl text-black/80 font-medium mb-10 max-w-2xl mx-auto"
                >
                    Don't wait for tomorrow. Start your transformation journey today with Prime Fitness.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Button size="lg" className="bg-black text-white hover:bg-black/80 text-lg px-10 py-8 font-bold uppercase tracking-wider rounded-full shadow-2xl shadow-black/20">
                        Join Prime Fitness Now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
