import React from 'react';
import '../App.css';
function AboutCircle () {
    
    const revealAbout = (event) => {
        event.target.previousSibling.classList.add('outer-circle');
        event.target.classList.add('opacity-0', "transition-opacity", "duration-300" ,"ease-linear");
        setTimeout(() => {
            event.target.classList.remove('-top-0', 'left-[590px]', 'opacity-0');
            event.target.classList.add('bottom-[360px]', 'left-[600px]', 'opacity-1');
            event.target.previousSibling.childNodes.forEach((element) => {
                element.classList.remove('opacity-0', 'transition-opacity', 'duration-300', 'ease-linear');
                element.classList.add('circle-position');             
            });
            setTimeout(() => {
                event.target.previousSibling.childNodes.forEach((element) => {
                    element.childNodes[1].classList.remove('hidden')
                    setTimeout(() => {
                        element.childNodes[1].classList.remove('opacity-0');
                        element.childNodes[1].classList.add('reveal-description');
                        setTimeout(()=> {
                            element.childNodes[1].childNodes.forEach((element) => {
                            element.classList.remove('opacity-0', '-translate-y-5');
                            element.classList.add('opacity-1','translate-y-0','transition-all', 'duration-300', 'ease-linear');
                           })
                        },900)
                    },100)                
                })
            },4400)

        },2500)
    }
    
    const unHideCircle = (event) => {
        event.target.childNodes.forEach((element) => {
            element.classList.remove("hidden");
        })
    }


    return (
        <div className='container max-w-7xl mx-auto'>
            <div className='opacity-0 mx-auto top-0 bottom-0 left-0 right-0 rounded-full' onAnimationEnd={unHideCircle}> 
                <div className='hidden opacity-0 bg-[rgba(17,58,89,0.1)] w-20 h-20 rounded-full'>
                    <svg className="w-20 h-20  text-gray-800 dark:text-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
                    </svg>
                    <div className='about-box-points-1 hidden opacity-0 -top-20 right-[400px] h-36 bg-footer rounded-lg border-2 border-white about-box-shadows'>
                        <h2 className='opacity-0 -translate-y-5 mx-5 text-xl text-white font-bold py-3'>Feature we provide</h2>
                        <p className='opacity-0 -translate-y-5 mx-5 text-md mb-5'>We provide collaborative project based on the user preference based on the type of website they want to create or establish mainly we provide MERN stack</p>
                    </div>
                </div>
                <div className='hidden opacity-0 bg-[rgba(17,58,89,0.2)] w-20 h-20 rounded-full'>
                    <svg className="w-20 h-20 text-gray-800 dark:text-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z"/>
                    </svg>
                    <div className='about-box-points-2 hidden opacity-0 h-36 bg-footer rounded-lg border-2 border-white bottom-20 left-28 about-box-shadows'>
                        <h2 className='opacity-0 -translate-y-5 mx-5 text-xl text-white font-bold py-3'>Services we provide</h2>
                        <p className='opacity-0 -translate-y-5 mx-5 text-md mb-5'>We provide service based on the user requirement with consistency and reliability in My-APP we provide user friendly and trust worthy environment</p>
                    </div>
                </div>
                <div className='hidden opacity-0 bg-[rgba(17,58,89,0.1)] w-20 h-20 rounded-full'>
                    <svg className='rounded-full' fill="#ffffff" version="1.1" id="Capa_1"  viewBox="0 0 124 124" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M77,61h14.8c1.8,0,3.2-1.2,3.2-3V34h-6V16.1c0-4.6-4.3-9.1-9-9.1H62H44c-4.7,0-9,4.5-9,9.1V34h-6v24c0,1.8,1.4,3,3.2,3H47 c0.1-4,3.4-7,7.2-7H62h7.8C73.6,54,76.9,57,77,61z M62,34H49V21h13h13v13H62z"></path> <polygon points="54,61 54,75 54,76 62,76 70,76 70,75 70,61 62,61 "></polygon> <path d="M6.2,117H62h55.8c3.4,0,6.2-3,6.2-6.5V40.3c0-3.4-2.8-6.3-6.2-6.3H109v24c0,9.5-7.7,17-17.2,17H77v0.9 c0,3.899-3.4,7.1-7.2,7.1H62h-7.8c-3.9,0-7.2-3.2-7.2-7.1V75H32.2C22.7,75,15,67.5,15,58V34H6.2C2.8,34,0,36.8,0,40.3v70.3 C0,114,2.8,117,6.2,117z"></path> </g> </g></svg>
                    <div className='about-box-points-2 hidden opacity-0 h-36 bg-footer bottom-12 left-32 rounded-lg border-2 border-white about-box-shadows'>
                        <h2 className='opacity-0 -translate-y-5 mx-5 text-xl text-white font-bold py-3'>Our Portfolio</h2>
                        <p className='opacity-0 -translate-y-5 mx-5 text-md mb-5'> We have created Projects such as Task tracker, Expense management system and Event management system</p>
                    </div>
                </div>
                <div className='hidden opacity-0 bg-[rgba(17,58,89,0.1)] w-20 h-20 rounded-full'>
                    <svg className='rotate-[5deg] rounded-full' fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,5A3,3,0,1,1,5.965,7.827.915.915,0,0,1,6,8v5a1,1,0,0,1-2,0V8a.915.915,0,0,1,.035-.173A2.989,2.989,0,0,1,2,5ZM19.965,16.173A.915.915,0,0,0,20,16V12a1,1,0,0,0-2,0v4a.915.915,0,0,0,.035.173,3,3,0,1,0,1.93,0ZM21,2H17a1,1,0,0,0-1,1V4H12a1,1,0,0,0,0,2h4V7a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM12,18H8V17a1,1,0,0,0-1-1H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V20h4a1,1,0,0,0,0-2Z"></path></g></svg>
                    <div className='rotate-[5deg] about-box-points-1 hidden opacity-0 h-36 bg-footer bottom-16 right-[410px] rounded-lg border-2 border-white about-box-shadows'>
                        <h2 className='opacity-0 -translate-y-5 mx-5 text-xl text-white font-bold py-3'>Our Workflow</h2>
                        <p className='opacity-0 -translate-y-5 mx-5 text-md mb-5'>Our Workflow resides on gathering requirement, initializing and implementation based on the provided information </p>
                    </div>
                </div>
                <div className='hidden opacity-0 bg-[rgba(17,58,89,0.1)] w-20 h-20 rounded-full'>
                    <svg className='rounded-full' fill="rgba(255,255,255,1)" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" id="Stay_x5F_organize" version="1.1" stroke="#adbcc7"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M488.303,229.44l-26.801-5.893c-5.053-1.107-8.932-5.08-10.004-10.143c-4.242-20.045-11.472-38.979-21.233-56.311 c-2.387-4.236-2.236-9.438,0.387-13.533l16.389-25.586c3.336-5.207,2.597-12.033-1.776-16.406l-27.195-27.197 c-4.373-4.373-11.197-5.111-16.404-1.777L378.79,87.241c-4.35,2.785-9.916,2.748-14.256-0.059 c-16.818-10.889-35.375-19.313-55.166-24.771c-4.697-1.295-8.289-5.084-9.332-9.844l-6.469-29.617 c-1.324-6.041-6.676-10.451-12.859-10.451h-38.465c-6.184,0-11.533,4.41-12.855,10.451l-5.863,26.786 c-1.1,5.027-5.037,8.958-10.063,10.051c-19.986,4.352-38.85,11.707-56.109,21.551c-4.248,2.42-9.479,2.301-13.598-0.336 L117.923,64.46c-5.207-3.332-12.035-2.592-16.406,1.779l-27.199,27.2c-4.373,4.371-5.111,11.2-1.777,16.407l15.131,23.629 c2.771,4.326,2.75,9.858-0.016,14.19c-10.576,16.566-18.775,34.793-24.119,54.205c-1.295,4.703-5.082,8.301-9.848,9.348 l-30.766,6.725c-6.041,1.326-10.422,6.676-10.422,12.859v38.463c0,6.184,4.381,11.533,10.422,12.859l28.128,6.156 c5.014,1.1,8.93,5.02,10.038,10.031c4.303,19.453,11.459,37.838,20.979,54.701c2.396,4.244,2.268,9.453-0.361,13.557l-17.297,27.02 c-3.336,5.205-2.595,12.031,1.778,16.404l27.199,27.199c4.373,4.371,11.198,5.111,16.405,1.775l24.54-15.713 c4.336-2.777,9.877-2.746,14.215,0.033c16.268,10.42,34.145,18.545,53.178,23.922c4.668,1.318,8.229,5.09,9.266,9.824l6.9,31.298 c1.324,6.039,6.674,10.168,12.857,10.168h38.465c6.184,0,11.531-4.129,12.857-10.168l6.189-28.145 c1.105-5.041,5.063-8.906,10.107-9.992c19.514-4.197,37.969-11.222,54.908-20.661c4.23-2.359,9.408-2.202,13.488,0.411 l26.771,17.148c5.207,3.336,12.033,2.597,16.404-1.774l27.201-27.199c4.369-4.371,5.109-11.198,1.777-16.405l-15.232-23.78 c-2.789-4.359-2.744-9.938,0.074-14.279c10.732-16.521,19.082-34.732,24.574-54.143c1.322-4.662,5.094-8.215,9.822-9.248 l30.147-6.645c6.041-1.324,10.197-6.674,10.197-12.857v-38.465C498.5,236.114,494.344,230.765,488.303,229.44z M254.407,407.585 c-82.277,0-148.979-66.701-148.979-148.979s66.701-148.979,148.979-148.979s148.977,66.701,148.977,148.979 S336.685,407.585,254.407,407.585z"></path> <path d="M196.716,237.659c12.982,0,23.504-10.525,23.504-23.504c0-12.982-10.521-23.506-23.504-23.506 c-12.98,0-23.504,10.523-23.504,23.506C173.212,227.134,183.735,237.659,196.716,237.659z"></path> <path d="M316.192,237.659c12.982,0,23.504-10.525,23.504-23.504c0-12.982-10.521-23.506-23.504-23.506 c-12.98,0-23.504,10.523-23.504,23.506C292.688,227.134,303.212,237.659,316.192,237.659z"></path> <circle cx="256.364" cy="229.3" r="23.506"></circle> <path d="M255.5,262.124c-25.129,0-45,20.371-45,45.498v9.342c0,1.818,1.614,3.536,3.437,3.536h84.406 c1.818,0,2.157-1.718,2.157-3.536v-9.342C300.5,282.495,280.629,262.124,255.5,262.124z"></path> <path d="M226.599,258.633c-8.012-7.124-19.295-11.559-30.852-11.559c-25.133,0-46.247,20.288-46.247,45.397v9.336 c0,1.824,2.968,3.692,4.792,3.692h45.162C200.452,284.5,211.034,268.627,226.599,258.633z"></path> <path d="M315.993,246.978c-11.609,0-22.168,4.573-30.191,11.722c15.502,9.988,26.025,25.801,27.023,46.801h45.338 c1.822,0,3.337-1.868,3.337-3.692v-9.336c0-12.555-5.102-23.941-13.334-32.152C339.93,252.062,328.569,246.978,315.993,246.978z"></path> </g> </g></svg>
                    <div className='about-box-points-5 hidden opacity-0 h-36 bg-footer bottom-48 left-32 rounded-lg border-2 border-white about-box-shadows'>
                        <h2 className='opacity-0 -translate-y-5 mx-5 text-xl text-white font-bold py-3'>Our team</h2>
                        <p className='opacity-0 -translate-y-5 mx-5 text-md mb-5'>Our team comprises of experienced well skilled developer we thrive in the perfection on how to complete the projects with efficiency and perfection</p>
                    </div>
                </div>
            </div>
            <button id='about-btn' onClick={revealAbout} className='z-10 bg-[rgba(17,58,89)] w-20 h-20 rounded-full relative -top-0 left-[590px] border-2'></button>
        </div>
    )
}   
export default AboutCircle; 