import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

function Navbar(prop) {
    const [navBtnActive, setNavBtnActive] = useState(true)
    const [colorizeNav, setColorizeNav] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation()

    
    useEffect(() => {
        const currentPath = location.pathname
        setActiveLink(currentPath)
    },[location.pathname])

    window.onscroll  = function () {
        const handleScrollY = window.scrollY;
        if  (handleScrollY > 0){
            if(navBtnActive){
                setColorizeNav(false)
            }
            else {
                setColorizeNav(true)
            }
        }
        else {
            setColorizeNav(false);
        }
    };

    const navVisibility = () => {
        const Nav = document.getElementById('navbar').firstChild;
        setNavBtnActive(false);
        
        if (window.scrollY > 0) {
            setColorizeNav(true);
        }
        Nav.lastChild.classList.add('opacity-0', 'transition-all', 'duration-300', 'linear');
        setTimeout(()=> {
            Nav.lastChild.classList.add('hidden');
            Nav.firstChild.classList.remove('hidden');
            setTimeout(() => {  
                Nav.firstChild.classList.remove('opacity-0', '-translate-y-14');
                Nav.firstChild.classList.add('opacity-1','translate-y-0', 'transition-all', 'duration-500', 'linear');
                Nav.childNodes[1].classList.remove('hidden');
                setTimeout(() => {
                    Nav.childNodes[1].childNodes.forEach((children, index )=> {
                        setTimeout(() => {
                            children.classList.remove('opacity-0', '-translate-y-14');
                            children.classList.add('opacity-1','translate-y-0', 'transition-all', 'duration-500', 'linear');
                        },200 * index);
                    },100);
                },100);
            },100);
        },600);
    };

    const destroySession = async () => {
        try {
            const response = await axios.get("http://localhost:5000/destroySession") 
            console.log(response);
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div id="navbar" className={`fixed w-screen h-14 text-white z-30 ${colorizeNav ? 'bg-nav': ''}`}>
            <div className="container h-full max-w-5xl mx-auto text-center flex items-center">
                <div className="hidden opacity-0 -translate-y-14 w-1/2 flex justify-start ">
                    <h2 className="font-bold">My<em className="font-normal">App</em></h2>
                </div>
                <ul className="hidden w-1/2 flex justify-between">
                    <li className="opacity-0 -translate-y-14 "><Link to="/" className={`${activeLink === "/" || ''? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Home</Link></li>
                    <li className="opacity-0 -translate-y-14 "><Link to="/Services" className={`${activeLink === "/Services" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Services</Link></li>
                    <li className="opacity-0 -translate-y-14 "><Link to="/Plans" className={`${activeLink === "/Plans" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Plans</Link></li>
                    <li className="opacity-0 -translate-y-14 "><Link to="/Contact" className={`${activeLink === "/Contact" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>Contact</Link></li>
                    <li className="opacity-0 -translate-y-14 "><Link to="/About" className={`${activeLink === "/About" ? "nav-ul text-white" : ""} text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear`}>About</Link></li>
                    <li className="opacity-0 -translate-y-14 flex items-center"><button className="cursor-pointer text-[#9b9b9b] hover:text-white transition-all duration-500 ease-linear" onClick={() => {prop.destroySession(); destroySession();}}> Sign Out</button></li>
                </ul>
                <div className="w-full flex justify-center items-center">
                    <button onClick={navVisibility} className="nav-btn w-[32px] h-[30px] rounded-full border-t-2 border-r-2 rotate-90"></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;