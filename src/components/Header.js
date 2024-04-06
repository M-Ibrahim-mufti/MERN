import React, { useEffect } from "react";
import "../App.css";
import headerImg from '../Assets/Brain.svg';

function Header () {   
    const imgMove = (e) => {
        e.currentTarget.classList.add('img-move');
        let hText = document.getElementById('h-text');
        hText.classList.remove('-translate-x-[1000px]');
        hText.classList.add('translate-x-0', 'transition-transform', "duration-[1s]", 'linear');
        let brain = document.getElementById('brain');
        brain.classList.remove('brain-pulsing');
        setTimeout(()=> {
            brain.classList.remove('brain-pulsing');
        },4000)

        let headingText = document.getElementById('heading-text');
        headingText.classList.remove('opacity-0');
        headingText.classList.add('opacity-1', 'transition-opacity', 'duration-[1.7s]', 'linear');
    };

    return (
        <div className="container max-w-full py-16 mx-auto text-white">
            <div className="w-full text-lg h-full flex items-center justify-between py-14 text-[#9b9b9b]">
                <div id="h-text" className="w-[38%] font-bold -translate-x-[1000px]" >
                    <h2 data-text="Hello in the World of WD " className="text-3xl mb-[29px] ml-[361.5px] mr-[30px] text-right">Hello in the World of WD</h2>
                    <p data-text="Here you can have all the Information Regarding Html | CSS | JS" className="mb-[72px] ml-36 mr-16 text-left">Here you can have all the Information Regarding Html | CSS | JS </p>
                    <p data-text="Stay firm and learn with us"className="mb-14 ml-[150px] mr-[350px]">Stay firm and learn with us</p>   
                </div>
                <div id="heading-text" className="w-[26%] flex flex-col items-center justify-evenly opacity-0">
                    <p className="h-1/3 w-full mb-5 text-2xl text-left">Welcome Back</p>
                    <h2 className="h-1/3 w-full text-5xl text-center">Ibrahim Mufti</h2>
                    <p className="h-1/3 w-full mt-5 text-2xl text-right">Proceed using our Website</p>
                </div>
                <div id="brain" className='w-[37%] h-96 flex justify-center -z-10'>
                    <img className="cursor-pointer img-shadows -translate-x-[600px] opacity-0" onClick={imgMove} src={headerImg} alt="Header"/>
                </div>
            </div>
        </div>    
    );
}

export default Header;