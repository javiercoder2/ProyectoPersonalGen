import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import Career from '../components/Career';


const CareerPage = () => {
    return(
        <div>
            <Menu />
            <Career/>

            <Footer/>
        </div>
    )
}
export default CareerPage;