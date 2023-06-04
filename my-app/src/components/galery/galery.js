import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./galery.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Galery = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://idecream-backend.onrender.com/api/subCategory/`)
      .then((response) => {
        setData(response.data);
        setCategories(response.data.category_id.name);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="gallery-section" id="gallery">
      <section className="gallery" id="gallery">
        <h1 className="heading">Our gallery</h1>

        <div className="gallery-container">
          {data.length > 0 &&
            data.map((item) => (
              <Link to={`/products/${item._id}`} className="box">
                <img src={item.image} alt="" />
                <div className="icon ">
                  <i>
                    <div className="title-gallery">
                      <h6>{item.name}</h6>
                    </div>
                    <FaPlus className="rotate-center" />
                  </i>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Galery;
