import React from 'react'
import './blog.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import cover1 from '../../img/blog/cover1.png';
import profile1 from '../../img/blog/profile1.png';
import cover2 from '../../img/blog/cover2.png';
import profile2 from '../../img/blog/profile2.png';
import cover3 from '../../img/blog/cover3.png';
import profile3 from '../../img/blog/profile3.png';

const Blog = () => {
    const Blog = [
        {
            cover_photo: cover1,
            profile_photo: profile1,
            date: "24 Jun 2021",
            title: "Two Line Long Title for Blog in web Example"
        },
        {
            cover_photo: cover2,
            profile_photo: profile2,
            date: "24 Jun 2021",
            title: "Two Line Long Title for Blog in web Example"
        },
        {
            cover_photo: cover3,
            profile_photo: profile3,
            date: "24 Jun 2021",
            title: "Two Line Long Title for Blog in web Example"
        }
    ]
    return (
        <div className='container'>
            <p className="section_sub_title text-center">Blog</p>
            <h2 className="section_title text-center">Our News <span className='heighlight'>Latest</span></h2>
            <p className='blog_title_short_desc'>Pellentesque tincidunt tristique neque, eget venenatisenim
                gravida quis. Fusce at egestas libero.Cras convallis egestas ullamcorper.</p>

            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}

                modules={[Navigation]}
                className="blogSwipper"
                loop={true}
                navigation={true}

            >
                {
                    Blog.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="blog_container">
                                <a href="#" className='anchor'>
                                    <img src={item.cover_photo} className="img-fluid w-100 blog_cover_img" alt="" />
                                    <div className="blog-bottom">
                                        <img src={item.profile_photo} className="blog_profile" alt='profile' />
                                        <h4 className="blog_date">Date : {item.date}</h4>
                                        <h3 className="blog_title">{item.title}</h3>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </div>
    )
}

export default Blog