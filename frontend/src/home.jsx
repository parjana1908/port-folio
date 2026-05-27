import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email.png";
import profile from "./assets/profile.jpeg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";

function Home() {

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === "/about") {
            document.getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
        }

        if (location.pathname === "/skills") {
            document.getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
        }

        if (location.pathname === "/home") {
            document.getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
        }
        if (location.pathname == "/contact"){
          document.getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })
        }

    }, [location]);
      return (
    <>
      <div id="home" className="bg-sky-900 flex items-center pt-20 justify-center">

        <div className="text-white flex justify-around items-center flex-wrap gap-10 p-10 w-full">

          {/* Left Section */}
          <div className="flex flex-col gap-2">

            <p className="font-medium">
              Hello, I am
            </p>

            <h1 className="font-bold text-2xl">
              Parjana Begam J
            </h1>

            <p className="font-medium  pt-2">
              MERN Stack Developer
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 pt-5">

              <a
                href="https://www.linkedin.com/in/parjana08/"   
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-[5vh] h-[5vh] hover:scale-110 duration-300 cursor-pointer"
                />
              </a>

              <a
                href="https://github.com/parjana1908"
                
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-[5vh] h-[5vh] hover:scale-110 duration-300 cursor-pointer"
                />
              </a>

              <a href="mailto:parjanabegam08@gmail.com">
                <img
                  src={email}
                  alt="Email"
                  className="w-[5vh] h-[5vh]     hover:scale-110 duration-300 cursor-pointer"
                />
              </a>

            </div>
          </div>

          {/* Right Section */}
          <div>
            <img
              src={profile}
              alt="Profile"
              className="w-[30vh] h-[30vh] rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>

        </div>
      </div>
      

       <div id="about">
                <About />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="contact">
              <Contact />
            </div>
            <Footer />

    </>
  );
}

export default Home;