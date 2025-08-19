"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      name: formData.nombre,
      email: formData.email,
      message: formData.mensaje,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setStatus("sent");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err: unknown) {
      setStatus("error");
      if (err && typeof err === "object" && "text" in err) {
        setErrorMsg(
          (err as { text?: string }).text ||
            "Ocurrió un error al enviar el correo."
        );
      } else {
        setErrorMsg("Ocurrió un error al enviar el correo.");
      }
    }
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
              className="font-public-sans w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
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
              rows={4}
              className="font-public-sans w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>

          {status === "sent" && (
            <p className="text-green-600 text-sm">
              ¡Peticion enviada! Pronto nos comunicaremos contigo.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">Error: {errorMsg}</p>
          )}
        </form>
      </section>
    </section>
  );
}
