"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Prime Fitness changed my life. The trainers are incredible and the community is so supportive.",
        author: "Sarah Johnson",
        role: "Member since 2023",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
    },
    {
        quote: "The best gym I've ever been to. The equipment is top-notch and the atmosphere is electric.",
        author: "Michael Chen",
        role: "Member since 2022",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
                    >
                        Success Stories
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Your Success, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Our Inspiration</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/20" />
                            <p className="text-lg text-gray-300 mb-8 italic relative z-10">"{item.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                />
                                <div>
                                    <h4 className="text-white font-bold">{item.author}</h4>
                                    <p className="text-primary text-sm">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
