import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import s from "./Review.module.css"
import review_symbol from "../../../assets/images/review_symbol.png"


import "swiper/css";
import "swiper/css/navigation";

const Review = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={s.wrapper}>
            <div className={s.review_contant}>
              <p className={s.review_contant_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <img src={review_symbol} alt="review_symbol" />
              <div className={s.review_name_wrapper}>
                <p className={s.review_name}>david james</p>
                <p>/</p>
                <p className={s.review_position}>web design</p>
              </div>
            </div>
            <div className={s.rating}>
              <div className={s.rating_items}>
                <input id='rating_5' type="radio" className={s.rating_item} name='rating' value='5' />
                <label htmlFor="rating_5" className={s.rating_label}></label>
                <input id='rating_4' type="radio" className={s.rating_item} name='rating' value='4' />
                <label htmlFor="rating_4" className={s.rating_label}></label>
                <input id='rating_3' type="radio" className={s.rating_item} name='rating' value='3' />
                <label htmlFor="rating_3" className={s.rating_label}></label>
                <input id='rating_2' type="radio" defaultChecked className={s.rating_item} name='rating' value='2' />
                <label htmlFor="rating_2" className={s.rating_label}></label>
                <input id='rating_1' type="radio" className={s.rating_item} name='rating' value='1' />
                <label htmlFor="rating_1" className={s.rating_label}></label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.wrapper}>
            <div className={s.review_contant}>
              <p className={s.review_contant_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <img src={review_symbol} alt="review_symbol" />
              <div className={s.review_name_wrapper}>
                <p className={s.review_name}>david james</p>
                <p>/</p>
                <p className={s.review_position}>web design</p>
              </div>
            </div>
            <div className={s.rating}>
              <div className={s.rating_items}>
                <input id='rating_5' type="radio" className={s.rating_item} name='rating' value='5' />
                <label htmlFor="rating_5" className={s.rating_label}></label>
                <input id='rating_4' type="radio" className={s.rating_item} name='rating' value='4' />
                <label htmlFor="rating_4" className={s.rating_label}></label>
                <input id='rating_3' type="radio" className={s.rating_item} name='rating' value='3' />
                <label htmlFor="rating_3" className={s.rating_label}></label>
                <input id='rating_2' type="radio" defaultChecked className={s.rating_item} name='rating' value='2' />
                <label htmlFor="rating_2" className={s.rating_label}></label>
                <input id='rating_1' type="radio" className={s.rating_item} name='rating' value='1' />
                <label htmlFor="rating_1" className={s.rating_label}></label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.wrapper}>
            <div className={s.review_contant}>
              <p className={s.review_contant_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <img src={review_symbol} alt="review_symbol" />
              <div className={s.review_name_wrapper}>
                <p className={s.review_name}>david james</p>
                <p>/</p>
                <p className={s.review_position}>web design</p>
              </div>
            </div>
            <div className={s.rating}>
              <div className={s.rating_items}>
                <input id='rating_5' type="radio" className={s.rating_item} name='rating' value='5' />
                <label htmlFor="rating_5" className={s.rating_label}></label>
                <input id='rating_4' type="radio" className={s.rating_item} name='rating' value='4' />
                <label htmlFor="rating_4" className={s.rating_label}></label>
                <input id='rating_3' type="radio" className={s.rating_item} name='rating' value='3' />
                <label htmlFor="rating_3" className={s.rating_label}></label>
                <input id='rating_2' type="radio" defaultChecked className={s.rating_item} name='rating' value='2' />
                <label htmlFor="rating_2" className={s.rating_label}></label>
                <input id='rating_1' type="radio" className={s.rating_item} name='rating' value='1' />
                <label htmlFor="rating_1" className={s.rating_label}></label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.wrapper}>
            <div className={s.review_contant}>
              <p className={s.review_contant_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <img src={review_symbol} alt="review_symbol" />
              <div className={s.review_name_wrapper}>
                <p className={s.review_name}>david james</p>
                <p>/</p>
                <p className={s.review_position}>web design</p>
              </div>
            </div>
            <div className={s.rating}>
              <div className={s.rating_items}>
                <input id='rating_5' type="radio" className={s.rating_item} name='rating' value='5' />
                <label htmlFor="rating_5" className={s.rating_label}></label>
                <input id='rating_4' type="radio" className={s.rating_item} name='rating' value='4' />
                <label htmlFor="rating_4" className={s.rating_label}></label>
                <input id='rating_3' type="radio" className={s.rating_item} name='rating' value='3' />
                <label htmlFor="rating_3" className={s.rating_label}></label>
                <input id='rating_2' type="radio" defaultChecked className={s.rating_item} name='rating' value='2' />
                <label htmlFor="rating_2" className={s.rating_label}></label>
                <input id='rating_1' type="radio" className={s.rating_item} name='rating' value='1' />
                <label htmlFor="rating_1" className={s.rating_label}></label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.wrapper}>
            <div className={s.review_contant}>
              <p className={s.review_contant_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <img src={review_symbol} alt="review_symbol" />
              <div className={s.review_name_wrapper}>
                <p className={s.review_name}>david james</p>
                <p>/</p>
                <p className={s.review_position}>web design</p>
              </div>
            </div>
            <div className={s.rating}>
              <div className={s.rating_items}>
                <input id='rating_5' type="radio" className={s.rating_item} name='rating' value='5' />
                <label htmlFor="rating_5" className={s.rating_label}></label>
                <input id='rating_4' type="radio" className={s.rating_item} name='rating' value='4' />
                <label htmlFor="rating_4" className={s.rating_label}></label>
                <input id='rating_3' type="radio" className={s.rating_item} name='rating' value='3' />
                <label htmlFor="rating_3" className={s.rating_label}></label>
                <input id='rating_2' type="radio" defaultChecked className={s.rating_item} name='rating' value='2' />
                <label htmlFor="rating_2" className={s.rating_label}></label>
                <input id='rating_1' type="radio" className={s.rating_item} name='rating' value='1' />
                <label htmlFor="rating_1" className={s.rating_label}></label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Review