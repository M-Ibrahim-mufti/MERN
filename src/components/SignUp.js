import React from "react";
import '../App.css';

function SignUp(props) {

    const sendActivation = () => {
        const sendActivationData = "SignUp";
        props.getData(sendActivationData);
    };

    return (
        <div className="text-[#00cccc]">
            <div className="py-14 text-center mx-6">
                <h2 className="text-3xl font-extrabold mb-4">SIGN UP</h2>
                <form className="flex flex-col w-full">
                    <div className="flex flex-col" >
                        <label htmlFor="name" className="text-left">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="text-left">Email</label>
                        <input type="email" name="email" placeholder="Enter Your email" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-left">Password</label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-left">Re-enter your Password</label>
                        <input type="email" name="password" placeholder="Re-enter Your Password" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>

                    <div className="mt-5 w-full">
                        <button id="authBtn" className="text-xl btn-box bg-transparent"> Sign Up</button>
                    </div>
                </form>
            </div>   
            <div className="text-center">
                <button onClick={sendActivation} className="si-box">Sign In</button>
            </div>    
        </div>  
    );
}

export default SignUp;