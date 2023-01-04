import React from 'react';
import './footer.css';
import { Button } from './Boton2';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        If you'd like to know more about me, contact me!
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
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Javier</h2>
            <Link to='/sign-up'>How I work</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Address</Link>
            <Link to='/'>Videos in youtube</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>CV Vido</Link>
            <Link to='/'>Linux and commands</Link>
            <Link to='/'>Front-end Videos</Link>
            <Link to='/'>Back-end Vidos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>GibHub</Link>
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
                              class='social-icon-link linkedin'
                              to='/'
                              target='_blank'
                              aria-label='LinkedIn'
                          >
                              <i class='fab fa-linkedin' />
                          </Link>
                          <Link
                              class='social-icon-link github'
                              to='/'
                              target='_blank'
                              aria-label='github'
                          >
                              <i class='fab fa-github' />
                          </Link>
                          <Link
                              class='social-icon-link whatsapp'
                              to='/'
                              target='_blank'
                              aria-label='github'
                          >
                              <i class='fab fa-whatsapp' />
                          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;