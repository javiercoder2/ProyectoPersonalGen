import React from "react";
//componente dinámico
//Creamos boton para poder dalr uso a editar, agregar y eliminar usuarios
const BotonFormulario = ({infoBoton, handleOnClick}) => {
    return (
        <div>
        <button 
        type="button" 
        class="btn btn-primary"
        onClick={()=>{
            handleOnClick();
        }}

        //infoBoton ayudara a poder variar la informacion con breves cambios y menos codigo
        >{infoBoton}</button>
        </div>
    )
}

export default BotonFormulario;
