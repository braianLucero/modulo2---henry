import React from "react";
import "./Contact.modules.css";
import { exValidate } from "../validate";
// eslint-disable-next-line
// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const validate = exValidate;

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(evento) {
    setInputs({ ...inputs, [evento.target.name]: evento.target.value });
    setErrors(
      validate({ ...inputs, [evento.target.name]: evento.target.value })
    );
  }

  function handleSubmit(event) {
    event.prevenDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      return alert("ok");
    }
    return alert("Error");
  }

  return (
    <div>
      <form onSubmit={(evento) => handleSubmit(evento)}>
        <label>Nombre:</label>
        <input
          className={errors.name && "warning"}
          name="name"
          type="text"
          placeholder="Escribe tu nombre..."
          value={inputs.name}
          onChange={handleChange}
        />
        <p className="danger">{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          name="email"
          type="text"
          placeholder="Escribe tu email..."
          value={inputs.email}
          onChange={handleChange}
        />
        <p className="danger">{errors.email}</p>

        <label>Mensaje:</label>
        <textarea
          className={errors.message && "warning"}
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          onChange={handleChange}
        ></textarea>
        <p className="danger">{errors.message}</p>
        {Object.keys(errors).length === 0 ? (
          <button type="submit">Enviar</button>
        ) : null}
      </form>
    </div>
  );
}
