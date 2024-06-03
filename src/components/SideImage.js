import React from "react";
import "../App.css";

function sideImage() {
    return(
        <div className='container max-w-7xl mx-auto text-center text-white max-xl:!max-w-5xl max-lg:!max-w-4xl max-md:!max-w-xl max-sm:!max-w-sm'>
            <div className='flex justify-center gap-24 max-lg:!gap-16 max-md:flex-col'>
                <div className='w-1/2 text-lg text-left flex justify-start flex-col gap-5 mt-10 max-md:w-full'>
                    <h2 className="text-4xl font-extrabold">Why Getting into Web Development</h2>
                    <p className="max-lg:text-base">Web development skills are in high demand across various industries. As businesses continue to establish an online presence, the demand for web developers remains strong. This demand provides ample job opportunities and career growth.</p>
                    <p className="max-lg:text-base">The growth of e-commerce has made web development even more critical. Businesses need robust and secure online platforms to sell products and services. E-commerce websites require advanced functionality, such as shopping carts, payment gateways, and inventory management, which are all built by web developers.</p>
                    <p className="max-lg:text-base">In many industries, web development involves integrating web applications with other systems, such as databases, third-party APIs, and internal software. This integration ensures smooth communication and data exchange between different components of a business ecosystem.</p>
                </div>
                <div className='w-1/2 flex flex-col items-center max-md:w-full max-sm:flex-row max-sm:justify-between'>
                    <div className="w-full h-1/3 flex max-sm:w-1/3 " >
                        <div className="w-1/2 flex justify-start max-sm:hidden">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img1 max-xl:w-[175px] max-xl:h-[175px] max-lg:w-[150px] max-lg:h-[150px] max-md:w-[175px] max-md:h-[175px] max-sm:hidden" ></div>
                        </div>
                        <div className="w-1/2 flex justify-end  max-sm:w-full max-sm:justify-start">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img1 max-xl:w-[175px] max-xl:h-[175px] max-lg:w-[150px] max-lg:h-[150px] max-md:w-[175px] max-md:h-[175px] max-sm:w-[95px] max-sm:h-[95px]"></div>
                        </div>
                    </div>
                    <div className="w-full h-1/3 flex justify-center  max-sm:w-1/3" >
                        <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img2 max-xl:w-[175px] max-xl:h-[175px] max-lg:w-[150px] max-lg:h-[150px] max-md:w-[175px] max-md:h-[175px] max-sm:w-[95px] max-sm:h-[95px] "></div>
                    </div>
                    <div className="w-full h-1/3 flex justify-end  max-sm:w-1/3">
                        <div className="w-1/2 flex justify-start max-sm:hidden ">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img3 max-xl:w-[175px] max-xl:h-[175px] max-lg:w-[150px] max-lg:h-[150px] max-md:w-[175px] max-md:h-[175px] max-sm:hidden"></div>
                        </div>
                        <div className="w-1/2 flex justify-end  max-sm:w-full">
                            <div className="w-[200px] h-[200px] border-4 border-white rotate-45 side-img3 max-xl:w-[175px] max-xl:h-[175px] max-lg:w-[150px] max-lg:h-[150px] max-md:w-[175px] max-md:h-[175px] max-sm:w-[95px] max-sm:h-[95px]" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sideImage;