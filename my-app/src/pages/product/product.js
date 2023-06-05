import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/footer';
import "./product.css";
import { FaIceCream, FaStar, FaStarHalf, FaSearch } from 'react-icons/fa';
import axios from "axios";
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading.js';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount.jsx';

function Product() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://idecream-backend.onrender.com/api/subCategory/`).then((response) => {
      setData(response.data);
      setCategories(response.data.category_id.name);
    }).catch((err) => {
      console.error(err);
    });
  };

  const filterData = () => {
    if (!search) {
      return data;
    }
    return data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  if (!data) return <Loading />;

  return (
    <div>
      <Nav />
      <ScrollToTopOnMount />

      <section className="courses" id="courses">
        <h1 className="heading">OUR MENU</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="box-container">
          {filterData().map((item) => (
            <div className="box" key={item._id}>
              <div className="image shine">
                <Link to={`/products/${item._id}`}>
                  {/* <img src={`https://idecream-backend.onrender.com/${item.image}`} alt=""/> */}
                  <img src={item.image} alt={item.name} />
                </Link>
                <h3>Best</h3>
              </div>
              <div className="content">
                <h4>{item.price}$</h4>
                <h3>{item.category_id.name}</h3>
                <p className='size'>{item.size}</p>
                <div className="stars">
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStarHalf /></i>
                </div>
                <div className="icons">
                  <span><i><FaIceCream /></i></span>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
