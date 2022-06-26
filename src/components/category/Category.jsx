import React from 'react'
import './category.css';

import ai from '../../img/category/ai.png';
import figma from '../../img/category/figma.png';
import ps from '../../img/category/ps.png';
import sketch from '../../img/category/sketch.png';
import invision from '../../img/category/invision.png';
import xd from '../../img/category/xd.png';
import star from '../../img/category/star.png';


const Category = () => {

    const catData = [
        {
            title: "Abobe Photoshop",
            rating: "4.95 / 5",
            project: 1853,
            logo: ps
        },
        {
            title: "Abobe XD",
            rating: "4.77 / 5",
            project: 1268,
            logo: xd
        },
        {
            title: "Sketch",
            rating: "4.79 / 5",
            project: 853,
            logo: sketch
        },
        {
            title: "Figma",
            rating: "4.97 / 5",
            project: 1437,
            logo: figma
        },
        {
            title: "InVision Studio",
            rating: "4.97 / 5",
            project: 505,
            logo: invision
        },
        {
            title: "Abobe illustrator",
            rating: "4.87 / 5",
            project: 968,
            logo: ai
        },
    ]

    return (
        <div className='container'>
            <h2 className="section_title">Browse by <span className='heighlight'>Category</span></h2>
            <p className='sub_title'>Looking for work? <span className='heighlight'>UI/UX Project</span></p>
            <div className="row">
                {
                    catData.map((item, i) => (
                        <div className="col-lg-4" key={i}>
                            <div className="cat_wrapper">
                                <div className="cat_info">
                                    <h4 className='cat_title'>{item.title}</h4>
                                    <p className='cat_rating'><img src={star} alt="starIcon" /><span>{item.rating}</span></p>
                                    <p className='cat_project'>{item.project} Projects</p>
                                </div>
                                <div className="cat_logo">
                                    <img src={item.logo} className="category_logo" alt="photoshop logo" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category