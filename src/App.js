import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Plans from "./pages/Plans"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Authenticate from "./pages/Authenticate"
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  return(
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

function Main() {

  // Variables 
  const [activeNav, setNavValue] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // Setting value of userActive based on the page by parsing it from json else it will be set to false
  const [userActive, setUserActive] = useState(() => {
    // Initialize userActive state from localStorage or a default value
    const storedUserActive = localStorage.getItem('userActive');
    return storedUserActive ? JSON.parse(storedUserActive) : false;
  });  

  // Setting value of navbar such that if it is true it will be displayed else it will not
  const activateNav = () => {
    setNavValue(true)     
  }

  // Setting value of active user such as when the user is logged in they can access all the pages 
  const activeUser = () => {
    setUserActive(true)
  }

  // Setting value of active user such as when the user is logged out they can not access all the pages except authentication 
  const deactiveUser = () => {
    setUserActive(false)
    window.location.reload();
  }

  // Creating Private routes such that these routes are only accessible if user is authenticated
  const PrivateRoute = ({element}) => {
    return userActive ? element : <Navigate to="/Authentication"/>
  }

  // setting value of navbar if the page is authenticated it will not be visible
  useEffect(()=> {
    if (window.location.pathname === "/Authentication"){
      setNavValue(false)
    }
    else {
      setNavValue(true)
    }
  },[])

  //  Function that handle the userActive  status and save it into the local storage
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
