
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./PerfilesCard";
import projImg1 from "../img/tico3.JPG";
import projImg3 from "../img/CalculatorWeb.png";
import projImg2 from "../img/PythonProject.png";
import projImg4 from "../img/petpedia.png";
import projImg5 from "../img/calculator.png";

import projImg6 from "../img/InstaNow.png";
import projImg8 from "../img/anita.png";
import colorSharp2 from "../img/tico.jpg";


import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const PerfilesNosotros = () => {


  const projects = [
    {
      title: "Personal Web Page",
      description: "React",
      imgUrl: projImg1,
      link: <a href="https://google.com" target="_bKJk" rel="noreferrer">
    Check the Project Here!</a>,
    },
    {
      title: "Converter!",
      description: "Python Project",
      imgUrl: projImg2,
      link: <a href="https://github.com/javiercoder2/Converter.git" target="_bKJk" rel="noreferrer">
      Check the Project Here!</a>,
    },
    {
      title: "PetPedia-Group Project",
      description: "MySql, SpringBoot and React",
      imgUrl: projImg4,
      link: <a href="https://preeminent-ganache-fec076.netlify.app/" target="_bKJk" rel="noreferrer">
      Check the Project Here!</a>,
    },
    {
      title: "Regular Calculator",
      description: "Python Project",
      imgUrl: projImg5,
      link: <a href="https://github.com/javiercoder2/Calculadora" target="_bKJk" rel="noreferrer">
      Check the Project Here!</a>,
    },
    {
      title: "AI Calculator's Web Page",
      description: "React",
      imgUrl: projImg3,
      link: <a href="https://calculator.d1hr9plcnr6r48.amplifyapp.com/" target="_bKJk" rel="noreferrer">
      Check the Project Here!</a>,
    },
    {
      title: "InstaNow's Web Page",
      description: "React",
      imgUrl: projImg6,
      link: <a href="https://instanow.d3k7ox2zljmz9e.amplifyapp.com/" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
      link: <a href="https://google.com" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },
    {
      title: "Anita Manualidades' WebPage",
      description: "React Project",
      imgUrl: projImg8,
      link: <a href="https://analanas.d2hcm5usxy94wd.amplifyapp.com/" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg3,
      link: <a href="https://google.com" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
      link: <a href="https://google.com" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg2,
      link: <a href="https://google.com" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
      link: <a href="https://google.com" target="_bKJk" rel="noreferrer">
      AQUI</a>,
    },

  ];

  return (
    <section className="project" id="project">
      <Container id="containerproject">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="projwords">Personal Projects</h2>
                <p className="projwords2">Check the projects I've made</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">General Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Comments on Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal Best 4 Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>All of my projects were done by me personally except PetPedia.I used the things I was taught at CIISA (Educational institute) and Generation Chile (Intensive Bootcamp). However, most of the things incorporated and used were mostly learned from other resources.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Personal WebPage, AI Calculator Web Page, PetPedia and AnitaManualidades</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default PerfilesNosotros;