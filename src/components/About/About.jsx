import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import styled from "styled-components";

function About() {
  return (
    <AboutStyle>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I AM</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </AboutStyle>
  );
}

export default About;

const AboutStyle = styled.section`
  .about-section {
    position: relative !important;
    padding-top: 150px !important;
    padding-bottom: 30px !important;
    background-image: var(--section-background-color) !important;
    color: white !important;
  }

  .tech-icons {
    margin: 25px;
    padding: 25px;
    cursor: pointer;
    border: 2px solid rgba(200, 137, 230, 0.637) !important;
    border-radius: 5px !important;
    box-shadow: 0px 0px 3px 3px rgba(89, 4, 168, 0.137) !important;
    transition: all 0.4s ease 0s !important;
  }

  @media (max-width: 767px) {
    .tech-icons {
      margin: 10px !important;
    }
  }

  .tech-icons:hover {
    transform: scale(1.12) !important;
    overflow: hidden !important;
    border: 2.2px solid rgba(197, 115, 230, 0.883) !important;
    box-shadow: 0px 0px 4px 4px rgba(197, 115, 230, 0.883) !important;
  }

  .quote-card-view {
    border: none !important;
    color: white !important;
    background-color: transparent !important;
  }

  .about-activity {
    list-style: none !important;
    text-align: left !important;
    padding-left: 1px !important;
  }

  @media (max-width: 767px) {
    .about-img {
      padding-top: 0 !important;
    }
  }
`;
