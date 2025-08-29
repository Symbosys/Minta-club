import React from 'react';
import Image from 'next/image';

const DownloadAppSection = () => {
    return (
        <section className="w-full mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-16 mb-8 sm:mb-12 md:mb-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 rounded-3xl sm:rounded-4xl bg-gradient-to-r from-pink-50 to-white shadow-sm border-2 sm:border-4 border-pink-200 py-8 sm:py-10 px-4 sm:px-6 md:px-8 mb-8 sm:mb-10">
                <div className="p-4 sm:p-5">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Download the app now!
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                        Experience seamless online ordering <br /> only on the Minta app
                    </p>
                    <Image
                        src="/images/google-play.webp"
                        alt="Google Play"
                        width={120}
                        height={40}
                        className="cursor-pointer sm:w-[140px] md:w-[160px]"
                    />
                </div>
                <div className="relative flex justify-center">
                    <Image
                        src="/images/mockup.jpg"
                        alt="Phone Mockup"
                        width={400}
                        height={400}
                        className="h-[300px] sm:h-[400px] md:h-[450px] object-contain"
                    />
                    <div className="absolute top-[25%] sm:top-[30%] left-1/2 -translate-x-1/2">
                        <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg">
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-2">
                                Scan the QR code to <br /> download the app
                            </p>
                            <Image
                                src="/images/qr.png"
                                alt="QR Code"
                                width={100}
                                height={100}
                                className="mx-auto sm:w-[120px] sm:h-[120px] md:w-[136px] md:h-[136px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;