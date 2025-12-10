"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Home, Dumbbell, Users, Calendar, Phone, Info } from "lucide-react"
import Link from "next/link"

interface MenuItem {
    id: number
    title: string
    url: string
    icon: React.ReactNode
}

interface ScrollNavbarProps {
    menuItems?: MenuItem[]
    className?: string
}

const defaultMenuItems: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: <Home className="w-5 h-5" />
    },
    {
        id: 2,
        title: "Classes",
        url: "/classes",
        icon: <Dumbbell className="w-5 h-5" />
    },
    {
        id: 3,
        title: "Trainers",
        url: "/trainers",
        icon: <Users className="w-5 h-5" />
    },
    {
        id: 4,
        title: "Membership",
        url: "/membership",
        icon: <Calendar className="w-5 h-5" />
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
        icon: <Phone className="w-5 h-5" />
    },
    {
        id: 6,
        title: "About",
        url: "/about",
        icon: <Info className="w-5 h-5" />
    }
]

export const ScrollNavigationMenu: React.FC<ScrollNavbarProps> = ({
    menuItems = defaultMenuItems,
    className = ""
}) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100)
    })

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const menuVariants = {
        closed: {
            opacity: 0,
            scale: 0.8,
            y: -50,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                when: "afterChildren" as const,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                when: "beforeChildren" as const,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        closed: {
            y: 20,
            opacity: 0,
            scale: 0.8
        },
        open: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 25
            }
        }
    }

    const hamburgerVariants = {
        normal: { rotate: 0, scale: 1 },
        scrolled: { rotate: 360, scale: 1.1 }
    }

    return (
        <>
            {/* Floating Hamburger - visible when scrolled (Mobile & Tablet only) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isScrolled ? 1 : 0,
                    opacity: isScrolled ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 right-6 z-50 md:hidden"
            >
                <motion.button
                    onClick={toggleMenu}
                    className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center"
                    variants={hamburgerVariants}
                    animate={isScrolled ? "scrolled" : "normal"}
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Menu className="w-6 h-6" />
                </motion.button>
            </motion.div>

            {/* Floating Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                            onClick={toggleMenu}
                        />

                        {/* Menu Container */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                        >
                            <div className="relative bg-zinc-900 border border-primary/30 rounded-3xl p-8 shadow-2xl min-w-[300px]">
                                {/* Close Button */}
                                <motion.button
                                    onClick={toggleMenu}
                                    className="absolute top-4 right-4 p-2 text-white hover:text-primary rounded-full hover:bg-zinc-800"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>

                                {/* Menu Items */}
                                <div className="space-y-4 mt-8">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, x: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={item.url}
                                                onClick={toggleMenu}
                                                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-zinc-800 transition-colors group"
                                            >
                                                <motion.div
                                                    className="text-primary"
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {item.icon}
                                                </motion.div>
                                                <span className="text-lg font-bold text-white group-hover:text-primary uppercase tracking-wide">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative Elements */}
                                <motion.div
                                    className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/60 rounded-full"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.8, 0.3]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
