import React from "react";


const FormularioUsuario = () => {
  return (
    <div class="container border border-dark p-8 bg-secondary bg-success ">
      <h1 strong class="text-center text-decoration-underline">
        Formulario Usuario
      </h1>
      <form>
        <div class="mb-6">
          <label for="exampleInputEmail1" class="form-label">
            Nombre
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-6">
          <label for="exampleInputEmail1" class="form-label">
            Apellido
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-6">
          <label for="exampleInputEmail1" class="form-label">
            Numero
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-6">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </form>

    </div>
  );
};

export default FormularioUsuario;
