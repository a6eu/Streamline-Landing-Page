import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
    const testimonials = [
        {
            quote: 'This platform transformed the way we manage patient care. Highly recommended!',
            author: 'Dr. Emily Carter',
            position: 'Chief Medical Officer',
        },
        {
            quote: 'An invaluable tool for streamlining our workflow and improving efficiency.',
            author: 'Michael Reed',
            position: 'Healthcare Administrator',
        },
    ]

    return (
        <section
            id="testimonials"
            className="py-20 px-4 md:px-6 lg:px-8 bg-medical-100"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-medical-800">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>
                            <p className="text-lg mb-4 italic text-gray-700">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={`/placeholder.svg?height=64&width=64&text=${testimonial.author[0]}`}
                                        alt={testimonial.author}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-medical-800">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
