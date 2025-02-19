'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heart, Menu, X } from 'lucide-react'

export default function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const changeLanguage = (newLocale: string) => {
        router.replace(`/${newLocale}${pathname}`)
    }

    return (
        <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-white shadow-md">
            <div className="flex items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-medical-700 flex items-center"
                >
                    <Heart className="w-6 h-6 mr-2 text-medical-500" />
                    MediFlow
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
                <Link
                    href="#features"
                    className="text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
                >
                    Features
                </Link>
                <Link
                    href="#testimonials"
                    className="text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
                >
                    Testimonials
                </Link>
                <Link
                    href="#pricing"
                    className="text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
                >
                    Pricing
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <X className="w-6 h-6 text-medical-700" />
                ) : (
                    <Menu className="w-6 h-6 text-medical-700" />
                )}
            </button>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
                <Button
                    onClick={() => changeLanguage('en')}
                    variant="default"
                    size="sm"
                >
                    EN
                </Button>
                <Button
                    onClick={() => changeLanguage('ru')}
                    variant="outline"
                    size="sm"
                >
                    RU
                </Button>
                <Button
                    onClick={() => changeLanguage('kz')}
                    variant="outline"
                    size="sm"
                >
                    KZ
                </Button>
                <Button className="bg-medical-600 hover:bg-medical-700 text-white">
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
                    >
                        Pricing
                    </Link>
                    <div className="flex flex-col space-y-2">
                        <Button
                            onClick={() => changeLanguage('en')}
                            variant="default"
                            size="sm"
                        >
                            EN
                        </Button>
                        <Button
                            onClick={() => changeLanguage('ru')}
                            variant="outline"
                            size="sm"
                        >
                            RU
                        </Button>
                        <Button
                            onClick={() => changeLanguage('kz')}
                            variant="outline"
                            size="sm"
                        >
                            KZ
                        </Button>
                        <Button className="bg-medical-600 hover:bg-medical-700 text-white">
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
