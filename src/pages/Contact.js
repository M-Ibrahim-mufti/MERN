import '../App.css';
import React from 'react';
import PagesHeader from '../components/PagesHeader';
import ContactForm from '../components/ContactForm';
import Footer from '../components/footer';

function Contact () {
    const headerDesc = "If you have any questions, comments, or suggestions, please feel free to reach out to us. We value your feedback and are committed to providing the best possible service to our customers. Whether you need assistance with an order, have inquiries about our products or services, or simply want to share your thoughts, our dedicated team is here to help. You can contact us via email at ibrahimmufti36@gmail.com, give us a call at +92 327 8899863, or fill out the form below. We endeavor to respond to all inquiries promptly and look forward to hearing from you."
    const headerName = "Contact Us"
    return(
        <div>
            <header className='py-20'>
                <PagesHeader textSize={"text-4xl"} pageName={headerName} pageDesc={headerDesc} />
            </header>
            <section className='py-20'>
                <ContactForm/>
            </section>
            <footer className='py-10 bg-footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default Contact;