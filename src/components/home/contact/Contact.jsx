import React from 'react'
import './Contact.css'

// import logo from '../../../images/instagram.jpg'
import logo from '../../../images/Instagram.jpg'
import { Link } from 'react-router-dom';
// import logo from '../../../../public/instagram.jpg'

const handleInstagramClick = () => {
    const instgramUrl = "https://www.instagram.com/groomz_wedding/"; // example: Delhi coordinates
    window.open(instgramUrl, "_blank"); // open in new tab
}

const Contact = () => {

    const handleCall = () => {
        window.opene(`tel:${+918943981859}`);
    };

    const handleCallTwo = () => {
        window.open(`tel:${+919645773395}`)
    }
    return (
        <div className='contact'>
            <div className='contat-container'>
                <img
                    src={logo} 
                    alt="instagram" width={"50px"} height={"50px"} onClick={handleInstagramClick} />
                <h3>Edavannappara</h3>
                <h5>Kozhikode Road </h5>
                <h5>Malappuram</h5>
                <h5>Kerala</h5>
                <h5>673645</h5>
            </div>
            <div className='contact-us'>
                <Link style={{textDecoration:'none'}} to={'/about'}>About us</Link>
                <Link style={{textDecoration:'none'}} to={'/terms&conditions'}>Terms & Conditions</Link>
                <h4>Contact us - </h4>
                <a style={{textDecoration:'none'}} href={`tel:${+918943981859}`} onClick={handleCall}>
                    8943981859
                </a>
                <a style={{textDecoration:'none'}} href={`tel:${+919645773395}`} onClick={handleCallTwo}>
                    9645773395
                </a>
            </div>
        </div>
    )
}

export default Contact
