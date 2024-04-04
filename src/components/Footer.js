import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#253237] text-gray-300 py-12 mt-40 text-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-sm">We are leaders in the field of car rental, and the only company in the area that provides real track racing experience.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p className="text-sm">Email: info@carrentalservice.com</p>
                        <p className="text-sm">Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex items-center justify-center">
                            <a href="#" className="mr-4 ">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" >
                                <FaTwitter className="w-6 h-6t" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;