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
        <footer className="bg-gradient-to-b flex flex-col justify-around from-gray-900 to-black dark:from-black dark:to-gray-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

            <div className="mx-auto px-6 relative">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                    <Flame className="w-6 h-6 text-white" />
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
                                        href="https://www.notion.so/23beedbc4c2280a2a759dcd1df52678c?v=23eeedbc4c2280e39de5000c1d5cbdb1&source=copy_link"
                                        target="_blank"
                                        rel="noopener"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        Tutorial
                                    </Link>
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
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/legal/ToS"
                                        className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors text-lg group flex items-center gap-2"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stay Updated Section */}
                <div className="border-t border-gray-800 dark:border-gray-900 py-6 sm:py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
                        {/* Stay Updated */}
                        <div className="flex-1 max-w-2xl text-center lg:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Updated</h3>
                            <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm sm:text-base leading-relaxed">
                                Get the latest insights on ritual management and
                                <br className="hidden sm:block" />
                                spiritual technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
                                />
                                <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 sm:gap-4">
                            {[
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: Mail, href: "mailto:ritualplanner.app@gmail.com", label: "Email" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 dark:bg-gray-900 hover:bg-gradient-to-br hover:from-orange-600 hover:to-orange-700 rounded-xl flex items-center justify-center transition-all group border border-gray-700 dark:border-gray-800 hover:border-orange-500"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 dark:border-gray-900 py-6">
                    <div className="flex flex-col md:flex-row lg:justify-between md:justify-between items-center gap-4 lg:space-x-146">
                        <div className="flex items-center gap-6 text-gray-400 dark:text-gray-500">
                            <p className="text-center">© {new Date().getFullYear()} RitualPlanner. All rights reserved.</p>
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
