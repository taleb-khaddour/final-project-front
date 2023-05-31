import React from 'react';
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/footer';
import "./product.css";
import { FaIceCream, FaStar, FaStarHalf } from 'react-icons/fa';
import { useState ,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading.js';


function Product() {

   const[data ,setData] = useState(null)

   useEffect(()=>{
     getData()
   },[])
   
   const getData = ()=>{
    axios.get(`https://idecream-backend.onrender.com/api/subCategory/`).then((response)=>{
          console.log(response.data)
          setData(response.data);
    }).catch((err)=>{
      console.error(err);
    })
   }
  
  if(!data) return <Loading />;
  return (
    <div>
      <Nav />
      <section className="courses" id="courses">

<h1 className="heading">OUR MENU</h1>

<div className="box-container">
   { data.map((item)=>{ 
   
   return <div className="box">
        <div className="image shine">
          <Link to={`/products/${item._id}`}>
            <img src={`https://idecream-backend.onrender.com/${item.image}`} alt=""/>
            </Link>
            <h3>Best</h3>
        </div>
        <div className="content">
            <h4>{item.price}</h4>
            {/* <h3>{item.category_id.name}</h3> */}
              {console.log(item.size)}
            
            <p className='size'>{item.size}</p>
            <div className="stars">
                <i><FaStar/></i>
                <i><FaStar/></i>
                <i><FaStar/></i>
                <i><FaStar/></i>
                <i><FaStarHalf/></i>
            </div>
            <div className="icons">
                <span><i><FaIceCream /></i></span>
               <h3>{item.name}</h3>
            </div>
        </div>
    </div>})}
</div>

</section>
<Footer />  
      
    </div>
  )
}

export default Product
