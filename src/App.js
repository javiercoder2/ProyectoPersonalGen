import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AutoPage,UsuarioPage} from "./pages";
import BotonPage from "./components/Boton";
/* import HomePage from './pages/Home'; */
import NavBar from './components/Navbar';
import Personal from "./pages/Personal";
import Professional from "./pages/Professional";
import SignupPage from "./pages/Sign-up";
import './App.css';
import HomePage from './pages/Home';
import HSectionPage from "./pages/HsectionPage";
import UsuarioClasePage from './pages/Usuario';
import Me from './pages/Me';
import Project from './pages/Projects';


const App = ()=> {
    return(
    <BrowserRouter>
            <Routes>
                <Route path="/NavBar" element={<NavBar/>}/>
                <Route path="/Auto" element={<AutoPage/>}/>
               {/*  //Con /Usuario llamamos al trabajo visto hoy en clases */}
                <Route path="/Usuario" element={<UsuarioClasePage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Professional" element={<Professional/>}/>
                <Route path="/Personal" element={<Personal/>}/>
                <Route path="/sign-up" element={<SignupPage/>}/>
                <Route path="/H" element={<HSectionPage/>}/>
                <Route path="/Me" element={<Me/>}/>
                <Route path="/Project" element={<Project/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default App;