import React from "react";
import { useState } from "react";

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [userData, setUserData] = useState ({name:"", email:""})



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    };

  const cancel = () => {
    console.log("se canceló el formulario");
  };

  const handleChange = () => {};

  return (
    <div>
      <h1>formulario- eventos</h1>
      <h2>{userData.name} - {userData.email}</h2>

      {/* onchange para el input
      onSubmit para el form */}

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingresa nombre"
          name="name"
          value={userData.name}
          onChange={(event) => setUserData({...userData, name:event.target.value})}
        />
        <input
          type="text"
          placeholder="ingresa email"
          name="email"
          value={userData.email}
          onChange={(event) => setUserData({...userData, email:event.target.value})}
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={cancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Form;
