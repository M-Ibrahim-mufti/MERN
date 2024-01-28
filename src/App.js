import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Authenticate from "./pages/Authenticate"


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar/> */}
        <div className=''>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/Services' element={<Services />}></Route>
              <Route exact path='/Blogs' element={<Blogs />}></Route>
              <Route exact path='/Contact' element={<Contact />}></Route>
              <Route exact path='/About' element={<About />}></Route>
              <Route exact path='/Authentication' element={<Authenticate />}></Route>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
