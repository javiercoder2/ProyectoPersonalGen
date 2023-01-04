import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import Habilidades from '../components/Habilidades';
import Habilidades2 from '../components/Habilidades2';


const Personal = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='personal fst-italic' >Personal BackGround</h1>
            </div>
            <Habilidades/>
            <Habilidades2/>

            <Footer/>
        </div>
    )
}
export default Personal;