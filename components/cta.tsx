import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-medical-600 to-medical-700 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Healthcare?
                    </h2>
                    <p className="text-xl mb-8">
                        Join thousands of professionals improving patient care
                        with MediFlow.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-medical-700 hover:bg-medical-100 animate-pulse-scale"
                    >
                        Start Free Trial
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
                <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
                    <Image
                        src="/photo5.jpeg"
                        alt="Healthcare team using MediFlow"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}
