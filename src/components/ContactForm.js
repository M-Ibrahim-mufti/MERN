import React, { useState} from "react";
import '../App.css';
import axios from "axios";

function ContactForm () {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName ]= useState("") ; 
    const [email , setEmail] = useState("");
    const [message, setMessage]= useState("");
    const handleFirstNameChange = (event) => { 
        setFirstName(event.target.value);
        event.target.classList.add('!border-white')  
        event.target.value.length !== 0 ? event.target.previousElementSibling.classList.add("translate-y-[-25px]", "border-l-2", "border-r-2","!text-white","!z-10") : event.target.previousElementSibling.classList.remove("translate-y-[-25px]", "border-l-2", "border-r-2", "!text-white","!z-10")
    }
    const handleLastNameChange = (event) => { 
        setLastName(event.target.value);
        event.target.classList.add('!border-white')  
        event.target.value.length !== 0 ? event.target.previousElementSibling.classList.add("translate-y-[-25px]", "border-l-2", "border-r-2","!text-white","!z-10") : event.target.previousElementSibling.classList.remove("translate-y-[-25px]", "border-l-2", "border-r-2", "!text-white","!z-10")
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        event.target.classList.add('!border-white')  
        event.target.value.length !== 0 ? event.target.previousElementSibling.classList.add("translate-y-[-25px]", "border-l-2", "border-r-2","!text-white","!z-10") : event.target.previousElementSibling.classList.remove("translate-y-[-25px]", "border-l-2", "border-r-2", "!text-white","!z-10")
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        event.target.classList.add('!border-white')  
        event.target.value.length !== 0 ? event.target.previousElementSibling.classList.add("translate-y-[-25px]", "border-l-2", "border-r-2","!text-white","!z-10") : event.target.previousElementSibling.classList.remove("translate-y-[-25px]", "border-l-2", "border-r-2", "!text-white","!z-10")
    }
    const handleSubmit = () => {
        if (firstName === "" || lastName === "" || email === "") {console.log("Field cannot be blank"); return}
        let response = axios.post('http://localhost:5000/Contact',
            {
                firstName: firstName,
                lastName:  lastName,
                email: email,
                message: message
            }
        )
    }
    
    return (
        <div className="container text-white max-w-5xl mx-auto border-[1px] border-white border-solid rounded-xl"> 
            <div className="text-3xl text-center mt-5"> Contact Us </div>
            <div className="my-14">
                <div className="flex w-11/12 mx-auto my-5 gap-8">
                    <div className="w-1/2 relative">
                        <label className="input-label">First Name</label>
                        <input onChange={handleFirstNameChange}  className="input-field border-2 border-[rgba(255,255,255,0.6)] w-full my-2 h-12 text-xl bg-transparent px-3 outline-none" type="text"/>
                    </div>
                    <div className="w-1/2 relative">
                        <label className="input-label">Last Name</label>
                        <input onChange={handleLastNameChange} className="input-field border-2 border-[rgba(255,255,255,0.6)] w-full my-2 h-12 text-xl bg-transparent px-3 outline-none" type="text"/>
                    </div>
                </div>
                <div data-text="Email" className="flex relative w-11/12 mx-auto my-5">
                    <label className="input-label">Email</label>
                    <input onChange={handleEmailChange} className="input-field border-2 border-[rgba(255,255,255,0.6)] w-full my-2 h-12 text-xl bg-transparent px-3  outline-none" type="email"/>
                </div>
                <div className="flex relative w-11/12 mx-auto my-5 border-2 border-[rgba(255,255,255,0.5)]">
                    <label className="input-label !top-[10px] left-[3px]">Having Trouble feel free to contact us with your issue</label>
                    <textarea onChange={handleMessageChange} className="w-full text-xl bg-transparent py-2 px-3 border-none outline-none max-h-60"/>
                </div>
                <div className="text-center w-4/5 mx-auto">
                    <button className="text-xl w-16 h-10 rounded-xl hover:bg-white hover:text-[rgba(11,39,61)] hover:font-extrabold hover:w-full transition-all duration-300 ease-linear" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm