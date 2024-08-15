import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <ToastContainer />

            <div className="hero-content flex-col lg:flex-row max-h-[600px] ">
                <div className='flex-1 h-[600px]'>
                    <img className='w-full h-full' src="/Images/lr.jpg" alt="Register Banner" />
                </div>


                <div className="flex-1 card shrink-0 h-[600px]  border
                  border-[#c09d73]">
                    <form className="p-5 space-y-4" >
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="imageUrl" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control flex">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative gap-2'>
                                <input
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                {/* Toggle Show password */}

                            </div>
                        </div>

                        <div className='text-left py-5'>
                            <input type="checkbox" name="terms" id="" />
                            <label className="ml-2" htmlFor="terms">Accept our Terms and condition</label>
                        </div>

                        <div className="form-control">
                            <button className="btn bg-[#c09d73] hover:bg-[#ddb07f] uppercase text-white">Register</button>
                        </div>
                    </form>

                    <p className="text-center pb-4">
                        Already have an account? Please  <Link to={'/login'} className=" text-[#c09d73] hover:text-[#ddb07f] font-bold">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Register;