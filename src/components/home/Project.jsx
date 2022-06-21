import React from 'react'
import './project.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation } from "swiper";

import project1 from '../../img/project/project1.png';
import project2 from '../../img/project/project2.png';
import project3 from '../../img/project/project3.png';
import project4 from '../../img/project/project4.png';
import project5 from '../../img/project/project5.png';
const Project = () => {
    return (
        <div className='container mb-5'>
            <p className="section_sub_title">Portfolio</p>
            <h2 className="section_title">Our <span className='heighlight'>Project</span></h2>

            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                hashNavigation={{
                    watchState: true,
                  }}
                pagination={{
                    clickable: true,
                  
                }}
                modules={[Pagination,Navigation]}
                className="projectSwipper"
                loop={true}
                navigation={true}
                
            >
                <SwiperSlide><img src={project1} className="img-fluid" alt="project1" /></SwiperSlide>
                <SwiperSlide><img src={project2} className="img-fluid" alt="project1" /></SwiperSlide>
                <SwiperSlide><img src={project3} className="img-fluid" alt="project1" /></SwiperSlide>
                <SwiperSlide><img src={project4} className="img-fluid" alt="project1" /></SwiperSlide>
                <SwiperSlide><img src={project5} className="img-fluid" alt="project1" /></SwiperSlide>
                <SwiperSlide><img src={project3} className="img-fluid" alt="project1" /></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Project