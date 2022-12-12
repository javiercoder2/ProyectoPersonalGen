import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Hsection from '../components/Hsection';
import { Button } from '../components/Boton2';
import { Navbar } from 'react-bootstrap';
import '../App.css';

const Professional = () => {
    return(
        <div>
            
            <Navbar/>
            <Button/>

            <h1 className='professional'>Professional</h1>
            <Hsection/>

            <Cards/>
        </div>
    )
}
export default Professional;