import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png';
import profile from '/Images/profile.jpg'
import "../../../index.css"

const Navbar = () => {


    const navLinks = <>
        <li>
            <NavLink
                to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink
                to={'/login'}>About</NavLink> </li>
        <li>
            <NavLink
                to={'/register'}>
                Contact
            </NavLink>
        </li>

        <li>
            <NavLink
                to={'/shop'}>Shop
            </NavLink>
        </li>

        <li>
            <NavLink
                to={'/myOrder'}>Order
            </NavLink>
        </li>

    </>
    return (

        <div className="bg-[#c09d73] fixed w-full">
            <div className=" navbar font-Poppins p-5 min-w-[500px] max-w-[1240px] mx-auto">
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
                        <a className="flex items-center gap-2 text-3xl">
                            <img src={logo} className="w-10 h-10" alt="" />
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
                                        src={profile} />
                                </div>

                            </div>

                            <ul tabIndex={0}
                                className="dropdown-content z-[1] text-white
                                             menu p-2 shadow bg-[#ddb07f] rounded-xl w-52">
                                <li className="hover:bg-[#cd6f2e] rounded-xl">
                                    <NavLink to={'/profile'} className="w-full">
                                        Profile
                                    </NavLink>
                                </li>

                                <li className="hover:bg-[#cd6f2e] rounded-xl">
                                    <a >Logout</a>
                                </li>
                            </ul>

                        </div>


                    </>
                </div>
            </div>
        </div>
    );
};

export default Navbar;