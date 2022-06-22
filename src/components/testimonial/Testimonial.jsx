import React from 'react'
import './testimonial.css';
import { Rating } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import barIcon from '../../img/testimonial/barImg.png';
import roundImg1 from '../../img/testimonial/round1.png';
import roundImg2 from '../../img/testimonial/round2.png';
import roundImg3 from '../../img/testimonial/round3.png';
import roundImg4 from '../../img/testimonial/round4.png';
import roundImg5 from '../../img/testimonial/round5.png';
import roundImg6 from '../../img/testimonial/round6.png';
import roundImg7 from '../../img/testimonial/round7.png';
import roundImg8 from '../../img/testimonial/round8.png';

const Testimonial = () => {

    return (
        <div className="testimonial_wrapper mb-5">
            <div className='container position-relative'>
                <p className="section_sub_title text-center">Testimonial</p>
                <h2 className="section_title text-center">Our <span className='heighlight'>Client</span> Feedback</h2>
                {/* side Image  */}
                <img src={roundImg1} alt="roundImg1" className='roundImg1' />
                <img src={roundImg2} alt="roundImg2" className='roundImg2' />
                <img src={roundImg3} alt="roundImg3" className='roundImg3' />
                <img src={roundImg4} alt="roundImg4" className='roundImg4' />
                <img src={roundImg5} alt="roundImg5" className='roundImg5' />
                <img src={roundImg6} alt="roundImg6" className='roundImg6' />
                <img src={roundImg7} alt="roundImg7" className='roundImg7' />
                <img src={roundImg8} alt="roundImg8" className='roundImg8' />
                {/* side Image  */}
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <Swiper
                            slidesPerView={"1"}
                            spaceBetween={30}
                            centeredSlides={false}
                            pagination={{
                                clickable: true,

                            }}
                            modules={[Pagination]}
                            className="feedbackSwipper"
                            loop={true}

                        >
                            {
                                Array(4).fill(4).map(() => (
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
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial