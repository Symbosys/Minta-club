import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Minta</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to My Website</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
                    Experience fast & easy online ordering on the Minta app
                </p>
                <Image
                    src="/images/google-play.webp"
                    alt="Google Play"
                    width={200}
                    height={60}
                    className="px-4 py-3 mx-auto sm:w-[250px] md:w-[300px]"
                />
                <button className="px-4 py-2 sm:px-6 sm:py-3 bg-red-600 hover:bg-red-700 rounded-lg text-base sm:text-lg font-semibold transition">
                    Order on app
                </button>
            </div>
        </section>
    );
};

export default HeroSection;