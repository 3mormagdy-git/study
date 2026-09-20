import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Padge from './main-padge/Padg1';
import Home from './hompadge/Home';
function App() {
  return (
    <Routes>
      {<Route path="/" element={<Home/> }    />}
       <Route path="/Signin" element={<Signin/>} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/Padge"  element={< Padge />}  />
    </Routes>
  );
}

export default App;