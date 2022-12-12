import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Hsection from '../components/Hsection';
import { Button } from '../components/Boton2';
import NavBar from '../components/Navbar';
import '../App.css';



const SignupPage = () => {
    return(
        <div>
            
            <NavBar/>
            <Button/>

            <h1 className='sign-up'>Contact ME</h1>
            <Hsection/>

            <Cards/>
        </div>
    )
}
export default SignupPage;