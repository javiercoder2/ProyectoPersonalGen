import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AutoPage,UsuarioPage} from "./pages";
import BotonPage from "./components/Boton";
import BackgroundPage from "./pages/Background";
/* import HomePage from './pages/Home'; */
import NavBar from './components/Navbar';
import Personal from "./pages/Personal";
import Professional from "./pages/Professional";
import SignupPage from "./pages/Sign-up";
import './App.css';


const App = ()=> {
    return(
    <BrowserRouter>
            <Routes>
                <Route path="/NavBar" element={<NavBar/>}/>
                <Route path="/Auto" element={<AutoPage/>}/>
                <Route path="/Usuario" element={<UsuarioPage/>}/>
                <Route path="/B" element={<BotonPage/>}/>
                <Route path="/Back" element={<BackgroundPage/>}/>
                <Route path="/Professional" element={<Professional/>}/>
                <Route path="/Personal" element={<Personal/>}/>
                <Route path="/sign-up" element={<SignupPage/>}/>

{/*                 <Route path="/" element={<HomePage/>}/> */}

            </Routes>
        </BrowserRouter>
    )
}
export default App;