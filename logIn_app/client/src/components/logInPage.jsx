import React from "react";
import { Link } from "react-router-dom";

export default function logInPage() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div>
                    <div className="title flex flex-col items-center">
                        <h1 className="text-5xl font-bold"><span className="text-red-600">H</span>ello</h1>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-5">Explore More by Connecting with Us...!</span>
                    </div>
                    <form action="">
                    <div className="mt-4">
                        <input type="text" placeholder="Email" className="w-full px-3 py-2 text-gray-700 rounded-lg" />
                        <input type="password" placeholder="Password" className="w-full px-3 py-2 text-gray-700 rounded-lg mt-4" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Sign In
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}