import React from "react";

export default function Home(){
    return(
        <div className="home">
            <h1 className="home-head">Hello, I am Brijesh</h1>
            <p>I am an ECE sophomore at IIIT Pune. I like Solving DSA related problems, Building new things.I have entry-level experience with Javascript, HTML, CSS, ReactJS, React Redux, React Router.</p>
            <br />
            <br />
            <h2 className="cpname">Competitive Programming</h2>
            <div className="cp">
                <a href="https://codeforces.com/profile/_bverma512">
                    <img src="cf.png" className="cp-img"></img>
                    <h2 className="cf-text">Codeforces Handle</h2>
                </a>
                <a href="https://www.codechef.com/users/its_b_512">
                    <img src="cc.png" className="cp-img"></img>
                    <h2 className="cf-text">Codechef Handle</h2>
                </a>
            </div>
        </div>
    )
}