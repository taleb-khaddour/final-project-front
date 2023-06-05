import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaRegClock } from "react-icons/fa";
import "./contact.css";
import contact_image from "../../assets/image/contact.gif";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Map from "../../components/map/map.js"

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message
    };

    axios.post('https://idecream-backend.onrender.com/api/contact/', data)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        toast.success('Your email has been sent. Thank you!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        toast.error('Error sending email. Please try again later.');
      });
  };

  return (
    <>
      <Nav />
      <br />

      <section className="contact" id="contact">
        <h1 className="heading">Contact Us</h1>
        <div className="icons-container">
          <div className="contact-icons">
            <FaRegClock color="#e9768f" size={40} />
            <h3 className="heading-icons">Opening Hours:</h3>
            <p>Every day: 08:00 am to 12:30 am</p>
            <p>Friday: 09:00 am to 11:00 pm</p>
          </div>

          <div className="contact-icons">
            <FaEnvelope color="#e9768f" size={40} />
            <h3 className="heading-icons">Email:</h3>
            <p>alisbilal1998@gmail.com</p>
          </div>

          <div className="contact-icons">
            <FaPhone color="#e9768f" size={40} />
            <h3 className="heading-icons">Phone Number:</h3>
            <p>+961 79 143 503</p>
          </div>
        </div>

        {/* start map */}
         <Map /> 
        {/* end map */}

        <div className="contact-row">
          <div className="contact-image" id="contact">
            <img src={contact_image} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <input
              type="text"
              placeholder="Name"
              className="contact-box"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-box"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <textarea
              placeholder="Message"
              className="contact-box"
              value={message}
              onChange={handleMessageChange}
              required
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </section>
      <br />

      <Footer />
    </>
  );
};

export default ContactUs;
