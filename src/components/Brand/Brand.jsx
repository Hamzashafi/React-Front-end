import React from 'react';
import { image1, image2, image3 } from './import';
import './brand.css';

const Brand = () => {
  return (
    <div className="container-fluid bg-white text-white py-2">
      <div className="row">
        <div className="col-md-4">
          <img src={image1} alt="Live Streaming icon" />
          <h5 className="mt-3">Live Streaming</h5>
          <p>Stream hassle-free to your socials</p>
        </div>
        <div className="col-md-4">
          <img src={image2} alt="Customizable Product Display icon" />
          <h5 className="mt-3">Customizable Product Display</h5>
          <p>Make your products look irresistible</p>
        </div>
        <div className="col-md-4">
          <img src={image3} alt="Audience Engagement Tools icon" />
          <h5 className="mt-3">Audience Engagement Tools</h5>
          <p>Leverage the power of 2-way interactions</p>
        </div>
      </div>
    </div>
  )
}

export default Brand;