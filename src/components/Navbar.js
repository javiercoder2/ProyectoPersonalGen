import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Boton2";
import './Boton2.css';
import './Cards.css';
import CardItem from './CardItem';
import './footer.css';
import CV from "../img/CvJavierSepulveda.jpg";
import "./Me.css";
/* import video from "../img/fondo3.mp4";
 */import {Carousel} from 'react-bootstrap'


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
              <a id="resume" download="" href={CV} className=""> Download Resume
      <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
              </a>
          </nav>
          <div className='hero-container'>
            
{/*               <video width="750" height="500" autoPlay loop muted >
                <source src={video} type="video/mp4"/>
               </video> */}
               <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        
                    />
                    <div className='Prueba'>
                    <Carousel.Caption className="Carousel.Caption">
                    <form className="Prueba2" role="search">
                
                    <h1 id="name"className="fst-italic" >Javier Ignacio  Sepulveda Ojeda</h1>
              <p>Contact Me and do some amazing things together!</p>
              </form>
              <div id="buttonintro" className="hero-btns">

                  <iframe id="cvvideo" width="650" height="350" src="https://www.youtube.com/embed/kbmPtX9wXGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              </div>
                    
                 </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                                    <div className='Prueba'>

                    <Carousel.Caption>
                    <form className="Prueba2" role="search">
                
                <h1 id="name" className="fst-italic">I know React, Java, JS, Python, MySql</h1>
          <p>And so many more!</p>
          </form>
          <div id="buttonintro"className="hero-btns">

              <Button
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                  
              >
                  Check my Projects
              </Button>
              <Button
                  className="btns"
                  buttonStyle="btn--primary"
                 buttonSize="btn--large"
               
              >
                
                  Watch an Intro about Me <i className='far fa-play-circle' />
              </Button>
              
          </div>
                
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <div className='Prueba'>
                    <Carousel.Caption>
                    <form className="Prueba2" role="search">
                
                <h1 id="name"className="fst-italic">I have experience working with international customers</h1>
          <p>+6 years working with people from India, Canada, Finland, USA, Brazil, Peru, among other countries!</p>
          </form>
          <div id="buttonintro"className="hero-btns">
              <Button
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
              >
                  Check my Projects
              </Button>

              <Button
                  className="btns"
                  buttonStyle="btn--primary"
                 buttonSize="btn--large"
               
              >
                        <a href="https://www.linkedin.com/in/Javiersepulveda/" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >

                            </a>
                  Watch an Intro about Me
              </Button>
              
          </div>
                
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <div className='Prueba'>
                    <Carousel.Caption>
                    <form className="Prueba2" role="search">
                
                <h1 id="name" className="fst-italic">Skills related to team work and acknowledged methodologies</h1>
          <p>Agile Methodology, active listening, collaboration, tima management and critical thinking</p>
          </form>
          <div id="buttonintro" className="hero-btns">
              <Button
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
              >
                  Check my Projects
              </Button>
              <Button
                  className="btns"
                  buttonStyle="btn--primary"
                  buttonSize="btn--large"
              >
                  Watch an Intro about Me <i className='far fa-play-circle' />
              </Button>
              
          </div>
                
                    </Carousel.Caption>

                    </div>
                </Carousel.Item>
            </Carousel>


          </div>
      </><div className='cards'>
              <h1 className="fst-italic">Check Out These Facts</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/imagenidiomas.jpg'
                              text='Exploration of new Languages. I speak four of them!'
                              label='Polyglot'
                              path='/Polyglot' />
                          <CardItem
                              src='images/imagenautodidacta.JPG'
                              text='Self-Instructing by nature'
                              label='Learning'
                              path='/Learning' />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/tico8.JPG'
                              text='These are my Best Programming Languages'
                              label='Programming Languages '
                              path='/Personal' />
                          <CardItem
                              src='images/tico3.JPG'
                              text='Personal skills which are part of me'
                              label='Soft Skills'
                              path='/Personal' />
                          <CardItem
                              src='images/tico7.JPG'
                              text='The things I love to do and how I see myself at work'
                              label='Hobbies and Likes'
                              path='/Me' />
                      </ul>
                  </div>
              </div>
          </div></><div className='footer-container'>
              <section className='footer-subscription'>
                  <p className='footer-subscription-heading'>
                      Contact me and let's talk
                  </p>
                  <p className='footer-subscription-text'>
                      Send me an Email so we can get in touch
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
                          <Link to='/Professional'>How I work</Link>
                          <Link to='/Certifications'>Certifications</Link>
                          <Link to='/Career'>Careers</Link>
                          <a href="https://www.indeed.com/career-advice/finding-a-job/different-work-environment-types">
                          Preference of Work environments
                          </a>                      </div>
                      <div class='footer-link-items'>
                          <h2>Contact Me</h2>
                          <a href="https://javier-sepulveda.online/">
                          Contact in Spanish
                          </a>
                          <a href="https://javier-sepulveda.online/">
                          Address
                          </a>
                      </div>
                  </div>
                  <div className='footer-link-wrapper'>
                      <div class='footer-link-items'>
                          <h2>Videos</h2>
                          <Link to='/'>CV Video</Link>
                          <Link to='/'>Linux and commands</Link>
                          <Link to='/'>Front-End videos</Link>
                          <Link to='/'>Back-End videos</Link>
                      </div>
                      <div class='footer-link-items'>
                          <h2>Social Media</h2>
                          <Link to='https://www.youtube.com/watch?v=nN-SuhgTWF0&list=PLJY0BeTKoGAyibBAMAIqdnUDH5mIW4eQg&index=4'>GitHub</Link>
                          <Link to='/'>Youtube</Link>
                          <Link to='/'>Linkedin</Link>
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
                      <small class='website-rights'>Javier_Coder, 2022</small>
                      <div class='social-icons'>


                      <a href="https://www.youtube.com/@javiersepulveda8906" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-youtube' />

                            </a>
                            <a href="https://google.com" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-twitter' />

                            </a>
                            <a href="https://github.com/javiercoder2" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-github' />

                            </a>
                            <a href="https://wa.link/vyicxb" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-whatsapp' />

                            </a>
                            <a href="https://www.linkedin.com/in/Javiersepulveda/" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-linkedin' />

                            </a>
                      </div>
                  </div>
              </section>
          </div></>
);
}


export default Navbar;
