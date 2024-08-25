import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import UseAuth from '../../Hooks/UseAuth';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createNewUser, updateUserProfile } = UseAuth();

    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const fname = form.get('fname');
        const lname = form.get('lname');
        const email = form.get('email');
        const photo = form.get('imageUrl');
        const phoneNumber = form.get('phoneNumber');
        const password = form.get('password');
        const termsAC = e.target.terms.checked;
        // console.log(name, photo, email, password);

        const fullName = `${fname} ${lname}`;
        // console.log(fullName, phoneNumber, photo, email);

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
            console.log('User: ', result);

            // toast.success('Registration successful! You can now log in.');

            updateUserProfile(fullName, photo, phoneNumber)
                .then()
                .catch()

            const createdAt = result.user?.metadata?.creationTime;
            const user = { fullName, email, phoneNumber, createAt: createdAt };

            fetch(`${import.meta.env.VITE_API_URL}/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        console.log('Register user')
                        toast.success('Registration successful! You can now log in.');
                    }
                })

            e.target.reset();
            navigate('/login')

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

            <div className="lg:flex lg:flex-row h-full">
                <div className='flex-1 hidden lg:block h-screen'>
                    <div className="h-full bg-cover bg-center bg-no-repeat bg-[url('./Images/lr.png')] 
                    text-center text-white space-y-4 font-Cormorrant
                    flex flex-col items-center justify-center
                    px-4">
                        <h2 className="text-6xl text-[#c09d73] lg:text-7xl md:text-5xl sm:text-4xl">Hey, There</h2>
                        <p className="text-2xl lg:text-3xl md:text-xl sm:text-lg">Welcome Back! Please Enter your details</p>
                    </div>
                </div>


                <div className="font-Poppins
                 flex-1  shrink-0 max-w-[600px] ">
                    <h2 className='mx-10 border-b-4 border-[#c09d73] w-1/3 pb-4 md:pt-10 
                    text-xl lg:text-3xl font-bold font-Cormorrant'>Register Now</h2>

                    <form className="px-10 pt-4 lg:space-y-4 font-Poppins"
                        onSubmit={handleRegister}>
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="fname" placeholder="Your First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="lname" placeholder="Your Last Name" className="input input-bordered" required />
                            </div>

                        </div>

                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="imageUrl" placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <div className='gap-2 input input-bordered w-full
                            flex flex-row items-center justify-between '>
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className=""
                                    required />
                                {/* Toggle Show password */}
                                <span
                                    className=" text-black text-xl"
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

                    <p className="text-center pt-4">
                        Already have an account? Please  <Link to={'/login'} className=" text-[#c09d73] hover:text-[#ddb07f] font-bold">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Register;