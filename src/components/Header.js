import React, {useState} from "react";
import "../App.css"
import headerImg from '../Assets/Brain.svg'
function Header () {
    const brainPlacement = () => {
        let brainCont = document.getElementById('brain')
        brainCont.classList.remove('justify-center')
        brainCont.firstChild.classList.remove('img-shake')
        brainCont.classList.add('img-animation', 'justify-end')
        let headCont = document.getElementById('h-text')
        headCont.classList.remove('opacity-0')
        headCont.classList.add('header-text-move')
        let heading = document.getElementById('heading-text')
        heading.classList.remove('opacity-0')
        heading.classList.add('heading-animation')
    }
    return (
        <div className="container max-w-7xl py-16 mx-auto text-white">
            <div className="w-full text-lg flex justify-evenly items-center py-14 text-[#9b9b9b]">
                <div id="h-text" className="font-bold text-center w-1/3 opacity-0" >
                    <h2 className="text-3xl mb-4 relative bottom-12 left-64"><strong>Hello in the World of WD</strong></h2>
                    <p className="mb-4 text-left relative bottom-[30px] left-28 ">Here you can have all the Information Regarding Html | CSS | JS stay firm and Learn With us</p>
                    <p className="mb-4 text-left relative top-2 left-4 ">Here we will Learn About Html/CSS</p>   
                </div>
                <div id="heading-text" className="w-1/3 flex flex-col items-center justify-evenly relative left-[10px] opacity-0">
                    <p className="h-1/2 mb-5">Welcome Back</p>
                    <h2 className="h-1/3">User name</h2>
                    <p className="h-1/3 mt-5">Proceed using our Website</p>
                </div>
                <div id="brain" className='w-1/3 h-96 flex justify-center opacity-0 translate-x-[-410px] -z-10'>
                    <img className="cursor-pointer img-shadows " src={headerImg} onClick={brainPlacement}/>
                </div>
            </div>
        </div>    
    );
}

export default Header