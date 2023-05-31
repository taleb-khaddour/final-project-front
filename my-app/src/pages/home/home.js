import React from "react";
import "./home.css";
import Nav from "../../components/Navbar/Navbar.js";
import Heroimg from "../../components/hero_Image/Heroimg";
import Footer from "../../components/footer/footer.js";
import Galery from "../../components/galery/galery.js";
import Review from "../../components/review/review.js";
import AboutComponents from "../../components/about/about.js";
import { Link } from "react-router-dom";
function home() {
  return (
    <div>
      <Nav />
      <Heroimg />
      <AboutComponents />
      <Galery />
      <Review />
      <section className="home-offer">
        <div className="content">
          <h3>upto 25% off</h3>
          <p>
            Indulge in a delectable world of handcrafted ice cream delights at
            Bilal's Ice Cream and explore now to enjoy incredible savings on our
            irresistible flavors.
          </p>
          <br />
          <Link to="/product" className="btn">
            explore now{" "}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default home;
