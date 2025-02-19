import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Pricing() {
    const plans = [
        {
            name: 'Basic',
            price: '$19',
            features: [
                'Access to core features',
                'Email support',
                'Basic analytics',
            ],
        },
        {
            name: 'Pro',
            price: '$49',
            features: [
                'All Basic features',
                'Priority support',
                'Advanced analytics',
                'Custom integrations',
            ],
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: [
                'All Pro features',
                'Dedicated account manager',
                '24/7 premium support',
                'Scalable solutions',
            ],
        },
    ]

    return (
        <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-medical-800">
                    Pricing Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-medical-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-medical-700">
                                {plan.name}
                            </h3>
                            <p className="text-3xl font-bold mb-4 text-medical-800">
                                {plan.price}
                                <span className="text-sm font-normal text-gray-600">
                                    /month
                                </span>
                            </p>
                            <ul className="mb-6 space-y-2">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-center"
                                    >
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white">
                                {plan.name === 'Enterprise'
                                    ? 'Get Started'
                                    : 'Start Free Trial'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
