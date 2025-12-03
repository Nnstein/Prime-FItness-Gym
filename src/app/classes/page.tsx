"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Flame } from "lucide-react";

const classes = [
    {
        title: "Cardio Training",
        description: "Boost your endurance and heart health with our high-energy cardio sessions.",
        duration: "45 min",
        intensity: "Medium-High",
        capacity: "20",
        image: "https://images.unsplash.com/photo-1538805060512-e28285769c73?q=80&w=1469&auto=format&fit=crop",
        schedule: ["Mon 6:00 AM", "Wed 6:00 AM", "Fri 6:00 AM"],
    },
    {
        title: "Strength Build",
        description: "Build muscle and increase power with our comprehensive strength training programs.",
        duration: "60 min",
        intensity: "High",
        capacity: "15",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1470&auto=format&fit=crop",
        schedule: ["Tue 7:00 AM", "Thu 7:00 AM", "Sat 9:00 AM"],
    },
    {
        title: "HIIT Workouts",
        description: "High-Intensity Interval Training for maximum calorie burn in minimum time.",
        duration: "30 min",
        intensity: "Very High",
        capacity: "25",
        image: "https://images.unsplash.com/photo-1601422407692-ec4ee6265b5d?q=80&w=1374&auto=format&fit=crop",
        schedule: ["Mon 5:30 PM", "Wed 5:30 PM", "Fri 5:30 PM"],
    },
    {
        title: "Yoga & Flexibility",
        description: "Improve flexibility, balance, and mental clarity through guided yoga sessions.",
        duration: "60 min",
        intensity: "Low-Medium",
        capacity: "30",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1420&auto=format&fit=crop",
        schedule: ["Tue 6:00 PM", "Thu 6:00 PM", "Sun 10:00 AM"],
    },
    {
        title: "Spin Class",
        description: "High-energy indoor cycling classes with motivating music and expert instruction.",
        duration: "45 min",
        intensity: "High",
        capacity: "20",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
        schedule: ["Mon 7:00 PM", "Wed 7:00 PM", "Sat 8:00 AM"],
    },
    {
        title: "Functional Training",
        description: "Real-world movement patterns to improve daily life and athletic performance.",
        duration: "50 min",
        intensity: "Medium-High",
        capacity: "18",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
        schedule: ["Tue 5:00 PM", "Thu 5:00 PM", "Sat 10:00 AM"],
    },
];

export default function ClassesPage() {
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
                        Our <span className="text-primary">Classes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Expert-led group classes designed to challenge, motivate, and deliver results
                    </motion.p>
                </div>
            </section>

            {/* Classes Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {classes.map((classItem, index) => (
                            <motion.div
                                key={classItem.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-primary/50 transition-all duration-300 group">
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${classItem.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                            {classItem.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-400">
                                            {classItem.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-4 text-sm text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-primary" />
                                                <span>{classItem.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Flame className="h-4 w-4 text-primary" />
                                                <span>{classItem.intensity}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-primary" />
                                                <span>{classItem.capacity}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white mb-2">Schedule:</p>
                                            <div className="space-y-1">
                                                {classItem.schedule.map((time) => (
                                                    <p key={time} className="text-sm text-gray-400">{time}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase">
                                            Book Class
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Not Sure Which Class to Try?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our trainers can help you find the perfect class for your fitness level and goals
                    </p>
                    <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-10 py-6 font-bold uppercase">
                        Talk to a Trainer
                    </Button>
                </div>
            </section>
        </div>
    );
}
