import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./watsapp.css";

const WhatsAppLink = ({ phoneNumber, message }) => {
    const formattedPhoneNumber = phoneNumber.replace(/\s/g, ''); // Remove spaces from the phone number
    const encodedMessage = encodeURIComponent(message); // Encode the message
  
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodedMessage}`;
  
    return (
        <Link to={whatsappUrl} target="_blank" className='Link' style={{ fontSize: '55px', position: 'fixed', bottom: '-1px', right: '10px', padding: '1px 1px 0px 0', margin: '0 0 10px 0' }}>
        <FaWhatsapp className='watsapp-icon' style={{ color: 'green', borderRadius: '5px' }} 
        />
      </Link>
      
      
    );
  };
  export default WhatsAppLink;