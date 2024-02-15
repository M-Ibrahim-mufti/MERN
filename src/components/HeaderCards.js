import React, { useEffect } from 'react'
import htmlImg from '../Assets/HTML_logo.svg'
import cssImg from '../Assets/CSS_logo.svg'
import jsImg from '../Assets/JS_logo.svg'

function HeaderCards() {
    const displayingCard = (e) => {
        e.currentTarget.classList.add('translate-x-36', 'transition-all', 'duration-1000', 'linear')

        let content = e.currentTarget.parentElement.nextElementSibling
        content.classList.remove('hidden')
        setTimeout(() => {
            content.children[0].classList.remove('opacity-0', '-z-[1]', '-translate-y-24')
            content.children[0].classList.add('translate-y-0', 'opacity-1', 'transition-all', 'duration-1000', 'linear')
            setTimeout(() => {
                content.children[1].classList.remove('opacity-0', '-z-[1]', '-translate-y-24')
                content.children[1].classList.add('translate-y-0', 'opacity-1', 'transition-all', 'duration-1000', 'linear')
                setTimeout(() => {
                    content.children[2].classList.remove('opacity-0', '-z-[1]', '-translate-y-24')
                    content.children[2].classList.add('translate-y-0', 'opacity-1', 'transition-all', 'duration-1000', 'linear')    
                    setTimeout(() => {
                        content.parentElement.classList.add('card-styling')
                        setTimeout(() => {
                            content.previousElementSibling.classList.add('card-img'); 
                            content.parentElement.parentElement.classList.add('card-borders');   
                        }, 1200);
                    }, 500);            
                }, 500);
            }, 500);
        }, 500);
    }

    return (
        <div className='container max-w-7xl mx-auto text-center'>
            <div className='text-xl mb-16 text-white'>
                <h2 className='font-bold text-4xl mb-6'>Welcome to My App</h2>
                <div className='w-3/4 mx-auto'>
                    <p className="">To learn about the Services we are providing hope on to our Card section and choose whatever seems best for you</p>
                    <p className="">Here we have 3 different categories distributed as HTML CSS and JAVASCRIPT</p>
                    <p className="">Please choose from the card below which you want to Practice or Learn about</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-14 text-white'>
                <div className='w-full h-full bg-transparent flex justify-center items-center'>
                    <div className='flex flex-col h-[98%] w-[98%]'>
                        <div className='my-5 flex justify-start mx-5'>
                            <img className='w-16 h-16 rounded-full cursor-pointer' src={htmlImg} onClick={displayingCard}/>
                        </div>
                        <div className="hidden">
                            <div className='relative text-2xl text-left -translate-y-24 mx-5 opacity-0 -z-[1]'>
                                <h2>HTML - Hyper Text Mark-up Language</h2>
                            </div>
                            <div className='relative text-2xl text-left mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <h2 className='font-bold my-3'>Description</h2>
                                <p className='text-base '>HTML is a standard markup language used to create and design documents on the World Wide Web. It consists of a series of elements represented by tags, which structure content such as text, images, links, and multimedia. Browsers interpret HTML to render web pages for users.</p>
                            </div>
                            <div className='relative flex justify-end my-5 -translate-y-24 mx-5 opacity-0 -z-[1]'>
                                <button className='text-white w-36 h-10 border-2 mt-4 border-[#9b9b9b] rounded-3xl bg-transparent'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className='w-full h-full bg-transparent flex justify-center items-center'>
                    <div className='flex flex-col h-[98%] w-[98%]'>
                        <div className='my-5 flex justify-start mx-5'>
                            <img className='w-16 h-16 rounded-full cursor-pointer' src={cssImg} onClick={displayingCard}/>
                        </div>
                        <div className='hidden'>
                            <div className='relative text-2xl text-left mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <h2>CSS - Cascading Style Sheet</h2>
                            </div>
                            <div className='relative text-2xl text-left mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <h2 className='font-bold my-3'>Description</h2>
                                <p className='text-base'>CSS Cascading Style Sheets is a styling language used to describe the presentation of a document written in HTML. It enables the separation of content from design, allowing developers to control the appearance of web pages.CSS rules consist of selectors, properties, and values,  influencing the layout and visual aspects of elements on a webpage. </p>
                            </div>
                            <div className='relative flex justify-end my-5 mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <button className='text-white w-36 h-10 border-2 mt-6 border-[#9b9b9b] rounded-3xl bg-transparent'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full bg-transparent flex justify-center items-center'>
                    <div className='flex flex-col h-[98%] w-[98%]'>
                        <div className='my-5 flex justify-start mx-5'>
                            <img className='w-16 h-16 rounded-full cursor-pointer' src={jsImg} onClick={displayingCard}/>
                        </div>
                        <div className='hidden'>
                            <div className='relative text-2xl text-left mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <h2>JS - Java Script</h2>
                            </div>
                            <div className='relative text-2xl text-left mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <h2 className='font-bold my-3'>Description</h2>
                                <p className='text-base'>JavaScript is a versatile, high-level programming language primarily used for web development. It enables dynamic, interactive content on websites, facilitating client-side scripting for enhanced user experiences. As an essential component of modern web development, JavaScript runs in browsers and allows developers to manipulate the Document Object Model DOM for seamless interactivity.</p>
                            </div>
                            <div className='relative flex justify-end my-5 mx-5 -translate-y-24 opacity-0 -z-[1]'>
                                <button className='text-white w-36 h-10 border-2 border-[#9b9b9b] rounded-3xl bg-transparent'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCards