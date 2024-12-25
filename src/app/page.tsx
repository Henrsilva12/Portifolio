import Navbar from "./componentes/navbar";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1>Olá! Me chamo</h1>
      <h2>Henrique Santos</h2>
      <h3>UI & UX</h3>
      <h4>Designer</h4>

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
      <div className="experiencias"></div>

      {/*Projects*/}
      <div className="projects"></div>

      {/*Skills*/}
      <div className="skills"></div>

      {/*Contate me*/}
      <div className="contactMe"></div>
    </div>
  );
}
