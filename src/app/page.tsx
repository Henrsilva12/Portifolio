import Timeline from "./componentes/experiencia";
import Navbar from "./componentes/navbar";
import ProfileImage from "./componentes/Profile";
import Image from "next/image";
import "./globals.css";
import Contact from "./componentes/contact";

export default function Home() {
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
      <div className="projects">
        <h6>Meus Projetos</h6>
        <p>
          Exploro criatividade e funcionalidade em cada projeto que desenvolvo.
          Aqui estão algumas iniciativas que destacam minha experiência em UI/UX
          design, gestão de projetos ágeis e desenvolvimento de soluções
          inovadoras.
        </p>
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
      <div className="contactMe" style={{ padding: "2rem" }}>
        <h6>Contate me</h6>
        <p>
          Ficarei feliz em conversar sobre projetos e oportunidades. Entre em
          contato!
        </p>
        <div className="inputs">
          <Contact />
        </div>
      </div>
    </div>
  );
}
