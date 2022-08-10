import React from "react";

export default function About(){
    return(
        <div className="about">
            <h1 className="page-main-head">About</h1>
            <hr className="line"/>
            <div className="info-">
                <div className="info--">
                    <h1>Brijesh Verma</h1>
                    <h3>ECE Student</h3>
                    <h3>IIIT Pune</h3>
                    <div className="info--logo">
                        <a href="https://www.linkedin.com/in/brijesh-verma-8aa54b202/" className="about-logo">
                            <img src="linkedin.png" className="logo1"></img>
                        </a>
                        <a href="https://github.com/iBVerma">
                            <img src="github.png" className="logo1"></img>
                        </a>
                    </div>
                </div>
                <p>I am an ECE sophomore at IIIT Pune. I like Solving DSA related problems, Building new things.I have entry-level experience with Javascript, HTML, CSS, ReactJS, React Redux, React Router. I am also a Competitive Programmer, Solved more than 700+ Problems on Codeforces and Codechef. Max(1224) - Pupil on Codeforces and max(1833) - 4 * on Codechef.</p>
            </div>
        </div>
    )
}