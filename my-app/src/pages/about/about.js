import React, { useEffect } from "react";
import "./about.css";
import AboutImage from "../../assets/image/Untitled design (15).png";
import AboutImage2 from "../../assets/image/about_pic-2.png";
import "aos/dist/aos.css";
import Aos from "aos";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import { FaHandHolding, FaHeadset, FaMap } from "react-icons/fa";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Nav />
      <ScrollToTopOnMount />
      <section className="home-about" id="home-about">
        <h1 className="heading-about-head">
          {" "}
          <span>About</span> us
        </h1>

        <div className="home-row">
          <div className="home-content left-about">
            <h3>why we are better?</h3>
            <p>
              Welcome to our ice cream portfolio! Indulge in a delightful
              collection of frozen treats that are sure to satisfy your
              cravings. Our carefully crafted flavors, combined with the highest
              quality ingredients, create a symphony of taste that will
              transport you to a world of pure bliss. From classic favorites
              like creamy vanilla and rich chocolate to exotic creations like
              tangy mango sorbet and refreshing mint chip, our portfolio
              showcases the diversity and creativity of our ice cream offerings.
              Each scoop is a work of art, meticulously handcrafted to
              perfection. Join us on this frozen journey and experience the
              unparalleled joy of our ice cream creations. Get ready to be
              whisked away into a world of pure icy delight!
            </p>
          </div>
          <div className="home-image">
            <img src={AboutImage2} alt="" />
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="image image-about-us">
          <img src={AboutImage} alt="" />
        </div>

        <div className="content">
          <h3>why choose us?</h3>
          <p>
            We prioritize quality above all else. Our ice creams are made with
            the finest ingredients, sourced from trusted suppliers. We use fresh
            dairy, real fruits, and premium chocolates to ensure each bite is a
            heavenly delight.
          </p>
          <p>
            Our ice creams are created with passion and expertise. Our skilled
            artisans meticulously handcraft each batch, paying attention to
            every detail to achieve the perfect balance of flavors and textures.
            We believe in the artistry of ice cream making and strive to deliver
            a truly exceptional product.
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fas fa-map">
                <FaMap />
              </i>
              <span>top destinations</span>
            </div>
            <div className="icons">
              <i>
                {" "}
                <FaHandHolding />
              </i>
              <span>affordable price</span>
            </div>
            <div className="icons">
              <i className="fas fa-headset">
                <FaHeadset />
              </i>
              <span>24/7 guide service</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
