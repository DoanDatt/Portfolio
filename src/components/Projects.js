import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import shopee from "../assets/img/shopee.png"
import orderfood from "../assets/img/order-food.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shopee Clone",
      description: "React, TypeScript, React Query, JWT Auth",
      imgUrl: shopee,
    },
    {
      title: "QR Code Food Ordering",
      description: "Next.js 15, TypeScript, Socket.IO",
      imgUrl: orderfood,
    },
  ];

  const ecommerceProjects = [
    {
      title: "Shopee Clone",
      description: "E-commerce user page clone with JWT auth, smart pagination/filter, React Query, code splitting & SEO",
      imgUrl: shopee,
    },
  ];

  const fullstackProjects = [
    {
      title: "QR Code Food Ordering",
      description: "Scan-to-order platform with real-time order tracking (Socket.IO), JWT roles & dynamic QR generation",
      imgUrl: orderfood,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A selection of projects I've built while learning and practicing front-end development — from an e-commerce clone with production-level features to a full-stack QR ordering platform.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">E-commerce</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full-stack Apps</Nav.Link>
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
                      <Row>
                        {
                          ecommerceProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          fullstackProjects.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}