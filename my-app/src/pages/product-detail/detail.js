import React, { useEffect, useState } from "react";
import "./detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/loading.js";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";

const Detail = () => {
  const [data, setData] = useState(null);
  // const[id,setId] = useState(null)

  let { id } = useParams();
  useEffect(() => {
    getData(id);
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:4001/api/subCategory/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!data) return <Loading />;
  return (
    <>
      <Navbar />
      <section className="order" id="order">
        <h1 className="heading">
          <span>PRODUCT</span> DETAIL
        </h1>

        <div className="row">
          <div className="image">
            <img
              src={`http://localhost:4001/${data.image}`}
              alt=""
            />
          </div>

          <div className="content">
            <h3>{data.name}</h3>
            <span>Description: </span>
            <p>{data.description}</p>
            <span>Price:</span>
            <h4>{data.price} $</h4>
            <span>Size:</span> <h6>{data.size} </h6>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detail;
