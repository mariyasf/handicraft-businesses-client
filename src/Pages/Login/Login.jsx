import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Login = () => {
    const { signIn, handleGoogleSignIn } = UseAuth();
    const axiosSecure = UseAxiosSecure()
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        try {
            const result = await signIn(email, password)

            // console.log(result.user)
            const { data } = await axiosSecure.post(`/jwt`,
                {
                    email: result?.user?.email
                },
            )
            // console.log(data)

            // NAvigate after login
            navigate(location?.state ? location.state : '/')
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleGoogleLogin = async () => {
        console.log("YES");
        try {
            const result = await handleGoogleSignIn()

            // console.log(result.user)
            const { data } = await axiosSecure.post(`/jwt`,
                {
                    email: result?.user?.email
                },

            )

            // NAvigate after login
            navigate(location?.state ? location.state : '/')
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div
                className="flex flex-col md:flex-row h-screen
             ">
                <div className='flex-1 hidden md:block'>
                    <div className="h-full bg-cover bg-center bg-no-repeat bg-[url('/Images/lr.png')] 
                    text-center text-white space-y-4 font-Cormorrant
                    flex flex-col items-center justify-center
                    px-4">
                        <h2 className="text-6xl text-[#c09d73] lg:text-7xl md:text-5xl sm:text-4xl">Hey, There</h2>
                        <p className="text-2xl lg:text-3xl md:text-xl sm:text-lg">Welcome Back! Please Enter your details</p>
                    </div>


                </div>

                <div className=" font-Poppins
                 flex-1  shrink-0
                  max-w-lg ">

                    <h2 className='mx-10 border-b-4 border-[#c09d73] w-1/3 pb-4 md:pt-10 
                    text-xl md:text-2xl lg:text-3xl font-bold font-Cormorrant'>Login Now</h2>



                    <form
                        className="mx-10 pt-5"
                        onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#c09d73] uppercase text-white">Login</button>
                        </div>
                    </form>
                    <div className="px-10 pt-2 font-mono" >
                        <button
                            onClick={handleGoogleLogin}
                            className="py-2 flex items-center justify-center gap-5  border-2 border-[#c09d73] hover:bg-[#c09d73] hover:text-white rounded-lg w-full">

                            <img

                                className=" w-10 h-10"
                                src="/Images/g_logo.png" alt="" />
                            <span className="font-bold">Login With Google</span>

                        </button>
                    </div>

                    <div className='text-center pt-5'>
                        <p>New to BD Handicrafts? Please <Link className='text-[#c09d73] font-bold' to={'/register'}>Register</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;