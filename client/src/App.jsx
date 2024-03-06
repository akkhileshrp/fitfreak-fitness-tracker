import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import HomeSliderOne from './components/HomeSliderOne/HomeSliderOne';
import HomeSliderTwo from './components/HomeSliderTwo/HomeSliderTwo';
import Chest from './workout/Chest';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <HomeSliderOne />
            <HomeSliderTwo />
          </>
        } />
        <Route path='/workout/chest' element={<Chest />} />
      </Routes>
    </div>
  );
};

export default App;
