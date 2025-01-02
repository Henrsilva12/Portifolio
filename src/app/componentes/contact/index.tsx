"use client";
import React, { useState } from "react";
import "./styles.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Nome*
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
        />
      </label>

      <label className="label">
        E-mail*
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />
      </label>

      <label className="label">
        Mensagem
        <textarea
          name="message"
          placeholder="Digite sua mensagem"
          value={formData.message}
          onChange={handleChange}
          className="textarea"
        />
      </label>

      <button type="submit" className="button">
        Enviar
      </button>
    </form>
  );
};

export default Contact;
