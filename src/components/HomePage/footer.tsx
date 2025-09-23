"use client"

import { Facebook, Instagram, Twitter, Mail, Flame, ArrowUp } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function Footer() {
    const handleNavItemClick = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

            <div className="container mx-auto px-6 relative">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                    <Flame className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-2xl font-bold">RitualPlanner</span>
                            </div>
                            <p className="text-gray-300 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                                Simplifying the management of Karmakand rituals and ceremonies through modern technology and intuitive
                                design.
                            </p>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="font-bold text-xl mb-6">Company</h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "About Us", id: "about" },
                                    { label: "Contact", id: "contact" },
                                    { label: "FAQ", id: "faq" },
                                ].map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() => handleNavItemClick(link.id)}
                                            className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="font-bold text-xl mb-6">Support</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        Tutorial
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h3 className="font-bold text-xl mb-6">Legal</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        to="/legal/privacy"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/legal/ToS"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stay Updated Section */}
                <div className="border-t border-gray-800 dark:border-gray-900 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Stay Updated */}
                        <div className="flex-1 max-w-2xl">
                            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                            <p className="text-gray-400 dark:text-gray-500 mb-4">
                                Get the latest insights on ritual management and spiritual technology.
                            </p>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
                                />
                                <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-8 py-3 rounded-lg font-medium transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: Mail, href: "mailto:contact@ritualplanner.com", label: "Email" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-12 h-12 bg-gray-800 dark:bg-gray-900 hover:bg-gradient-to-br hover:from-orange-600 hover:to-orange-700 rounded-xl flex items-center justify-center transition-all group border border-gray-700 dark:border-gray-800 hover:border-orange-500"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 dark:border-gray-900 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-6 text-gray-400 dark:text-gray-500">
                            <p>© {new Date().getFullYear()} RitualPlanner. All rights reserved.</p>
                        </div>

                        <div className="flex items-center gap-4">

                            {/* Back to Top Button */}
                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-lg flex items-center justify-center transition-all group shadow-lg hover:shadow-xl"
                                aria-label="Back to top"
                            >
                                <ArrowUp className="h-4 w-4 text-white group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
