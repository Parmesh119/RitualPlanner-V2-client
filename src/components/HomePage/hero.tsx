import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { Calendar, DollarSign, Users, FileSpreadsheet, ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
    return (
        <main className="min-h-screen w-full relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 dark:bg-orange-900 rounded-full opacity-20 animate-pulse" />
            <div className="absolute top-40 right-20 w-16 h-16 bg-amber-200 dark:bg-amber-900 rounded-full opacity-20 animate-pulse delay-1000" />
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-300 dark:bg-orange-800 rounded-full opacity-20 animate-pulse delay-2000" />

            {/* Hero Section */}
            <div className="relative container mx-auto px-6 py-20 sm:py-28">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-orange-200 dark:border-orange-700">
                        <Sparkles className="w-4 h-4" />
                        Modern Solution for Spiritual Professionals
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                Streamline Your
                                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent block mt-2">
                                    Karmakand Practice
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Manage rituals, client bookings, and religious events with our comprehensive digital platform designed
                                specifically for spiritual professionals.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/auth/register">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all group"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
                    {[
                        {
                            icon: Calendar,
                            title: "Task Management",
                            description: "Manage rituals and events effortlessly with intelligent calendar integration",
                            color: "text-blue-600 dark:text-blue-400",
                            bgColor: "bg-blue-50 dark:bg-blue-900",
                            borderColor: "border-blue-200 dark:border-blue-700",
                        },
                        {
                            icon: DollarSign,
                            title: "Expense Tracking",
                            description: "Track daily expenses and get detailed financial insights for your ceremonies",
                            color: "text-green-600 dark:text-green-400",
                            bgColor: "bg-green-50 dark:bg-green-900",
                            borderColor: "border-green-200 dark:border-green-700",
                        },
                        {
                            icon: Users,
                            title: "Client and Co-worker Management",
                            description: "Organize contacts, bookings, and maintain detailed client and team relationships",
                            color: "text-purple-600 dark:text-purple-400",
                            bgColor: "bg-purple-50 dark:bg-purple-900",
                            borderColor: "border-purple-200 dark:border-purple-700",
                        },
                        {
                            icon: FileSpreadsheet,
                            title: "Easy Reports",
                            description: "Generate and export detailed reports in PDF or Excel format instantly",
                            color: "text-orange-600 dark:text-orange-400",
                            bgColor: "bg-orange-50 dark:bg-orange-900",
                            borderColor: "border-orange-200 dark:border-orange-700",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:-translate-y-1"
                        >
                            <div
                                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border ${feature.borderColor}`}
                            >
                                <feature.icon className={`h-7 w-7 ${feature.color}`} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
