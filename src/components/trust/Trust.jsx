import React from 'react'
import microsoft from '../../img/brand/microsoft.png';
import airbnb from '../../img/brand/airbnb.png';
import godaddy from '../../img/brand/godaddy.png';
import bissell from '../../img/brand/bissell.png';
import Google from '../../img/brand/Google.png';

import './trust.css';
const Trust = () => {
  return (
    <div className='container'>
        <h4 className="brand_title">Trusted by</h4>
        <div className='brand_wrapper'>
            <img src={microsoft} alt="microsoft" />
            <img src={Google} alt="Google" />
            <img src={airbnb} alt="airbnb" />
            <img src={godaddy} alt="godaddy" />
            <img src={bissell} alt="bissell" />
        </div>
    </div>
  )
}

export default Trust