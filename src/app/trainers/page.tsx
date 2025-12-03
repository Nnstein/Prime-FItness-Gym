"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Linkedin, Award } from "lucide-react";
import Link from "next/link";

const trainers = [
    {
        name: "Jacob Jones",
        role: "Head Coach & Strength Specialist",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop",
        certifications: ["NASM-CPT", "CSCS", "Nutrition Coach"],
        specialties: ["Strength Training", "Powerlifting", "Sports Performance"],
        bio: "10+ years of experience helping athletes and fitness enthusiasts reach their peak performance.",
    },
    {
        name: "Liam Smith",
        role: "Strength & Conditioning Coach",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1374&auto=format&fit=crop",
        certifications: ["ACE-CPT", "FMS", "Olympic Lifting"],
        specialties: ["Functional Training", "Olympic Lifts", "Injury Prevention"],
        bio: "Passionate about building strong, resilient athletes through science-based training.",
    },
    {
        name: "Logan White",
        role: "Cardio & HIIT Specialist",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop",
        certifications: ["ACSM-CPT", "Spinning Instructor", "TRX Certified"],
        specialties: ["HIIT", "Endurance Training", "Weight Loss"],
        bio: "Dedicated to helping clients achieve their cardio and weight loss goals with high-energy workouts.",
    },
    {
        name: "Emma Davis",
        role: "Yoga & Wellness Coach",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
        certifications: ["RYT-500", "Meditation Teacher", "Wellness Coach"],
        specialties: ["Yoga", "Flexibility", "Mindfulness"],
        bio: "Bringing balance to fitness through yoga, meditation, and holistic wellness practices.",
    },
    {
        name: "Marcus Johnson",
        role: "Bodybuilding & Physique Coach",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
        certifications: ["IFBB Pro", "ISSA-CPT", "Nutrition Specialist"],
        specialties: ["Bodybuilding", "Muscle Gain", "Contest Prep"],
        bio: "Former competitive bodybuilder with expertise in muscle building and physique transformation.",
    },
    {
        name: "Sophia Martinez",
        role: "Group Fitness & Dance Instructor",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop",
        certifications: ["Zumba Instructor", "Les Mills", "Dance Fitness"],
        specialties: ["Group Classes", "Dance Fitness", "Motivation"],
        bio: "Making fitness fun through energetic group classes and dance-based workouts.",
    },
];

export default function TrainersPage() {
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
                        Meet Our <span className="text-primary">Expert Trainers</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Our certified coaches are dedicated to helping you achieve your fitness goals with personalized guidance and expertise
                    </motion.p>
                </div>
            </section>

            {/* Trainers Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={trainer.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group h-full">
                                    <div className="relative aspect-[3/4] overflow-hidden">
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
                                    <div className="p-6 space-y-4">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">{trainer.name}</h3>
                                            <p className="text-primary font-medium">{trainer.role}</p>
                                        </div>
                                        <p className="text-gray-400 text-sm">{trainer.bio}</p>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award className="h-4 w-4 text-primary" />
                                                <p className="text-sm font-bold text-white">Certifications:</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {trainer.certifications.map((cert) => (
                                                    <span key={cert} className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded">
                                                        {cert}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white mb-2">Specialties:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {trainer.specialties.map((specialty) => (
                                                    <span key={specialty} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30">
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-black mb-6">
                        Ready to Work with a Trainer?
                    </h2>
                    <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                        Book a complimentary consultation to find the perfect trainer for your goals
                    </p>
                    <Link href="/contact">
                        <button className="bg-black text-white hover:bg-black/80 text-lg px-10 py-4 font-bold uppercase rounded-full">
                            Schedule Consultation
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
