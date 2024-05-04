"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [er, setEr] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fullname, email, message);

    const res = await fetch("api/admission", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    //console.log(msg, success)

    setEr(msg);
    setSuccess(success);
    console.log(er);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="test@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            type="message"
            id="message"
            placeholder="Type your message here..."
          />
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Submit
        </button>
      </form>

      <div className=" bg-slate-100 flex flex-col">
        {/* <div className="text-red-600 px-5 py-2">Error Message</div> */}

        {er &&
          er.map((e) => (
            <div
              className={`${
                success ? " text-green-800" : "text-red-600"
              }  px-5 py-2`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
};

export default ContactForm;
