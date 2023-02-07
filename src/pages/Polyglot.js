import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import Polyglot from '../components/Polyglot';



const PolyglotPage = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='languages fst-italic' >The Languages I Speak</h1>
            </div>
            <Polyglot/>
            <Footer/>
        </div>
    )
}
export default PolyglotPage;