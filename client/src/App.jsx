import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import HomeSliderOne from './components/HomeSliderOne/HomeSliderOne';
import HomeSliderTwo from './components/HomeSliderTwo/HomeSliderTwo';
import Chest from './workout/Chest';
import { Route, Routes } from 'react-router-dom';
import Register from './auth/Register/Register';
import Login from './auth/Login/Login';

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
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
