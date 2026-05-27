import java from "./assets/java.png";
import html from "./assets/html.png";
import css from "./assets/css-3.png";
import javascript from "./assets/java-script.png";
import react from "./assets/react.png";
import nodejs from "./assets/node js.png";
import mysql from "./assets/mysql-database.png";
import mongodb from "./assets/MongoDB.png";
import git from "./assets/Git.png";
import github from "./assets/github.png";

function Skills() {
    return (
        <>
            <div  className="bg-sky-900 text-white py-10 px-6">

                <h1 className="font-bold text-5xl text-center mb-10">
                    Skills
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">

    {/* Java */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={java}
            alt="Java"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            Java
        </h1>

    </div>

    {/* HTML */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={html}
            alt="HTML"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            HTML
        </h1>

    </div>

    {/* CSS */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={css}
            alt="CSS"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            CSS
        </h1>

    </div>

    {/* JavaScript */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={javascript}
            alt="JavaScript"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            JavaScript
        </h1>

    </div>

    {/* React */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={react}
            alt="React"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            React
        </h1>

    </div>

    {/* Node JS */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={nodejs}
            alt="Node JS"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            Node JS
        </h1>

    </div>

    {/* MySQL */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={mysql}
            alt="MySQL"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            MySQL
        </h1>

    </div>

    {/* MongoDB */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={mongodb}
            alt="MongoDB"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            MongoDB
        </h1>

    </div>

    {/* Git */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={git}
            alt="Git"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            Git
        </h1>

    </div>

    {/* GitHub */}
    <div className="bg-sky-950 rounded-2xl py-6 px-3
    flex flex-col items-center justify-center gap-4
    shadow-lg hover:scale-105 transition duration-300">

        <img
            src={github}
            alt="GitHub"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />

        <h1 className="text-sm md:text-lg font-medium text-center break-words">
            GitHub
        </h1>

    </div>

</div>
            </div>
        </>
    );
}

export default Skills;