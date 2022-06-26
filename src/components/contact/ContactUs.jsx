import React from 'react'
import './contactUs.css';
const ContactUs = () => {
    return (
        <div className='contact_us_wrapper'>
            <div className="container contact_content_wrapper">
                <h2 className="section_title">Do you have any <span className='heighlight'>project?</span></h2>
                <h2 className='contact_us_title'>Contact Us.</h2>
                <button className='contact_us_btn'>
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default ContactUs