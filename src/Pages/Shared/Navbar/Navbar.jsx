import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png';
import profile from '/Images/profile.jpg'
import "../../../index.css"
import UseAuth from "../../../Hooks/UseAuth";
import { IoPersonCircleSharp } from "react-icons/io5";
import UseTheme from "../../../Hooks/UseTheme";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useEffect, useState } from "react";
import axios from "axios";
import { getFromLocalStorage } from "../../../Utili/LocalStorage";

const Navbar = () => {
    const { user, logOut } = UseAuth();
    // console.log(user);
    const [theme, setTheme] = UseTheme();
    const [iteams, setItems] = useState([]);
    const favListData = getFromLocalStorage('FavList');
    // console.log(favListData.length);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/order/${user?.email}`,)
            setItems(data)
        }
        getData();
    }, [user?.email]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('black');
        }
        else setTheme('light');
    }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    function isValidURL(url) {
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    }

    const navLinks = <>
        <li>
            <NavLink
                to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink
                to={'/shop'}>Shop
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/aboutUs'}>About</NavLink> </li>
        <li>
            <NavLink
                to={'/contactUs'}>
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/blog'}>
                Blog
            </NavLink>
        </li>


        <li className="flex items-center">
            <NavLink className={"flex gap-2"}
                to={'/myOrder'}>
                <HiMiniShoppingCart className="text-xl" /><span className="-mt-3">{iteams.length}</span>
            </NavLink>
        </li>
        <li className="flex items-center">
            <NavLink className={"flex gap-2"}
                to={"/favList"}>
                <FaHeart /> <span className="-mt-3">{favListData.length}</span>
            </NavLink>
        </li>

    </>
    return (

        <div className="bg-[#c09d73] fixed w-full z-50">
            <div className=" navbar font-Poppins p-5 lg:px-0 min-w-[500px] max-w-[1240px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="mr-5 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0}
                            className="flex flex-col gap-2 dropdown-content mt-3 z-[1] p-5 shadow bg-[#ddb07f] rounded-xl w-52 text-white">
                            {navLinks}
                        </ul>
                    </div>

                    <Link to={"/"}>
                        <a className="flex items-center gap-2  md:text-3xl">
                            <img src={logo} className="w-8 md:w-10 h-8 md:h-10" alt="" />
                            <span className="font-Rancho text-[#421b01]">BD
                                <span className="text-white"> Handicrafts</span></span>
                        </a>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10  px-1 text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    {/* Profile image */}
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >

                                        <div className="w-10 rounded-full">
                                            <img alt="Profile"
                                                src={
                                                    user &&
                                                        isValidURL(user.photoURL) ?
                                                        user.photoURL : profile
                                                } />



                                        </div>

                                    </div>

                                    <ul tabIndex={0}
                                        className="dropdown-content z-[1] text-white
                                             menu shadow bg-[#ddb07f] rounded-xl w-52">
                                        <li>
                                            <NavLink to={'/profile'}>
                                                {user?.displayName || 'Profile'}
                                            </NavLink>
                                        </li>

                                        <li>
                                            <a onClick={handleSignOut}>Logout</a>
                                        </li>
                                    </ul>

                                </div>


                            </>
                            :
                            <div >
                                <Link to={'/login'} className="mr-4">
                                    <button className="btn bg-[#c09d73] hover:bg-[#86653d] text-white">Login</button>
                                </Link>
                            </div >
                    }

                    <label className="cursor-pointer grid place-items-center pl-5">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;