import Image from 'next/image'
import { Zap, Users, BarChart } from 'lucide-react'

export default function Features() {
    const features = [
        {
            title: 'Lightning-Fast Performance',
            description:
                'Experience seamless and fast healthcare management with our optimized platform.',
        },
        {
            title: 'Collaborative Workflows',
            description:
                'Enhance teamwork and efficiency with our integrated collaboration tools.',
        },
        {
            title: 'Advanced Analytics',
            description:
                'Gain insights with powerful analytics to improve decision-making.',
        },
    ]

    const icons = [Zap, Users, BarChart]

    return (
        <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-medical-800">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = icons[index]
                        return (
                            <div
                                key={index}
                                className="bg-medical-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={`/photo${
                                            index + 1
                                        }.jpeg`}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <Icon className="w-12 h-12 text-medical-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-medical-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
