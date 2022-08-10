import React from "react";

export default function Contact(){
    return(
        <div className="contact">
            <h1 className="page-main-head">Contact</h1>
            <hr className="line"/>

            <div className="contactmail">
                <a href="https://www.vermabrijesh512@gmail.com" className="contactmail-">
                    <img src="mail.png" className="contactmail-"></img>
                </a>
                <a href="https://www.vermabrijesh512@gmail.com"  className="contact-id">
                    <h2>vermabrijesh512@gmail.com</h2>
                </a>
            </div>
            <div className="linkedincontact">
                <a href="https://www.linkedin.com/in/brijesh-verma-8aa54b202/" >
                <img src="linkedin.png" className="contactlinkedin"></img>
                </a>
                <a href="https://www.linkedin.com/in/brijesh-verma-8aa54b202/"  className="contact-id-2">
                    <h2>Brijesh Verma</h2>
                </a>

            </div>
        </div>
    )
}