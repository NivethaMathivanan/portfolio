import React, { useState } from "react";
import "../Component/Css/About.css";
import PopupCard from "./PopupCard";
function About() {
    const [showLoading, setShowLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume/Nivetha_Mathivanan_Resume.pdf";
        link.download = "Nivetha_Mathivanan_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleGameClick = () => {
        setShowLoading(true);
        setShowPopup(false); // make sure popup isn't shown before the delay

        setTimeout(() => {
            setShowLoading(false);
            setShowPopup(true);
        }, 5000); // 5 seconds delay
    };
    return (
        <section className="about-section " id="about">
            <div className="about-wrapper row">

                <div className="about-right col-lg-12">
                    <h1 className="about-subtitle">About Me</h1>
                    <h2 className="about-title">

                        I'm <span className="highlight">Nivetha Mathivanan </span> <br /> Front-End <span className="highlight">Developer</span>
                    </h2>
                    <h3 className="about-location">Based in India</h3>
                    <p className="about-education">B.Sc. Botany Graduate | Passionate about Front-End Development</p>

                    <p className="about-para">
                        Hi! My name is <span className="aboutRed"> Nivetha Mathivanan.</span>  I am a Passionate <span className="highlight">Front-End Developer</span> skilled in
                        React.js, Redux, JavaScript, HTML, CSS, and Bootstrap.
                        <br /><br />
                        I'm a B.Sc. Botany graduate, now diving into tech with strong UI skills using React, Redux, and Tailwind CSS.
                        I focus on clean code and modern design.
                    </p>
                    <div className="aboutButtons ">
                        <button className="btn-cv  mt-2" onClick={handleDownload}>
                            Download CV
                        </button>

                        <button className="gamePlay mt-2 " style={{ marginLeft: "10px" }} onClick={handleGameClick}>
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <span>Try a Game</span>
                        </button>
                    </div>
                    {showLoading && (
                        <div className="loading-animation mt-3">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="text-white">Clicking the button triggers an engaging animation, followed by a popup introducing a fun Balloon Game built using JavaScript.”</div>
                            
                        </div>
                    )}
                </div>
            </div>
            {showPopup && <PopupCard onClose={() => setShowPopup(false)} />}
        </section>
    );
}

export default About;
