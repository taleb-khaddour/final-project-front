import React from 'react';
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/footer';
import "./product.css";
import image from "../../assets/image/icecream_image1.jpg"
import { FaIceCream, FaStar, FaStarHalf } from 'react-icons/fa';
import { useState ,useEffect } from 'react';
import axios from "axios"

function Product() {

   const[data ,setData] = useState(null)

   useEffect(()=>{
     getData()
   },[])
   
   const getData = ()=>{
    axios.get(`http://localhost:4001/api/subCategory/`).then((response)=>{
          console.log(response.data.docs)
          setData(response.data.docs);
    }).catch((err)=>{
      console.error(err);
    })
   }
  
  if(!data) return "waitt"
  return (
    <div>
      <Nav />
      <section class="courses" id="courses">

<h1 class="heading">OUR MENU</h1>

<div class="box-container">

   { data.map((item)=>{ 
   
   return <div class="box">
        <div class="image shine">
            <img src={image} alt=""/>
            <h3>Best</h3>
        </div>
        <div class="content">
            <h4>{item.price}</h4>
            <h3>{item.category_id.name}</h3>

            
            <p>Xl</p>
            <div class="stars">
                <i><FaStar/></i>
                <i><FaStar/></i>
                <i><FaStar/></i>
                <i><FaStar/></i>
                <i><FaStarHalf/></i>
            </div>
            <div class="icons">
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
