import React from 'react';
import { FcServices } from 'react-icons/fc';
import { GrClearOption } from 'react-icons/gr';
import { IoIosColorPalette } from 'react-icons/io';
import { SlBadge } from 'react-icons/sl';

const Service = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-4 rounded-xl
         max-w-[1240px] mx-auto pt-20 mb-10 px-5 lg:px-0'>

            <div>
                <IoIosColorPalette className='mx-auto text-8xl text-[#421b01]' />
                <h3 className='font-Rancho text-2xl font-bold py-2 '>Unique Designs</h3>
                <p>
                    Distinctive, original creations that stand out.
                </p>
            </div>
            <div className='lg:border-x-2 lg:border-dashed'>
                <SlBadge className='mx-auto text-8xl text-[#cd6f2e]' />
                <h3 className='font-Rancho text-2xl font-bold py-2'>High Quality</h3>
                <p>
                    Durable products made with premium materials
                </p>
            </div>
            <div className='lg:border-r-2 border-dashed'>
                <FcServices className='mx-auto text-8xl ' />
                <h3 className='font-Rancho text-2xl font-bold py-2'>
                    Professional Service
                </h3>
                <p>
                    Reliable, timely, and seamless customer care.
                </p>
            </div>

            <div>
                <GrClearOption className='mx-auto text-8xl text-[#cd6f2e]' />
                <h3 className='font-Rancho text-2xl font-bold py-2'>
                    Customization Options
                </h3>
                <p>
                    Tailored products to suit individual needs.
                </p>
            </div>



        </div>
    );
};

export default Service;