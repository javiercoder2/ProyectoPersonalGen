import React, { useState, useEffect } from "react";

//creamos formulario para poder comenzar con la realizacion de botones y sus funciones
const initialUsuario = {
  name: "",
  lastname: "",
  correo: "",
  id: "",
};

const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, editUser  }) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { name, lastname, correo, id } = usuario;
  //el hook useEffect siempre esta pendiente de si la variable que tiene dentro de
  //sus corchetes cambia el deberá hacer todo loq ue tiene en su funcion dentro
  //CONSIDERACIÓN es que useEffect siempre corre al menos 1 vez cuando la página carga por primera vez
  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
      //Usuario editad se realizara su propio cambio acorde a lo que esta en else
    } else {
      setUsuario({
        name: "",
        lastname: "",
        correo: "",
        id: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nostros escribirmos algo en algun input de
    //nuestra página
    const changedFormValue = {
      //va a antaner los datos que tiene usuario de los input que no he tocado
      //pero va a aactualizar el atributo que cambié por su nuevo valor
      ...usuario,
      [e.target.name]: e.target.value,
    };
    //finalmente los cambios deberán verse reflejados en neustro hook
    setUsuario(changedFormValue);
  };

  return (
    <div class="card container mb-2">
      <form>
        {/* hacemos que el mensaje del formulario sea dinamico
    segun si queremos editar o ingresar */}
        {usuarioEditado !== null ? (
          <h1>Editar Usuario</h1>
        ) : (
          <h1>Ingrese Usuario</h1>
        )}

        <div class="mb-3">
          <label class="form-label" for="id">
            Rut
          </label>
          <input
            class="form-control"
            placeholder="322312312-1"
            type="text"
            id="id"
            //para que mi formulario sea capaz de crear un usuario debemos agregarle a los inpur
            //lo siguente
            name="rut"
            value={id}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="id">
            name
          </label>
          <input
            class="form-control"
            placeholder="Javier"
            type="text"
            id="Nombre"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="id">
            lastname
          </label>
          <input
            class="form-control"
            placeholder="sepulveda"
            type="text"
            id="Apellido"
            name="lastname"
            value={lastname}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="id">
            Correo
          </label>
          <input
            class="form-control"
            placeholder="javier@correo.cl"
            type="email"
            id="Correo"
            name="correo"
            value={correo}
            //Cuando exista un cambio se procedera a realizar una accion
            onChange={handleInputChange}
          />
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
                        //Cuando exista un click en el boton se procedera a realizar una accion

            onClick={() => editUser(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
    //Cuando exista un click en el boton se procedera a realizar una accion
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario nuevo
          </button>
        )}

        {usuarioEditado !== null ? (
                                  //Cuando exista un click en el boton se procedera a realizar una accio
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}

        <br />
      </form>
    </div>
  );
};

export default FormularioUsuario;
