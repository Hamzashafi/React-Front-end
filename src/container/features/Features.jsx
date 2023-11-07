import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

import { imagelogo } from './import';
import { imagelogo2 } from './import';
import { logo1, logo2, logo3, logo4 } from './import';
import './features.css';

const Features = () => {
  return (
    <div className='container'>
      <div className='top__text'><h1><b>The power of creators!</b></h1>
      <img src={imagelogo} alt='logo'  />
      </div>
      <div className='text__front'>
        <h1>Influence meets impact</h1>
        <p>You've got an audience that would follow you to the ends of the earth (or at least <br />to the end of their feed). 
        But are you making the most of it? Are you rolling in <br /> dough, 
        or just rolling out content? With Uchlo, you can do both—create and cash <br /> in!</p>
       <div className='live__button'>
       <MDBBtn >  
        Go Live
      </MDBBtn>
       </div>
       &nbsp;&nbsp;&nbsp;
       <div className='text__front__2'>
        <h1> Marketing That 
          Matters</h1>
        <img src={imagelogo2}  />
        <p>Time to drop that megaphone and stop shouting offers into the black hole of the <br /> Internet. 
          With Uchlo, it's like you’ve got a backstage pass to your customers’ <br />favorite show. 
          Get ready to move some maal!</p>
       </div>
       <div className='logo__style'>
       <img src={logo1} />
       <img src={logo2} alt="" />
       <img src={logo3} alt="" />
       <img src={logo4} alt="" />
       <div className='button__live'>
       <MDBBtn>
        Go Live
       </MDBBtn>
       </div>
       </div>
      </div>
      </div>
  )
}

export default Features;