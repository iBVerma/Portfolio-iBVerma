import React from "react";
import { Link } from "react-router-dom";
import {Menu,MenuItem,MenuButton} from '@szhsin/react-menu'


export default function Nav(){
    const[height,setheight] = React.useState(window.innerHeight);
    const[width,setwidth] = React.useState(window.innerWidth);
    React.useEffect(() =>{
        const update = () =>{
            setheight(window.innerHeight);
            setwidth(window.innerWidth);
        }

        window.addEventListener("resize",update);
        return () => window.removeEventListener("resize",update);

    },[]) 

    // console.log(height);
    // console.log(width);

    return(
        <div className="Nav-">

            <Link to='/'>
                <img src="logo.jpg" className="logo"></img>
            </Link>

            {width > 600 ? 
            <div className="nav-names">
                <Link to="/about" className="name-about">
                    <h2>About</h2>
                </Link>
                <Link to="/projects" className="name-about">
                    <h2>Projects</h2>
                </Link>
                <Link to="/edu" className="name-about">
                    <h2>Education</h2>
                </Link>
                <Link to="/contact" className="name-about">
                    <h2>Contact</h2>
                </Link>
            </div>
            :
            <Menu menuButton={<MenuButton className='menubutton'>More</MenuButton>} className='menu--'>
                <Link to="/about" className="name-about">
                    <h2>About</h2>
                </Link>
                <Link to="/projects" className="name-about">
                        <h2>Projects</h2>
                </Link>
                <Link to="/edu" className="name-about">
                    <h2>Education</h2>
                </Link>
                <Link to="/contact" className="name-about">
                    <h2>Contact</h2>
                </Link>


            </Menu>
            }
            
        </div>
    )
}