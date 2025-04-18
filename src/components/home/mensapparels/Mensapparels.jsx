import React, { useState, useEffect } from 'react'

import left from "../../../images/angle-left.png"
import right from "../../../images/angle-right.png"

import one from '../../../images/apparels/one.jpg'
import two from '../../../images/apparels/two.jpg'
import three from '../../../images/apparels/three.jpg'
import four from '../../../images/apparels/four.jpg'
import five from '../../../images/apparels/five.jpg'
import six from '../../../images/apparels/six.jpg'
import seven from '../../../images/apparels/seven.jpg'

import './Mensapparels.css'

const Mensapparels = () => {

    const groomzImages = [
        // "https://www.instagram.com/groomz_wedding/p/DDqtaOkPPjF/?img_index=1",
        "https://www.instagram.com/r_a_s_h_i_d__96/p/DDcY-6fywBv/"]

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [one, two, three, four, five, six, seven]

    const handleLeftClick = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleRightClick = () => {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval); // clean up on unmount
    }, [images.length]);

    return (
        <div className='apparels-containers'>


            <div className="container-one">
                <div className="image-wrapper">
                    {/* <button className="arrow-button left" onClick={handleLeftClick}>
                        <img src={left} alt="left" />
                    </button> */}
                    {/* <img src={images[currentIndex]} alt="" width="450px" /> */}
                    <img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt=""
                        width="450px"
                        className="fade-image"
                    />
                    {/* <button className="arrow-button right" onClick={handleRightClick}>
                        <img src={right} alt="right" />
                    </button> */}
                </div>
            </div>


            <div className='container-one'>
                <div className="image-wrapper">
                    {/* <button className="arrow-button left" onClick={handleLeftClick}>
                        <img src={left} alt="left" />
                    </button> */}
                    {/* <img src={images[currentIndex]} alt="" width="450px" /> */}
                    <img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt=""
                        width="450px"
                        className="fade-image"
                    />
                    {/* <button className="arrow-button right" onClick={handleRightClick}>
                        <img src={right} alt="right" />
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Mensapparels