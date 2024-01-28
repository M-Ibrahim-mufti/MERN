import React, {useState} from "react";
import { Link } from "react-router-dom";


function Navbar() {
    const [activeLink, setActiveLink] = useState("")
    const activeLinks = (event) => {
        setActiveLink(event.currentTarget.text)
    }
    return(
        <div className="fixed w-screen h-14 bg-nav text-white z-10">
            <div className="container h-full max-w-5xl mx-auto text-center flex items-center">
                <div className="w-1/2 flex justify-start ">
                    <h2 className="font-bold">My<em className="font-normal">App</em></h2>
                </div>
                <ul className="w-1/2 flex justify-between">
                    <li><Link onClick={activeLinks} to="/" className={`${activeLink === "Home" ? "nav-ul font-bold" : ""} hover:font-bold transition-all duration-300 ease-in-out`}>Home</Link></li>
                    <li><Link onClick={activeLinks} to="/Services" className={`${activeLink === "Services" ? "nav-ul font-bold" : ""} hover:font-bold transition-all duration-300 ease-in-out`}>Services</Link></li>
                    <li><Link onClick={activeLinks} to="/Blogs" className={`${activeLink === "Blogs" ? "nav-ul font-bold" : ""} hover:font-bold transition-all duration-300 ease-in-out`}>Blogs</Link></li>
                    <li><Link onClick={activeLinks} to="/Contact" className={`${activeLink === "Contact" ? "nav-ul font-bold" : ""} hover:font-bold transition-all duration-300 ease-in-out`}>Contact</Link></li>
                    <li><Link onClick={activeLinks} to="/About" className={`${activeLink === "About" ? "nav-ul font-bold" : ""} hover:font-bold transition-all duration-300 ease-in-out`}>About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar