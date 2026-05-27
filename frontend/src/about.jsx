
function About() {
    return (
        <>
            <div  className="bg-sky-900 text-white min-h-screen flex items-center px-6 py-6">

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Left Side */}
                    <div className="md:w-1/3 w-full">
                        <h1 className="text-5xl font-bold text-left">
                            About Me
                        </h1>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-2/3 w-full flex flex-col items-center md:items-end">

                        <p className="text-sm md:text-lg leading-9 font-medium  max-w-3xl">
                            Aspiring Full Stack Developer with strong knowledge of Java,
                            MySQL, HTML, CSS, and JavaScript. Skilled in developing
                            simple and responsive web applications through academic
                            projects and continuous practice. Passionate about software
                            development, problem solving, and learning new technologies.
                            Seeking an opportunity to start a career in the IT industry,
                            contribute to real-world projects, enhance technical skills,
                            and grow continuously as a professional developer in a
                            dynamic environment.
                        </p>

                        <div className="mt-10 flex justify-center w-full">
                            <a
                                href="/RESUME.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="px-8 py-3 rounded-full bg-blue-950 hover:bg-blue-800 
            transition duration-300 font-bold shadow-lg cursor-pointer"
                                >
                                    Open CV
                                </button>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default About;