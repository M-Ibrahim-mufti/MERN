import React, { useEffect } from 'react';
import '../App.css'
function ServicePlans() {

    return(
        <div className="container max-w-full mx-auto">
            <div className='w-full mx-auto text-center text-white mb-10 py-10 bg-footer'>
                <h2 className='w-3/5 mx-auto text-4xl font-extrabold mb-3'>About Our Plans</h2>
                <p className='w-3/5 mx-auto text-lg text-justify'>We have plans that will give you the best experience in a budget-friendly environment with the most efficient solutions tailored to your needs. Our Basic plan offers foundational skills in HTML, CSS, and JavaScript, ensuring you grasp the essentials of web development. For those seeking a deeper dive, our Intermediate plan introduces the MERN stack, providing comprehensive knowledge in MongoDB, Express.js, React.js, and Node.js, empowering you to build robust full-stack applications. For advanced developers, our Advance plan delves into Ruby on Rails, equipping you with the expertise to develop complex web applications efficiently using the Rails framework. No matter your skill level, we have the perfect plan to elevate your coding journey. </p>
            </div>
            <div className='w-[70%] mx-auto max-lg:w-1/2 max-md:w-3/5 max-sm:w-4/5'>
                <div className="grid grid-cols-3 gap-10 max-[1500px]:grid-cols-2 max-lg:grid-cols-1"> 
                    <div id='planCard1' className="w-full h-full bg-[rgb(17,58,89,0.5)] rounded-lg border-2 border-white scale-90 plan-head max-[1550px]:scale-100">
                        <div className="text-white text-center text-3xl py-4 max-xl:text-2xl">
                            <h2 className="font-extrabold tracking-widest">Basic</h2>
                        </div>
                        <div className="text-white text-center text-2xl">
                            <p className="py-4">Features</p>
                            <ul className="flex flex-col items-center text-lg gap-4 max-sm:text-left">
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Introduction to HTML CSS & JS</p>  
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Response Design</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Clean Coding Experience</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>DOM manipulation in JS</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Advance CSS animation</p>
                                </li>
                            </ul>  
                        </div>
                        <div className="text-white text-center text-2xl mb-5">
                            <p className="py-4">Price Starting From</p>
                            <h2 className="font-bold text-4xl"><span>$</span>9.99/mo</h2>
                        </div>
                        <div className="w-4/5 text-center mx-auto text-white mb-5">
                            <button className="z-10 w-16 hover:w-1/2 hover:bg-white hover:text-[rgb(17,58,89)] hover:font-extrabold hover:text-xl hover:h-10 hover:rounded-xl transition-all duration-500 ease-linear" >Buy Now</button>
                        </div>
                    </div>
                    <div id='planCard2' className="w-full h-full bg-[rgb(17,58,89,0.5)] rounded-lg border-2 border-white plan-head max">
                        <div className="text-white text-center text-3xl py-4 max-xl:text-2xl">
                            <h2 className="font-extrabold tracking-widest">Intermediate</h2>
                        </div>
                        <div className="text-white text-center text-2xl">
                            <p className="py-4">Features</p>
                            <ul className="flex flex-col items-center text-lg gap-4 max-sm:text-left">
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Introduction to React</p>  
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Introduction to API calls</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Implementation of Node</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>MongoDB database management</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>ExpressJS server implementation</p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-white text-center text-2xl mb-5">
                            <p className="py-4">Price Starting From</p>
                            <h2 className="font-bold text-4xl"><span>$</span>15.99/mo</h2>
                        </div>
                        <div className="w-4/5 text-center mx-auto text-white mb-5">
                            <button className="z-10 w-16 hover:w-1/2 hover:bg-white hover:text-[rgb(17,58,89)] hover:font-extrabold hover:text-xl hover:h-10 hover:rounded-xl transition-all duration-500 ease-linear" >Buy Now</button>
                        </div>
                    </div>
                    <div id='planCard3' className="w-full h-full bg-[rgb(17,58,89,0.5)] rounded-lg border-2 border-white scale-90 plan-head max-[1550px]:scale-100">
                        <div className="text-white text-center text-3xl py-4 max-xl:text-2xl">
                            <h2 className="font-extrabold tracking-widest">Advance</h2>
                        </div>
                        <div className="text-white text-center text-2xl">
                            <p className="py-4">Features</p>
                            <ul className="flex flex-col items-center text-lg gap-4 max-sm:text-left">
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Introduction to Ruby on Rails</p>  
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Rails Project Setup with React</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>API calls from server to backend</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Introduction to MVC</p>
                                </li>
                                <li className="flex gap-3 w-4/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>Project Deployment</p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-white text-center text-2xl mb-5">
                            <p className="py-4">Price Starting From</p>
                            <h2 className="font-bold text-4xl"><span>$</span>25.99/mo</h2>
                        </div>
                        <div className="w-4/5 text-center mx-auto text-white mb-5">
                            <button className="!z-10 w-16 hover:w-1/2 hover:bg-white hover:text-[rgb(17,58,89)] hover:font-extrabold hover:text-xl hover:h-10 hover:rounded-xl transition-all duration-500 ease-linear" >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicePlans