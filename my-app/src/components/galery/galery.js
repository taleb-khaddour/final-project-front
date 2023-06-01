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
import "./galery.css";

const Galery = () => {






  return (
    <div className="gallery-section"  id="gallery">
      {" "}
      <section
        className="gallery"
        id="gallery"
        
      >
        <h1 className="heading">Our gallery</h1>

        <div className="gallery-container" >
          <a href={gallery1} className="box">
            <img src={gallery1} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery2} className="box">
            <img src={gallery2} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery3} className="box">
            <img src={gallery3} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery4} className="box">
            <img src={gallery4} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery5} className="box">
            <img src={gallery5} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery6} className="box">
            <img src={gallery6} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery7} className="box">
            <img src={gallery7} alt="" />
            <div className="icon">
              {" "}
              <i>
                <FaPlus />
              </i>{" "}
            </div>
          </a>

          <a href={gallery8} className="box">
            <img src={gallery8} alt="" />
            <div className="icon">
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
