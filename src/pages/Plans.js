import '../App.css';
import React from 'react';
import PagesHeader from '../components/PagesHeader';
import Footer from '../components/footer'

function Plans () {
    const description = "Welcome to our Plans page, where we offer tailored services to elevate your web development journey. Choose from our range of HTML, JavaScript, and CSS packages designed to meet your unique project needs. Whether you're a beginner seeking fundamental skills or a seasoned developer aiming to enhance your expertise, our plans cater to all levels. Unlock the power of seamless code integration, responsive designs, and dynamic functionalities. Join us on this coding adventure and select the plan that aligns with your aspirations. Let's build the future of the web together!"
    return(
        <div>
            <header className='py-20'>
                <PagesHeader textSize={'text-3xl'} pageName={"Choose the plan that suits you the best"} pageDesc={description}/>
            </header>
            <footer className='py-10 bg-footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default Plans;