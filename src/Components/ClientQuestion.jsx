import React from 'react';

const ClientQuestion = () => {
    return (
        <div>
            <section className="my-10 max-w-[1240px] mx-auto px-5 lg:px-0">
                <div
                    className="text-center  space-y-2 ">
                    <p className='text-gray-600'>FAQ</p>
                    <h1 className="text-3xl  theme_title font-bold font-Rancho">
                        Clients Question
                    </h1>


                </div>

                <div
                    className="mt-12">


                    <div className="pt-5 lg:flex-1 font-Cormorrant">
                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl theme_title focus:bg-[#421b01] focus:text-white  font-bold">
                                What materials are used in your products?
                            </summary>
                            <div className="collapse-content bg-[#421b01] text-white p-4">
                                <p className='text-xl'>
                                    Our products are made from high-quality, eco-friendly materials such as jute, cotton, and other sustainable fibers.
                                </p>
                            </div>
                        </details>


                        <hr />
                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl theme_title focus:bg-[#421b01] focus:text-white  font-bold">
                                Can I customize my order?
                            </summary>
                            <div className="collapse-content bg-[#421b01] text-white p-4">
                                <p className='text-xl'>
                                    Yes, we offer customization options for select products. Please contact our customer service for details.
                                </p>
                            </div>
                        </details>


                        <hr />
                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl theme_title focus:bg-[#421b01] focus:text-white  font-bold">
                                Do you offer international shipping?
                            </summary>
                            <div className="collapse-content bg-[#421b01] text-white p-4">
                                <p className='text-xl'>
                                    Yes, we ship internationally. Shipping times and fees may vary depending on the destination.
                                </p>
                            </div>
                        </details>


                        <hr />
                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl theme_title focus:bg-[#421b01] focus:text-white  font-bold">
                                What is your return policy?
                            </summary>
                            <div className="collapse-content bg-[#421b01] text-white p-4">
                                <p className='text-xl'>
                                    We accept returns within 30 days of purchase. Items must be unused and in their original condition.
                                </p>
                            </div>
                        </details>


                        <hr />
                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl theme_title focus:bg-[#421b01] focus:text-white  font-bold">
                                Are your products handmade?
                            </summary>
                            <div className="collapse-content bg-[#421b01] text-white p-4">
                                <p className='text-xl'>
                                    Yes, all our jute products are handcrafted by skilled artisans, ensuring unique and high-quality craftsmanship.
                                </p>
                            </div>
                        </details>
                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl theme_title focus:bg-[#421b01] focus:text-white  font-bold">
                                Do you offer bulk discounts for large orders?
                            </summary>
                            <div className="collapse-content bg-[#421b01] text-white p-4">
                                <p className='text-xl'>
                                    Yes, we provide bulk discounts for large orders. Please reach out for a quote.
                                </p>
                            </div>
                        </details>
                        <hr />




                    </div>
                </div>
            </section>

        </div>
    );
};

export default ClientQuestion;