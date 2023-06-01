import React, { useEffect } from "react";
import "./about.css";
import AboutImage from "../../assets/image/Untitled design (15).png";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="about" id="about">
      <h1 className="heading-about-head">
        {" "}
        <span>About</span> us
      </h1>

      <div className="row">
        <div className="image">
          <img src={AboutImage} alt="" />
        </div>

        <div className="content ">
          <h3>Crafting Delicious Ice Cream Delights</h3>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Welcome to Bilal's Ice Cream   </b>, where we take immense pride in our
            craft of creating delicious ice cream delights. With a dedication to
            quality and a passion for flavor, we meticulously handcraft each
            scoop to deliver an unforgettable experience. Using only the finest
            ingredients sourced from trusted suppliers, we strive to create a
            symphony of taste and texture in every bite.
          </p>
         
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From timeless classics to exciting and innovative flavors, our menu
            offers a diverse selection to please every ice cream enthusiast.
            Whether you're craving the velvety richness of chocolate, the
            refreshing tang of fruit sorbets, or the enticing combination of
            unique ingredients, our creations are sure to satisfy your taste
            buds. At Bilal's Ice Cream, we believe that every scoop is an
            opportunity to create moments of pure joy. Visit us and indulge in
            our handcrafted delights that are made with love and designed to
            bring a smile to your face.
          </p>

          <Link to="/about" className="btn">
            read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
