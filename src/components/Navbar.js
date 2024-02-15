import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {

    const [colorizeNav, setColorizeNav] = useState(false)
    const [activeLink, setActiveLink] = useState("Home")
    window.onscroll  = function () {
        const handleScrollY = window.scrollY
        if  (handleScrollY > 0){
            setColorizeNav(true)
        }
        else {
            setColorizeNav(false)
        }
    };

    const activeLinks = (event) => {
        console.log(window.location.pathname)
        setActiveLink(event.currentTarget.text)
    };

    return(
        <div id="navbar" className={`fixed w-screen h-14 text-white z-30 ${colorizeNav ? 'bg-nav': ''}`}>
            <div className="container h-full max-w-5xl mx-auto text-center flex items-center">
                <div className="w-1/2 flex justify-start ">
                    <h2 className="font-bold">My<em className="font-normal">App</em></h2>
                </div>
                <ul className="w-1/2 flex justify-between">
                    <li><Link onClick={activeLinks} to="/" className={`${activeLink === "Home" || ''? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Home</Link></li>
                    <li><Link onClick={activeLinks} to="/Services" className={`${activeLink === "Services" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Services</Link></li>
                    <li><Link onClick={activeLinks} to="/Blogs" className={`${activeLink === "Blogs" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Blogs</Link></li>
                    <li><Link onClick={activeLinks} to="/Contact" className={`${activeLink === "Contact" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Contact</Link></li>
                    <li><Link onClick={activeLinks} to="/About" className={`${activeLink === "About" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar