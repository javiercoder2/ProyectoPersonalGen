import React, { useCallback } from "react";
import TableAuto from "../components/TableAuto";
import FormularioAuto from "../components/FormularioAuto";
import BotonPage from "../components/Boton";
import {useNavigate} from 'react-router-dom';


const AutoPage = () => {
    const navigate = useNavigate ();
    const handleClick =useCallback(() => navigate("/Auto", {},{navigate}));
    return(
        <div>
            <TableAuto/>

            <FormularioAuto />

            <BotonPage infoButton={"Ir a Auto"}handleClick ={handleClick}/>
        </div>
    )
}
export default AutoPage;