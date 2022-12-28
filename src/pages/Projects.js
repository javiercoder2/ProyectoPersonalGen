import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import TipoProjectos from '../components/Perfiles';


const Projects = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='proyecto fst-italic' >Projects in Programming</h1>
            </div>
            <TipoProjectos/>           

            <Footer/>


        </div>
    )
}
export default Projects;