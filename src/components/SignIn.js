import React, {useRef} from "react";


function SignIn(props) {
    
    // Variables
    const emailRef = useRef()
    const passwordRef = useRef()
    const rememberRef = useRef()

    const iconStyle={
        mixBlendMode:"normal"
    };

    //Methods
    const sendActivation = () => {
        const sendActivationData = "SignIn"
        props.getData(sendActivationData)
    };

    const handleSignIn = (event) => {
        event.preventDefault()

        console.log("Email = ", emailRef.current.value)
        console.log("Password = ", passwordRef.current.value)
        console.log("Remember Me = ", rememberRef.current.checked)
    }




    return(

        <div className="relative text-[#00cccc]">
            <div className="py-14 text-center mx-6">
                <h2 className="text-3xl font-extrabold mb-4">SIGN IN</h2>
                <div className="flex justify-evenly items-center my-4 w-4/5 mx-auto">
                    <div className="icon-box">
                        <a href="http://www.gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                <g fill="#00cccc83" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={iconStyle}><g transform="scale(5.12,5.12)"><path d="M25.99609,48c-12.68359,0 -23.00391,-10.31641 -23.00391,-23c0,-12.68359 10.32031,-23 23.00391,-23c5.74609,0 11.24609,2.12891 15.49219,5.99609l0.77344,0.70703l-7.58594,7.58594l-0.70312,-0.60156c-2.22656,-1.90625 -5.05859,-2.95703 -7.97656,-2.95703c-6.76562,0 -12.27344,5.50391 -12.27344,12.26953c0,6.76563 5.50781,12.26953 12.27344,12.26953c4.87891,0 8.73438,-2.49219 10.55078,-6.73828h-11.55078v-10.35547l22.55078,0.03125l0.16797,0.79297c1.17578,5.58203 0.23438,13.79297 -4.53125,19.66797c-3.94531,4.86328 -9.72656,7.33203 -17.1875,7.33203z"></path></g></g>
                            </svg>
                        </a>
                    </div>
                    <div className="icon-box">
                        <a href="http://www.facebook.com">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                <g fill="#00cccc83" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={iconStyle}><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
                            </svg>
                        </a>
                    </div>
                    <div className="icon-box">
                        <a href="http://www.twitter.com">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                <g fill="#00cccc83" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={iconStyle}><g transform="scale(4,4)"><path d="M61.932,15.439c-2.099,0.93 -4.356,1.55 -6.737,1.843c2.421,-1.437 4.283,-3.729 5.157,-6.437c-2.265,1.328 -4.774,2.303 -7.444,2.817c-2.132,-2.26 -5.173,-3.662 -8.542,-3.662c-6.472,0 -11.717,5.2 -11.717,11.611c0,0.907 0.106,1.791 0.306,2.649c-9.736,-0.489 -18.371,-5.117 -24.148,-12.141c-1.015,1.716 -1.586,3.726 -1.586,5.847c0,4.031 2.064,7.579 5.211,9.67c-1.921,-0.059 -3.729,-0.593 -5.312,-1.45c0,0.035 0,0.087 0,0.136c0,5.633 4.04,10.323 9.395,11.391c-0.979,0.268 -2.013,0.417 -3.079,0.417c-0.757,0 -1.494,-0.086 -2.208,-0.214c1.491,4.603 5.817,7.968 10.942,8.067c-4.01,3.109 -9.06,4.971 -14.552,4.971c-0.949,0 -1.876,-0.054 -2.793,-0.165c5.187,3.285 11.348,5.211 17.961,5.211c21.549,0 33.337,-17.696 33.337,-33.047c0,-0.503 -0.016,-1.004 -0.04,-1.499c2.301,-1.624 4.283,-3.674 5.849,-6.015"></path></g></g>
                            </svg>
                        </a>
                    </div>
                    <div className="icon-box">
                        <a href="http://www.linkedin.com">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                <g fill="#00cccc83" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={iconStyle}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                            </svg>
                        </a>
                    </div>
                </div>
                <form className="flex flex-col w-full" onSubmit={handleSignIn}>
                    <div className="flex flex-col" >
                        <label htmlFor="email" className="text-left">Email</label>
                        <input type="email" name="email" ref={emailRef} placeholder="Enter your email" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-left">Password</label>
                        <input type="password" name="password" ref={passwordRef} placeholder="Enter Your Password"  className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 flex justify-start items-center">
                            <input className="ml-1" type="checkbox" name="rememberMe" ref={rememberRef}/>
                            <p className="ml-3">Remember me</p>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <a className="hover:text-[#00cccc83] transition-colors duration-300 ease-linear" href="/Authentication">Forgot Your Password</a>
                        </div>
                    </div>
                    <div className="mt-5 w-full">
                        <button id="authBtn" className="text-xl btn-box bg-transparent"> Sign In</button>
                    </div>
                </form>
            </div>   
            <div className="text-center">
                <button onClick={sendActivation} className="si-box">Sign Up</button>
            </div>    
        </div>     
    );
}

export default SignIn