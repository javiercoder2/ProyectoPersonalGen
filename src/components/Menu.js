import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Boton2";
import './Boton2.css';

function Menu() {
    //Creamos el actuar de los click
    const [click, setClick] = useState(false);
  
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    //Creamos const para cerrar el sign
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    },[]);
  
  
    window.addEventListener("resize", showButton);
    return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Javier_Coder
                        <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
  
  
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Professional"
                                className="nav-links"
                                onclick={closeMobileMenu}
                            >
                                Professional Background
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Personal"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Personal Background
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Me"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Know Me
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Projects</Button>}
                </div>
            </nav>
    )
}
export default Menu;