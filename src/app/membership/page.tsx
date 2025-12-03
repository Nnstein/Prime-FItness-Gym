"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingTiers = [
    {
        name: "Basic",
        price: "25",
        description: "Perfect for getting started",
        features: [
            "Access to gym equipment",
            "Locker room access",
            "Free fitness assessment",
            "Mobile app access",
        ],
    },
    {
        name: "Premium",
        price: "45",
        description: "Most popular choice",
        features: [
            "Everything in Basic",
            "Unlimited group classes",
            "1 personal training session/month",
            "Nutrition consultation",
            "Priority booking",
        ],
        popular: true,
    },
    {
        name: "Elite",
        price: "65",
        description: "Ultimate fitness experience",
        features: [
            "Everything in Premium",
            "4 personal training sessions/month",
            "Monthly body composition analysis",
            "Guest passes (2/month)",
            "Exclusive member events",
            "Towel service",
        ],
    },
];

export default function MembershipPage() {
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
                        Choose Your <span className="text-primary">Membership</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Flexible plans designed to fit your fitness goals and lifestyle
                    </motion.p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className={`h-full ${tier.popular ? 'border-primary border-2 relative' : 'border-zinc-800'} bg-zinc-900`}>
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold uppercase">
                                            Most Popular
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold text-white uppercase">{tier.name}</CardTitle>
                                        <CardDescription className="text-gray-400">{tier.description}</CardDescription>
                                        <div className="mt-4">
                                            <span className="text-5xl font-bold text-white">{tier.price}</span>
                                            <span className="text-xl text-primary font-bold ml-1">KD</span>
                                            <span className="text-gray-400">/month</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className={`w-full ${tier.popular ? 'bg-primary text-black hover:bg-primary/90' : 'bg-zinc-800 text-white hover:bg-zinc-700'} font-bold uppercase`}
                                        >
                                            Get Started
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        All Memberships Include
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "24/7 Access", desc: "Train on your schedule" },
                            { title: "Expert Support", desc: "Certified trainers available" },
                            { title: "Clean Facilities", desc: "Maintained to highest standards" },
                            { title: "Community", desc: "Join our fitness family" },
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        Ready to Transform?
                    </h2>
                    <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                        Join Prime Fitness today and start your journey to a stronger, healthier you
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-black text-white hover:bg-black/80 text-lg px-10 py-6 font-bold uppercase">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
