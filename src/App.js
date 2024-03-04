import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Plans from "./pages/Plans"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Authenticate from "./pages/Authenticate"
import { useContext, useEffect, useState } from 'react';

function App() {
  return(
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

function Main() {

  const [activeNav, setNavValue] = useState(false);
  const [userActive, setUserActive] = useState(() => {
    // Initialize userActive state from localStorage or a default value
    const storedUserActive = localStorage.getItem('userActive');
    return storedUserActive ? JSON.parse(storedUserActive) : false;
  });  

  const activateNav = () => {
    setNavValue(true)     
  }
  const activeUser = () => {
    setUserActive(true)
  }
  const deactiveUser = () => {
    setUserActive(false)
  }
  const PrivateRoute = ({element}) => {
    return userActive ? element : <Navigate to="/Authentication"/>
  }

  useEffect(()=> {
    if (window.location.pathname === "/Authentication"){
      setNavValue(false)
    }
    else {
      setNavValue(true)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('userActive', JSON.stringify(userActive));
  }, [userActive]);

  return (
    <div className='bg-body'>
      {activeNav && <Navbar destroySession={deactiveUser}/>}
      <div className=''>
          <Routes>
            <Route path='/' element={<PrivateRoute element={<Home/>}/>}></Route>
            <Route path='/Services' element={<PrivateRoute element={<Services/>}/>}></Route>
            <Route path='/Plans' element={<PrivateRoute element={<Plans />}/>}></Route>
            <Route path='/Contact' element={<PrivateRoute element={<Contact/>}/>}></Route>
            <Route path='/About' element={<PrivateRoute element={<About />}/>}></Route>
            <Route path='/Authentication' element={<Authenticate activeNav={activateNav} userActive={activeUser} />}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
