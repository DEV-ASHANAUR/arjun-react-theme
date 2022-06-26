import React, { useEffect,useRef } from 'react'
import './navbar.css';
import logo from '../../img/logo.png';
const Navbar = () => {
    
    const navbar = useRef(null);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
        if(navbar.current!==null){
            if (window.scrollY > 0) {
            navbar.current.classList.add("add_bg");
            } else {
            navbar.current.classList.remove("add_bg");
            }
        }
        });
    },[]);
      
    return (
        <header className='header' ref={navbar}>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="contact_btn">
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar