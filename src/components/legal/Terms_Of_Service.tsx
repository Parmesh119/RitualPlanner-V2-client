import { Container } from "@/components/ui/container"

export const metadata = {
    title: "Terms of Service | RitualPlanner",
    description:
        "Read the Terms of Service for RitualPlanner. Understand your rights, responsibilities, and the rules that govern the use of our Services.",
}

export default function TermsPage() {
    return (
        <main className="min-h-[calc(100vh-1px)] w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 px-6">
            <Container className="max-w-4xl">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
                    <p className="mt-3 text-gray-600">Last updated: August 28, 2025</p>
                </header>

                <nav aria-label="Table of contents" className="mb-8">
                    <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
                        <ul className="grid md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
                            <li>
                                <a href="#acceptance" className="hover:text-orange-700">
                                    Acceptance of Terms
                                </a>
                            </li>
                            <li>
                                <a href="#eligibility" className="hover:text-orange-700">
                                    Eligibility
                                </a>
                            </li>
                            <li>
                                <a href="#accounts" className="hover:text-orange-700">
                                    Accounts & Security
                                </a>
                            </li>
                            <li>
                                <a href="#use" className="hover:text-orange-700">
                                    Acceptable Use
                                </a>
                            </li>
                            <li>
                                <a href="#subscriptions" className="hover:text-orange-700">
                                    Subscriptions & Billing
                                </a>
                            </li>
                            <li>
                                <a href="#ip" className="hover:text-orange-700">
                                    Intellectual Property
                                </a>
                            </li>
                            <li>
                                <a href="#user-content" className="hover:text-orange-700">
                                    User Content
                                </a>
                            </li>
                            <li>
                                <a href="#third-party" className="hover:text-orange-700">
                                    Third‑Party Services
                                </a>
                            </li>
                            <li>
                                <a href="#disclaimers" className="hover:text-orange-700">
                                    Disclaimers
                                </a>
                            </li>
                            <li>
                                <a href="#limitation" className="hover:text-orange-700">
                                    Limitation of Liability
                                </a>
                            </li>
                            <li>
                                <a href="#indemnity" className="hover:text-orange-700">
                                    Indemnification
                                </a>
                            </li>
                            <li>
                                <a href="#termination" className="hover:text-orange-700">
                                    Termination
                                </a>
                            </li>
                            <li>
                                <a href="#governing-law" className="hover:text-orange-700">
                                    Governing Law
                                </a>
                            </li>
                            <li>
                                <a href="#changes" className="hover:text-orange-700">
                                    Changes to Terms
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-orange-700">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section id="acceptance" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                    <p className="mt-4 text-gray-700">
                        By accessing or using RitualPlanner (the “Service”), you agree to be bound by these Terms of Service
                        (“Terms”). If you do not agree to these Terms, do not use the Service.
                    </p>
                </section>

                <section id="eligibility" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">2. Eligibility</h2>
                    <p className="mt-4 text-gray-700">
                        You must be at least the age of majority in your jurisdiction to use the Service. By using the Service, you
                        represent that you meet this requirement.
                    </p>
                </section>

                <section id="accounts" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">3. Accounts & Security</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                        <li>You are responsible for all activities under your account.</li>
                        <li>Notify us promptly of any unauthorized access or security breach.</li>
                    </ul>
                </section>

                <section id="use" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">4. Acceptable Use</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>Do not use the Service for unlawful, harmful, or fraudulent purposes.</li>
                        <li>No reverse engineering, scraping, or automated data extraction without permission.</li>
                        <li>Do not interfere with the security or availability of the Service.</li>
                    </ul>
                </section>

                <section id="subscriptions" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">5. Subscriptions & Billing</h2>
                    <p className="mt-4 text-gray-700">
                        Some features may require a paid subscription. Prices, billing cycles, and refund policies will be disclosed
                        at the time of purchase. Taxes may apply. We may change prices with reasonable notice as permitted by law.
                    </p>
                </section>

                <section id="ip" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">6. Intellectual Property</h2>
                    <p className="mt-4 text-gray-700">
                        The Service, including its content, features, and functionality, is owned by RitualPlanner and protected by
                        intellectual property laws. Except as expressly permitted, you may not copy, modify, or create derivative
                        works based on the Service.
                    </p>
                </section>

                <section id="user-content" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">7. User Content</h2>
                    <p className="mt-4 text-gray-700">
                        You retain ownership of content you submit to the Service. You grant us a non‑exclusive, worldwide,
                        royalty‑free license to use, reproduce, and display such content solely to operate and improve the Service.
                        You represent that you have the necessary rights to submit the content.
                    </p>
                </section>

                <section id="third-party" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">8. Third‑Party Services</h2>
                    <p className="mt-4 text-gray-700">
                        The Service may link to or integrate with third‑party services. We are not responsible for third‑party
                        content, policies, or practices. Use them at your own risk and review their terms.
                    </p>
                </section>

                <section id="disclaimers" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">9. Disclaimers</h2>
                    <p className="mt-4 text-gray-700">
                        The Service is provided “as is” and “as available” without warranties of any kind, express or implied,
                        including merchantability, fitness for a particular purpose, and non‑infringement. We do not warrant that
                        the Service will be uninterrupted, secure, or error‑free.
                    </p>
                </section>

                <section id="limitation" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">10. Limitation of Liability</h2>
                    <p className="mt-4 text-gray-700">
                        To the fullest extent permitted by law, RitualPlanner and its affiliates shall not be liable for any
                        indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill
                        arising out of or related to your use of the Service.
                    </p>
                </section>

                <section id="indemnity" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">11. Indemnification</h2>
                    <p className="mt-4 text-gray-700">
                        You agree to indemnify and hold harmless RitualPlanner and its affiliates from any claims, liabilities,
                        damages, and expenses (including reasonable attorneys’ fees) arising from your use of the Service or your
                        violation of these Terms.
                    </p>
                </section>

                <section id="termination" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">12. Termination</h2>
                    <p className="mt-4 text-gray-700">
                        We may suspend or terminate your access to the Service at any time for any reason, including violation of
                        these Terms. Upon termination, sections that by their nature should survive will remain in effect.
                    </p>
                </section>

                <section id="governing-law" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">13. Governing Law</h2>
                    <p className="mt-4 text-gray-700">
                        These Terms are governed by the laws of the jurisdiction in which RitualPlanner operates, without regard to
                        conflict of law principles. Venue for disputes will lie in competent courts within that jurisdiction.
                    </p>
                </section>

                <section id="changes" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">14. Changes to Terms</h2>
                    <p className="mt-4 text-gray-700">
                        We may modify these Terms from time to time. Material changes will be indicated by updating the “Last
                        updated” date and, where appropriate, by additional notice. Your continued use constitutes acceptance of the
                        revised Terms.
                    </p>
                </section>

                <section id="contact" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">15. Contact Us</h2>
                    <p className="mt-4 text-gray-700">
                        If you have any questions about these Terms, please contact us via the{" "}
                        <a href="/#contact" className="text-orange-700 underline">
                            Contact
                        </a>{" "}
                        section.
                    </p>
                </section>
            </Container>
        </main>
    )
}
