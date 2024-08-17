import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import UseAuth from '../../Hooks/UseAuth';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createNewUser, updateUserProfile } = UseAuth();

    const [showPass, setShowPass] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('imageUrl');
        const phoneNumber = form.get('phoneNumber');
        const password = form.get('password');
        const termsAC = e.target.terms.checked;
        console.log(name, photo, email, password);

        // Reset error or success
        toast.dismiss();

        // Check Password Authentication
        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters');
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Password should contain at least one uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Password should contain at least one lowercase letter');
        }

        // Terms And Condition
        if (!termsAC) {
            return toast.error('Please accept our terms and conditions');
        }

        // create new User

        try {
            const result = createNewUser(email, password)
            // console.log(result);

            toast.success('Registration successful! You can now log in.');

            updateUserProfile(name, photo, phoneNumber)
                .then()
                .catch()

            e.target.reset();

        }
        catch (error) {
            console.error(error);
            toast.error('Registration failed. Please try again later.');
        }

    }

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
                    <form className="p-5 space-y-4 font-Poppins" onSubmit={handleRegister}>
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
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                {/* Toggle Show password */}
                                <span
                                    className="absolute top-1/3 text-black text-xl"
                                    onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoEyeOff /> : <IoEye />}</span>
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