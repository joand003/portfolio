"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleOnClick = async (e) => {
        e.preventDefault();
        let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (email == "") {
            setEmailError("Please enter an email address");
            return;
        }
        if (!email.match(mailformat)) {
            setEmailError("Please enter a valid email address");
            return;
        }
        if (name == "") {
            setNameError("Please enter your name");
            return;
        }
        if (message == "") {
            setMessageError("Please enter a message");
            return;
        }

        try {
            await axios.post("/api/email", { name, email, message });
        } catch (error) {
            alert(
                "There was an error sending your message. Please try again or email me at joshua.andersland@gmail.com"
            );
        }
        setEmail("");
        setName("");
        setMessage("");
        setEmailError("");
        setNameError("");
        setMessageError("");
        alert("Message sent successfully!");
    };

    return (
        <div id="Contact" className="w-full">
            <div className="py-5 my-12 flex flex-col items-center">
            <div className="border border-r-2 border-gray-400 w-fit flex flex-col justify-center font-bold">
                <div>
                    <h1 className="display-4 text-center p-5">Contact Me</h1>
                    <p className="text-center px-5 pt-5">
                        Please feel free to fill out the form below to get a
                        hold of me.
                    </p>
                </div>
                <form className="p-5">
                    <div className="mb-3 flex flex-col items-center">
                        <div className="w-full">
                            <label htmlFor="exampleInputName" className="text-teal-300">
                                Name
                            </label>
                            <input
                                onChange={handleName}
                                type="text"
                                className="w-full"
                                id="exampleInputName"
                                aria-describedby="nameHelp"
                                placeholder="Type your name here"
                                value={name}
                            />
                            <div id="nameHelp" className="text-red-500">
                                {nameError}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 flex flex-col items-center">
                        <div className="w-full">
                            <label htmlFor="exampleInputEmail1" className="text-teal-300">
                                Email address
                            </label>
                            <input
                                onChange={handleEmail}
                                type="email"
                                className="w-full"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Type your email here"
                                value={email}
                            />
                            <div id="emailHelp" className="text-red-500">
                                {emailError}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 flex flex-col items-center">
                        <div className="w-full">
                            <label
                                htmlFor="exampleFormControlTextarea"
                                className="text-teal-300"
                            >
                                Message
                            </label>
                            <textarea
                                onChange={handleMessage}
                                className="w-full text-gray-950"
                                id="exampleFormControlTextarea"
                                rows="5"
                                aria-describedby="messagelHelp"
                                placeholder="Type your message here"
                                value={message}
                            ></textarea>
                            <div id="messagelHelp" className="text-red-500">
                                {messageError}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-fuchsia-500 w-full py-2"
                        onClick={handleOnClick}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
}
