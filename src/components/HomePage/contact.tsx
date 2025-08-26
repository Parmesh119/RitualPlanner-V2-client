"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-200 dark:border-orange-700">
                        <Mail className="w-4 h-4" />
                        Get In Touch
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Us</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Have questions about RitualPlanner? We'd love to hear from you. Send us a message and we'll respond as soon
                        as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="shadow-xl border-0 bg-white dark:bg-gray-900">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all group"
                                >
                                    Send Message
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center border border-orange-200 dark:border-orange-700">
                                        <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                                        <p className="text-gray-600 dark:text-gray-300">support@ritualplanner.com</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Send us an email and we'll get back to you within 24 hours.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center border border-amber-200 dark:border-amber-700">
                                        <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                                        <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Available Monday to Friday, 9 AM to 6 PM IST.</p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center border border-yellow-200 dark:border-yellow-700">
                                        <MapPin className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Come visit our office for a face-to-face consultation.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
