import '../App.css';
import React from 'react';
import Header from '../components/Header'
import Footer from '../components/footer';
import { useState } from 'react';

function Home () {
    const [bgFix, setbgFix] = useState(false)
    let brain = document.getElementById('brain')

    const handleContent = () => {
        setTimeout(() =>{
            brain.classList.remove('opacity-0', '-z-10')
            brain.classList.add('opacity-100', 'transition-opacity', 'duration-300', 'ease-linear', 'z-10')
        },2500)
    }
    return(
    <div>
        <header className={`bg-header ${ bgFix ? 'bg-stay' : '' }`} onMouseEnter={handleContent}  onTransitionEnd={() => setbgFix(true) }>
            <Header/>
        </header>
        <footer className='bg-[#0b273d]'>
            <Footer/>
        </footer>
    </div>
    );
}

export default Home