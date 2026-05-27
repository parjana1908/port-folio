import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./footer";

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    // Fetch Blogs
    const fetchBlogs = () => {
        axios
            .get("http://localhost:5000/api/blogs")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log("Error fetching blogs", err);
            });
    };

    // Load blogs when page opens
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    // Handle Like
    const handleLike = async (blog_id) => {
        try {

            const response = await axios.patch(
                `http://localhost:5000/api/blogs/like/${blog_id}`
            );

            if (response.status === 200) {
                fetchBlogs();
            }

        } catch (error) {
            console.log("Error liking blog", error);
        }
    };

    // Add Blog
    const handleNewBlogSubmit = (event) => {

        event.preventDefault();

        const today = new Date();

        const date = today.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const likes = 0;

        axios.post("http://localhost:5000/api/blogs", {
            newTitle,
            date,
            newContent,
            likes,
        })
        .then(() => {

            fetchBlogs();

            setNewTitle("");
            setNewContent("");

        })
        .catch((err) => {
            console.log("Error adding blog", err);
        });
    };

    return (
        <>
            <div className="bg-sky-900 min-h-screen py-20 px-6">

                {/* Heading */}
                <h1 className="text-center text-5xl font-bold text-white mb-14">
                    Latest <span className="text-sky-400">Blogs</span> 📚
                </h1>

                {/* Blog Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto mb-14">

                    <form
                        onSubmit={handleNewBlogSubmit}
                        className="flex flex-col gap-5"
                    >

                        <input
                            type="text"
                            placeholder="Enter Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        />

                        <textarea
                            placeholder="Write your blog content..."
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            rows="5"
                            className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-3 rounded-lg transition duration-300"
                        >
                            Add Blog
                        </button>

                    </form>

                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {blogs.map((blog) => (

                        <div
                            key={blog._id}
                            className="bg-white rounded-2xl shadow-xl p-6"
                        >

                            <h2 className="text-2xl font-bold text-sky-900 mb-2">
                                {blog.newTitle}
                            </h2>

                            <p className="text-gray-400 text-sm mb-4">
                                {blog.date}
                            </p>

                            <p className="text-gray-700 leading-7 mb-6">
                                {blog.newContent}
                            </p>

                            <div className="flex items-center gap-3">

                                <button
                                    onClick={() => handleLike(blog._id)}
                                    className="bg-sky-900 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition duration-300"
                                >
                                    Like 👍
                                </button>

                                <span className="font-medium text-gray-700">
                                    {blog.likes} Likes
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Blogs;