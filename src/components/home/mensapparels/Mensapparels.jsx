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

import groomone from '../../../images/groomz/groom_one.jpg'
import groomtwo from '../../../images/groomz/groom_two.jpg'
import groomthree from '../../../images/groomz/groom_three.jpg'
import groomfour from '../../../images/groomz/groom_four.jpg'

import './Mensapparels.css'

const Mensapparels = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [index, setIndex] = useState(0)
    const [fadeClass, setFadeClass] = useState('fade-image');
    const [groomFadeClass, setGroomFadeClass] = useState('fade-image');

    const images = [one, two, three, four, five, six, seven]
    const groomImages = [groomone, groomtwo, groomthree, groomfour]
    // const handleLeftClick = () => {
    //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    // }

    // const handleRightClick = () => {
    //     setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    //     }, 5000);

    //     return () => clearInterval(interval); // clean up on unmount
    // }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass('fade-out'); // trigger fade out

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                // setIndex((prev) => (prev + 1) % groomImages.length)
                setFadeClass('fade-image'); // trigger fade in
            }, 2000); // match this to fadeOut duration
        }, 7000); // how often image changes

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setGroomFadeClass('fade-out');
    
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % groomImages.length);
                setGroomFadeClass('fade-image');
            }, 2000); // fade out duration
        }, 7000); // change interval
    
        return () => clearInterval(interval);
    }, [groomImages.length]);


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
                        className={fadeClass}
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
                        key={index}
                        src={groomImages[index]}
                        alt=""
                        width="450px"
                        height={"600px"}
                        className={groomFadeClass}
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