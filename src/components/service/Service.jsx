import React from 'react'
import './service.css'
import ServiceImage from '../../img/service/ServiceImage.png';
import circleShape from '../../img/service/circleShape.png';
import arrow from '../../img/service/arrow.svg';
import icon1 from '../../img/service/icon1.png';
import icon2 from '../../img/service/icon2.png';
import icon3 from '../../img/service/icon3.png';
import icon4 from '../../img/service/icon4.png';
const Service = () => {
    return (
        <section className='service_wrapper'>
            <div className="container">
                <p className="section_sub_title">Services</p>
                <h2 className="section_title">Our <span className='heighlight'>Services</span></h2>
                <div className="row justify-content-end service_top">
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                {/* first row start */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service_card">
                                            <img src={icon1} className="cardImage" alt='icon1' />
                                            <h4 className='cardTitle'>UI/UX Analysis</h4>
                                            <p className='cardShortDesc'>There are many Lorem Ipsum available, but the majority have suffered, </p>
                                            <button className='serviceBtn'>
                                                <span>See Live Demo</span>
                                                <div className="btnDot">
                                                    <img src={arrow} alt="arrow" className='arrowIcon' />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service_card">
                                            <img src={icon4} className="cardImage" alt='icon4' />
                                            <h4 className='cardTitle'>Web Development</h4>
                                            <p className='cardShortDesc'>There are many Lorem Ipsum available, but the majority have suffered, </p>
                                            <button className='serviceBtn'>
                                                <span>See Live Demo</span>
                                                <div className="btnDot">
                                                    <img src={arrow} alt="arrow" className='arrowIcon' />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* first row end */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                {/* second row start */}
                                <div className="row second_row">
                                    <div className="col-12">
                                        <div className="service_card">
                                            <img src={icon2} className="cardImage" alt='icon2' />
                                            <h4 className='cardTitle'>SEO & Marketing</h4>
                                            <p className='cardShortDesc'>There are many Lorem Ipsum available, but the majority have suffered, </p>
                                            <button className='serviceBtn'>
                                                <span>See Live Demo</span>
                                                <div className="btnDot">
                                                    <img src={arrow} alt="arrow" className='arrowIcon' />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service_card">
                                            <img src={icon3} className="cardImage" alt='icon3' />
                                            <h4 className='cardTitle'>Graphics Design</h4>
                                            <p className='cardShortDesc'>There are many Lorem Ipsum available, but the majority have suffered, </p>
                                            <button className='serviceBtn'>
                                                <span>See Live Demo</span>
                                                <div className="btnDot">
                                                    <img src={arrow} alt="arrow" className='arrowIcon' />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* second row end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image_wrapper">
                <img src={circleShape} className='circleShape img-fluid' alt="circleShape" />
                <img src={ServiceImage} alt="service Image" className='serviceImage img-fluid' />
            </div>
        </section>
    )
}

export default Service