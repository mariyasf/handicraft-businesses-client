import React from 'react';
import m1 from "/Images/m2.jpg"
import m2 from "/Images/m1.jpg"
import m3 from "/Images/m3.jpg"

const MostProducts = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-5 lg:px-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 font-Poppins'>
                <div className="hero bg-base-200 row-span-2 rounded-xl">


                    <div className="hero-content flex-row-reverse">
                        <img
                            src={m1}
                            className="max-w-xs h-full rounded-xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Jute carpets</h1>
                            <p className="py-6">
                                Jute carpets are durable, eco-friendly rugs made from natural jute fibers. They feature a rustic texture and warm, neutral tones, adding a touch of earthy elegance to any space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-base-200">
                    <div className="flex flex-row-reverse">
                        <img
                            src={m2}
                            className="flex-1 max-h-[300px] h-full rounded-lg shadow-2xl" />
                        <div className='flex-1'>
                            <h1 className="text-5xl font-bold">Jute wall decor</h1>
                            <p className="py-6">
                                Jute wall decor is a sustainable choice that brings warmth, organic aesthetics, and a touch of natural elegance to homes and offices alike.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-xl bg-base-200">
                    <div className="flex flex-row-reverse">
                        <img
                            src={m3}
                            className="flex-1 max-h-[300px] rounded-lg shadow-2xl" />
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