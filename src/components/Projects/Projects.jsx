import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Audiophile from "../../assets/Projects/Audiophile-eCommerce-website.png";
import Photosnap from "../../Assets/Projects/Photosnap-multi-page-website.png";
import NightCup from "../../Assets/Projects/Knight-Cup-Registration.png";
import Dictionary from "../../Assets/Projects/Dictionary-web-app.png";
import Planets from "../../Assets/Projects/Planets-fact-site.png";
import Todo from "../../Assets/Projects/Todo-App.png";

const Projects = () => {
  return (
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Audiophile}
              title="Audiophile Ecommerce website"
              description="Built with: Typescript, Styled-Components, React-Router, React-hook-form, React-Helmet"
              ghLink="https://github.com/DavitDvalashvili/Audiophile-ecommerce-website"
              demoLink="https://audiophile-ecommerce-website-lake.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Photosnap}
              title="Photosnap multi page website"
              description="Built wth: React Javascript Library, Typescript, Styled-Components, React-Router"
              ghLink="https://github.com/DavitDvalashvili/Photosnap-multi-page-website"
              demoLink="https://photosnap-multi-page-website-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NightCup}
              title="RedBerry-Knight-Cup-Registration"
              description="Built with: Typescript, Styled-Components, React Router, React-hook-form"
              ghLink="https://github.com/DavitDvalashvili/RedBerry-Knight-Cup-Registration"
              demoLink="https://red-berry-knight-cup-registration-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dictionary}
              title="Dictionary-web-app"
              description="Built with: Javascript, React Javascript Library, Tailwind for styling, Rest-Api"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Planets}
              title="Planets fact site"
              description="Built with: Typescript, React Javascript Library, Styled-Components"
              ghLink="https://github.com/DavitDvalashvili/Planets-fact-site"
              demoLink="https://planets-fact-site-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              title="Todo-app.png"
              description="Built with: Vanila Javascript, SASS - css pre-processor, html"
              ghLink="https://davitdvalashvili.github.io/Todo-App/"
              demoLink="https://github.com/DavitDvalashvili/Todo-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
