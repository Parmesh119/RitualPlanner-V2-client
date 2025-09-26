"use client"

import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Menu, X, Flame } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavItemClick = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex items-center xl:justify-around justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 font-bold text-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <Flame className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-900 dark:text-white">RitualPlanner</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNavItemClick("about")}
                            className="text-gray-800 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleNavItemClick("contact")}
                            className="text-gray-800 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => handleNavItemClick("faq")}
                            className="text-gray-800 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            FAQ
                        </button>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <Link to="/auth/login">
                            <Button
                                variant="ghost"
                                className=" border-black text-gray-600 cursor-pointer dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/auth/register">
                            <Button className="cursor-pointer bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white">
                                Sign Up
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* <ThemeToggle /> */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => handleNavItemClick("about")}
                                className="text-left text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleNavItemClick("contact")}
                                className="text-left text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                            >
                                Contact
                            </button>
                            <button
                                onClick={() => handleNavItemClick("faq")}
                                className="text-left text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                            >
                                FAQ
                            </button>
                            <ThemeToggle />
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button
                                        variant="ghost"
                                        className="w-full md:text-center border-2 border-black justify-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/auth/register" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
