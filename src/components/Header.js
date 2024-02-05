import React from "react";
import "../App.css"
import headerImg from '../Assets/Brain.svg'
function Header () {
    return (
        <div className="container max-w-7xl pt-14 pb-14 mx-auto text-white">
            <div className="w-full text-lg flex justify-evenly items-center py-14">
                <div className="font-bold text-center w-1/2">
                    <h2 className="text-3xl mb-4"><strong>Hello in the World of WD</strong></h2>
                    <p className="mb-4 text-left">Here you can have all the Information Regarding Html | CSS | JS stay firm and Learn With us</p>
                    <p className="mb-4 text-left">Here we will Learn About Html/CSS</p>   
                </div>
                <div className="w-1/2 h-96 flex justify-center">
                    <img className="img-shadows" src={headerImg}/>
                </div>
            </div>
        </div>    
    );
}

export default Header