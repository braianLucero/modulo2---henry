import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";
const ContactUs = () => {
  const dispatch = useDispatch();

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  console.log(form);

  function handleInput(evento) {
    setForm({ ...form, [evento.target.name]: evento.target.value });
  }

  function handleSubmit() {
    dispatch(enviarForm(form));
  }
  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" value={form.nombre} onChange={handleInput} />
        <label htmlFor="email">Email: </label>
        <input name="email" value={form.email} onChange={handleInput} />
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" value={form.asunto} onChange={handleInput} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" value={form.mensaje} onChange={handleInput} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
