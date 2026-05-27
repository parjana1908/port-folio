import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./config/firebase";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
          auth.onAuthStateChanged(function (user) {
            if (user) {
                navigate("/home")
            }
            else {
                
            }
        })
    }, []);

    const handleLogin = (e) => {

        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((res) => {
            navigate("/home");
        }).catch(() => {
            setErr("Username and Password are incorrect!")
        })

        


    };

    return (
        <>
            <div className="min-h-screen bg-sky-900 flex justify-center items-center px-4">

                <form
                    onSubmit={handleLogin}
                    className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl"
                >

                    <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
                        Login
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
                    <p className="text-red-600 cursor-pointer mb-5 hover:underline">
                        {err}
                    </p>

                    <p
                        className="text-blue-600 cursor-pointer mb-5 hover:underline"
                        onClick={() => navigate("/signup")}
                    >
                        New user? Register here
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-sky-900 hover:bg-sky-700 
                        text-white font-bold py-3 rounded-lg 
                        cursor-pointer
                        transition duration-300"
                    >
                        Login
                    </button>

                </form>

            </div>
        </>
    );
}

export default Login;