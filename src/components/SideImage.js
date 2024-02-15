import React from "react";
import "../App.css";

function sideImage() {
    return(
        <div className='container max-w-7xl mx-auto text-center text-white'>
            <div className='flex justify-center gap-24 '>
                <div className='w-1/2 text-lg text-left flex justify-start flex-col gap-5 mt-10'>
                    <h2 className="text-4xl font-extrabold">Why Getting into Web Development</h2>
                    <p>Web development skills are in high demand across various industries. As businesses continue to establish an online presence, the demand for web developers remains strong. This demand provides ample job opportunities and career growth.</p>
                    <p>The growth of e-commerce has made web development even more critical. Businesses need robust and secure online platforms to sell products and services. E-commerce websites require advanced functionality, such as shopping carts, payment gateways, and inventory management, which are all built by web developers.</p>
                    <p>In many industries, web development involves integrating web applications with other systems, such as databases, third-party APIs, and internal software. This integration ensures smooth communication and data exchange between different components of a business ecosystem.</p>
                </div>
                <div className='w-1/2 flex flex-col items-center'>
                    <div className="w-full h-1/3 flex" >
                        <div className="w-1/2 flex justify-start ">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img1"></div>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img1"></div>
                        </div>
                    </div>
                    <div className="w-full h-1/3 flex justify-center" >
                        <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img2"></div>
                    </div>
                    <div className="w-full h-1/3 flex justify-end">
                        <div className="w-1/2 flex justify-start ">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img3"></div>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sideImage