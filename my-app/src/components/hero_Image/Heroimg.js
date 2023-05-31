import "./Heroimg.css";
import React from 'react'
import IntroImage from "../../assets/image/icecream_image2.jpg"
import { Link } from "react-router-dom";
import home from "../../assets/image/home.png"
const Heroimg = () => {
  return (
    <div className="hero">
      {/* className="mask" */}
        {/* <div >
            <img className="intro-img" src={IntroImage}  alt="intro"/>
        </div>
        <div className="content">

        <p>Hi,are you ready to saw</p>
        <h1> Ice Cream website</h1>
        <div>
            {/* <Link to="/product" className="btn"> Product</Link> */}
            {/* <Link to="/contact" className="btn btn-light"> Product</Link>
        </div>

        </div> */} */
        {/* } */}



        <section className="home" id="home">

<div className="hero-content">
    <h3>welcome to <span>Bilal's iceCream </span></h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus aut, in maiores quidem </p>
    <a href="#" className="btn">learn more</a>
</div>

<div className="hero-image">
    <img src={home} alt=""/>
</div>

<div className="custom-shape-divider-bottom-1684324473">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>

</section>
        
    </div>
  )
}

export default Heroimg
