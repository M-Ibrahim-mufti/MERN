import React, { useEffect } from "react";
import "../App.css";
import PagesHeader from "./PagesHeader";
function Header () {   
    const pageName = "Welcome to My App" 
    const pageDesc = "Unlock the potential of your website with our comprehensive HTML, CSS, and JavaScript services. Whether you're a startup, small business, or an established enterprise, we're here to elevate your online presence and bring your vision to life."
    return (
        <div>
            <PagesHeader textSize={'text-4xl'} pageName={pageName} pageDesc={pageDesc}/>
        </div>
    );
}

export default Header;