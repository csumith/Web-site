import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>portfolio</span>

      {/* slider */}

      <Swiper
       spaceBetween={-800} 
       slidePerView={3}
       grabCursor={true}
       
       className='portfolio-slider'>
        
        <SwiperSlide>

          <img src={Sidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={HOC} alt="" />
        </SwiperSlide>



      </Swiper>
    </div>
  )
}

export default Portfolio