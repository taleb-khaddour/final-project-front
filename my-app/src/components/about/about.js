import React, { useEffect } from 'react';
import "./about.css";
import AboutImage from "../../assets/image/Untitled design (15).png";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {



useEffect(()=>{
    Aos.init();
},[]);

  return (
    
    <section className="about" id="about" >

        <h1 className="heading-about-head"> <span>About</span> us</h1>

        <div className="row">

            <div className="image" >
                <img src={AboutImage} alt="" />
            </div>

            <div className="content" >
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur, dolorem, delectus dolorum maxime id dicta soluta vel in totam eos velit expedita similique et provident? Illum quam vel ipsam.
                Voluptates repudiandae, vel, repellendus nulla consectetur hic et, doloribus cum numquam explicabo temporibus culpa eos aliquam facere similique illum. Aperiam saepe eius tempore natus, ad quo consectetur sunt in laborum.
                Iusto aliquid commodi ex necessitatibus, praesentium, officia ab modi numquam consequuntur aspernatur unde recusandae, quidem alias suscipit in aut libero incidunt quaerat ea sit saepe error sapiente. Reiciendis, earum eius!
                Quia ad debitis officiis voluptatum recusandae consequatur! Ad ea ut in corrupti sed delectus iusto dolorem at perferendis aliquam, facilis necessitatibus explicabo vero cumque totam quas. Nihil sed accusamus magnam?</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

    </section>
  )
}

export default About