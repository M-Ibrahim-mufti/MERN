import React from 'react';
import PagesHeaders from '../components/PagesHeader';
import Footer from '../components/footer';
import ServicesSection from '../components/ServiceSection';
import '../App.css';


function Services () {
    const headerDesc = "Here you will have all the details about our services what we are offering and how we are offering so scroll down and have a glimpse at our services and choose the offer that suits you the best"
    return(
        <div>
            <header className='py-20'>
                <PagesHeaders textSize={'text-4xl'} pageName={"Welcome to Our Services page"} pageDesc={headerDesc}/>
            </header>
            <section>
                <h2 className='text-center font-bold text-4xl text-white mb-5'>About Our Services</h2>
                <p className='w-1/2 text-white mx-auto text-center text-xl mb-5'>
                    Here is the List of services And description of what we sell,
                    how well we plan to satisfy our Customer with the most minimalistic Approach, We have well experienced group of individuals
                    that holds a strong grip on Services
                    In our services we include HTML CSS and JAVASCRIPT we provide the most efficient solutions for your needs.
                </p>
                <ServicesSection/>
            </section>
            <footer className='py-10 bg-footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default Services;