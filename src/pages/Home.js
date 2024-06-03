import '../App.css';
import React from 'react';
import Header from '../components/Header'; 
import HeaderCards from '../components/HeaderCards';
import SideImage from '../components/SideImage';
import Footer from '../components/footer';
function Home () {

    return(
        <div>
            <header className='py-20'>
                <Header/>
            </header>
            <section className='py-20 bg-footer'>
                <SideImage/>
            </section>
            <section className='py-20'>
                <HeaderCards/>
            </section>
            <footer className='py-10 bg-footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default Home;