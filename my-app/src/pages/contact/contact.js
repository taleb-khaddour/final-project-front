import React, { useState } from "react";
import {  FaEnvelope, FaPhone, FaRegClock } from "react-icons/fa";
import "./contact.css";
import contact_image from "../../assets/image/contact.gif";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import Map from "../../components/Map/map.js"
import { Link } from "react-router-dom";


const ContactUs = () => {
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
                <p>mon - thurs: 08:00 am to 12:30 pm</p>
                <p>friday: 09:00 am to 12:00 pm</p>
            </div>

            <div className="contact-icons">
                <FaEnvelope color="#e9768f" size={40} />
                <h3 className="heading-icons">email</h3>
                <p>ninjashub4@gmail.com</p>
                <p>ninjashub4@gmail.com</p>
            </div>

            <div className="contact-icons">
                <FaPhone color="#e9768f" size={40}/>
                <h3 className="heading-icons">phone number</h3>
                <p>+123-456-7890</p>
                <p>+123-456-7890</p>
            </div>

        </div>



        {/* start map */}
        <Map />
        {/* end map */}

        <div className="contact-row">
          <div className="contact-image">
            <img src={contact_image} alt="" />
          </div>
          <form action="">
            <h3>send us a message</h3>
            <input type="text" placeholder="name" className="contact-box" onChange={handleNameChange}/>
            <input type="email" placeholder="email" className="contact-box" onChange={handleEmailChange}/>
            <textarea
              placeholder="message"
              className="contact-box"
              cols="30"
              rows="10"
              onChange={handleMessageChange}
            ></textarea>
            <Link to="#" className="contact-btn" onClick={handleSubmit}>
              <span className="text text-2" aria-hidden="true" >
                send message
              </span>
            </Link>
          </form> 
          
        </div>
      </section>
      <br/>

      <Footer />
    </>
  );
};

export default ContactUs;
