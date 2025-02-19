import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, Activity, Users } from 'lucide-react'

export default function Hero() {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-medical-100 to-medical-200 text-medical-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                        Transforming Healthcare with Innovation
                    </h1>
                    <p
                        className="text-xl md:text-2xl mb-8 animate-fade-in-up"
                        style={{ animationDelay: '0.2s' }}
                    >
                        Empowering providers with smart tools to enhance patient
                        care and streamline operations.
                    </p>
                    <Button
                        size="lg"
                        className="bg-medical-600 hover:bg-medical-700 text-white animate-fade-in-up animate-pulse-scale"
                        style={{ animationDelay: '0.4s' }}
                    >
                        Start Your Free Trial
                    </Button>
                    <div
                        className="mt-12 flex gap-3 flex-col justify-start space-y-4 sm:space-y-0 animate-fade-in-up"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <div className="flex items-center">
                            <Heart className="w-8 h-8 text-medical-500 mr-2" />
                            <span className="text-lg font-semibold">
                                Improved Patient Care
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Activity className="w-8 h-8 text-medical-500 mr-2" />
                            <span className="text-lg font-semibold">
                                Efficient Operations
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-8 h-8 text-medical-500 mr-2" />
                            <span className="text-lg font-semibold">
                                Team Collaboration
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: '0.8s' }}
                >
                    <Image
                        src="/placeholder.svg?height=500&width=500"
                        alt="Healthcare professionals using MediFlow"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}
