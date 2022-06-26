import React from 'react'
import './footer.css'
import footerLogo from '../../img/footer/footer_logo.png';
import Instragram from '../../img/conatct/Instragram.png';
import facebook from '../../img/conatct/Facebook.png';
import Twiter from '../../img/conatct/Twiter.png';
import Crome from '../../img/conatct/Crome.png';
import Linkedin from '../../img/conatct/Linkedin.png';
const Footer = () => {
    return (
        <footer className='footer_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="footer_title">
                            <a href="#"><img src={footerLogo} className="img-fluid footer_logo" alt="footer logo" /></a>
                        </div>
                        <div className="footer_items">
                            <a href='#'>dami@gmail.com</a>
                            <a href='#' className='footer_phone'>+01**** *******</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="footer_title">
                            <a href="#">Service.</a>
                        </div>
                        <div className="footer_items">
                            <a href='#'>Web Design</a>
                            <a href='#'>Development</a>
                            <a href='#'>Wordpress</a>
                            <a href='#'>Online Marketing</a>
                            <a href='#'>Content Writter</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="footer_title">
                            <a href="#">About Us.</a>
                        </div>
                        <div className="footer_items">
                            <a href='#'>Home</a>
                            <a href='#'>About Us</a>
                            <a href='#'>Work Portfolio</a>
                            <a href='#'>Team Members</a>
                            <a href='#'>Plan & Pricing</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3"><div className="footer_title">
                        <a href="#">Our Address.</a>
                    </div>
                        <div className="footer_items">
                            <a href='#'>Dhaka,</a>
                            <a href='#' className='footer_country'>Bangladesh</a>
                        </div>
                        <div className="social_wrapper">
                            <a href="#"><img src={Instragram} alt="Instragram" /></a>
                            <a href="#"><img src={facebook} alt="Instragram" /></a>
                            <a href="#"><img src={Twiter} alt="Twiter" /></a>
                            <a href="#"><img src={Crome} alt="Crome" /></a>
                            <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <p>&copy; 2022 - web-themes. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer