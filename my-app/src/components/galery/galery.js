import React, { useEffect } from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";
import { FaPlus } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";
import "./galery.css";

const Galery = () => {



useEffect(()=>{
    Aos.init();
},[]);


  return (
    <div className="gallery-section" data-aos="fade-right" data-aos-duration="3000">
      {" "}
      <section
        class="gallery"
        id="gallery"
        
      >
        <h1 class="heading">Our gallery</h1>

        <div class="gallery-container" >
          <a href={gallery1} class="box">
            <img src={gallery1} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery2} class="box">
            <img src={gallery2} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery3} class="box">
            <img src={gallery3} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery4} class="box">
            <img src={gallery4} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery5} class="box">
            <img src={gallery5} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery6} class="box">
            <img src={gallery6} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery7} class="box">
            <img src={gallery7} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery8} class="box">
            <img src={gallery8} alt="" />
            <div class="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Galery;
