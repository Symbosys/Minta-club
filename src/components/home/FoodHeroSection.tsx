import React from 'react';
import Image from 'next/image';
import { Store, MapPin, ShoppingBag } from 'lucide-react';

const FoodHeroSection = () => {
    return (
        <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-gray-100 py-6 sm:py-8 md:py-12 flex flex-col items-center">
            {/* Floating Food Items */}
            <Image
                src="/images/tasty-chicken.jpg"
                alt="burger"
                width={100}
                height={100}
                className="absolute left-4 top-16 sm:left-6 sm:top-24 md:left-10 md:top-32 lg:left-16 lg:top-40 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80"
            />
            <Image
                src="/images/of-bbq-chicken-on-plate-isolated-on-white-background-created-by-generative-ai-photo.jpg"
                alt="pizza"
                width={100}
                height={100}
                className="absolute right-4 top-24 sm:right-6 sm:top-32 md:right-10 md:top-48 lg:right-16 lg:top-60 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 animate-pulse"
            />
            <Image
                src="/images/pngtree-roasted-chicken-leg-3d-render-white-background-png-image_20678513.png"
                alt="dimsum"
                width={80}
                height={80}
                className="absolute right-6 bottom-16 sm:right-8 sm:bottom-20 md:right-12 md:bottom-28 lg:right-20 lg:bottom-36 w-16 sm:w-20 md:w-24 lg:w-28 opacity-80 animate-spin-slow"
            />

            {/* Content */}
            <div className="max-w-2xl text-center px-4 sm:px-6 md:px-8 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4 mt-8 sm:mt-12 md:mt-16">
                    Better food for more people
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 md:mb-10">
                    For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep
                </p>
            </div>

            {/* Stats Section */}
            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl px-4 sm:px-6 md:px-8 z-10">
                <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-200">
                    <Store className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mb-2" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">3,00,000+</h2>
                    <p className="text-gray-600 text-sm sm:text-base">restaurants</p>
                </div>
                <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-200">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mb-2" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">300+</h2>
                    <p className="text-gray-600 text-sm sm:text-base">cities</p>
                </div>
                <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-200">
                    <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mb-2" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">3 billion+</h2>
                    <p className="text-gray-600 text-sm sm:text-base">orders delivered</p>
                </div>
            </div>
        </section>
    );
};

export default FoodHeroSection;