import React from 'react'
import './testimonial.css';
import { Rating } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import barIcon from '../../src/img/testimonial/barImg.png';

const Testimonial = () => {

    return (
        <div className="testimonial_wrapper mb-5">
            <div className='container overflow-hidden'>
                <p className="section_sub_title text-center">Testimonial</p>
                <h2 className="section_title text-center">Our <span className='heighlight'>Client</span> Feedback</h2>

                <Swiper
                    slidesPerView={"1"}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                      
                    }}
                    modules={[Pagination]}
                    className="feedbackSwipper"
                    loop={true}
                    
                >
                    <SwiperSlide>
                        <div className="feedback_wrapper">
                            <img src={barIcon} alt="barIcon" className='barIcon' />
                            <p className='client_review'>Pellentesque tincidunt tristique neque, eget venenatisenim gravida quis. Fusce at egestas libero.Cras convallis egestas ullamcorper.
                                Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum at massa dui. Morbi et purus velit. Etiam tristique, justo eu condimentum
                                efficitur, purus velit facilisis sem, id fringilla tortor quam quis dolor.</p>
                            <div className="rating">
                                <Rating name="read-only" value="5" readOnly />
                            </div>
                            <h3 className='client_name'>Tanvir hasan</h3>
                            <p className='designation'>UI/UX Designer | Craqy Agency</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial