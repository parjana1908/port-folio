import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from "./config/firebase";
function Signup() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((res)=>{
            console.log(res)
        }).catch(()=>{
            console.log("Failed")
        })

        console.log("User registered:", {
            email,
            password
        });

        navigate("/login");
    };

    return (
        <>
            <div className="min-h-screen bg-sky-900 flex justify-center items-center px-4">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl"
                >

                    <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
                        Signup
                    </h1>

                    <div className="mb-5">

                        <label className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 
                            focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 
                            focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block text-gray-700 font-medium mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 
                            focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />

                        {error && (
                            <p className="text-red-500 text-sm mt-2">
                                {error}
                            </p>
                        )}

                    </div>

                    <p
                        className="text-blue-600 cursor-pointer mb-5 hover:underline"
                        onClick={() => navigate("/login")}
                    >
                        Already have an account? Login here
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-sky-900 hover:bg-sky-700 
                        text-white font-bold py-3 rounded-lg 
                        transition duration-300"
                    >
                        Signup
                    </button>

                </form>

            </div>
        </>
    );
}

export default Signup;