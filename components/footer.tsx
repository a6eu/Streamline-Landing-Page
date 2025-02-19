import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-medical-900 text-white py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">MediFlow</h3>
                    <p className="text-sm text-medical-200">
                        Empowering healthcare providers to save lives and
                        improve patient outcomes.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Product</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#features"
                                className="text-sm text-medical-200 hover:text-white transition-colors"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#pricing"
                                className="text-sm text-medical-200 hover:text-white transition-colors"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#testimonials"
                                className="text-sm text-medical-200 hover:text-white transition-colors"
                            >
                                Testimonials
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="text-sm text-medical-200 hover:text-white transition-colors"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-sm text-medical-200 hover:text-white transition-colors"
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-sm text-medical-200 hover:text-white transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        <Link
                            href="#"
                            className="text-medical-200 hover:text-white transition-colors"
                        >
                            <Facebook className="w-6 h-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-medical-200 hover:text-white transition-colors"
                        >
                            <Twitter className="w-6 h-6" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-medical-200 hover:text-white transition-colors"
                        >
                            <Instagram className="w-6 h-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-medical-200 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-medical-800 text-center">
                <p className="text-sm text-medical-200">
                    © {new Date().getFullYear()} MediFlow. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
