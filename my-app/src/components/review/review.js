import React, { useEffect } from "react";
import "./review.css";
import team from "../../assets/image/team.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const Review = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="reviews"
      id="reviews"
    
     
    >
      <h1 className="heading">
        CLIENTS <span>REVIEW</span>
      </h1>

      <div className="swiper review-slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* <div className="swiper-wrapper"> */}
          <SwiperSlide>
            <div className="swiper-slide box">
              <img src={team} alt="" />
              <h3>Taleb khaddour</h3>
              <span>satisfied client</span>
              <div className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p>
                "Absolutely delicious! The flavors at Bilal's Ice Cream are
                incredibly rich and creamy. I tried their salted caramel and it
                was heavenly. Highly recommend!".
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide box">
              <img src={team} alt="" />
              <h3>Ahmad Ibrahim</h3>
              <span>satisfied client</span>
              <div className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p>
                "Bilal's Ice Cream is my go-to dessert spot. The variety of
                flavors is outstanding, and each scoop is bursting with flavor.
                The staff is always friendly and the service is excellent."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide box">
              <img src={team} alt="" />
              <h3>Ibrahim Dib</h3>
              <span>satisfied client</span>
              <div className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p>
                "The quality of ice cream at Bilal's is top-notch. I appreciate
                that they use natural ingredients and it really shows in the
                taste. The pistachio flavor is a must-try!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide box">
              <img src={team} alt="" />
              <h3>fathi mhamad</h3>
              <span>satisfied client</span>
              <div className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p>
                "Visited Bilal's Ice Cream with my family and we were blown away
                by the unique flavors they offer. Their passion fruit sorbet was
                a refreshing and delightful treat on a hot day. We will
                definitely be back for more!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide box">
              <img src={team} alt="" />
              <h3>Khalil hamoud</h3>
              <span>satisfied client</span>
              <div className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p>
                "I'm a huge ice cream lover and Bilal's Ice Cream exceeded my
                expectations. The attention to detail in their flavors is
                impressive. I can't get enough of their chocolate fudge brownie.
                It's pure indulgence!"
              </p>
            </div>
          </SwiperSlide>
          {/* </div> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
