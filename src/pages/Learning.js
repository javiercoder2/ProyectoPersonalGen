import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import Habilidades2 from '../components/Habilidades2';
import Learning from '../components/Learning';


const LearningPage = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='learning fst-italic' >The Way I Learn</h1>
            </div>
            <Learning/>

            <Footer/>
        </div>
    )
}
export default LearningPage;