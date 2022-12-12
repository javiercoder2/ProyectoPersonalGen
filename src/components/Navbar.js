import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Boton2";
import './Boton2.css';
import './Hsection.css';
import './Cards.css';
import CardItem from './CardItem';
import './footer.css';


function Navbar() {
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
    <><><>
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
          <div className='hero-container'>
              <video src="/fondo3.mp4" autoPlay loop muted />

              <h1>Javier Ignacio Matias Sepulveda Ojeda</h1>
              <p>Contact Me and do some amazing things together!</p>
              <div className="hero-btns">
                  <Button
                      className="btns"
                      buttonStyle="btn--outline"
                      buttonSize="btn--large"
                  >
                      Starting
                  </Button>
                  <Button
                      className="btns"
                      buttonStyle="btn--primary"
                      buttonSize="btn--large"
                  >
                      Watch an Intro about Me <i className='far fa-play-circle' />
                  </Button>
                  ;
              </div>
          </div>
      </><div className='cards'>
              <h1>Check Out These Facts</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/img-6.jpg'
                              text='Exploration of new Languages. I speak four of them!'
                              label='Adventure'
                              path='/services' />
                          <CardItem
                              src='images/img-7.jpg'
                              text='Self-Instructing by nature'
                              label='Luxury'
                              path='/services' />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/img-5.jpg'
                              text='These are my best'
                              label='Mystery'
                              path='/services' />
                          <CardItem
                              src='images/img-9.jpg'
                              text='Experience Football on Top of the Himilayan Mountains'
                              label='Adventure'
                              path='/products' />
                          <CardItem
                              src='images/user.png'
                              text='Ride through the Sahara Desert on a guided camel tour'
                              label='Adrenaline'
                              path='/sign-up' />
                      </ul>
                  </div>
              </div>
          </div></><div className='footer-container'>
              <section className='footer-subscription'>
                  <p className='footer-subscription-heading'>
                      Join the Adventure newsletter to receive our best vacation deals
                  </p>
                  <p className='footer-subscription-text'>
                      You can unsubscribe at any time.
                  </p>
                  <div className='input-areas'>
                      <form>
                          <input
                              className='footer-input'
                              name='email'
                              type='email'
                              placeholder='Your Email' />
                          <Button buttonStyle='btn--outline'>Subscribe</Button>
                      </form>
                  </div>
              </section>
              <div class='footer-links'>
                  <div className='footer-link-wrapper'>
                      <div class='footer-link-items'>
                          <h2>About Javier</h2>
                          <Link to='/sign-up'>How I work</Link>
                          <Link to='/'>Certifications</Link>
                          <Link to='/'>Careers</Link>
                          <Link to='/'>Preference of Work Environment</Link>
                      </div>
                      <div class='footer-link-items'>
                          <h2>Contact Me</h2>
                          <Link to='/'>Contact</Link>
                          <Link to='/'>Address</Link>
                          <Link to='/'>Videos in Youtube</Link>
                      </div>
                  </div>
                  <div className='footer-link-wrapper'>
                      <div class='footer-link-items'>
                          <h2>Videos</h2>
                          <Link to='/'>Submit Video</Link>
                          <Link to='/'>Ambassadors</Link>
                          <Link to='/'>Agency</Link>
                          <Link to='/'>Influencer</Link>
                      </div>
                      <div class='footer-link-items'>
                          <h2>Social Media</h2>
                          <Link to='/'>Instagram</Link>
                          <Link to='/'>Facebook</Link>
                          <Link to='/'>Youtube</Link>
                          <Link to='/'>Twitter</Link>
                      </div>
                  </div>
              </div>
              <section class='social-media'>
                  <div class='social-media-wrap'>
                      <div class='footer-logo'>
                          <Link to='/' className='social-logo'>
                              Javier_Coder
                              <i class='fab fa-typo3' />
                          </Link>
                      </div>
                      <small class='website-rights'>Javier_Coder 2022</small>
                      <div class='social-icons'>
                          <Link
                              class='social-icon-link facebook'
                              to='/'
                              target='_blank'
                              aria-label='Facebook'
                          >
                              <i class='fab fa-facebook-f' />
                          </Link>
                          <Link
                              class='social-icon-link instagram'
                              to='/'
                              target='_blank'
                              aria-label='Instagram'
                          >
                              <i class='fab fa-instagram' />
                          </Link>
                          <Link
                              class='social-icon-link youtube'
                              to='/'
                              target='_blank'
                              aria-label='Youtube'
                          >
                              <i class='fab fa-youtube' />
                          </Link>
                          <Link
                              class='social-icon-link twitter'
                              to='/'
                              target='_blank'
                              aria-label='Twitter'
                          >
                              <i class='fab fa-twitter' />
                          </Link>
                          <Link
                              class='social-icon-link twitter'
                              to='/'
                              target='_blank'
                              aria-label='LinkedIn'
                          >
                              <i class='fab fa-linkedin' />
                          </Link>
                      </div>
                  </div>
              </section>
          </div></>
);
}


export default Navbar;
