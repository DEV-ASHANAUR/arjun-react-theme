import React, { useEffect, useRef } from 'react'
import './navbar.css';
import logo from '../../img/logo.png';
import { ContactsOutlined } from '@mui/icons-material';
const Navbar = () => {
    const toggler = useRef(null);
    const menu = useRef(null);
    const navbar = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (navbar.current !== null) {
                if (window.scrollY > 0) {
                    navbar.current.classList.add("add_bg");
                } else {
                    navbar.current.classList.remove("add_bg");
                }
            }
        });
    }, []);

    const handleMenu = () => {
        toggler.current.classList.toggle("mobile-bar");
        menu.current.classList.toggle("mobile-menu");
    }
    
    return (
        <header className='header' ref={navbar}>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="menu" ref={menu}>
                        <ul>
                            <li onClick={handleMenu}><a href="#">Home</a></li>
                            <li onClick={handleMenu}><a href="#">About us</a></li>
                            <li onClick={handleMenu}><a href="#">portfolio</a></li>
                            <li onClick={handleMenu}><a href="#">Services</a></li>
                            <li onClick={handleMenu}><a href="#">Blog</a></li>
                        </ul>
                        <div className="mobile contact_btn">
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className="contact_btn">
                        <button>Contact Us</button>
                    </div>
                    <div className="trigger" onClick={handleMenu} ref={toggler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar