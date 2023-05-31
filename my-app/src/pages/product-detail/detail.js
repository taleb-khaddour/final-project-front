import React, { useEffect, useState } from 'react';
import "./detail.css";
import detail_image from "../../assets/images/gallery1.jpg"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../../components/loading/loading.js';
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js"


const Detail = () => {

    const[data ,setData] = useState(null)
    // const[id,setId] = useState(null)

    let{id}= useParams()
    

   useEffect(()=>{
     getData()
   },[])
   
   const getData = ()=>{
    axios.get(`https://idecream-backend.onrender.com/api/subCategory/${id}`).then((response)=>{
          console.log(response)
          setData(response.data.data);
    }).catch((err)=>{
      console.error(err);
    })
   }
  
  
   if(!data) return <Loading />;
  return (
    <>
    <Navbar />
    <section className="order" id="order">

    <h1  className="heading"><span>PRODUCT</span> DETAIL</h1>

    <div  className="row">
    <div  className="image">
            <img src={`https://idecream-backend.onrender.com/${data.image}`} alt=""/>
        </div>

        <div  className="content">
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <h4>{data.price} L.L</h4>
            <h6>{data.size} </h6>
            
        </div>

       

    </div>

</section>
<Footer />
</>
);
}; 


export default Detail;
