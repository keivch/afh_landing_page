"use client";

import { useState } from "react";
import ButtonCTA from "../ui/ButtonCTA";

interface Quote {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function Form() {
  const [formData, setFormData] = useState<Quote>({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    // Aquí puedes hacer el fetch a tu API o backend
    // fetch('/api/endpoint', { method: 'POST', body: JSON.stringify(formData) })

    // Limpia el formulario después de enviar
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="flex flex-col w-full px-10 md:px-30 gap-10">
      <section className="flex flex-col gap-4">
        <span className="text-black font-bold font-public-sans text-2xl">
          Realiza tu cotización
        </span>
        <span className="text-gray-400 font-public-sans ">
          Estamos para ayudarte, diligencia el siguiente formulario para poder
          comunicarnos contigo.
        </span>
      </section>
      <section className="flex flex-col gap-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-gray-700 font-public-sans">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="font-public-sans w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-public-sans">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-public-sans w-full py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-public-sans">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="font-public-sans w-full py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              rows={4}
            ></textarea>
          </div>

          <ButtonCTA text="Enviar" link="" />
        </form>
      </section>
    </section>
  );
}
