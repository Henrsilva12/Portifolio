"use client";

import React from "react";
import Image from "next/image";
import "./styles.css";

const Navbar: React.FC = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "experiencias", label: "Experiências" },
    { id: "projetos", label: "Projetos" },
    { id: "skills", label: "Skills" },
    { id: "contato", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/imagens/Logo.png" alt="" width={34} height={43} />
      </div>
      <div className="email">
        <a href="mailto:henrsilvasantos@gmail.com" className="email-link">
          henrsilvasantos@gmail.com
        </a>
      </div>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button onClick={() => scrollToSection(section.id)}>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
