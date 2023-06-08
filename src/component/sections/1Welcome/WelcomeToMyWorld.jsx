import React from "react";
import Typed from "react-typed";




function WelcomeToMyWorld() {


    const textLines = [
        `Web Developer.`,
        `Coder.`,
        `Creative.`,
    ];

    return (
        <div id="welcomeToMyWebSite">
            <div className="welcomeToMyWorldSection-continer">

                <div className="welcomeToMyWorldSection-left">
                    <div className="left-contanir">
                        <div className="my-front-data">
                            <h1 className="typo">Hi, I'm <span className="subName">Ahmed Allam</span></h1>
                            <h1 className="typoChanger">a <span className="auto-type">  <Typed strings={textLines} typeSpeed={60} backSpeed={60} startDelay={500} backDelay={500} loop={true} /> </span></h1>
                            <p className="pleasureLine">It's a Pleasure To Be In My World</p>
                            <p className="description"> a Front End Web Developmet, using React js as a Framework and also
                                using a Multiple language, Creative in some points and can do anything i see into Code, ambition to learn alot of new skills to improve my self.</p>
                        </div>
                    </div>
                </div>

                <div className="space welcomeToMyWorldSection-right">
                    <img data-aos-anchor-placement="center-center" className="personal-img" src="img\portfolioImgs\PortfoiloImg.png" alt="" />
                    {/* <img data-aos-anchor-placement="center-center" className="personal-img" src="img\portfolioImg.png" alt="" /> */}
                </div>
            </div>
            {/* <img className="settingCharacters" src="img\welcomeToAbout1.png" alt="" /> */}
        </div>
    )
}


export default WelcomeToMyWorld;