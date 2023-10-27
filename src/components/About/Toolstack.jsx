import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=github" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=vscode" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=vite" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://skillicons.dev/icons?i=figma" />
      </Col>
    </Row>
  );
}

export default Toolstack;
