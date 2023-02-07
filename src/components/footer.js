import React from 'react';
import './footer.css';
import { Button } from './Boton2';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
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
                          </a>
                      </div>
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
                      </div>                      </div>

      </section>
    </div>
  );
}

export default Footer;