"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Apple, ClipboardList, TrendingUp, Users } from "lucide-react";

export default function NutritionPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
            <section className="py-20 bg-gradient-to-b from-black to-background">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        <span className="text-primary">Nutrition</span> Counseling
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Fuel your fitness journey with personalized nutrition guidance
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Apple, title: "Meal Planning", desc: "Custom meal plans for your goals" },
                            { icon: ClipboardList, title: "Macro Tracking", desc: "Learn to track your nutrition" },
                            { icon: TrendingUp, title: "Progress Analysis", desc: "Regular check-ins and adjustments" },
                            { icon: Users, title: "Expert Support", desc: "Certified nutrition coaches" },
                        ].map((service, i) => (
                            <Card key={i} className="bg-zinc-900 border-zinc-800 p-6 text-center">
                                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Nutrition?</h2>
                    <Button size="lg" className="bg-black text-white hover:bg-black/80 text-lg px-10 py-6 font-bold uppercase">
                        Book Consultation
                    </Button>
                </div>
            </section>
        </div>
    );
}
