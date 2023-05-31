import React from 'react';
import "./home.css";
import Nav from "../../components/Navbar/Navbar.js"
import Heroimg from '../../components/hero_Image/Heroimg';
import Footer from '../../components/footer/footer.js';
import Galery from '../../components/galery/galery.js';
import Review from "../../components/review/review.js";
import AboutComponents from "../../components/about/about.js";
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
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tempora assumenda, debitis aliquid nesciunt maiores quas! Magni cumque quaerat saepe!</p>
      <a href="book.php" className="btn">explore now </a>
   </div>
   
</section>
  <Footer />
</div>
  );
};
  


export default home
