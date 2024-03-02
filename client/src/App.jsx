import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import HomeSliderOne from './components/HomeSliderOne/HomeSliderOne';
import HomeSliderTwo from './components/HomeSliderTwo/HomeSliderTwo';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSliderOne />
      <HomeSliderTwo />
    </div>
  );
};

export default App;