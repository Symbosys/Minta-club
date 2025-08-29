import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
    return (
        <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
            <div className="mb-8 sm:mb-10 mt-6 sm:mt-8">
                <Image
                    src="/images/etarnal.jpg"
                    alt="eternal"
                    width={120}
                    height={120}
                    className="mx-auto mb-3 sm:w-[140px] md:w-[160px]"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    eternal
                </h1>
                <p className="mt-3 text-gray-600 font-medium text-sm sm:text-base md:text-lg">
                    POWERING INDIA’S CHANGING LIFESTYLES
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
                {[
                    {
                        name: 'Minta',
                        desc: 'Get the app now to start ordering your favorite dishes!',
                        img: '/images/zomato.webp',
                        color: 'from-pink-100 to-pink-50',
                    },
                    {
                        name: 'blinkit',
                        desc: 'Choose from 10,000+ products & get them delivered in minutes',
                        img: '/images/blinkit.png',
                        color: 'from-yellow-100 to-yellow-50',
                    },
                    {
                        name: 'district',
                        desc: 'The best of events, movies, dining, and everything you love!',
                        img: '/images/district.jpg',
                        color: 'from-purple-100 to-purple-50',
                    },
                    {
                        name: 'hyperpure',
                        desc: 'Offering complete supply chain solution for your restaurant',
                        img: '/images/hyperpure.jpg',
                        color: 'from-red-100 to-red-50',
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl w-full max-w-[280px] mx-auto p-4 sm:p-6 shadow-md bg-gradient-to-b min-h-[280px] sm:min-h-[320px] flex flex-col justify-between ${service.color} transition duration-300 ease-in-out hover:scale-105 items-center`}
                    >
                        <div>
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={service.img}
                                    alt={service.name}
                                    width={80}
                                    height={80}
                                    className="rounded-xl object-contain sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
                                />
                            </div>
                            <h2 className="text-base sm:text-lg md:text-xl font-semibold">{service.name}</h2>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">{service.desc}</p>
                        </div>
                        <a href="#" className="text-red-500 font-medium mt-4 inline-block hover:underline text-xs sm:text-sm md:text-base">
                            Check it out →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;