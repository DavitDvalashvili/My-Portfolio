import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=css" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=html" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=react" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=redux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=ts" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=nodejs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=express" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=mongodb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=sass" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=tailwind" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=styledcomponents" />
      </Col>
    </Row>
  );
}

export default Techstack;
