import React from "react";
import { TableComponentUsuario,FormularioUsuario} from "../components";
import BotonPage from "../components/Boton";
import Header from "../components/Header";
import Images from "../components/images";



const UsuarioPage = () => {
    return(
        <div>
            <Header/>
            <Images/>
            <FormularioUsuario/>
            <BotonPage/>
            <TableComponentUsuario/>
            
        </div>
    )
}
export default UsuarioPage;