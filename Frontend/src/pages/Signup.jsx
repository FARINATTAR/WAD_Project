import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || new URLSearchParams(location.search).get('redirect') || "/";
    const API_URL = import.meta.env.VITE_API_URL || "https://weexist99.onrender.com";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({ ...prev, [name]: value }));
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = signupInfo;

        if (!name || !email || !password || !confirmPassword) {
            return toast.error('All fields are required.', { position: 'top-right', autoClose: 3000 });
        }

        if (password !== confirmPassword) {
            return toast.error('Passwords do not match.', { position: 'top-right', autoClose: 3000 });
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const result = await response.json();
            console.log(result);

            if (result.success) {
                toast.success(result.message || 'Signup successful!', { position: 'top-right', autoClose: 2000 });
                // const searchParams = new URLSearchParams(location.search);
                const redirectPath = location.state?.from || new URLSearchParams(location.search).get('redirect') || '/home';
                // login({ name, email }); // Log in the user after successful signup
                setTimeout(() => {
                    navigate(`/login?redirect=${encodeURIComponent(redirectPath)}`, {
                        state: { from: redirectPath }
                    });
                });
            } else {
                toast.error(result.error?.details?.[0]?.message || result.message, { position: 'top-right', autoClose: 3000 });
            }
        } catch (err) {
            toast.error(err.message || 'Something went wrong.', { position: 'top-right', autoClose: 3000 });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
                <h1 className="text-3xl font-bold text-gray-700 text-center font-handwriting mb-6">Sign Up</h1>
                <form onSubmit={handleSignup} className="space-y-5 font-poppins">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={signupInfo.name}
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={signupInfo.email}
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold text-gray-700">Set Password</label>
                        <div className="relative">
                            <input
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create a password"
                                value={signupInfo.password}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('password')}
                                className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                         <label htmlFor="confirmPassword" className="text-lg font-semibold text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                onChange={handleChange}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                 value={signupInfo.confirmPassword}
                                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                             <button
                                 type="button"
                                 onClick={() => togglePasswordVisibility('confirm')}
                                 className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                           >
                                 {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                             </button>
                         </div>
                     </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 
                        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
                    >
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <p className="text-center text-gray-600 mt-3">
                        Already have an account?{' '}
                        <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold ml-1">Login</Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Signup;