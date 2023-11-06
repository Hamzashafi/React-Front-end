import React from 'react';
import { image1, image2, image3 } from './import';
import './brand.css';

const Brand = () => {
  return (
    <div className='brand section__padding'>
      <div>
        <img src={image1} />
        <h4>Live Streaming</h4>
        <p>Stream hassle-free to your socials instantly.</p><br />
      </div>
      <div>
        <img src={image2} />
        <h4>Customizable Product Display</h4>
        <p>Make your products look irresistible.</p><br />
      </div>
      <div>
        <img src={image3} />
        <h4>Audience Engagement Tools</h4>
        <p>Leverage the power of 2-way interactions.</p><br />
      </div>
    </div>
  )
}

export default Brand;