import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import logo from "../../assets/image/Logo-final.png";

function Navbar1() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleClick = () => setClick(!click);

  return (
    <div className={scroll ? "header header-bg" : "header"}>
      <div className="logo-form">
      <Link to="/">
  <img src={logo} className="logo"  />
  </Link>
   
</div>




      <ul className={click ? "nav-menu active" : "nav-menu"}>
                <div >
                <img src={logo} className="logo-active"/>  
                </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://icecream-dashboard.vercel.app/"><FaUser width={20}/></a>
        </li>
       
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar1;
