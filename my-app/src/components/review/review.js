import React, { useEffect } from 'react';
import './review.css';
import team from "../../assets/image/team.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaStar } from 'react-icons/fa';
import "aos/dist/aos.css";
import Aos from "aos";

const Review = () => {
 
    useEffect(()=>{
        Aos.init();
    },[]);
    
    
    return (
        
        <section class="reviews" id="reviews" data-aos="fade-up  " data-aos-duration="2000">

        <h1 class="heading">CLIENTS <span>REVIEW</span></h1>

        <div class="swiper review-slider" >


        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {/* <div class="swiper-wrapper"> */}
        <SwiperSlide>
                <div class="swiper-slide box">
                    <img src={team} alt=""/>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                    <div class="stars">
                       <i><FaStar /></i>
                       <i><FaStar /></i>
                       <i><FaStar /></i>
                       <i><FaStar /></i>
                       <i><FaStar /></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="swiper-slide box">
                    <img src={team}alt=""/>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                    <div class="stars">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="swiper-slide box">
                    <img src={team} alt=""/>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                    <div class="stars">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae non explicabo temporibus at doloribus ut quas, iusto consectetur maxime accusantium dicta sed harum tempore quae nemo nam itaque error?</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="swiper-slide box">
                    <img src={team} alt=""/>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                    <div class="stars">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae non explicabo temporibus at doloribus ut quas, iusto consectetur maxime accusantium dicta sed harum tempore quae nemo nam itaque error?</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="swiper-slide box">
                    <img src={team} alt=""/>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                    <div class="stars">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae non explicabo temporibus at doloribus ut quas, iusto consectetur maxime accusantium dicta sed harum tempore quae nemo nam itaque error?</p>
                </div>
                </SwiperSlide>
            {/* </div> */}
            </Swiper>
        </div>

    </section>


  );
};

export default Review;
