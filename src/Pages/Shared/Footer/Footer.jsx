import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#c09d73]'>
                <section className="footer footer-center max-w-[1240px] mx-auto
                 text-base-content rounded p-5 lg:px-0
                flex flex-col lg:flex-row gap-5 justify-between">
                    <aside>
                        <img src="/logo.png" className='h-[80px] w-[80px]' alt="" />
                        <p className='text-2xl font-bold'>
                            <span className="font-Rancho text-[#421b01]">BD
                                <span className="text-white"> Handicrafts</span></span>
                        </p>
                    </aside>

                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">
                            <Link to={"/"}>
                                About us
                            </Link>
                        </a>
                        <a className="link link-hover">
                            <Link to={"/"}>
                                Contact us
                            </Link>
                        </a>
                        <a className="link link-hover">
                            <Link to={"/"}>
                                Shop
                            </Link>
                        </a>
                        <a className="link link-hover">
                            <Link to={"/"}>
                                Order
                            </Link></a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a className='text-4xl text-[#421b01] cursor-pointer'>
                                <FaFacebook />
                            </a>
                            <a className='text-4xl text-[#421b01] cursor-pointer'>
                                <FaInstagram />
                            </a>
                            <a className='text-4xl text-[#421b01] cursor-pointer'>
                                <FaYoutube />
                            </a>
                        </div>
                    </nav>
                </section>

            </footer>
            <footer className="footer footer-center bg-[#421b01] text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;