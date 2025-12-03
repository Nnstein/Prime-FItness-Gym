"use client";

import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-black to-background">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        About <span className="text-primary">Prime Fitness</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Transform Your Body. Elevate Your Mind. We're a community dedicated to fitness, bodybuilding, and nutrition through personalized coaching and expert guidance.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Founded with a vision to create a fitness sanctuary where everyone feels welcome, Prime Fitness has grown from a single location to a thriving community of fitness enthusiasts.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We believe that fitness is not just about physical transformation—it's about building confidence, discipline, and a lifestyle that empowers you to be your best self.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Our state-of-the-art facilities, expert trainers, and supportive community create the perfect environment for you to achieve your goals, no matter where you're starting from.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Target,
                                title: "Excellence",
                                description: "We strive for excellence in everything we do, from our equipment to our coaching"
                            },
                            {
                                icon: Heart,
                                title: "Passion",
                                description: "We're passionate about fitness and helping others discover their potential"
                            },
                            {
                                icon: Users,
                                title: "Community",
                                description: "We build a supportive community where everyone belongs and thrives"
                            },
                            {
                                icon: Award,
                                title: "Results",
                                description: "We're committed to delivering real, measurable results for our members"
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-primary/50 transition-colors"
                            >
                                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <value.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-2xl text-gray-300 leading-relaxed italic">
                            "To empower individuals to transform their lives through fitness, providing world-class facilities, expert guidance, and an inclusive community that inspires greatness in everyone who walks through our doors."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "10+", label: "Years Experience" },
                            { number: "50+", label: "Expert Trainers" },
                            { number: "5000+", label: "Active Members" },
                            { number: "24/7", label: "Access" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold text-black mb-2">{stat.number}</div>
                                <div className="text-black/80 font-medium uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
