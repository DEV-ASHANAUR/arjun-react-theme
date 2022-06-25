import React, { useState } from 'react'
import './hero.css';


import heroImg from "../../img/hero/woman.png";
import SentIcon from "../../img/hero/SentIcon.png";
import BackgroundText from "../../img/hero/backgroundText.png";
import Ellipse from '../../img/hero/Ellipse1.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import figma from '../../img/hero/Figma.png';
import adxd from '../../img/hero/Adobexd.png';
import Studio from '../../img/hero/OrigamiStudio.png';
import Sketch from '../../img/hero/Sketch.png';
import Player from '../player/Player';

const Hero = () => {
    const [open, setOpen] = useState(false);

    //handleModalOpen
    const handleModalOpen = () =>{
        setOpen(true);
    }
    return (
        <section className='hero_wrapper'>
            <div className="container">
                <Player open={open} setOpen={setOpen} />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="heroLeft">
                            <p className='heading_one'><span className='line'></span><span>Best UI UX Design Agency</span></p>
                            <h2 className='heading_two'>Make Digital <span className='heighlight'>Product</span> with Our <span className='heighlight'>Agency</span></h2>
                            <p className='heading_desc'>Adipiscing nulla mattis dignissim consectetur donec varius. Nam curabitur cras ultrices commodo fermentum ullamcorper. Nibh diam sapien, non, nulla. In eget feugiat et quisque sed massa.</p>
                            <div className='demo_search_wrapper'>
                                <div className="search_wrapper">
                                    <input type="text" placeholder='@your mail' />
                                    <button><img src={SentIcon} /></button>
                                </div>
                                <a  className='demo' onClick={handleModalOpen}>
                                    <span>See Live Demo</span>
                                    <div className="play_wrapper">
                                        <PlayArrowIcon className='playBtn' />
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="heroRight">
                            <img src={figma} className="figma" alt='figma' />
                            <img src={adxd} className="adxd" alt='adxd' />
                            <img src={Studio} className="Studio" alt='Studio' />
                            <img src={Sketch} className="Sketch" alt='Sketch' />

                            <img src={BackgroundText} className="backgroundtext" />
                            <img src={Ellipse} className="ellipse" />
                            <img src={heroImg} alt="heroImg" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero