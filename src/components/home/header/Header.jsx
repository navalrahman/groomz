import React from 'react';

import './Header.css'


import logo from '../../../images/logo.svg'

const Header = () => {

    const handleLocationClick = () => {
        const googleMapsUrl = "https://maps.app.goo.gl/XkP69GE64Z9GJqL76"; // example: Delhi coordinates
        window.open(googleMapsUrl, "_blank"); // open in new tab
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };
    return (
        <div className='header-container'>
            <img src={logo} alt="logo"  width={"70px"}/>
            {/* <h1>Logo</h1> */}
            <div className='heading'>
                <h5>Rasheeda's</h5>
                <h1>GROOM'Z </h1>
                <h4>Wedding Costumes, Mens Apparels</h4>
            </div>
            <div className='contact-location'>
                <h4 onClick={scrollToBottom}>Contact</h4>
                <h4 onClick={handleLocationClick}>Location</h4>
            </div>
        </div>
    )
}

export default Header