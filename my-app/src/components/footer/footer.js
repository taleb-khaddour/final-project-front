import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";


const footer = () => {
  return (
    

<footer className="footer">
<div className="footer-container">
  <div className="row">
    <div className="footer-col">
      <h4>company</h4>
      <ul>
        <li><Link to="/about">about us</Link></li>
        <li><Link to="#">our services</Link></li>
        <li><Link to="#">privacy policy</Link></li>
        <li><Link to="/suggestion">your suggestion</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">about us</a></li>
        <li><a href="/contact">contact us</a></li>
        <li><a href="/">gallery</a></li>
        <li><a href="/product">Menu</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>online shop</h4>
      <ul>
        <li><Link to="/product">Ice cream</Link></li>
        <li><Link to="/product">Cold drink</Link></li>
        <li><Link to="/product">Hot drink</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>follow us</h4>
      <div className="social-links">
        <Link to="#"><FaFacebook
               size={30}
               style={{ color: "#000" ,marginTop:"6px"}}
              /></Link>
        <Link to="#"><FaInstagram
               size={30}
               style={{ color: "#000" ,marginTop:"6px"}}
              /></Link>
        <Link to="#"> <FaTwitter
                size={30}
                style={{ color: "#000" ,marginTop:"6px"}}
              /></Link>
      </div>
    </div>
  </div>
</div>
</footer>
  );
};

export default footer;
