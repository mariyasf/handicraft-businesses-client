import { ToastContainer, toast } from 'react-toastify';
import profile from '/Images/profile.jpg'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';

const UserProfile = () => {


    return (
        <>
            <Helmet >
                <title>My Profile</title>
            </Helmet>

            <div className="flex flex-col lg:flex-row gap-4
             min-w-[500px] max-w-[1240px] mx-auto
             px-5 pt-[100px] pb-10 ">
                <div className="flex flex-col w-full lg:w-[400px] shadow-lg rounded-xl">
                    <div className='text-center'>
                        <img alt="Profile"
                            className="rounded-full w-32 h-32 mx-auto"
                            src={profile} />

                        <p className='text-xl font-Cormorrant font-bold'>Name: </p>
                        <p className='text-gray-500 font-Cormorrant'>Email: </p>
                    </div>

                    <div className='font-mono pt-5'>
                        <p className='border-y-2 py-4 px-10  text-xl'>Pending Products:</p>
                        <p className=' py-4 px-10  text-xl'>Rejected Products: </p>
                        <p className='border-y-2 py-4 px-10  text-xl'>Confirm Products: </p>
                    </div>

                </div>
                <div className='flex-1  shadow-lg rounded-xl'>

                    <form className="card-body font-Cormorrant"
                    >
                        <h2 className='text-xl font-bold'>Account Settings</h2>
                        <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className=" label-text font-bold text-lg">First Name</span>
                                </label>
                                <input type="text" name="fname"
                                    placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className=" label-text font-bold text-lg">Last Name</span>
                                </label>
                                <input type="text" name="lname"
                                    placeholder="Your Last Name" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className=" label-text font-bold text-lg">Photo URL</span>
                                </label>
                                <input type="text" name="imageUrl"
                                    placeholder="Photo URL" className="input input-bordered" />

                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className=" label-text font-bold text-lg">Phone Number</span>
                                </label>
                                <input type="number" name="phoneNumber"
                                    placeholder="Phone Number" className="input input-bordered" />
                            </div>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className=" label-text font-bold text-lg">Address</span>
                            </label>
                            <input type="text" name="address"
                                placeholder="Your Address" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                className="btn bg-[#c09d73] text-white text-xl  rounded-lg w-1/5">
                                Update</button>
                        </div>
                    </form>
                </div>



                <ToastContainer />
            </div>

        </>
    );
};

export default UserProfile;