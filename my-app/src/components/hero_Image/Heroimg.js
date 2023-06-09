import "./Heroimg.css";
import React from "react";
import home from "../../assets/image/home.png";

const Heroimg = () => {


 





  return (
    <div className="hero">
      <section className="home" id="home" >
        <div className="hero-content fade-in-left" >
          <h3>
            Welcome to <span>Bilal's iceCream </span>
          </h3>
          <p>
            Welcome to Bilal's Ice Cream, where flavor meets perfection. Indulge
            in our exquisite creations crafted with the finest ingredients.
              Experience a symphony of taste that will leave you craving for more.{" "}
          </p>
          <br />
          <a href="#about" className="btn">
            Get Started
          </a>
        </div>

        <div className="hero-image fade-in-right">
          <img src={home} alt=""/>
        </div>

        <div className="custom-shape-divider-bottom-1684324473">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Heroimg;
