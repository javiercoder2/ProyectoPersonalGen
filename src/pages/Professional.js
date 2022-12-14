import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import CardsProfessional from '../components/CardsProffesional';


const Professional = () => {
    return(
        <div>
            <Menu />
            <div>
            <h1 className='professional'>Professional Background</h1>
            </div>
            <CardsProfessional/>

        </div>
    )
}
export default Professional;