import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Navbar=()=>{

    React.useEffect(()=>{
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelectorAll(".nav-link");
        
        hamburger.addEventListener("click", mobileMenu);
        navLink.forEach(n => n.addEventListener("click", closeMenu));
        
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    })

    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log('split',  splitLocation[1] === "highboard" ? "active" : "")
  return (
      <>
      {console.log('lol')}
      <header className="header">
        <nav className="navbar">

            <a href="#" class="nav-logo">MSP.</a>
            <ul className="nav-menu">
                <li className="nav-item" >
                    <Link to={"/"} className={ `nav-link ${splitLocation[1] === "" ? "active" : ""}`}>
                        Home
                    </Link>
            
                </li>
                <li className="nav-item">
                <Link to={"/events"}  className={ `nav-link ${splitLocation[1] === "events" ? "active" : ""}`}>
                        Events
                    </Link>
                </li>
                <li className="nav-item">
                <Link to={"/highboard"} className={ `nav-link ${splitLocation[1] === "highboard" ? "active" : ""}`}>
                        HighBoard
                    </Link>
                </li>
                <li className="nav-item">
                <Link to={"/about"} className={ `nav-link ${splitLocation[1] === "about" ? "active" : ""}`}>
                        AboutUs
                    </Link>
                </li>
                <li className="nav-item">
                <Link to={"/contact"} className={ `nav-link ${splitLocation[1] === "contact" ? "active" : ""}`}>
                        ContactUs
                    </Link>
                </li>
            </ul>
            <div class="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
</header>


    </>
  )
}

export default Navbar