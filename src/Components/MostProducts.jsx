import React from 'react';
import m1 from "/Images/m2.jpg"
import m2 from "/Images/m1.jpg"
import m3 from "/Images/m3.jpg"

const MostProducts = () => {
    return (
        <div className='max-w-[1240px] mx-auto pt-10 px-5 lg:px-0'>
            <div className='space-y-2 pb-5 flex flex-row justify-between gap-5'>
                <div className='flex-1'>
                    <p className='text-gray-600'>
                        Customer Demand
                    </p>
                    <h2 className='text-3xl  theme_title font-bold font-Rancho'>
                        Most Demand Product
                    </h2>
                </div>
                <div className='flex-1 text-gray-600'>
                    <p>
                        The most sought-after product in our collection is the handcrafted jute bag. It's durable, stylish, and perfect for those who appreciate both functionality and environmental consciousness.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 font-Poppins'>
                <div className="lg:hero p-4 lg:p-0 bg-base-200 lg:row-span-2 rounded-xl">


                    <div className="lg:hero-content flex flex-col md:flex-row-reverse gap-2">
                        <img
                            src={m1}
                            className="flex-1 max-h-[250px] lg:max-w-xs rounded-xl" />
                        <div className='flex-1'>
                            <h1 className="text-5xl font-bold">Jute carpets</h1>
                            <p className="py-6">
                                Jute carpets are durable, eco-friendly rugs made from natural jute fibers. They feature a rustic texture and warm, neutral tones, adding a touch of earthy elegance to any space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-base-200">
                    <div className="flex flex-col md:flex-row-reverse gap-2">
                        <img
                            src={m2}
                            className="flex-1 max-h-[250px] rounded-lg" />
                        <div className='flex-1'>
                            <h1 className="text-5xl font-bold">Jute wall decor</h1>
                            <p className="py-6">
                                Jute wall decor is a sustainable choice that brings warmth, organic aesthetics, and a touch of natural elegance to homes and offices alike.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-xl bg-base-200">
                    <div className="flex flex-col md:flex-row-reverse gap-2">
                        <img
                            src={m3}
                            className="flex-1 max-h-[250px] rounded-lg" />
                        <div className='flex-1'>
                            <h1 className="text-5xl font-bold">Jute bags</h1>
                            <p className="py-6">
                                Jute bags offer a sustainable alternative to plastic, featuring earthy textures and often decorated with unique prints or patterns for added style
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MostProducts;