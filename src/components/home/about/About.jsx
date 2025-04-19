// import React from 'react'
// import './About.css'


// const About = () => {
//     return (
//         <div className='aboutus-container'>
//             <h4>👔 About Groomz </h4>
//                 <h5>
//                 At Groomz, we specialize in rental services for groom wedding attire and essential accessories — helping grooms look their absolute best on their special day. Alongside this, we offer a wide range of men’s apparels for all kinds of celebrations and formal events.
//                 </h5>

//                 <h5>
//                 With over 6 years of experience in the industry, we understand how important it is for a groom to not just look good, but feel confident and comfortable. That’s why we’ve handpicked every piece in our collection — from traditional sherwanis, kurta-pajamas, bandhgalas, to stylish suits and tuxedos — ensuring top-tier quality, style, and fit.
//                 </h5>

//                 <h5>
//                 We also provide all essential wedding accessories, including turbans, stoles, brooches, footwear, and more — all available on rent, making it convenient and budget-friendly for you. Whether it's for weddings, receptions, engagements, or cultural functions, we’ve got the complete look covered.
//                 </h5>

//                 <h5>
//                 At Groomz, our goal is to make wedding dressing stress-free, affordable, and elegant. With personalized assistance, timely fittings, and a wide variety of designs and sizes, we make sure your outfit is the least of your worries and the highlight of your look.
//                 </h5>

//                 <h5>
//                 Join the hundreds of happy customers who’ve trusted Groomz for their big day — because every groom deserves to look royal.
//                 </h5>

//         </div>
//     )
// }

// export default About

import React from 'react'
import './About.css'

import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='aboutus-container'>
            <div className="aboutus-content">
                <h2>👔 About Groomz</h2>

                <p>
                    At <strong>Groomz</strong>, we specialize in premium rental services for groom wedding attire and essential accessories — helping grooms look their absolute best on their special day.
                </p>

                <p>
                    With a wide selection of men’s apparels for weddings, receptions, and formal occasions, we offer everything from traditional sherwanis and kurta-pajamas to classy tuxedos and bandhgalas.
                </p>

                <p>
                    Having proudly served customers for over <strong>6 years</strong>, we understand the importance of comfort, elegance, and budget-friendly options. Every item in our collection is handpicked to ensure the perfect blend of quality, style, and fit.
                </p>

                <p>
                    Our rental range includes everything — turbans, stoles, brooches, shoes, and more — so you don’t have to worry about hunting for accessories separately.
                </p>

                <p>
                    We believe that wedding dressing should be stress-free and enjoyable. With personalized assistance, expert fittings, and a variety of sizes and styles, Groomz ensures that every groom walks out with confidence and class.
                </p>

                <p>
                    Join the hundreds of happy clients who’ve trusted Groomz to deliver the perfect look — because every groom deserves to feel royal.
                </p>
                <Link className='links' to={'/'}>Back</Link>

            </div>
        </div>
    )
}

export default About
