"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@tanstack/react-router"

const faqs = [
    {
        question: "What is RitualPlanner?",
        answer:
            "RitualPlanner is a comprehensive digital platform designed specifically for spiritual professionals to manage Karmakand rituals, ceremonies, client bookings, and religious events efficiently.",
    },
    {
        question: "How does the task management feature work?",
        answer:
            "Our task management system allows you to create, schedule, and track rituals and ceremonies with intelligent calendar integration. You can set reminders, manage resources, and coordinate with team members seamlessly.",
    },
    {
        question: "Can I track expenses and generate reports?",
        answer:
            "Yes! RitualPlanner includes comprehensive expense tracking and reporting features. You can monitor daily expenses, track ceremony costs, and generate detailed financial reports in PDF or Excel format.",
    },
    {
        question: "Is my client data secure?",
        answer:
            "Absolutely. We use enterprise-grade security measures to protect your client information and ceremonial data. All data is encrypted and stored securely with regular backups.",
    },
    {
        question: "Can I manage multiple priests and co-workers?",
        answer:
            "Yes, our platform includes a co-priest directory and team management features. You can coordinate with other spiritual professionals, share schedules, and collaborate on ceremonies.",
    },
    {
        question: "Is there a mobile app available?",
        answer:
            "Currently, RitualPlanner is a web-based platform that works seamlessly on all devices including smartphones and tablets. A dedicated mobile app is in development.",
    },
    {
        question: "How much does RitualPlanner cost?",
        answer:
            "We offer flexible pricing plans to suit different needs. You can start with our free plan and upgrade as your practice grows. Contact us for detailed pricing information.",
    },
    {
        question: "Do you provide customer support?",
        answer:
            "Yes, we provide comprehensive customer support through email, phone, and live chat. Our support team is available Saturday & Sunday, 5 PM to 8 PM IST.",
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-20 px-6 bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-200 dark:border-orange-700">
                        <HelpCircle className="w-4 h-4" />
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Got{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                            Questions?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Find answers to the most commonly asked questions about RitualPlanner.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Card
                            key={index}
                            className="shadow-lg border-0 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
                        >
                            <CardContent className="p-0">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 focus:outline-none dark:focus:ring-orange-400 rounded-lg"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                                        <ChevronDown
                                            className={`w-5 h-5 text-orange-600 dark:text-orange-400 transition-transform duration-200 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Still have questions?</p>
                    <a href="#contact"><button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Contact Us
                    </button></a>
                </div>
            </div>
        </section>
    )
}
