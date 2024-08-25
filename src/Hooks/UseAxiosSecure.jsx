import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseAuth from './UseAuth';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const UseAxiosSecure = () => {
    const { logout } = UseAuth()
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(
        res => {
            return res;
        },
        async error => {
            // console.log(err.response)
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logout();
                navigate('/login');
            }

            return Promise.reject(error)
        }

    )

    // axios.interceptors.request

    return axiosSecure;
};

export default UseAxiosSecure;