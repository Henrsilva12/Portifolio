"use client";
import React, { useState } from "react";
import "./styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <div className="form-container">
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

      <div className="form2">
        <h1>Contato</h1>
        <label>+55 (77) 99898-6939</label>
        <label>henrsilvasantos@gmail.com</label>
        <div className="socialIcons">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
