import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './signin/Sign-in';
import Signup from './signup/Sign-up';
import Padge from './main-padge/Padg1';
import Home from './hompadge/Home';
function App() {
  return (
    <Routes>
      {<Route path="/" element={<Home/> }    />}
      {/* <Route path="/signin" element={<Signin/>} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
       {/* <Route path="/Padge"  element={< Padge />}  />  */}
    </Routes>
  );
}

export default App;