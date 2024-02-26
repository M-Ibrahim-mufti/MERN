import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Plans from "./pages/Plans"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Authenticate from "./pages/Authenticate"
import { useEffect, useState } from 'react';

function App() {
  return(
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

function Main() {

  const [activeNav, setNavValue] = useState(false);

  useEffect(()=> {

    if (window.location.pathname === "/Authentication"){
      setNavValue(false)
    }
    else {
      setNavValue(true)
    }
  },[window.location.pathname])
  return (
    <div className='bg-body'>
      {activeNav && <Navbar/>}
      <div className=''>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Services' element={<Services />}></Route>
            <Route path='/Plans' element={<Plans />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Authentication' element={<Authenticate />}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
