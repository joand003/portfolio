"use client"
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
        setEmail(e.target.value)
      }
    
      const handleName = (e) => {
        setName(e.target.value)
      }
    
      const handleMessage = (e) => {
        setMessage(e.target.value)
      }
    
    
      const handleOnClick = async (e) => {
        e.preventDefault()
        let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (email == '') {
          setEmailError('Please enter an email address')
          return
        }
        if (!email.match(mailformat)) {
          setEmailError('Please enter a valid email address')
          return
        }
        if (name == '') {
          setNameError('Please enter your name')
          return
        }
        if (message == '') {
          setMessageError('Please enter a message')
          return
        }
    
        try {
          await axios.post('/api/contactmessage', { name, email, message })
        } catch (error) {
          alert('There was an error sending your message. Please try again or email me at joshua.andersland@gmail.com')
        }
      }

    return (
    <div>
        <div>
          <h1 className='display-4'>Contact Me</h1>
          <p>You can email me at joshua.andersland@gmail.com or fill out the form below.</p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input onChange={handleName} type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Type your name here'/>
            <div id="nameHelp" className="form-text">{nameError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your email here'/>
            <div id="emailHelp" className="form-text">{emailError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea" className="form-label">Message</label>
            <textarea onChange={handleMessage} className="form-control" id="exampleFormControlTextarea" rows="5" aria-describedby="messagelHelp" placeholder='Type your message here'></textarea>
            <div id="messagelHelp" className="form-text">{messageError}</div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Send Message</button>
        </form>
    </div>
    
    
    );
}
