import { useState } from "react";

export default function useForm  (objetoInicial = {}) {
  const [formulario, setFormulario] = useState(objetoInicial); 
  // Faltaba el paréntesis después de setFormulario

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    const objetoCompleto = {};

    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }

    return objetoCompleto;
  };

  const enviado = (e) => {
    e.preventDefault();

    let curso = serializarFormulario(e.target);

    setFormulario(curso);

    document.querySelector(".codigo").classList.add("enviado");
  };

  const cambiado = ({ target }) => {
    const { name, value } = target;

    setFormulario ({
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    enviado,
    cambiado,
  };
};
