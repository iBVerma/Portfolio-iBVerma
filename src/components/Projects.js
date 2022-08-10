import React from "react";


export default function Projects(){
    return(
        <div className="projects">
            <h1 className="page-main-head">Projects</h1>
            <hr className="line"/>
            <div className="project-card">
                <div className="card-1">
                    <h1 className="card-heading">Tenzies Game</h1>
                    <p className="card-para">A Game made using ReactJS, React Redux, React router, Nanoid</p>
                    <a href="https://62e5739a07f32439ca84ab66--game512.netlify.app/" className="proj-click">Live Link</a>
                    <br/>
                    <br/>
                    <a href="https://github.com/iBVerma/TenziesGame" className="card-link">Learn More</a>
                </div>
                <div className="card-1">
                    <h1 className="card-heading">Portfolio</h1>
                    <p className="card-para">Portfolio App made using ReactJS, React Router</p>
                    <a href="https://62e5739a07f32439ca84ab66--game512.netlify.app/" className="proj-click">Live Link</a>
                    <br/>
                    <br/>
                    <a href="https://github.com/iBVerma/TenziesGame" className="card-link">Learn More</a>
                </div>
            </div>
        </div>
    )
}