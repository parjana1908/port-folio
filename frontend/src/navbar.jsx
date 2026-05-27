import { Link, useNavigate } from "react-router-dom";
import auth from "./config/firebase";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

function Navbar() {

    const navigate = useNavigate();

    const [login, setLogin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        auth.onAuthStateChanged(function (user) {

            if (user) {
                setLogin(true);
            }

            else {
                setLogin(false);
            }

        });

    }, []);

    function logout() {

        signOut(auth);
        setMenuOpen(false);

    }

    return (

        <div className="bg-sky-950 text-white fixed top-0 w-full z-50 shadow-lg">

            <div className="flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-extrabold">
                    PORTFOLIO
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-lg font-bold items-center">

                    <Link to="/home" className="hover:text-sky-300">
                        Home
                    </Link>

                    <Link to="/about" className="hover:text-sky-300">
                        About
                    </Link>

                    <Link to="/skills" className="hover:text-sky-300">
                        Skills
                    </Link>

                    <Link to="/contact" className="hover:text-sky-300">
                        Contact
                    </Link>

                    {
                        login ?

                            <button
                                onClick={logout}
                                className="bg-sky-400 text-black px-4 py-2 rounded-lg hover:bg-sky-600 transition"
                            >
                                Logout
                            </button>

                            :

                            <button
                                onClick={() => navigate("/login")}
                                className="bg-sky-400 text-black px-4 py-2 rounded-lg hover:bg-sky-600 transition"
                            >
                                Login
                            </button>

                    }

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {
                        menuOpen ? "✖" : "☰"
                    }

                </button>

            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (

                    <div className="md:hidden flex flex-col items-center gap-6 bg-sky-900 py-6 text-lg font-semibold">

                        <Link
                            to="/home"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-sky-300"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-sky-300"
                        >
                            About
                        </Link>

                        <Link
                            to="/skills"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-sky-300"
                        >
                            Skills
                        </Link>

                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-sky-300"
                        >
                            Contact
                        </Link>

                        {
                            login ?

                                <button
                                    onClick={logout}
                                    className="bg-sky-400 text-black px-4 py-2 rounded-lg hover:bg-sky-600 transition"
                                >
                                    Logout
                                </button>

                                :

                                <button
                                    onClick={() => {
                                        navigate("/login");
                                        setMenuOpen(false);
                                    }}
                                    className="bg-sky-400 text-black px-4 py-2 rounded-lg hover:bg-sky-600 transition"
                                >
                                    Login
                                </button>

                        }

                    </div>

                )
            }

        </div>

    );
}

export default Navbar;