import React, {useRef, useState} from "react";
import axios  from "axios";
import {useNavigate } from 'react-router-dom'
function SignUp(props) {

    //Variables to store on submit value of the input fields 
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const rePasswordRef = useRef();

    //  emitting data to parent component
    const [successReg, setSuccessReg] = useState(true)
    const sendActivation = () => {
        const sendActivationData = "SignUp"
        props.getData(sendActivationData)
    };
    const [errors, setErrors] = useState("");
    // for router push we use useNavigate() hook
    const navigation = useNavigate();

    // Method for handling submission event
    const handleSignUp = async (event) => {
        event.preventDefault();
        // Added exceptional handling so that it is easy to notify if the code working or not  
        try {    

            // Check if both password enter are same or not 
            if ((passwordRef.current.value === rePasswordRef.current.value) && 
                (nameRef.current.value !== "" && emailRef.current.value !== '' && passwordRef.current.value !== '')) {

                    // making api call using axios to backend server which localhost:5000 sending value of the entered input fields 
                    const response = await axios.post('http://localhost:5000/register', 
                        { 
                            name: nameRef.current.value,
                            email:  emailRef.current.value, 
                            password: passwordRef.current.value
                        }
                    )
                    
                    props.activeNav();
                    props.userActive();
                    // on successful SIgn up pushing to Home page 
                    navigation('/')
                } else {

                    // For displaying message on box that password do not match
                    setSuccessReg(false)
                    if (passwordRef.current.value !== rePasswordRef.current.value) {
                        throw "Password does not Match!"
                    }
                    if (nameRef !== "" || emailRef !== '' || passwordRef !== '' ) {
                        throw "field cannot be blanked";
                    }
                } 
            } catch (error) {
                // Catch error if exist any and display on the console 
                setErrors(error);
            }

    }
    return (
        <div className="text-[#00cccc]">
            <div className="py-14 text-center mx-6">
                <h2 className="text-3xl font-extrabold mb-4">SIGN UP</h2>
                {!successReg && <p className="text-center text-[#00cccc83]">{ errors }</p>}
                <form className="flex flex-col w-full" onSubmit={handleSignUp} onClick={() => setSuccessReg(true)}>
                    <div className="flex flex-col" >
                        <label htmlFor="name" className="text-left">Name</label>
                        <input type="text" name="name" ref={nameRef} placeholder="Enter your name" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="text-left">Email</label>
                        <input type="email" name="email" ref={emailRef} placeholder="Enter Your email" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-left">Password</label>
                        <input type="password" name="password" ref={passwordRef} placeholder="Enter Your Password" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-left">Re-enter your Password</label>
                        <input type="password" name="password" ref={rePasswordRef} placeholder="Re-enter Your Password" className="inputs-border outline-none border-none text-lg bg-transparent py-2 px-2 my-3"/>
                    </div>

                    <div className="mt-5 w-full">
                        <button className="auth-btn text-xl btn-box bg-transparent"> Sign Up</button>
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