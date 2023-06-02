import React, { useRef, useState } from "react";
import {  FaEnvelope, FaPhone, FaRegClock } from "react-icons/fa";
import "./contact.css";
import contact_image from "../../assets/image/contact.gif";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import { Link } from "react-router-dom";
import Map from "../../components/map/map.js"
import emailjs from '@emailjs/browser';
import {ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const ContactUs = () => {
  


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lwfleep', 'template_93ljecm', form.current, 'M4dtM0rT5BvMIOwGo')
      .then((result) => {
        toast.success('                                                                                                                                    your email is send,thank you !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
            
          
      }, (error) => {
          toast.error("Email not sent " + error.text);
      });
  };





  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleNameChange = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const handleMessageChange = (event) => {
    setState({ ...state, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      name: "",
      email: "",
      message: "",
    })
    // Code to handle form submission would go here
  };

  return (
    <>
      <Nav />
      <br/>
        
    
      <section className="contact" id="contact">
        <h1 className="heading">contact us</h1>
        <div className="icons-container">

            <div className="contact-icons">
                <FaRegClock color="#e9768f" size={40} />
                <h3 className="heading-icons">opening hours :</h3>
                <p>every day : 08:00 am to 12:30 am</p>
                <p>friday: 09:00 am to 11:00 pm </p>
            </div>

            <div className="contact-icons">
                <FaEnvelope color="#e9768f" size={40} />
                <h3 className="heading-icons">email</h3>
                <p>alisbilal1998@gmail.com</p>
                
            </div>

            <div className="contact-icons">
                <FaPhone color="#e9768f" size={40}/>
                <h3 className="heading-icons">phone number</h3>
                <p>+961 79 143 503</p>
               
            </div>

        </div>



        {/* start map */}
        {/* <Map /> */}
        <Map />
        {/* end map */}

        <div className="contact-row">
          <div className="contact-image" id="contact">
            <img src={contact_image} alt="" />
          </div>
          <form action="" ref={form} onSubmit={sendEmail}>
            <h3>send us a message</h3>
            <input type="text" placeholder="name" className="contact-box" onChange={handleNameChange} required name="from_name" />
            <input type="email" placeholder="email" className="contact-box" onChange={handleEmailChange} required name="from_email"/>
            <textarea
              placeholder="message"
              className="contact-box"
              name="message"
              cols="30"
              rows="10"
              required
              onChange={handleMessageChange}
            ></textarea>
            <Link to="#" className="contact-btn" onClick={sendEmail}>
              <span className="text text-2" aria-hidden="true" >
                send message
              </span>
            </Link>
            <ToastContainer />
          </form> 
          
        </div>
      </section>
      <br/>

      <Footer />
    </>
  );
};

export default ContactUs;
