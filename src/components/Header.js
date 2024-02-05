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
    }
    return (
        <div className="container max-w-7xl py-16 mx-auto text-white">
            <div className="w-full text-lg flex justify-evenly items-center py-14">
                <div id="h-text" className="font-bold text-[#9b9b9b] text-center w-1/2 opacity-0" >
                    <h2 className="text-3xl mb-4 relative bottom-12 left-40"><strong>Hello in the World of WD</strong></h2>
                    <p className="mb-4 text-left relative bottom-[30px] left-4 ">Here you can have all the Information Regarding Html | CSS | JS stay firm and Learn With us</p>
                    <p className="mb-4 text-left relative top-1 left-4 ">Here we will Learn About Html/CSS</p>   
                </div>
                <div id="brain" className='w-1/2 h-96 flex justify-center opacity-0 translate-x-[-310px] -z-10'>
                    <img className="cursor-pointer img-shadows " src={headerImg} onClick={brainPlacement}/>
                </div>
            </div>
        </div>    
    );
}

export default Header