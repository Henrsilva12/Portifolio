"use client";
import Timeline from "./componentes/experiencia";
import Navbar from "./componentes/navbar";
import ProfileImage from "./componentes/Profile";
import Image from "next/image";
import "./globals.css";
import Contact from "./componentes/contact";
import Footer from "./componentes/footer";
import { useState } from "react";
import { FilterButton } from "./componentes/buttons";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("Web Design");

  const filters = ["UI/UX", "Web Design", "App Design", "Plus"];

  return (
    <div className="container">
      <Navbar />
      <div className="header-section">
        <div className="titles">
          <h1>Olá! Me chamo</h1>
          <h2>Henrique Santos</h2>
          <h3>UI & UX</h3>
          <h4>Designer</h4>
        </div>
        <div className="photo">
          <ProfileImage
            src="/imagens/foto.svg"
            alt="foto"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="description">
        <p>
          Profissional com 2 anos de experiência em gestão de projetos ágeis,
          atuando <br /> como Scrum Master e Product Owner. Especialista em
          liderar times internacionais,
          <br />
          criar protótipos UI/UX no Figma e impulsionar resultados estratégicos
          com Scrum e Kanban.
        </p>
      </div>
      {/*Experiências*/}
      <div className="experiencias">
        <h5>Minhas Experiências</h5>
        <Timeline />
      </div>
      {/*Projects*/}
      <div className="projects mt-16">
        <h6 className="text-3xl font-bold text-center mb-4">Meus Projetos</h6>
        <p className="text-center text-gray-700">
          Exploro criatividade e funcionalidade em cada projeto que desenvolvo.
          Aqui estão algumas iniciativas que destacam minha experiência em UI/UX
          design, gestão de projetos ágeis e desenvolvimento de soluções
          inovadoras.
        </p>
        {/* Botões */}
        <div className="flex justify-center space-x-4 my-4">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              text={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-blue-500 hover:text-white`}
            />
          ))}
        </div>
        {/*Conteúdo do filtro*/}
        <div className="project-cards text-center">
          {activeFilter === "UI/UX" && <p>Exibindo projetos de UI/UX...</p>}
          {activeFilter === "Web Design" && (
            <p>Exibindo projetos de Web Design...</p>
          )}
          {activeFilter === "App Design" && (
            <p>Exibindo projetos de App Design...</p>
          )}
          {activeFilter === "Plus" && <p>Exibindo projetos Plus...</p>}
        </div>
      </div>
      {/*Skills*/}
      <div className="skills">
        <h6>Minhas Skills</h6>
        <p>
          Transformo ideias em interfaces incríveis com Figma, organizo projetos
          com ClickUp e Trello, e adiciono valor ao front-end com habilidades em
          React.
        </p>
        <div className="skills-container">
          <div className="skill">
            <Image
              src="/imagens/figma.svg"
              alt="figma"
              width={50}
              height={115}
            />
            <p>Figma</p>
          </div>
          <div className="skill">
            <Image
              src="/imagens/react.svg"
              alt="react"
              width={78}
              height={115}
            />
            <p>React</p>
          </div>
          <div className="skill">
            <Image
              src="/imagens/trello.svg"
              alt="trello"
              width={72}
              height={115}
            />
            <p>Trello</p>
          </div>
          <div className="skill">
            <Image
              src="/imagens/clickup.svg"
              alt="clickup"
              width={72}
              height={115}
            />
            <p>ClickUp</p>
          </div>
        </div>
      </div>
      {/*Contate me*/}
      <div className="contactMe">
        <h6>Contate me</h6>
        <p>
          Ficarei feliz em conversar sobre projetos e oportunidades. Entre em
          contato!
        </p>
        <div className="inputs">
          <Contact />
        </div>
      </div>
      {/*Contate me*/}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
