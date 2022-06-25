import React from 'react'
import './contact.css'
import Instragram from '../../img/conatct/Instragram.png';
import facebook from '../../img/conatct/Facebook.png';
import Twiter from '../../img/conatct/Twiter.png';
import Crome from '../../img/conatct/Crome.png';
import Linkedin from '../../img/conatct/Linkedin.png';
const Contact = () => {
  return (
    <div className='contact_wrapper'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form_wrapper">
                        <div className="form">
                            <div className="input_group">
                                <label htmlFor="">Name :</label>
                                <input type="text" placeholder='Write your full name...' />
                            </div>
                            <div className="input_group">
                                <label htmlFor="">Web Link :</label>
                                <input type="text" placeholder='Write your web link...' />
                            </div>
                            <div className="input_group">
                                <label htmlFor="">Message :</label>
                                <textarea placeholder='Write your all information...'></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-flex">
                    <div className="contact_info_wrapper">
                        <p className="section_sub_title">Contact US</p>
                        <h2 className="section_title">Let's Talk About Your<span className='heighlight'> Information</span></h2>
                        <p className='call_us'>Call us for immediate suport to this number</p>
                        <p className='phone_number'>+01**** *******</p>
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
        </div>
    </div>
  )
}

export default Contact