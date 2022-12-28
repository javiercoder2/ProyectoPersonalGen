import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import CardsProfessional from '../components/CardsProffesional';
import Footer from '../components/footer';


const Professional = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='professional fst-italic'>Professional Background</h1>
            </div>
            <CardsProfessional/>
            <Footer/>

        </div>
    )
}
export default Professional;