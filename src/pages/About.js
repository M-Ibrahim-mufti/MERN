import '../App.css';
import React from 'react';
import PagesHeader from '../components/PagesHeader'
import Footer from '../components/footer'
import AboutCircle from '../components/AboutCircle';

function About () {
    const pageName = "About Us"
    const pageDesc = "At My-App, we believe that a website is more than just a collection of pages; it's a digital embodiment of your brand's identity and values. It's where creativity intersects with technology, and user experience reigns supreme. Our journey began with a simple yet powerful idea: to create stunning websites that not only captivate audiences but also drive tangible results for our clients." 
    return(
        <div>
            <section className='py-20'>
                <PagesHeader textSize={"text-4xl"} pageName={pageName} pageDesc={pageDesc}/>
            </section>
            <section className='py-20'>
                <AboutCircle/>
            </section>
            <footer className='py-10 bg-footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default About;