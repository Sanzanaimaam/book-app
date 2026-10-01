import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Bannar = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 bg-gray-100 rounded-3xl px-8 py-12 md:px-12 lg:px-16 md:py-16 overflow-hidden">

                    {/* Left Content */}
                    <div className="space-y-6">
                        <span className="inline-block text-sm font-semibold text-green-600 bg-green-100 px-4 py-2 rounded-full">
                            Discover Your Next Read
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Books to freshen
                            <br />
                            up your bookshelf
                        </h2>

                        <p className="max-w-md text-gray-600 text-base md:text-lg leading-relaxed">
                            Explore our collection of inspiring stories, timeless
                            classics, and exciting new reads for every kind of reader.
                        </p>

                        <button className="btn btn-success rounded-full px-7 text-white shadow-md hover:shadow-lg">
                            View The List
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <Image
                                src={bannerImg}
                                alt="Books on a bookshelf"
                                className="w-full max-w-md rounded-2xl shadow-xl"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Bannar;