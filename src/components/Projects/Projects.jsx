import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import styled from "styled-components";
import data from "./../../DataCard.json";
import DefaultTheme from "../DefaultTheme";

const Projects = () => {
  return (
    <ProjectStyle>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I have worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {data.map((card) => (
              <Col md={4} className="project-card" key={card.id}>
                <ProjectCard
                  imgPath={card.image}
                  title={card.title}
                  stack={card.stacks}
                  description={card.description}
                  ghLink={card.githubLink}
                  demoLink={card.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </ProjectStyle>
  );
};

export default Projects;

const ProjectStyle = styled.section`
  .project-section {
    position: relative !important;
    padding-top: 150px !important;
    padding-bottom: 30px !important;
    background-image: var(--section-background-color) !important;
  }

  .project-card {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
    height: auto !important;
  }

  .project-card-view {
    box-shadow: 0 4px 5px 3px ${DefaultTheme.colors.textColor} !important;
    color: white !important;
    background-color: transparent !important;
    opacity: 0.9 !important;
    transition: all 0.5s ease 0s !important;
    height: 100% !important;
  }
  .project-card-view:hover {
    transform: scale(1.02) !important;
    overflow: hidden !important;
    box-shadow: 0 5px 5px 6px ${DefaultTheme.colors.textColor} !important;
  }

  .card-img-top {
    padding: 20px !important;
    opacity: 0.8 !important;
    border-radius: 10px !important;
  }

  .btn-primary {
    color: #fff !important;
    background-color: ${DefaultTheme.colors.textColor} !important;
    border-color: ${DefaultTheme.colors.textColor} !important;
  }

  .btn-primary:hover {
    color: #fff !important;
    background-color: ${DefaultTheme.colors.textColor} !important;
    border-color: ${DefaultTheme.colors.textColor} !important;
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
  .project-heading {
    color: white;
    font-size: 2.5em;
    font-weight: 500;
    padding-top: 10px;
  }
`;
