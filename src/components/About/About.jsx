import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";

function About() {
  return (
    <AboutStyle>
      <Container fluid className="about-section">
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
                Know Who <strong className="textColor">{`I'M`}</strong>
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
            Professional <strong className="textColor">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="textColor">Tools</strong> I use
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
    padding-top: 150px !important;
    padding-bottom: 30px !important;
    color: ${DefaultTheme.colors.white};
  }

  .tech-icons {
    margin: 25px;
    padding: 25px;
    cursor: pointer;
    border: 2px solid ${DefaultTheme.colors.teal} !important;
    border-radius: 5px !important;
    box-shadow: 0px 0px 3px 3px ${DefaultTheme.colors.teal} !important;
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
    border: 2.2px solid ${DefaultTheme.colors.teal} !important;
    box-shadow: 0px 0px 4px 4px ${DefaultTheme.colors.teal} !important;
  }

  .quote-card-view {
    border: none !important;
    color: ${DefaultTheme.colors.white};
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
