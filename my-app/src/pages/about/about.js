import React, { useEffect } from "react";
import "./about.css";
import AboutImage from "../../assets/image/Untitled design (15).png";
import AboutImage2 from "../../assets/image/about_pic-2.png";
import IntroImage from "../../assets/image/icecream-about-us.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import { FaHandHolding, FaHeadset, FaMap } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Nav />
      <section className="home-about" id="home-about">
      <h1 className="heading-about-head"> <span>About</span> us</h1>

        <div className="home-row">
        
          <div className="home-content left-about">
            <h3>why we are better?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates consequuntur, dolorem, delectus dolorum maxime id dicta
              soluta vel in totam eos velit expedita similique et provident?
              Illum quam vel ipsam. Voluptates repudiandae, vel, repellendus
              nulla consectetur hic et, doloribus cum numquam explicabo
              temporibus culpa eos aliquam facere similique illum. Aperiam saepe
              eius tempore natus, ad quo consectetur sunt in laborum. Iusto
              aliquid commodi ex necessitatibus, praesentium, officia ab modi
              numquam consequuntur aspernatur unde recusandae, quidem alias
              suscipit in aut libero incidunt quaerat ea sit saepe error
              sapiente. Reiciendis, earum eius! Quia ad debitis officiis
              voluptatum recusandae consequatur! Ad ea ut in corrupti sed
              delectus iusto dolorem at perferendis aliquam, facilis
              necessitatibus explicabo vero cumque totam quas. Nihil sed
              accusamus magnam?
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            numquam nulla iusto corporis dolor commodi libero, vitae obcaecati
            optio rerum ab culpa nesciunt, earum mollitia quasi ipsam non.
            Aliquid, iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            rerum, delectus voluptate aliquam quaerat iusto repellendus error
            nulla ab atque.
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
