import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav  from './components/NavBar';
import Footer from './components/Footer';
import Slider from './components/Slider.js';

import './index.css';

function App() {
  return (
    <div>
      <Nav />
      <Footer />
      <Slider />
    </div>
  );
}

export default App;
