"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Target, TrendingUp, Heart } from "lucide-react";

const packages = [
    { sessions: "4 Sessions", price: "60 KD", perSession: "15 KD" },
    { sessions: "8 Sessions", price: "110 KD", perSession: "14 KD", popular: true },
    { sessions: "12 Sessions", price: "150 KD", perSession: "12.5 KD" },
];

export default function PersonalTrainingPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
            <section className="py-20 bg-linear-to-b from-black to-background">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        <span className="text-primary">Personal</span> Training
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        One-on-one coaching tailored to your unique goals and fitness level
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {packages.map((pkg, index) => (
                            <Card key={index} className={`${pkg.popular ? 'border-primary border-2' : 'border-zinc-800'} bg-zinc-900`}>
                                {pkg.popular && <div className="bg-primary text-black text-center py-2 font-bold">MOST POPULAR</div>}
                                <CardHeader>
                                    <CardTitle className="text-3xl text-white">{pkg.sessions}</CardTitle>
                                    <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                                    <p className="text-gray-400">{pkg.perSession}/session</p>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: "Goal Setting", desc: "Custom plans for your objectives" },
                            { icon: TrendingUp, title: "Progress Tracking", desc: "Monitor your improvements" },
                            { icon: Heart, title: "Accountability", desc: "Stay motivated and on track" },
                        ].map((benefit, i) => (
                            <Card key={i} className="bg-zinc-900 border-zinc-800 p-6">
                                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
