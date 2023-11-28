import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

import { imagelogo } from './import';
import { imagelogo2 } from './import';
import { logo1, logo2, logo3, logo4 } from './import';
import './features.css';

const Features = () => {
  return (
    <div className='container'>
      <div className='top__text'>
        <h1><b>The power <br /> of creators!</b></h1>
      </div>
    <div className='head__image'>
      <img src={imagelogo} alt='Girl'  />
      </div>
     
      <div className='text__front'>
        <h1>Influence meets impact</h1>
        <p>You've got an audience that would follow you to the ends of the earth (or at least <br />to the end of their feed). 
        But are you making the most of it? Are you rolling in <br /> dough, 
        or just rolling out content? With Uchlo, you can do both—create and cash <br /> in!</p>
       <button className='button__2'>
        Go Live
       </button>
       &nbsp;&nbsp;&nbsp;
       <div className='text__front__2'>
        <h1 className="section-title"><b>Marketing that matters</b></h1>
        <p className="section-text">
          Time to drop that megaphone and stop shouting offers into the black hole of <br />
          the internet. With Uchlo, it's like you've got a backstage pass to
          your customers' <br /> favorite show. Get ready to move some maal!
        </p>
        
        <img src={imagelogo2} alt="Marketing that matters" />
        <div className='logo__style'>
       <img src={logo1} alt="" />
       &nbsp;&nbsp;&nbsp;
       <img src={logo2} alt="" />
       &nbsp;&nbsp;&nbsp;
       <img src={logo3} alt="" />
       &nbsp;&nbsp;&nbsp;
       <img src={logo4} alt="" />
       &nbsp;&nbsp;&nbsp;
        <button className="button">Go Live</button>
       </div>
      </div>
      </div>
      </div>
  )
}

export default Features;