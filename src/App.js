import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Error from './pages/Error';
import Topheader from './components/Topheader';
import Mainfoot from './components/Mainfoot';

function App() {
  return (
    <>
    <Router>
    <Topheader/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='*' element={<Error />}/>


      </Routes>
      <Mainfoot/>
    </Router>
      
    </>
  );
}

export default App;
