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
        <div className="container max-w-7xl mx-auto">
            <div className="w-full relative mx-auto flex justify-start mb-10">
                <div className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear">
                    <img className="rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear" src={htmlImg} />
                </div>
                <div className="absolute right-32 top-[15%] w-3/5" onMouseEnter={imgBlur} onMouseLeave={remBlur}>
                    <h2 className="text-white font-bold text-3xl text-center mb-4 w-full">Hyper Text Markup Language</h2>
                    <p className="w-full text-white text-lg">Elevate your online presence with our bespoke HTML services. We specialize in crafting visually stunning and highly functional websites tailored to meet your unique business needs. Our team of experienced HTML developers is committed to delivering responsive and seamlessly optimized designs, ensuring an exceptional user experience across devices. Whether you're looking for a brand-new website, a revamp of your existing one, or custom HTML solutions, we bring creativity and expertise to every project. Partner with us to transform your vision into a captivating online reality, driving engagement and success for your business.</p>
                </div>
            </div>
            <div className="w-full relative mx-auto flex justify-end mb-10">
                <div className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear">
                    <img className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear" src={cssImg} />
                </div>
                <div className="absolute left-32 top-[15%] w-3/5" onMouseEnter={imgBlur} onMouseLeave={remBlur}>
                    <h2 className="text-white font-bold text-3xl text-center mb-4 w-full">Cascading Stylesheet</h2>
                    <p className="w-full text-white text-lg">Transform your digital presence with our top-notch CSS services. We specialize in crafting visually appealing and responsive websites that not only captivate your audience but also enhance user experience. Our skilled CSS developers are dedicated to tailoring solutions that align perfectly with your brand identity and business objectives. Whether it's revamping an existing site, implementing custom styles, or ensuring cross-browser compatibility, we bring a meticulous approach to every project. Elevate your online aesthetic, optimize performance, and stay ahead in the competitive digital landscape with our comprehensive CSS services. Partner with us to redefine your web presence and leave a lasting impression on your visitors</p>
                </div>
            </div>
            <div className="w-full relative mx-auto flex justify-start mb-10">
                <div className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear">
                    <img className="w-[600px] h-[410px] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none transition-all duration-700 ease-linear" src={jsImg} />
                </div>
                <div className="absolute right-32 top-[15%] w-3/5" onMouseEnter={imgBlur} onMouseLeave={remBlur}>
                    <h2 className="text-white font-bold text-3xl text-center mb-4 w-full">Javascript</h2>
                    <p className="w-full text-white text-lg">Empower your digital ambitions with our unparalleled JavaScript services. Our team of seasoned developers excels in creating dynamic and interactive web solutions that seamlessly blend innovation and functionality. Whether you're looking to build a feature-rich web application, enhance user engagement through animations, or optimize your existing JavaScript codebase, we deliver tailored solutions to meet your specific needs. With a focus on cutting-edge technologies and industry best practices, we ensure your digital assets not only meet but exceed the expectations of today's fast-paced online landscape. Elevate your web presence, drive user satisfaction, and unlock the full potential of JavaScript with our expert services. Partner with us for a transformative journey into the world of dynamic and responsive web development.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection