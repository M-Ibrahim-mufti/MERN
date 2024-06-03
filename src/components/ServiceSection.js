import React from "react";
import htmlImg from '../Assets/Services_Html.jpg';
import cssImg from '../Assets/section_2_CSS.png';
import jsImg from '../Assets/javascriptImg.jpg'
import '../App.css';

function ServicesSection() {
    const imgBlur = (e) => {
        let imgCont = e.currentTarget.previousElementSibling.firstChild
        imgCont.classList.add("blur-md")
    }
    const remBlur = (e) => {
        let imgCont = e.currentTarget.previousElementSibling.firstChild
        imgCont.classList.remove("blur-md")
    }

    return(
        <div className="container max-w-full mx-auto">
            <div className="w-full">
                <div className="w-3/5 relative mx-auto flex justify-start py-10 max-md:w-5/6 max-[930px]:w-5/6">
                    <div className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear max-xl:w-full max-xl:h-full max-lg:w-full max-lg:h-full max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full">
                        <img className="rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear" src={htmlImg} />
                    </div>
                    <div className="absolute right-32 top-[20%] w-3/5 max-xl:w-11/12 max-xl:top-[25%] max-sm:top-[25%] max-xl:left-2" onMouseEnter={imgBlur} onMouseLeave={remBlur}>
                        <h2 className="text-white font-bold text-3xl text-center mb-4 w-ful max-sm:text-2xl">Hyper Text Markup Language</h2>
                        <p className="w-full text-white text-lg max-lg:text-base max-sm:text-base">Elevate your online presence with our bespoke HTML services. We specialize in crafting visually stunning and highly functional websites tailored to meet your unique business needs. Our team of experienced HTML developers is committed to delivering responsive and seamlessly optimized designs, ensuring an exceptional user experience across devices. <p className="max-md:hidden">Whether you're looking for a brand-new website, a revamp of your existing one, or custom HTML solutions, we bring creativity and expertise to every project. Partner with us to transform your vision into a captivating online reality, driving engagement and success for your business.</p></p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-footer">
                <div className="w-3/5 relative mx-auto flex justify-end py-10 max-md:w-5/6 max-[930px]:w-5/6">
                    <div className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear max-xl:w-full max-xl:h-full max-lg:w-full max-lg:h-full max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full">
                        <img className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear max-xl:w-full max-xl:h-full max-lg:w-full max-lg:h-full max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full" src={cssImg} />
                    </div>
                    <div className="absolute left-32 top-[15%] w-3/5 max-xl:w-11/12 max-xl:top-[10%] max-lg:top-[15%] max-sm:top-[25%] max-xl:left-2" onMouseEnter={imgBlur} onMouseLeave={remBlur}>
                        <h2 className="text-white font-bold text-3xl text-center mb-4 w-full max-sm:text-2xl">Cascading Stylesheet</h2>
                        <p className="w-full text-white text-lg max-lg:text-base max-sm:text-base">Transform your digital presence with our top-notch CSS services. We specialize in crafting visually appealing and responsive websites that not only captivate your audience but also enhance user experience. Our skilled CSS developers are dedicated to tailoring solutions that align perfectly with your brand identity and business objectives.<p className="max-md:hidden"> Whether it's revamping an existing site, implementing custom styles, or ensuring cross-browser compatibility, we bring a meticulous approach to every project. Elevate your online aesthetic, optimize performance, and stay ahead in the competitive digital landscape with our comprehensive CSS services. Partner with us to redefine your web presence and leave a lasting impression on your visitors</p></p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-3/5 relative mx-auto flex justify-start py-10 max-md:w-5/6 max-[930px]:w-5/6">
                    <div className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear max-xl:w-full max-xl:h-full max-lg:w-full max-lg:h-full max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full">
                        <img className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear max-xl:w-full max-xl:h-full max-lg:w-full max-lg:h-full max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full" src={jsImg} />
                    </div>
                    <div className="absolute right-32 top-[15%] w-3/5 max-xl:w-11/12 max-xl:top-[10%] max-lg:top-[15%] max-sm:top-[25%] max-xl:left-2" onMouseEnter={imgBlur} onMouseLeave={remBlur}>
                        <h2 className="text-white font-bold text-3xl text-center mb-4 w-full max-sm:text-2xl">Javascript</h2>
                        <p className="w-full text-white text-lg max-lg:text-base max-sm:text-base">Empower your digital ambitions with our unparalleled JavaScript services. Our team of seasoned developers excels in creating dynamic and interactive web solutions that seamlessly blend innovation and functionality. Whether you're looking to build a feature-rich web application, enhance user engagement through animations, or optimize your existing JavaScript codebase, we deliver tailored solutions to meet your specific needs. <p className="max-md:hidden">With a focus on cutting-edge technologies and industry best practices, we ensure your digital assets not only meet but exceed the expectations of today's fast-paced online landscape. Elevate your web presence, drive user satisfaction, and unlock the full potential of JavaScript with our expert services. Partner with us for a transformative journey into the world of dynamic and responsive web development.</p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection