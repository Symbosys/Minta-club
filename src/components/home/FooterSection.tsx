import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const FooterSection = () => {
    return (
        <footer className="bg-black text-gray-400 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
                <div className="col-span-1">
                    <h1 className="text-white font-bold text-2xl sm:text-3xl">Minta</h1>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">Eternal</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Minta</li>
                        <li>Blinkit</li>
                        <li>District</li>
                        <li>Hyperpure</li>
                        <li>Feeding India</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">For Restaurants</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Partner With Us</li>
                        <li>Apps For You</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">For Delivery Partners</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Partner With Us</li>
                        <li>Apps For You</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">Learn More</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms of Service</li>
                        <li>Help & Support</li>
                        <li>Report a Fraud</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 sm:mt-8 border-t border-gray-700 pt-6 sm:pt-8">
                    <div className="flex gap-4 mb-6 sm:mb-0">
                        <FaLinkedin size={20} className="cursor-pointer hover:text-white" />
                        <FaInstagram size={20} className="cursor-pointer hover:text-white" />
                        <FaYoutube size={20} className="cursor-pointer hover:text-white" />
                        <FaFacebook size={20} className="cursor-pointer hover:text-white" />
                        <FaXTwitter size={20} className="cursor-pointer hover:text-white" />
                    </div>
                    <Image
                        src="/images/google-play.webp"
                        alt="Google Play"
                        width={40}
                        height={40}
                        className="cursor-pointer sm:w-[48px] sm:h-[48px]"
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10 border-t border-gray-700 pt-4">
                By continuing past this page, you agree to our Terms of Service, Cookie Policy,
                Privacy Policy and Content Policies. All trademarks are properties of their
                respective owners. 2008-2025 © Minta™ Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default FooterSection;