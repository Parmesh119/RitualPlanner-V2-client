import { Container } from "@/components/ui/container"

export const metadata = {
    title: "Privacy Policy | RitualPlanner",
    description:
        "Learn how RitualPlanner collects, uses, and protects your information. Read our Privacy Policy for details about data practices and your rights.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-[calc(100vh-1px)] w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 px-6">
            <Container className="max-w-4xl">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
                    <p className="mt-3 text-gray-600">Last updated: August 28, 2025</p>
                </header>

                <nav aria-label="Table of contents" className="mb-8">
                    <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
                        <ul className="grid md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
                            <li>
                                <a href="#information-we-collect" className="hover:text-orange-700">
                                    Information We Collect
                                </a>
                            </li>
                            <li>
                                <a href="#how-we-use-information" className="hover:text-orange-700">
                                    How We Use Information
                                </a>
                            </li>
                            <li>
                                <a href="#legal-bases" className="hover:text-orange-700">
                                    Legal Bases
                                </a>
                            </li>
                            <li>
                                <a href="#data-retention" className="hover:text-orange-700">
                                    Data Retention
                                </a>
                            </li>
                            <li>
                                <a href="#sharing" className="hover:text-orange-700">
                                    Sharing & Disclosures
                                </a>
                            </li>
                            <li>
                                <a href="#international" className="hover:text-orange-700">
                                    International Transfers
                                </a>
                            </li>
                            <li>
                                <a href="#your-rights" className="hover:text-orange-700">
                                    Your Rights
                                </a>
                            </li>
                            <li>
                                <a href="#security" className="hover:text-orange-700">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#children" className="hover:text-orange-700">
                                    Children’s Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#cookies" className="hover:text-orange-700">
                                    Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#third-party" className="hover:text-orange-700">
                                    Third‑Party Links
                                </a>
                            </li>
                            <li>
                                <a href="#changes" className="hover:text-orange-700">
                                    Changes to this Policy
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

                <section id="introduction" className="prose prose-neutral max-w-none">
                    <p className="text-gray-700">
                        This Privacy Policy explains how RitualPlanner (“we”, “our”, “us”) collects, uses, and shares information
                        about you when you use our website, products, and services (collectively, the “Services”). By using the
                        Services, you agree to this Policy.
                    </p>
                </section>

                <section id="information-we-collect" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Account Information: such as your name, username, email, phone, and password (stored in hashed form if
                            applicable).
                        </li>
                        <li>
                            Usage Data: pages viewed, features used, clicks, device and browser information, and approximate location
                            derived from your IP address.
                        </li>
                        <li>Content You Provide: messages, notes, schedules, and any files or data you enter into the platform.</li>
                        <li>
                            Cookies and Similar Technologies: used to remember preferences, keep you signed in, and analyze usage. See{" "}
                            <a href="#cookies" className="text-orange-700 underline">
                                Cookies
                            </a>
                            .
                        </li>
                    </ul>
                </section>

                <section id="how-we-use-information" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Information</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>Provide, maintain, and improve the Services and develop new features.</li>
                        <li>Personalize your experience and remember your preferences.</li>
                        <li>Communicate with you about updates, security alerts, and support.</li>
                        <li>Monitor and analyze trends, usage, and activities.</li>
                        <li>Protect the security and integrity of our Services and users.</li>
                        <li>Comply with legal obligations and enforce our Terms.</li>
                    </ul>
                </section>

                <section id="legal-bases" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Legal Bases for Processing</h2>
                    <p className="mt-4 text-gray-700">
                        Where applicable, we process your information based on: (i) your consent; (ii) performance of a contract;
                        (iii) compliance with legal obligations; and/or (iv) our legitimate interests, such as securing and
                        improving our Services.
                    </p>
                </section>

                <section id="data-retention" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                    <p className="mt-4 text-gray-700">
                        We retain information only as long as necessary for the purposes described in this Policy, to comply with
                        legal obligations, resolve disputes, and enforce our agreements. You may request deletion subject to certain
                        exceptions.
                    </p>
                </section>

                <section id="sharing" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Sharing & Disclosures</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>Service providers who assist with hosting, analytics, and customer support.</li>
                        <li>Compliance with law, legal process, or to protect rights, property, and safety.</li>
                        <li>Business transfers in connection with a merger, acquisition, or sale of assets.</li>
                        <li>With your consent or at your direction.</li>
                    </ul>
                </section>

                <section id="international" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">International Data Transfers</h2>
                    <p className="mt-4 text-gray-700">
                        If information is transferred across borders, we implement appropriate safeguards in accordance with
                        applicable law to protect your data.
                    </p>
                </section>

                <section id="your-rights" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>Access, correction, deletion, and portability of your personal data.</li>
                        <li>Object to or restrict certain processing.</li>
                        <li>Withdraw consent where processing is based on consent.</li>
                        <li>
                            You can make a request via our{" "}
                            <a href="/#contact" className="text-orange-700 underline">
                                Contact
                            </a>{" "}
                            section.
                        </li>
                    </ul>
                </section>

                <section id="security" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Security</h2>
                    <p className="mt-4 text-gray-700">
                        We use administrative, technical, and physical safeguards designed to protect your information. No method of
                        transmission or storage is completely secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section id="children" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Children’s Privacy</h2>
                    <p className="mt-4 text-gray-700">
                        Our Services are not directed to children under the age of 13 (or as defined by local law). We do not
                        knowingly collect personal information from children.
                    </p>
                </section>

                <section id="cookies" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Cookies & Similar Technologies</h2>
                    <p className="mt-4 text-gray-700">
                        We use cookies and similar technologies to operate the Services, remember preferences, and analyze usage.
                        You can control cookies through your browser settings. Disabling cookies may impact certain features.
                    </p>
                </section>

                <section id="third-party" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Third‑Party Links</h2>
                    <p className="mt-4 text-gray-700">
                        Our Services may contain links to third-party sites. We are not responsible for their privacy practices.
                        Please review their policies before providing any personal information.
                    </p>
                </section>

                <section id="changes" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Changes to this Policy</h2>
                    <p className="mt-4 text-gray-700">
                        We may update this Policy from time to time. If we make material changes, we will provide notice by updating
                        the “Last updated” date and, where appropriate, by additional means.
                    </p>
                </section>

                <section id="contact" className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                    <p className="mt-4 text-gray-700">
                        For questions about this Policy or our data practices, please reach out via our{" "}
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
