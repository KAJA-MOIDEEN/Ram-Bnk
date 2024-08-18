import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/profile.png";
import '../styles/logInPage.css'; 

export default function LogInPage() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="glass">
                    <div className="title flex flex-col items-center">
                        <h1 className="text-4xl font-bold"><span className="text-red-600">H</span>ello<span className="text-red-600"></span></h1>
                        <span className="py-3 text-l w-2/3 text-center text-gray-500">Explore More by Connecting with Us</span>
                    </div>
                    <form className="py-1">
                        <div className="profile flex justify-center py-2">
                            <img src={Avatar} className="profile_img" alt="Profile Pic" />
                        </div>
                        <div className="mt-4 flex flex-col items-center">
                            <input type="text" placeholder="Email" className="textbox" />
                            <input type="password" placeholder="Password" className="textbox" />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="btn"> Sign In </button>
                        </div>
                        <div className="text-center py-4">
                            <span className="py-4 text-sm text-gray-500">Don't have an account? <Link className="text-blue-500 hover:text-red-600" to="/register">Sign Up</Link></span><br />
                            <span className="py-4 text-sm text-gray-500">Forgot Password? <Link className="text-red-500" to="/recoveryPage">Reset Password</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}