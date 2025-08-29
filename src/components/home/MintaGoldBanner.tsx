import React from 'react';
import Image from 'next/image';

const MintaGoldBanner = () => {
    return (
        <div className="bg-black text-white text-center py-8 sm:py-12 md:py-16 relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px] rounded-t-[10%] sm:rounded-t-[15%] md:rounded-t-[20%]">
            <div className="mt-12 sm:mt-16 md:mt-20">
                <div className="absolute top-6 left-4 sm:top-8 sm:left-6 md:top-10 md:left-10 w-24 sm:w-32 md:w-40">
                    <Image
                        src="/images/coinx.jpg"
                        alt="coin"
                        width={160}
                        height={160}
                        className="animate-spin-slow"
                    />
                </div>
                <div className="absolute top-6 right-4 sm:top-8 sm:right-6 md:top-10 md:right-10 w-28 sm:w-36 md:w-48">
                    <Image
                        src="/images/coin.jpg"
                        alt="coin"
                        width={192}
                        height={192}
                        className="animate-spin-slow"
                    />
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 mt-24 sm:mt-32 md:mt-40">
                    <span className="text-gray-200">Minta</span> <br />
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        GOLD
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-400">
                    India’s Top Savings Program for Food Lovers
                </p>
                <div className="mt-12 sm:mt-16 md:mt-20">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">★ GOLD BENEFITS ★</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 md:gap-16">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://img.icons8.com/ios-filled/50/FFD700/delivery.png"
                                alt="delivery"
                                width={32}
                                height={32}
                                className="mb-2"
                            />
                            <p className="font-semibold text-sm sm:text-base">Free Delivery</p>
                            <p className="text-xs sm:text-sm text-gray-400">
                                At all restaurants within 7 km
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://img.icons8.com/ios-filled/50/FFD700/discount--v1.png"
                                alt="discount"
                                width={32}
                                height={32}
                                className="mb-2"
                            />
                            <p className="font-semibold text-sm sm:text-base">Up to 30% extra off</p>
                            <p className="text-xs sm:text-sm text-gray-400">
                                At 20,000+ partner restaurants
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MintaGoldBanner;