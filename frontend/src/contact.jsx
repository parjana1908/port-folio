import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  async function handleSend() {

    if (!name || !mail || !msg) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {

      const response = await fetch("https://port-folio-uhjz.onrender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email: mail,
          message: msg
        })
      });

      const data = await response.json();

      if (response.ok) {

        setStatus("success");

        setName("");
        setMail("");
        setMsg("");

      } else {

        console.error(data.error);
        setStatus("error");

      }

    } catch (err) {

      console.error(err);
      setStatus("error");

    }
  }

  return (

    <div className="min-h-screen bg-sky-900 flex justify-center items-center px-4 py-10">

      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-3xl shadow-2xl p-6 md:p-10">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-sky-900 mb-10">
          Contact Form
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-6">

          {/* Name */}
          <div className="flex flex-col gap-2">

            <label className="text-sky-900 font-semibold text-base md:text-lg">
              Enter Your Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">

            <label className="text-sky-900 font-semibold text-base md:text-lg">
              Enter Your Email
            </label>

            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
              placeholder="Enter your mail id"
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">

            <label className="text-sky-900 font-semibold text-base md:text-lg">
              Message
            </label>

            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type Your Message..."
              rows="5"
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            ></textarea>

          </div>

          {/* Status */}
          {status === "success" && (
            <p className="text-green-600 font-medium text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500 font-medium text-center">
              ❌ Please fill all fields and try again.
            </p>
          )}

          {status === "sending" && (
            <p className="text-sky-600 font-medium text-center">
              ⏳ Sending...
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleSend}
            disabled={status === "sending"}
            className="w-full bg-sky-900 hover:bg-sky-700
            text-white font-bold py-3 rounded-xl
            transition duration-300 disabled:opacity-50"
          >
            Send
          </button>

        </div>

      </div>

    </div>

  );
}

export default Contact;
