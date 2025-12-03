"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
                        Get In <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Have questions? We're here to help you start your fitness journey
                    </motion.p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white">Send Us a Message</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Input
                                                placeholder="First Name"
                                                className="bg-zinc-800 border-zinc-700 text-white"
                                            />
                                            <Input
                                                placeholder="Last Name"
                                                className="bg-zinc-800 border-zinc-700 text-white"
                                            />
                                        </div>
                                        <Input
                                            type="email"
                                            placeholder="Email Address"
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                        />
                                        <Input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                        />
                                        <Textarea
                                            placeholder="Your Message"
                                            rows={5}
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                        />
                                        <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase">
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                                            <p className="text-gray-400">
                                                Kuwait City<br />
                                                Kuwait
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                                            <p className="text-gray-400">
                                                +965 65908099
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                                            <p className="text-gray-400">
                                                info@primefitness.com
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Hours</h3>
                                            <p className="text-gray-400">
                                                Monday - Friday: 5:00 AM - 11:00 PM<br />
                                                Saturday - Sunday: 6:00 AM - 10:00 PM<br />
                                                <span className="text-primary font-bold">24/7 Access for Members</span>
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-zinc-800 h-96 rounded-2xl flex items-center justify-center">
                            <p className="text-gray-400">Map Integration Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
