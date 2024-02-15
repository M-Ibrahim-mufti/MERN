import '../App.css';
import React from 'react';
import Header from '../components/Header'; 
import { useState } from 'react';
import HeaderCards from '../components/HeaderCards';
import SideImage from '../components/SideImage';

function Home () {
    const [bgStay, setBgStay] = useState(false)
    const brainDisplay = () => {
        setBgStay(true)
        let brain = document.getElementById("brain")
        brain.classList.remove('-z-10')
        brain.firstChild.classList.remove('opacity-0')
        brain.firstChild.classList.add('opacity-1', 'transition-opacity', 'duration-1000', 'linear' )
        setTimeout(() => {
            brain.classList.add('brain-pulsing')
        }, 2500);
    }

    const bgPositioning = (e) => {
        e.currentTarget.classList.add('bg-positioning')
    }
    
    return(
        <div>
            <header className={`bg-header ${bgStay ? 'bg-stay' : ''} `} onMouseEnter={bgPositioning} onTransitionEnd={brainDisplay}>
                <Header/>
            </header>
            <section className='py-20'>
                <HeaderCards/>
            </section>
            <section className='py-20'>
                <SideImage/>
            </section>
        </div>
    );
}

export default Home