import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';


import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './container';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => 
 (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  );

export default App;