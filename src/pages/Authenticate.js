import React from "react";
import AuthImage from "../Assets/authenticate.png";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";


function Authenticate(props) {
    
    // For animations and class manipulations 
    
    const toggleActive = (dataFromAuths) => {  
        const signInContainer = document.getElementById("signIn");
        const signUpContainer = document.getElementById("signUp");
        if (dataFromAuths === "SignIn") {
            signInContainer.classList.add("auth-fading");
            signUpContainer.classList.remove("hidden");
            signInContainer.classList.add("hidden");
            signUpContainer.classList.add("auth-active");

        }
        else if (dataFromAuths === "SignUp") {
            signUpContainer.classList.add("auth-fading");
            signInContainer.classList.remove("hidden");
            signUpContainer.classList.add("hidden");
            signInContainer.classList.add("auth-active");
        } 
    };

    return(
        <section className="bg-auth text-white flex justify-center items-center">
            <img className="w-screen h-screen auth-img " src={AuthImage} alt="Authentication"/>
            <div className="container max-w-lg py-10 absolute overflow-hidden">
                <div id="signIn" className="max-w-full auth-cont">
                    <SignIn getData={toggleActive} activeNav={props.activeNav} userActive={props.userActive} />
                </div>
                <div id="signUp" className="max-w-full auth-cont hidden">
                    <SignUp getData={toggleActive} activeNav={props.activeNav} userActive={props.userActive}/>
                </div>
            </div>
        </section>
    );
}

export default Authenticate;