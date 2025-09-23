"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type TContactFormData } from "@/schemas/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader, Mail, Phone, Send } from "lucide-react"
import contact from "@/hooks/useContact"

export default function Contact() {

    const { contactMutation } = contact()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TContactFormData>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = async (data: TContactFormData) => {
        try {
            contactMutation.mutate(data)

            reset()
        } catch (error) {
            console.log("Error submitting form:", error)
        }
    }

    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 sm:px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6 border border-orange-200 dark:border-orange-700">
                        <Mail className="w-4 h-4" />
                        Get In Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Us</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                        Have questions about RitualPlanner? We'd love to hear from you. Send us a message and we'll respond as soon
                        as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <Card className="shadow-xl border-0 bg-white dark:bg-gray-900">
                        <CardHeader className="px-4 sm:px-6">
                            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Send us a message</CardTitle>
                        </CardHeader>
                        <CardContent className="px-4 sm:px-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            {...register("name")}
                                            type="text"
                                            className={`h-11 sm:h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400 ${errors.name ? "border-red-500 dark:border-red-400" : ""
                                                }`}
                                            placeholder="Your full name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            {...register("email")}
                                            type="email"
                                            className={`h-11 sm:h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400 ${errors.email ? "border-red-500 dark:border-red-400" : ""
                                                }`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        {...register("subject")}
                                        type="text"
                                        className={`h-11 sm:h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400 ${errors.subject ? "border-red-500 dark:border-red-400" : ""
                                            }`}
                                        placeholder="What's this about?"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        {...register("message")}
                                        rows={4}
                                        className={`min-h-[120px] sm:min-h-[140px] bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400 ${errors.message ? "border-red-500 dark:border-red-400" : ""
                                            }`}
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={contactMutation.isPending}
                                    className="w-full h-11 sm:h-12 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {contactMutation.isPending ? (
                                        <>
                                            <Loader className="h-4 w-4 animate-spin" />
                                            <span className="ml-2">Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                            <CardContent className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center border border-orange-200 dark:border-orange-700 flex-shrink-0">
                                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">ritualplanner.app@gmail.com</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                    Send us an email and we'll get back to you in 24 hours.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg border-0 bg-white dark:bg-gray-900">
                            <CardContent className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center border border-amber-200 dark:border-amber-700 flex-shrink-0">
                                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">+91 63551-77933</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Available Saturday & Sunday, 5 PM to 8 PM IST.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}