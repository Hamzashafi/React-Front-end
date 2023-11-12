import React from 'react';
import {image} from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-md-6">
          <h1><b>From soch to stream to sale - all in one place!</b></h1>
          <p>
            Time to drop that megaphone and stop shouting offers into the black hole of the
            Internet. With Uchlo, it's like you've got a backstage pass to your customers'
            favorite show. Get ready to move some maal!
          </p>
          <a href="#" className="btn btn-dark">Start Sharing</a>
        </div>
        <div className="col-md-6">
          <img src={image} alt="Woman holding camera" />
        </div>
      </div>
    </div>
  )
}

export default Blog;