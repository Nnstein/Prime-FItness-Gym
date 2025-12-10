"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
    {
        name: "Kuwait City",
        address: "Al Asimah, Kuwait City",
        phone: "+965 65908099",
        hours: "24/7 Access for Members",
    },
    {
        name: "Salmiya",
        address: "Salmiya, Hawally Governorate",
        phone: "+965 65908099",
        hours: "5:00 AM - 11:00 PM Daily",
    },
    {
        name: "Hawally",
        address: "Hawally, Hawally Governorate",
        phone: "+965 65908099",
        hours: "5:00 AM - 11:00 PM Daily",
    },
];

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
            <section className="py-20 bg-linear-to-b from-black to-background">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our <span className="text-primary">Locations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Find a Prime Fitness location near you
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {locations.map((location, index) => (
                            <motion.div
                                key={location.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-zinc-900 border-zinc-800 h-full">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold text-white">{location.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                            <p className="text-gray-300">{location.address}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-primary" />
                                            <p className="text-gray-300">{location.phone}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-5 w-5 text-primary" />
                                            <p className="text-gray-300">{location.hours}</p>
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
