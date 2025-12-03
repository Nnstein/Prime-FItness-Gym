"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
    {
        title: "10 Tips for Building Muscle Mass",
        excerpt: "Discover the essential strategies for effective muscle growth and strength gains.",
        author: "Marcus Johnson",
        date: "Nov 20, 2024",
        category: "Strength Training",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    },
    {
        title: "The Ultimate Guide to HIIT Training",
        excerpt: "Learn how High-Intensity Interval Training can transform your fitness routine.",
        author: "Logan White",
        date: "Nov 18, 2024",
        category: "Cardio",
        image: "https://images.unsplash.com/photo-1601422407692-ec4ee6265b5d?q=80&w=1374&auto=format&fit=crop",
    },
    {
        title: "Nutrition Basics for Beginners",
        excerpt: "Start your nutrition journey with these fundamental principles for healthy eating.",
        author: "Sophia Martinez",
        date: "Nov 15, 2024",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop",
    },
    {
        title: "Recovery: The Missing Piece",
        excerpt: "Why rest and recovery are just as important as your workouts.",
        author: "Emma Davis",
        date: "Nov 12, 2024",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1420&auto=format&fit=crop",
    },
    {
        title: "Setting Realistic Fitness Goals",
        excerpt: "How to set achievable goals that keep you motivated on your fitness journey.",
        author: "Jacob Jones",
        date: "Nov 10, 2024",
        category: "Motivation",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    },
    {
        title: "The Benefits of Functional Training",
        excerpt: "Explore how functional training improves everyday movement and performance.",
        author: "Liam Smith",
        date: "Nov 8, 2024",
        category: "Training",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
            <section className="py-20 bg-gradient-to-b from-black to-background">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Fitness <span className="text-primary">Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Expert tips, workout guides, and nutrition advice from our trainers
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-primary/50 transition-all group cursor-pointer">
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${post.image}')` }}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-400">
                                            {post.excerpt}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
