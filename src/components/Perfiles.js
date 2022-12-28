
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./PerfilesCard";
import projImg1 from "../img/poliglota.png";
import projImg2 from "../img/poliglota.png";
import projImg3 from "../img/poliglota.png";
import projImg4 from "../img/poliglota.png";
import projImg5 from "../img/poliglota.png";

import colorSharp2 from "../img/poliglota.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const PerfilesNosotros = () => {

  const projects = [
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon!",
      description: "Python Project",
      imgUrl: projImg1,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Personal Projects</h2>
                <p>Check the projects I`ve made</p>
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
                      <p>Pedpedia es entero de pulento oe tii</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coggito ergo sum maaaan </p>
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