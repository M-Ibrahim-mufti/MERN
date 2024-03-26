import React from 'react'
import reactImg1 from '../Assets/React1.jpg';
import reactImg2 from '../Assets/React2.jpg';
import reactImg3 from '../Assets/React3.jpg';
import reactImg4 from '../Assets/React4.jpg';
function ServicePlans() {
    const sliderPlans = (e) => {
        const htmlPlan = document.getElementById('html-plan');
        const cssPlan = document.getElementById('css-plan');
        const jsPlan = document.getElementById('js-plan');
        if(e.target.id === "html-btn"){
            const currActiveBtn = document.querySelector('.plan-btn-active')
            currActiveBtn.classList.remove("plan-btn-active");
            e.target.classList.add('plan-btn-active');
            if(cssPlan.classList.contains('ig-active')) {
                cssPlan.classList.remove('ig-active', 'translate-x-[0]', '-translate-x-[1800px]','z-10')
                cssPlan.classList.add('translate-x-[1800px]', 'opacity-0', 'transition-all', 'duration-1000', 'ease-linear', '-z-10' ) 
            }
            if(jsPlan.classList.contains('ig-active')) {
                jsPlan.classList.remove('ig-active', 'translate-x-[0]', 'z-10')
                jsPlan.classList.add('translate-x-[1800px]', 'opacity-0', 'transition-all', 'duration-1000', 'ease-linear', '-z-10' )
                cssPlan.classList.remove('-translate-x-[1800px]')
                cssPlan.classList.add('translate-x-[1800px]')
            }
            htmlPlan.classList.remove('opacity-0', '-z-10', '-translate-x-[1800px]')
            htmlPlan.classList.add('translate-x-[0]', 'opacity-1', 'transition-all', 'duration-1000', 'ease-linear','ig-active', 'z-10')
        }
        if(e.target.id === "css-btn"){
            const currActiveBtn = document.querySelector('.plan-btn-active')
            currActiveBtn.classList.remove("plan-btn-active");
            e.target.classList.add('plan-btn-active')
            if(htmlPlan.classList.contains('ig-active')){
                htmlPlan.classList.remove('ig-active', 'translate-x-[0]','z-10')
                htmlPlan.classList.add('-translate-x-[1800px]', 'opacity-0', 'transition-all', 'duration-1000', 'ease-linear', '-z-10')
                cssPlan.classList.remove('opacity-0', '-z-10','translate-x-[1800px]', '-translate-x-[1800px]')
                cssPlan.classList.add('translate-x-[0]', 'opacity-1', 'transition-all', 'duration-1000', 'ease-linear', 'ig-active', 'z-10')
            }
            if(jsPlan.classList.contains('ig-active')) {
                jsPlan.classList.remove('ig-active', 'translate-x-[1800px]', 'translate-x-[0]', 'z-10')
                jsPlan.classList.add('translate-x-[1800px]', 'opacity-0', 'transition-all', 'duration-1000', 'ease-linear', '-z-10')
                cssPlan.classList.remove('opacity-0', '-z-10','translate-x-[1800px]' ,'-translate-x-[1800px]')
                cssPlan.classList.add('translate-x-[0]', 'opacity-1', 'transition-all', 'duration-1000', 'ease-linear', 'ig-active', 'z-10')
            }
        }
        if(e.target.id === "js-btn") {
            const currActiveBtn = document.querySelector('.plan-btn-active')
            currActiveBtn.classList.remove("plan-btn-active");
            e.target.classList.add('plan-btn-active');
            if(htmlPlan.classList.contains('ig-active')) {
                htmlPlan.classList.remove('ig-active', 'translate-x-[0]', 'z-10')
                htmlPlan.classList.add('-translate-x-[1800px]', 'opacity-0', 'transition-all', 'duration-1000', 'ease-linear', '-z-10' ) 
                cssPlan.classList.remove('translate-x-[1800px]')
                cssPlan.classList.add('-translate-x-[1800px]')
            }
            if(cssPlan.classList.contains('ig-active')) {
                cssPlan.classList.remove('ig-active', 'translate-x-[0]', 'translate-x-[1800px]', 'z-10')
                cssPlan.classList.add('-translate-x-[1800px]', 'opacity-0', 'transition-all', 'duration-1000', 'ease-linear', '-z-10' ) 

            }
            jsPlan.classList.remove('opacity-0', '-z-10', 'translate-x-[1800px]')
            jsPlan.classList.add('translate-x-[0]', 'opacity-1', 'transition-all', 'duration-1000', 'ease-linear', 'ig-active', 'z-10')
        }
    }
    return(
        <div className='container max-w-6xl h-[720px] mx-auto relative'>
            <div className='w-full flex justify-end gap-5 mb-5'>
                <span id='html-btn' onClick={sliderPlans} className='cursor-pointer plan-btn-active w-5 h-5 bg-white rounded-full border-[rgba(17,58,89,1)] border-2 hover:bg-[rgba(17,58,89,1)] hover:border-white transition-all duration-300 ease-linear'></span>
                <span id='css-btn' onClick={sliderPlans} className='cursor-pointer w-5 h-5 bg-white rounded-full border-[rgba(17,58,89,1)] border-2 hover:bg-[rgba(17,58,89,1)] hover:border-white transition-all duration-300 ease-linear'></span>
                <span id='js-btn' onClick={sliderPlans} className='cursor-pointer w-5 h-5 bg-white rounded-full border-[rgba(17,58,89,1)] border-2 hover:bg-[rgba(17,58,89,1)] hover:border-white transition-all duration-300 ease-linear'></span>
            </div>
            <div className='absolute w-full '>
                <div id='html-plan' className='z-10 translate-x-[0] flex justify-between gap-3 plan-box ig-active'>
                    <div className='w-3/5 flex flex-col gap-3'>
                        <div className='h-1/2 flex flex-row gap-3'>
                            <div className='w-3/5 plans-img1'></div>
                            <div className='w-2/5 plans-img2'></div>
                        </div>
                        <div className='h-1/2 flex flex-row gap-3'>
                            <div className='w-2/5 plans-img3'></div>
                            <div className='w-3/5 plans-img4'></div>
                        </div>
                    </div>
                    <div className='w-2/5 text-white flex justify-around flex-col h-auto'>
                        <div className='w-11/12 h-[10%] mx-auto'>
                            <h2 className='w-full h-full flex items-center justify-center text-4xl text-center font-extrabold plans-card-header'>Basic</h2>
                        </div>
                        <div className='w-11/12 h-2/5 mx-auto text-xl flex flex-col justify-around gap-4'>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Full access to html Css JS</p>
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>In depth details about Css</p>
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Manipulating DOM with javascript</p>
                            </div>         
                        <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Project creation.</p> 
                            </div>
                        </div>
                        <div className='w-11/12 h-1/5 border-2 rounded-xl flex flex-col justify-center items-center mx-auto text-4xl gap-2'>
                            <p>Price Starting from</p>
                            <h2 className='font-bold'><span className='text-xl'>$</span>10.99<span className='text-xl'>/mo</span></h2>
                        </div>
                        <div className='w-11/12 h-[10%] flex justify-center items-center mx-auto text-3xl'>
                            <button className='buy-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full '>
                <div id='css-plan' className='opacity-0 translate-x-[1800px] -z-10 flex justify-between gap-3 plan-box'>
                    <div className='w-3/5 flex flex-col gap-3'>
                        <div className='h-1/2 flex flex-row gap-3'>
                            <div className='w-3/5 plans-img1 saturate-200 contrast-150 brightness-75 bg' style={{ backgroundImage: `url(${reactImg1})`}} ></div>    
                            <div className='w-2/5 plans-img4' style={{ backgroundImage: `url(${reactImg4})`}}></div>
                        </div>
                        <div className='h-1/2 flex flex-row gap-3'>
                            <div className='w-2/5 plans-img3 saturate-[5.5] contrast-[2.5] brightness-90 ' style={{ backgroundImage: `url(${reactImg3})`}}></div>
                            <div className='w-3/5 plans-img2 saturate-150 contrast-150' style={{ backgroundImage: `url(${reactImg2})`}}></div>
                       </div>
                    </div>
                    <div className='w-2/5 text-white flex justify-around flex-col h-auto'>
                        <div className='w-11/12 h-[10%] mx-auto'>
                            <h2 className='w-full h-full flex items-center justify-center text-4xl text-center font-extrabold plans-card-header'>Advance</h2>
                        </div>
                        <div className='w-11/12 h-2/5 mx-auto text-xl flex justify-around flex-col gap-4'>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Full access to React</p>
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>In depth knowledge of React hooks</p>
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Introduction to MERN stack</p>
                            </div>         
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Introduction to MongoDB Express and Node</p> 
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Project Creation</p> 
                            </div>
                        </div>
                        <div className='w-11/12 h-1/5 border-2 rounded-xl flex flex-col justify-center items-center mx-auto text-4xl gap-2'>
                            <p>Price Starting from</p>
                            <h2 className='font-bold'><span className='text-xl'>$</span>20.99<span className='text-xl'>/mo</span></h2>
                        </div>
                        <div className='w-11/12 h-[10%] flex justify-center items-center mx-auto text-3xl'>
                            <button className='buy-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full '>
                <div id='js-plan' className='opacity-0 translate-x-[1800px] -z-10 flex justify-between gap-3 plan-box'>
                    <div className='w-3/5 flex flex-col gap-3'>
                        <div className='h-1/2 flex flex-row gap-3'>
                            <div className='w-3/5 plans-img1'></div>
                            <div className='w-2/5 plans-img2'></div>
                        </div>
                        <div className='h-1/2 flex flex-row gap-3'>
                            <div className='w-2/5 plans-img3'></div>
                            <div className='w-3/5 plans-img4'></div>
                        </div>
                    </div>
                    <div className='w-2/5 text-white flex justify-around flex-col h-auto'>
                        <div className='w-11/12 h-[10%] mx-auto'>
                            <h2 className='w-full h-full flex items-center justify-center text-4xl text-center font-extrabold plans-card-header'>Expert</h2>
                        </div>
                        <div className='w-11/12 h-2/5 mx-auto text-xl flex flex-col gap-4'>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Introduction Ruby on Rails </p>
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Object oriented Ruby</p>
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Introduction to MVC</p>
                            </div>         
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>React + ROR</p> 
                            </div>
                            <div className='flex w-full gap-5 items-center'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Project creation.</p> 
                            </div>
                        </div>
                        <div className='w-11/12 h-1/5 border-2 rounded-xl flex flex-col justify-center items-center mx-auto text-4xl gap-2'>
                            <p>Price Starting from</p>
                            <h2 className='font-bold'><span className='text-xl'>$</span>25.99<span className='text-xl'>/mo</span></h2>
                        </div>
                        <div className='w-11/12 h-[10%] flex justify-center items-center mx-auto text-3xl'>
                            <button className='buy-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicePlans