import React from 'react';
import '../App.css';
import Menu from '../components/Menu';
import '../components/Navbar.css';
import Footer from '../components/footer';
import Certifications from '../components/Certifications';


const CertificationsPage = () => {
    return(
        <div>
            <Menu />
            <Certifications />

            <Footer/>
        </div>
    )
}
export default CertificationsPage;