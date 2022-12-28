import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import About from '../components/Me';


const Me = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='Me fst-italic'>About Myself</h1>
            </div>
            <About/>
            <Footer/>
        </div>
    )
}
export default Me;